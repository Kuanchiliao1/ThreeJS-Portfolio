import { parseURL } from "ufo";
import { defineNuxtPlugin, loadPayload, isPrerendered, useRouter } from "#app";
export default defineNuxtPlugin((nuxtApp) => {
  if (!isPrerendered()) {
    return;
  }
  nuxtApp.hooks.hook("link:prefetch", (url) => {
    if (!parseURL(url).protocol) {
      return loadPayload(url);
    }
  });
  useRouter().beforeResolve(async (to, from) => {
    if (to.path === from.path) {
      return;
    }
    const payload = await loadPayload(to.path);
    if (!payload) {
      return;
    }
    Object.assign(nuxtApp.static.data, payload.data);
  });
});
