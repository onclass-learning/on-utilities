import { requiredLength } from '../required-length';

describe('requiredLength', () => {
  const message = 'Este campo é obrigatório';

  it('passing valid value, must return true', () => {
    expect(requiredLength(['teste'], message)).toEqual(true);
  });

  it('passing empty value, should return an error message', () => {
    expect(requiredLength([], message)).toEqual('Este campo é obrigatório');
  });

  it('passing null value should return an error message', () => {
    expect(requiredLength(null, message)).toEqual('Este campo é obrigatório');
  });
});
