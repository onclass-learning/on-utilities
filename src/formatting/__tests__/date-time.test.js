import { formatDateTime } from '../date-time';

describe('formatDateTime', () => {
  it('should format date and time correctly', () => {
    const date = new Date(2022, 1, 14, 11, 25, 30);
    const result = formatDateTime(date);
    expect(result).toEqual('14/02/2022, 11:25:30');
  });

  it('should return null for falsy values', () => {
    expect(formatDateTime(null)).toBeNull();
    expect(formatDateTime(undefined)).toBeNull();
    expect(formatDateTime(0)).toBeNull();
    expect(formatDateTime('')).toBeNull();
  });
});
