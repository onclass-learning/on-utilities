import { validateCnpj } from '../cnpj';

describe('validateCnpj', () => {
  const message = 'Valor do campo não é válido.';
  it('passing valid value, must return true', () => {
    expect(validateCnpj('86294203000153', message)).toEqual(true);
  });

  it('passing null value should return null', () => {
    expect(validateCnpj(null, message)).toEqual(false);
  });

  it('passing equal values, should return an error message', () => {
    expect(validateCnpj('11111111111111', message)).toEqual(
      'Valor do campo não é válido.'
    );
  });

  it('passing invalid value, should return an error message', () => {
    expect(validateCnpj('12345678901234', message)).toEqual(
      'Valor do campo não é válido.'
    );
  });

  it('passing letters, should return an error message', () => {
    expect(validateCnpj('123abc78901234', message)).toEqual(
      'Valor do campo não é válido.'
    );
  });

  it('should return an error message when the digit value is not valid', () => {
    expect(validateCnpj('86294203000199', message)).toEqual(
      'Valor do campo não é válido.'
    );
  });
});
