import { expect, test } from 'vitest';
import calculateEquation from './calculate-equation';

test('performs addition correctly', () => {
    expect(calculateEquation('1+2')).toBe(3);
    expect(calculateEquation('10.5+9.5')).toBeLessThan(20.1);
    expect(calculateEquation('10.5+9.5')).toBeGreaterThan(19.9);
    expect(calculateEquation('10.5+9.6')).toBeLessThan(20.2);
    expect(calculateEquation('10.5+9.6')).toBeGreaterThan(20.0);
});

test('performs subtraction correctly', () => {
    expect(calculateEquation('1-2')).toBe(-1);
    expect(calculateEquation('10.5-9.5')).toBeLessThan(1.1);
    expect(calculateEquation('10.5-9.5')).toBeGreaterThan(0.9);
    expect(calculateEquation('10.5-9.6')).toBeLessThan(1);
    expect(calculateEquation('10.5-9.6')).toBeGreaterThan(0.8);
    expect(calculateEquation('-1-1')).toBe(-2);
});

test('performs multiplication correctly', () => {
    expect(calculateEquation('1x2')).toBe(2);
    expect(calculateEquation('1x-2')).toBe(-2);
    expect(calculateEquation('-1x2')).toBe(-2);
    expect(calculateEquation('-1x-2')).toBe(2);
    expect(calculateEquation('5.5x2.5')).toBeLessThan(13.76);
    expect(calculateEquation('5.5x2.5')).toBeGreaterThan(13.74);
});

test('performs division correctly', () => {
    expect(calculateEquation('2/1')).toBe(2);
    expect(calculateEquation('15/5')).toBe(3);
    expect(calculateEquation('-15/5')).toBe(-3);
    expect(calculateEquation('15/-5')).toBe(-3);
    expect(calculateEquation('-15/-5')).toBe(3);
    expect(calculateEquation('10/3')).toBeLessThan(3.4);
    expect(calculateEquation('10/3')).toBeGreaterThan(3.2);
    expect(calculateEquation('3/10')).toBeLessThan(0.4);
    expect(calculateEquation('3/10')).toBeGreaterThan(0.2);
    expect(calculateEquation('2/0')).toBe(Infinity);
});

test('handles multiple operations correctly', () => {
    expect(calculateEquation('2+3x4')).toBe(14);
    expect(calculateEquation('2+10/5')).toBe(4);
    expect(calculateEquation('1+2x3+3-2x4+1-10/2')).toBe(-2);
    expect(calculateEquation('10-2x3+8/4+6x2-5')).toBe(13);
});

test('handle errors correctly', () => {
    expect(calculateEquation('1+2x@3')).toBe(0);
});