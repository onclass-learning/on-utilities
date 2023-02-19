import { cpf } from '../cpf';

describe('cpf', () => {
  const message = 'Valor do campo não é válido.';
  it('passing valid value, must return true', () => {
    expect(cpf('85624945000', message)).toEqual(true);
  });

  it('passing null value should return null', () => {
    expect(cpf(null, message)).toEqual(false);
  });

  it('passing equal values, should return an error message', () => {
    expect(cpf('11111111111111', message)).toEqual(
      'Valor do campo não é válido.'
    );
  });

  it('passing invalid value, should return an error message', () => {
    expect(cpf('12345678901', message)).toEqual('Valor do campo não é válido.');
  });

  it('passing letters, should return an error message', () => {
    expect(cpf('12345a78901', message)).toEqual('Valor do campo não é válido.');
  });

  it('should return an error message when the digit value is not valid', () => {
    expect(cpf('38068763855', message)).toEqual('Valor do campo não é válido.');
  });
});
