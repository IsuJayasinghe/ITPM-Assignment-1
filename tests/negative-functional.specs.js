const { test, expect } = require('@playwright/test');

test('Neg_Fun_0001 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('mamagedharayanavaa');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=මමගෙදරයනවා');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('මමගෙදරයනවා');
});
test('Neg_Fun_0002 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('ela machan supiri wedak');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=මචන්');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('මචන්');
});
test('Neg_Fun_0003 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('mama adha gedhara yanavaa heta enavaa');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=හෙට ');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('හෙට');
});
test('Neg_Fun_0004 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('mama naehae ehema karanavaa');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=නැහැ');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('නැහැ');
});
test('Neg_Fun_0005 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('oyaa enavadha???!!!');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=ඔයා ');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('ඔයා ');
});
test('Neg_Fun_0006 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('meeting eka 07.30.2026 7.30');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=එක');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('එක');
});
test('Neg_Fun_0007 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('Please magee report eka submit karanna today');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=මගේ');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('මගේ');
});
test('Neg_Fun_0008 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('hari hari hari hari lassanai');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=හරි');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('හරි');
});
test('Neg_Fun_0009 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('MaMa GeDhArA YaNaVaA');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=මම');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('මම');
});
test('Neg_Fun_0010 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('mama ASAP report eka HR ta email karanavaa');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=කරනවා');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('කරනවා');
});