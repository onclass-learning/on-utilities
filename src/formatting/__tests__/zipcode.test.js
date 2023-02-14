import { formatZipCode } from '../zipcode';

describe('formatZipCode', () => {
  it('should format valid zip code', () => {
    expect(formatZipCode('12345678')).toBe('12345-678');
    expect(formatZipCode('87654321')).toBe('87654-321');
  });

  it('should return value unchanged for invalid zip code', () => {
    expect(formatZipCode(null)).toBeNull();
    expect(formatZipCode(undefined)).toBeUndefined();
    expect(formatZipCode('1234567')).toBe('1234567');
    expect(formatZipCode('123456789')).toBe('123456789');
    expect(formatZipCode('12a45678')).toBe('12a45678');
  });
});
