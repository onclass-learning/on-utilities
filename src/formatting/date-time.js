export const formatDateTime = (value) =>
  value
    ? new Date(value).toLocaleDateString('pt-BR', {
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        month: 'numeric',
        second: 'numeric',
        year: 'numeric',
      })
    : null;
