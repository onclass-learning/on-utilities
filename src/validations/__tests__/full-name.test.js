import { validateFullName } from '../full-name';

describe('validateFullName', () => {
  test('Must return true when a valid full name is given as input', () => {
    expect(validateFullName('João Silva')).toBe(true);
  });

  test('Should return error message when invalid input is provided', () => {
    const message = 'Por favor, insira um nome completo válido';
    expect(validateFullName('123', message)).toBe(message);
    expect(validateFullName('   ', message)).toBe(message);
  });

  test('Must return undefined when input value is false', () => {
    expect(validateFullName(null)).toBe(undefined);
    expect(validateFullName(undefined)).toBe(undefined);
    expect(validateFullName('')).toBe(undefined);
  });
});
