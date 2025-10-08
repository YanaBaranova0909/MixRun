import { test, expect } from '@playwright/test';

[{ name: 'Alice' }, { name: 'Bob' }, { name: 'Charlie' }].forEach(({ name }) => {
  test(`testing with ${name} @T54090f0a`, async ({ page }) => {
    await expect(12).toBeGreaterThan(11);
  });
})
