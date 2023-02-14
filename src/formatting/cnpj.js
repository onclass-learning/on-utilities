export const formatCnpj = (value) => {
  if (!value) return '';

  if (!/^\d+$/.test(value) || value.toString().length !== 14) {
    throw new Error(`O valor ${value}, não é válido!`);
  }

  return value
    .toString()
    .replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
};
