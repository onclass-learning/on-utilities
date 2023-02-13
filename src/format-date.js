export const formatDate = (value) => {
  if (!value) return '';

  if (value.length === 10) {
    value = value.replace(/\//g, '-');
    value += 'T00:00:00.000';
  }

  const date = new Date(value);
  return date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
};
