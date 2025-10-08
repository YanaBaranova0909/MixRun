import { test, expect } from '@playwright/test';
import { logger } from '@testomatio/reporter';

const params = [
  { header1: 'value1' },
  { header1: 'value2' },
  { header1: 'value3' },
];

params.forEach(({ header1 }, index) => {
  test(`Check parameter rendering for header1 = ${header1} @Tb3eb5d33-${index}`, async () => {
    const link = 'https://docs.testomat.io/';

    logger.info(`Step: Checking header1 = ${header1}`);

logger.log(`Header1 value: ${header1}`);
logger.log(`Documentation link: 🔗 ${link}`);

    expect(header1).toMatch(/^value\d$/);
  });
});
