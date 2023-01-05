import { createApp, eventHandler, readBody, createError, toNodeListener } from 'h3';
import { s as stringify } from './shared/unstorage.10149939.mjs';

function createStorageServer(storage, _options = {}) {
  const app = createApp();
  app.use(eventHandler(async (event) => {
    if (event.req.method === "GET") {
      const value = await storage.getItem(event.req.url);
      if (!value) {
        const keys = await storage.getKeys(event.req.url);
        return keys.map((key) => key.replace(/:/g, "/"));
      }
      return stringify(value);
    }
    if (event.req.method === "HEAD") {
      const _hasItem = await storage.hasItem(event.req.url);
      event.res.statusCode = _hasItem ? 200 : 404;
      if (_hasItem) {
        const meta = await storage.getMeta(event.req.url);
        if (meta.mtime) {
          event.res.setHeader("Last-Modified", new Date(meta.mtime).toUTCString());
        }
      }
      return "";
    }
    if (event.req.method === "PUT") {
      const value = await readBody(event);
      await storage.setItem(event.req.url, value);
      return "OK";
    }
    if (event.req.method === "DELETE") {
      await storage.removeItem(event.req.url);
      return "OK";
    }
    throw createError({
      statusCode: 405,
      statusMessage: "Method Not Allowed"
    });
  }));
  return {
    handle: toNodeListener(app)
  };
}

export { createStorageServer };
