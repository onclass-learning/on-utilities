import { validateRequiredLength } from '../../src/validations/required-length';

describe('validateRequiredLength', () => {
  const message = 'Este campo é obrigatório';

  it('passing valid value, must return true', () => {
    expect(validateRequiredLength(['teste'], message)).toEqual(true);
  });

  it('passing empty value, should return an error message', () => {
    expect(validateRequiredLength([], message)).toEqual(
      'Este campo é obrigatório'
    );
  });

  it('passing null value should return an error message', () => {
    expect(validateRequiredLength(null, message)).toEqual(
      'Este campo é obrigatório'
    );
  });
});
