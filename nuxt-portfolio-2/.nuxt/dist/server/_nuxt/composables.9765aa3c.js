import { u as useNuxtApp } from "../server.mjs";
import "vue";
import "destr";
function useHead(input, options) {
  return useNuxtApp()._useHead(input, options);
}
export {
  useHead as u
};
//# sourceMappingURL=composables.9765aa3c.js.map
