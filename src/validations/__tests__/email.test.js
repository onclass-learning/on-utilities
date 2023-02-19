import { validateEmail } from '../email';

describe('validateEmail', () => {
  const message = 'E-mail Inválido!';
  it('passing valid value, must return true', () => {
    expect(validateEmail('email@teste.com', message)).toEqual(true);
  });

  it('passing incorrect values, should return an error message', () => {
    expect(validateEmail('email@', message)).toEqual('E-mail Inválido!');
  });

  it('passing empty, must return true', () => {
    expect(validateEmail()).toEqual(true);
  });
});
