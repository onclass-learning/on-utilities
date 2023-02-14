export const formatPhone = (value) => {
  if (!value) return '';

  if (!/^\d+$/.test(value)) {
    throw new Error(`O valor ${value}, não é válido!`);
  }

  const phoneNumber = value.toString();
  const phoneLength = phoneNumber.length;

  if (phoneLength !== 10 && phoneLength !== 11) {
    throw new Error(`O valor ${value}, não é válido!`);
  }

  const phoneRegex =
    phoneLength === 10
      ? /([0-9]{2})([0-9]{4})([0-9]{4})/
      : /([0-9]{2})([0-9]{5})([0-9]{4})/;
  const phoneParts = phoneRegex.exec(phoneNumber);

  return `(${phoneParts[1]}) ${phoneParts[2]}-${phoneParts[3]}`;
};
