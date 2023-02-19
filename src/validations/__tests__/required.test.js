import { required } from '../required';

describe('required', () => {
  const message = 'Este campo é obrigatório';
  it('passing valid value, must return true', () => {
    expect(required('teste', message)).toEqual(true);
  });

  it('passing null value should return an error message', () => {
    expect(required(null, message)).toEqual('Este campo é obrigatório');
  });
});
