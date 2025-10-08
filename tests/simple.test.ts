import { test, expect } from '@playwright/test';
import { logger, log } from '@testomatio/reporter';

test('Create some todo items @Tc402d2d8', async ({ page }) => {
  logger.intercept(console);

  logger.info('Opening TodoMVC page');
  await page.goto('https://demo.playwright.dev/todomvc/');

  await page.locator('.new-todo').fill('Buy some bread');
  await page.locator('.new-todo').press('Enter');

  log`Created todo item: "Buy some bread"`;

  const text = await page.locator('.todo-list li').innerText();

  logger.debug('Verifying that the item was added');
  logger.assert(
    text === 'Buy some bread',
    `Validation failed! Expected "Buy some bread", got "${text}". Documentation: https://docs.testomat.io/`
  );

  log`Todo item successfully displayed on the page`;
});
