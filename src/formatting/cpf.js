export const formatCpf = (value) => {
  if (!value) return '';

  const formattedCpf = value
    .toString()
    .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

  if (formattedCpf.length !== 14)
    throw new Error(`O valor ${value}, não é válido!`);

  return formattedCpf;
};
