import { validateCpf } from '../cpf';

describe('validateCpf', () => {
  const message = 'Valor do campo não é válido.';
  it('passing valid value, must return true', () => {
    expect(validateCpf('85624945000', message)).toEqual(true);
  });

  it('passing null value should return null', () => {
    expect(validateCpf(null, message)).toEqual(false);
  });

  it('passing equal values, should return an error message', () => {
    expect(validateCpf('11111111111111', message)).toEqual(
      'Valor do campo não é válido.'
    );
  });

  it('passing invalid value, should return an error message', () => {
    expect(validateCpf('12345678901', message)).toEqual(
      'Valor do campo não é válido.'
    );
  });

  it('passing letters, should return an error message', () => {
    expect(validateCpf('12345a78901', message)).toEqual(
      'Valor do campo não é válido.'
    );
  });

  it('should return an error message when the digit value is not valid', () => {
    expect(validateCpf('38068763855', message)).toEqual(
      'Valor do campo não é válido.'
    );
  });
});
