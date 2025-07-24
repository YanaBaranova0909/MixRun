import { test, expect } from '@playwright/test';

const params = [
  { header1: 'value1' },
  { header1: 'value2' },
  { header1: 'value3' },
];

params.forEach(({ header1 }) => {
  test(`Check parameter rendering for header1 = ${header1} @Tb3eb5d33`, async () => {
    expect(header1).toMatch(/^value\d$/);
  });
});
