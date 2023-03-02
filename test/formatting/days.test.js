import { formatDays } from '../../src/formatting/days';

describe('formatDays', () => {
  it('should return null if value is null', () => {
    expect(formatDays(null)).toBe(null);
  });

  it('should return "Hoje" if value is 0', () => {
    expect(formatDays(0)).toBe('Hoje');
  });

  it('should return "1 dia" if value is 1', () => {
    expect(formatDays(1)).toBe('1 dia');
  });

  it('should return "2 dias" if value is 2', () => {
    expect(formatDays(2)).toBe('2 dias');
  });

  it('should return "10 dias" if value is 10', () => {
    expect(formatDays(10)).toBe('10 dias');
  });
});
