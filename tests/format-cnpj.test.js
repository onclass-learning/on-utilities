import { formatCnpj } from '../src/format-cnpj';

describe('formatCnpj', () => {
  it('should return formatted CNPJ', () => {
    const result = formatCnpj('01234567890123');
    expect(result).toEqual('01.234.567/8901-23');
  });

  it('should throw an error for invalid CNPJ', () => {
    expect(() => formatCnpj('123456789012345')).toThrow(
      'O valor 123456789012345, não é válido!'
    );
  });

  it('should return empty string for null value', () => {
    const result = formatCnpj(null);
    expect(result).toEqual('');
  });

  it('should return empty string for undefined value', () => {
    const result = formatCnpj(undefined);
    expect(result).toEqual('');
  });
});
