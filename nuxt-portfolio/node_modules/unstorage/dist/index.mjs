import destr from 'destr';
import { a as asyncCall, s as stringify } from './shared/unstorage.10149939.mjs';

function defineDriver(factory) {
  return factory;
}

const memory = defineDriver(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) || null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return Array.from(data.keys());
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

const storageKeyProperties = [
  "hasItem",
  "getItem",
  "setItem",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...arguments_) => storage[property](base + key, ...arguments_);
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  return nsStorage;
}
function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}
function joinKeys(...keys) {
  return normalizeKey(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey(base);
  return base ? base + ":" : "";
}

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter((mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(context.mounts[mountpoint], onChange, mountpoint);
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const storage = {
    hasItem(key) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey);
    },
    getItem(key) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey).then((value) => destr(value));
    },
    async setItem(key, value) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value));
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, removeMeta = true) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey);
      if (removeMeta) {
        await asyncCall(driver.removeItem, relativeKey + "$");
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    async getMeta(key, nativeMetaOnly) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey));
      }
      if (!nativeMetaOnly) {
        const value = await asyncCall(driver.getItem, relativeKey + "$").then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value) {
      return this.setItem(key + "$", value);
    },
    removeMeta(key) {
      return this.removeItem(key + "$");
    },
    async getKeys(base) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      for (const mount of mounts) {
        const rawKeys = await asyncCall(mount.driver.getKeys, mount.relativeBase);
        const keys = rawKeys.map((key) => mount.mountpoint + normalizeKey(key)).filter((key) => !maskedMounts.some((p) => key.startsWith(p)));
        allKeys.push(...keys);
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      return base ? allKeys.filter((key) => key.startsWith(base) && !key.endsWith("$")) : allKeys.filter((key) => !key.endsWith("$"));
    },
    async clear(base) {
      base = normalizeBaseKey(base);
      await Promise.all(getMounts(base, false).map(async (m) => {
        if (m.driver.clear) {
          return asyncCall(m.driver.clear);
        }
        if (m.driver.removeItem) {
          const keys = await m.driver.getKeys();
          return Promise.all(keys.map((key) => m.driver.removeItem(key)));
        }
      }));
    },
    async dispose() {
      await Promise.all(Object.values(context.mounts).map((driver) => dispose(driver)));
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter((listener) => listener !== callback);
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    }
  };
  return storage;
}
async function snapshot(storage, base) {
  base = normalizeBaseKey(base);
  const keys = await storage.getKeys(base);
  const snapshot2 = {};
  await Promise.all(keys.map(async (key) => {
    snapshot2[key.slice(base.length)] = await storage.getItem(key);
  }));
  return snapshot2;
}
async function restoreSnapshot(driver, snapshot2, base = "") {
  base = normalizeBaseKey(base);
  await Promise.all(Object.entries(snapshot2).map((e) => driver.setItem(base + e[0], e[1])));
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const builtinDrivers = {
  cloudflareKVHTTP: "unstorage/drivers/cloudflare-kv-http",
  cloudflareKVBinding: "unstorage/drivers/cloudflare-kv-binding",
  "cloudflare-kv-http": "unstorage/drivers/cloudflare-kv-http",
  "cloudflare-kv-binding": "unstorage/drivers/cloudflare-kv-binding",
  fs: "unstorage/drivers/fs",
  github: "unstorage/drivers/github",
  http: "unstorage/drivers/http",
  localStorage: "unstorage/drivers/localstorage",
  localstorage: "unstorage/drivers/localstorage",
  memory: "unstorage/drivers/memory",
  overlay: "unstorage/drivers/overlay",
  redis: "unstorage/drivers/redis"
};

export { builtinDrivers, createStorage, defineDriver, joinKeys, normalizeBaseKey, normalizeKey, prefixStorage, restoreSnapshot, snapshot };
