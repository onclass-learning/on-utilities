export const formatPercentage = (value) => {
  if (!value) return '';

  if (!isNaN(value)) {
    return `${value.toLocaleString('pt-BR')}%`;
  } else {
    throw new Error(`O valor ${value}, não é válido!`);
  }
};
