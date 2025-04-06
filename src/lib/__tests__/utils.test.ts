import { cn, getDatePosted, formatDateTime } from '../utils';

describe('cn function', () => {
  it('should merge class names correctly', () => {
    expect(cn('text-red-500', 'bg-blue-500')).toBe('text-red-500 bg-blue-500');
    expect(cn('p-4', { 'mt-2': true, 'mb-2': false })).toBe('p-4 mt-2');
    expect(cn('flex', ['items-center', 'justify-between'])).toBe('flex items-center justify-between');
  });
});

describe('getDatePosted function', () => {
  it('should return a formatted date string', () => {
    const now = new Date();
    const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    
    expect(getDatePosted(oneHourAgo.toISOString())).toContain('hour ago');
    expect(getDatePosted(oneDayAgo.toISOString())).toContain('day ago');
  });

  it('should return undefined for null input', () => {
    expect(getDatePosted(null as unknown as string)).toBeUndefined();
  });
});

describe('formatDateTime function', () => {
  it('should format date and time correctly', () => {
    const dateTimeString = '25/03/2024, 14:30';
    const expected = '25/03/2024, 2:30pm';
    
    expect(formatDateTime(dateTimeString)).toBe(expected);
  });

  it('should handle AM times correctly', () => {
    const dateTimeString = '25/03/2024, 09:30';
    const expected = '25/03/2024, 9:30am';
    
    expect(formatDateTime(dateTimeString)).toBe(expected);
  });

  it('should return empty string for undefined input', () => {
    expect(formatDateTime(undefined)).toBe('');
  });
});
