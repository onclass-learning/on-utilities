import { formatPercentage } from '../src/format-percentage';

describe('formatPercentage', () => {
  it('should return percentage with two decimal places and formatted with commas and dots', () => {
    const result = formatPercentage(0.123456);
    expect(result).toEqual('0,123%');
  });

  it('should return percentage with one decimal place and formatted with commas and dots', () => {
    const result = formatPercentage(0.12345);
    expect(result).toEqual('0,123%');
  });

  it('should throw an error for non-numeric input', () => {
    expect(() => formatPercentage('abc')).toThrow('O valor abc, não é válido!');
  });

  it('should return empty string for null value', () => {
    const result = formatPercentage(null);
    expect(result).toEqual('');
  });

  it('should return empty string for undefined value', () => {
    const result = formatPercentage(undefined);
    expect(result).toEqual('');
  });
});
