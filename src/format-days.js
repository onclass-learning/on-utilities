export const formatDays = (value) => {
  if (value == null) return null;
  return value === 0 ? 'Hoje' : `${value} dia${value !== 1 ? 's' : ''}`;
};
