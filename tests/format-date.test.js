import { formatDate } from '../src/format-date';

describe('formatDate', () => {
  it('returns an empty string when the value is null or undefined', () => {
    expect(formatDate(null)).toBe('');
    expect(formatDate(undefined)).toBe('');
  });

  it('should format validate date', () => {
    const date = '2023-11-02';
    const date2 = '2023-11-02T03:00:00';
    expect(formatDate(date)).toBe('02/11/2023');
    expect(formatDate(date2)).toBe('02/11/2023');
  });

  it('returns the date in the correct format based on the UTC time zone', () => {
    const value = '2023-01-01T00:00:00.000';
    const expected = new Date(value).toLocaleDateString('pt-BR', {
      timeZone: 'UTC',
    });
    expect(formatDate(value)).toBe(expected);
  });

  it('handles invalid dates correctly, returning an empty string', () => {
    expect(formatDate('invalid')).toBe('Invalid Date');
  });
});
