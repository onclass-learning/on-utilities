export const validateZipcode = (v, message) => {
  const pattern = /(^[0-9]{5})-?([0-9]{3}$)/;

  return pattern.test(v) || message;
};
