import { formatDateTime } from '../date-time';

describe('formatDateTime', () => {
  it('should return null for falsy values', () => {
    expect(formatDateTime(null)).toBeNull();
    expect(formatDateTime(undefined)).toBeNull();
    expect(formatDateTime(0)).toBeNull();
    expect(formatDateTime('')).toBeNull();
  });
});
