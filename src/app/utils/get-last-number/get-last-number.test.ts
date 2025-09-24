import { expect, test } from 'vitest';
import getLastNumber from './get-last-number';

test('retrieves correct number after operator', () => {
    expect(getLastNumber('123.23+4523.2')).toBe('4523.2');
    expect(getLastNumber('123.23-4523.2')).toBe('4523.2');
    expect(getLastNumber('123.23/4523.2')).toBe('4523.2');
    expect(getLastNumber('123.23x4523.2')).toBe('4523.2');
    expect(getLastNumber('123.23+4523')).toBe('4523');
});

test('retrieves correct number after multiple operators', () => {
    expect(getLastNumber('123.23+4523.2-12.2')).toBe('12.2');
    expect(getLastNumber('123.23-4523.2+12.2')).toBe('12.2');
    expect(getLastNumber('123.23/4523.2x12.2')).toBe('12.2');
    expect(getLastNumber('123.23x4523.2/12.2')).toBe('12.2');
    expect(getLastNumber('123.23+4523-12')).toBe('12');
});

test('retrieves correct number without operator', () => {
    expect(getLastNumber('4523')).toBe('4523');
    expect(getLastNumber('4523.2')).toBe('4523.2');
});

test('handles missing number', () => {
    expect(getLastNumber('')).toBe('');
    expect(getLastNumber('123.23+')).toBe('');
    expect(getLastNumber('123.23-')).toBe('');
    expect(getLastNumber('123.23x')).toBe('');
    expect(getLastNumber('123.23/')).toBe('');
});

