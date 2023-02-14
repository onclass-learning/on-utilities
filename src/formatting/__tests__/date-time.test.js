import { formatDateTime } from '../date-time';

describe('formatDateTime', () => {
  it('should format date and time correctly', () => {
    const date = '2023-02-14T12:02:11.816Z';
    const result = formatDateTime(date);
    expect(result).toBe('14/02/2023, 09:02:11');
  });

  it('should return null for falsy values', () => {
    expect(formatDateTime(null)).toBeNull();
    expect(formatDateTime(undefined)).toBeNull();
    expect(formatDateTime(0)).toBeNull();
    expect(formatDateTime('')).toBeNull();
  });
});
