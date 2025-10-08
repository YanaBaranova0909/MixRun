import { test, expect } from '@playwright/test';

const testData = [
  { header: 'X-Header-One', value: 'value1' },
  { header: 'X-Header-Two', value: 'value2' },
];

test.describe('Parameterized HTTP header test @Sf01887ae', () => {
  for (const { header, value } of testData) {
    test(`should send header ${header} with value ${value} @T060f389d`, async ({ browser }) => {
      const context = await browser.newContext({
        extraHTTPHeaders: {
          [header]: value,
        },
      });

      const page = await context.newPage();
      const response = await page.goto('https://httpbin.org/headers');
      const body = await response!.json();

      const normalizedHeaders: Record<string, string> = {};
      for (const [k, v] of Object.entries(body.headers)) {
        normalizedHeaders[k.toLowerCase()] = v;
      }

      expect(normalizedHeaders[header.toLowerCase()]).toBe(value);

      await context.close();
    });
  }
});
