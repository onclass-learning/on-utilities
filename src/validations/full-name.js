export const fullName = (v, message) => {
  const pattern = /\w+\s\w+(\s\w+)*/;

  if (!v) return;
  return pattern.test(v) || message;
};
