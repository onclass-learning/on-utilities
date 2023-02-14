import { formatCpf } from '../src/format-cpf';

describe('formatCpf', () => {
  it('should format a valid CPF', () => {
    expect(formatCpf('11122233344')).toBe('111.222.333-44');
    expect(formatCpf('12345678909')).toBe('123.456.789-09');
  });

  it('should throw an error for an invalid CPF', () => {
    expect(() => formatCpf('1234')).toThrow(Error);
    expect(() => formatCpf('12345678901123443333')).toThrow(Error);
    expect(() => formatCpf('abcde67890')).toThrow(Error);
  });

  it('should return empty string for null or undefined', () => {
    expect(formatCpf(null)).toBe('');
    expect(formatCpf(undefined)).toBe('');
  });
});
