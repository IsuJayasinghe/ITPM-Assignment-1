const { test, expect } = require('@playwright/test');

test('Pos_UI_0001 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('mama gedhara');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=මම');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('මම');
});
test('Pos_UI_0002 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('api heta office yanna kalin meeting ekak thiyenavaa saha passe reports tika submit karanna oonee');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=අපි ');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('අපි ');
});
test('Neg_UI_0001 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('api heta enavaa');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=එනවා ');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('එනවා ');
});