import { email } from '../email';

describe('email', () => {
  const message = 'E-mail Inválido!';
  it('passing valid value, must return true', () => {
    expect(email('email@teste.com', message)).toEqual(true);
  });

  it('passing incorrect values, should return an error message', () => {
    expect(email('email@', message)).toEqual('E-mail Inválido!');
  });

  it('passing empty, must return true', () => {
    expect(email()).toEqual(true);
  });
});
