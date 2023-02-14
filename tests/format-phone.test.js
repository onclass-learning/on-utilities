import { formatPhone } from '../src/format-phone';

describe('formatPhone', () => {
  it('should format a valid 10-digit phone number', () => {
    const phone = '4198765432';
    const result = formatPhone(phone);
    expect(result).toBe('(41) 9876-5432');
  });

  it('should format a valid 11-digit phone number', () => {
    const phone = '41988765432';
    const result = formatPhone(phone);
    expect(result).toBe('(41) 98876-5432');
  });

  it('should throw an error for a phone number containing non-digits', () => {
    expect(() => formatPhone('41a987654')).toThrow(Error);
  });

  it('should throw an error for a phone number with an invalid length', () => {
    expect(() => formatPhone('98765432')).toThrow(Error);
  });

  it('should return empty string for null or undefined', () => {
    expect(formatPhone(null)).toBe('');
    expect(formatPhone(undefined)).toBe('');
  });
});
