import { formatBytes } from '../../src/formatting/bytes';

describe('formatBytes', () => {
  it('formatBytes correctly formats input', () => {
    expect(formatBytes(0)).toBe('0 bytes');
    expect(formatBytes(1024)).toBe('1.00 KB');
    expect(formatBytes(123456789)).toBe('117.74 MB');
    expect(formatBytes(1024 * 1024 * 1024 * 2)).toBe('2.00 GB');
  });
});
