import { formatCpf } from '../../src/formatting/cpf';
describe('formatCpf', () => {
  it('should format CPF correctly', () => {
    expect(formatCpf('11122233344')).toEqual('111.222.333-44');
  });

  it('should return an empty string when CPF is null or undefined', () => {
    expect(formatCpf(null)).toEqual('');
    expect(formatCpf(undefined)).toEqual('');
  });

  it('should throw an error when CPF is not a valid string', () => {
    expect(() => formatCpf('123')).toThrowError('CPF inválido: 123');
    expect(() => formatCpf('111222')).toThrowError('CPF inválido: 111222');
    expect(() => formatCpf('111.222.333')).toThrowError(
      'CPF inválido: 111.222.333'
    );
    expect(() => formatCpf('1111.2222.3333.44')).toThrowError(
      'CPF inválido: 1111.2222.3333.44'
    );
  });
});
