const { test, expect } = require('@playwright/test');

test('Pos_Fun_0001 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('mama gedhara yanavaa adha havasata');
  const outputBox = page.locator('#output');
  await expect(outputBox).toContainText('යනවා');
});

test('Pos_Fun_0002 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('oyaa enavadha?');
  const outputBox = page.locator('#output');
  await expect(outputBox).toContainText('එනවද');
});

test('Pos_Fun_0003 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('api kaeema kanna yanavaa saha passe cinema yamu');
  const outputBox = page.locator('#output');
  await expect(outputBox).toContainText('කන්න');
});

test('Pos_Fun_0004 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('Zoom meeting ekak thiyennee heta 7.30 AM');
  const outputBox = page.locator('#output');
  await expect(outputBox).toContainText('තියෙන්නේ');
});

test('Pos_Fun_0005 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const inputBox = page.locator('textarea');
  await inputBox.fill('karunaakara mata podi udhavvak karanna puluvandha?');
  const outputBox = page.locator('#output');
  await expect(outputBox).toContainText('පොඩි');
});
