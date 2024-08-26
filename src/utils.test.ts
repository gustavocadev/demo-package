import { add } from './utils.ts';
import { test, expect } from 'bun:test';

test('add', () => {
  expect(add(1, 2)).toBe(3);
});
