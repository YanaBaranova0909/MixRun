import { test, expect } from '@playwright/test';

[
  { name: 'Alice', password: 'alice123' },
  { name: 'Bob', password: 'bob456' },
  { name: 'Charlie', password: 'charlie789' }
].forEach(({ name, password }) => {
  /**
   * Steps:
   * 1. Run test with username '{{name}}'
   * 2. Use password '{{password}}'
   */
  test(`testing with ${name}`, async () => {
    expect(true).toBe(true);
  });
});
