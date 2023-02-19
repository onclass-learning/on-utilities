import { fullName } from '../full-name';

describe('fullName', () => {
  test('Must return true when a valid full name is given as input', () => {
    expect(fullName('João Silva')).toBe(true);
  });

  test('Should return error message when invalid input is provided', () => {
    const message = 'Por favor, insira um nome completo válido';
    expect(fullName('123', message)).toBe(message);
    expect(fullName('   ', message)).toBe(message);
  });

  test('Must return undefined when input value is false', () => {
    expect(fullName(null)).toBe(undefined);
    expect(fullName(undefined)).toBe(undefined);
    expect(fullName('')).toBe(undefined);
  });
});
