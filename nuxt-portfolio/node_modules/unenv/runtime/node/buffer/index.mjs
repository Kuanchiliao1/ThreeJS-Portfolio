import { notImplemented } from "../../_internal/utils.mjs";
import { Buffer, kMaxLength, INSPECT_MAX_BYTES, SlowBuffer } from "./_buffer.mjs";
export { Buffer, kMaxLength, INSPECT_MAX_BYTES, SlowBuffer } from "./_buffer.mjs";
export const Blob = globalThis.Blob;
export const resolveObjectURL = notImplemented("buffer.resolveObjectURL");
export const transcode = notImplemented("buffer.transcode");
export const btoa = global.btoa;
export const atob = globalThis.atob;
export const kStringMaxLength = 0;
export const constants = {
  MAX_LENGTH: kMaxLength,
  MAX_STRING_LENGTH: kStringMaxLength
};
export default {
  Buffer,
  SlowBuffer,
  kMaxLength,
  INSPECT_MAX_BYTES,
  Blob,
  resolveObjectURL,
  transcode,
  btoa,
  atob,
  kStringMaxLength,
  constants
};
