export const formatDateTime = (value) =>
  value ? new Date(value).toLocaleString('pt-BR') : null;
