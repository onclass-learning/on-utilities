export const requiredLength = (v, message) =>
  v === undefined || v === null || v.length == 0 ? message : true;
