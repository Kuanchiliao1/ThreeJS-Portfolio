'use strict';

const h3 = require('h3');
const _utils = require('./shared/unstorage.e5f2cd8b.cjs');

function createStorageServer(storage, _options = {}) {
  const app = h3.createApp();
  app.use(h3.eventHandler(async (event) => {
    if (event.req.method === "GET") {
      const value = await storage.getItem(event.req.url);
      if (!value) {
        const keys = await storage.getKeys(event.req.url);
        return keys.map((key) => key.replace(/:/g, "/"));
      }
      return _utils.stringify(value);
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
      const value = await h3.readBody(event);
      await storage.setItem(event.req.url, value);
      return "OK";
    }
    if (event.req.method === "DELETE") {
      await storage.removeItem(event.req.url);
      return "OK";
    }
    throw h3.createError({
      statusCode: 405,
      statusMessage: "Method Not Allowed"
    });
  }));
  return {
    handle: h3.toNodeListener(app)
  };
}

exports.createStorageServer = createStorageServer;
