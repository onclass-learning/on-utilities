export const validateCnpj = (v, message) => {
  if (v === null || v === undefined || v === '') return false;

  v = v.replace(/-|\.|\//g, '');

  if (!/^[0-9]+$/.test(v)) return message;

  if (
    v.length != 14 ||
    v == '00000000000000' ||
    v == '11111111111111' ||
    v == '22222222222222' ||
    v == '33333333333333' ||
    v == '44444444444444' ||
    v == '55555555555555' ||
    v == '66666666666666' ||
    v == '77777777777777' ||
    v == '88888888888888' ||
    v == '99999999999999'
  ) {
    return message;
  }

  let total = 0;
  let index = 2;
  let leftover = 0;
  let verifyingDigit = 0;
  let counter = 0;

  for (counter = -12; counter <= -1; counter++) {
    total = total + Math.abs(v.substr(Math.abs(counter) - 1, 1)) * index;
    index === 9 ? (index = 2) : (index = index + 1);
  }

  leftover = total % 11;

  leftover === 0 || leftover === 1
    ? (verifyingDigit = 0)
    : (verifyingDigit = 11 - leftover);

  if ('' + v.substr(12, 1) !== '' + verifyingDigit) {
    return message;
  }

  index = 2;
  total = 0;
  leftover = 0;
  verifyingDigit = 0;

  for (counter = -13; counter <= -1; counter++) {
    total = total + Math.abs(v.substr(Math.abs(counter) - 1, 1)) * index;

    index === 9 ? (index = 2) : (index = index + 1);
  }

  leftover = total % 11;

  leftover === 0 || leftover === 1
    ? (verifyingDigit = 0)
    : (verifyingDigit = 11 - leftover);

  if ('' + v.substr(13, 1) !== '' + verifyingDigit) {
    return message;
  }

  return true;
};
