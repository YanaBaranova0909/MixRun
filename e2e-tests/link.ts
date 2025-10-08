import { test, expect } from '@playwright/test';

test('automated test sends clickable link to Testomat', async ({}) => {
  const testLink = 'https://example.com';
  const message = `Check this link: [Example](${testLink})`;

  test.info().annotations.push({ type: 'info', description: message });

  expect(message).toContain(`[Example](${testLink})`);
  const linkMatch = message.match(/\[.*\]\((https?:\/\/.*)\)/);
  expect(linkMatch).not.toBeNull();
  expect(linkMatch![1]).toBe(testLink);
});
