export const validateRequiredLength = (v, message) =>
  v === undefined || v === null || v.length == 0 ? message : true;
