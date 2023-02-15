export const doTruncateText = (text, limit) => {
  if (!text || text.length < limit) return text;

  return `${text.substring(0, limit)}...`;
};
