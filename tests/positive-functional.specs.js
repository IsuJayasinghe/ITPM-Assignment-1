const { test, expect } = require('@playwright/test');

test('Pos_Fun_0001 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('mata bath oonee');

  const outputBox = page.locator('#output');
  await expect(outputBox).toContainText('බත්');
});
