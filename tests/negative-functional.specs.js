const { test, expect } = require('@playwright/test');

test('Neg_Fun_0001 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('mamagedharayanavaa');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=මම ');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('මම ');
});
test('Neg_Fun_0002 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('ela machan supiri wedak');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=වැඩක් ');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('වැඩක්' );
});
test('Neg_Fun_0003 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('mama adha gedhara yanavaa heta enavaa');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=ගිහින් ');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('ගිහින් ');
});
test('Neg_Fun_0004 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('mama naehae ehema karanavaa');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=කරන්නේ ');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('කරන්නේ ');
});
test('Neg_Fun_0005 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('oyaa enavadha???!!!');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=එනවද');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('එනවද');
});
test('Neg_Fun_0006 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('meeting eka 07.30.2026 7.30');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=ජුලි');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('ජුලි');
});
test('Neg_Fun_0007 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('Please magee report eka submit karanna today');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=අද');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('අද');
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

  const outputBox = page.locator('text=ගෙදර');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('ගෙදර');
});
test('Neg_Fun_0010 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('mama ASAP report eka HR ta email karanavaa');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=ඉක්මනින්');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('ඉක්මනින්');
});