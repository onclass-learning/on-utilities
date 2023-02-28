export const unmask = text => {
  if (!text) {
    return null;
  }
  const defaultDelimiters = /[-!$%^&*()_+|~=`{}[\]:";'<>?,./\\ ]/;
  return String(text).replace(new RegExp(defaultDelimiters, 'g'), '');
};
