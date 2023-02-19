export const validateCpf = (v, message) => {
  if (v === null || v === undefined || v === '') return false;

  v = v.replace(/-|\./g, '');

  if (!/^[0-9]+$/.test(v)) return message;

  if (
    v.length != 11 ||
    v == '191' ||
    v == '00000000000' ||
    v == '11111111111' ||
    v == '22222222222' ||
    v == '33333333333' ||
    v == '44444444444' ||
    v == '55555555555' ||
    v == '66666666666' ||
    v == '77777777777' ||
    v == '88888888888' ||
    v == '99999999999'
  ) {
    return message;
  }

  let index = 2;
  let total = 0;
  let leftover = 0;
  let verifyingDigit = 0;
  let counter;

  for (counter = -9; counter <= -1; counter++) {
    total = total + Math.abs(v.substr(Math.abs(counter) - 1, 1) * index);
    index = index + 1;
  }

  leftover = total % 11;

  leftover === 0 || leftover === 1
    ? (verifyingDigit = 0)
    : (verifyingDigit = 11 - leftover);

  if ('' + v.substr(9, 1) != '' + verifyingDigit) {
    return message;
  }

  index = 2;
  total = 0;
  leftover = 0;
  verifyingDigit = 0;

  for (counter = -10; counter <= -1; counter++) {
    total = total + Math.abs(v.substr(Math.abs(counter) - 1, 1) * index);
    index = index + 1;
  }

  leftover = total % 11;

  leftover === 0 || leftover === 1
    ? (verifyingDigit = 0)
    : (verifyingDigit = 11 - leftover);

  if ('' + v.substr(10, 1) !== '' + verifyingDigit) {
    return message;
  }

  return true;
};
