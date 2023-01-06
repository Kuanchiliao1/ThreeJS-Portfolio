function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(argument) {
  const type = typeof argument;
  return argument === null || type !== "object" && type !== "function";
}
function stringify(argument) {
  return isPrimitive(argument) ? argument + "" : JSON.stringify(argument);
}

export { asyncCall as a, stringify as s };
