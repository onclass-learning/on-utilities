import { validateRequired } from '../required';

describe('validateRequired', () => {
  const message = 'Este campo é obrigatório';
  it('passing valid value, must return true', () => {
    expect(validateRequired('teste', message)).toEqual(true);
  });

  it('passing null value should return an error message', () => {
    expect(validateRequired(null, message)).toEqual('Este campo é obrigatório');
  });
});
