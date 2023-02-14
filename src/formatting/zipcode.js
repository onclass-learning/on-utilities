export const formatZipCode = (value) => {
  if (!value || !/^\d{8}$/.test(value)) return value;

  return `${value.slice(0, 5)}-${value.slice(5, 8)}`;
};
