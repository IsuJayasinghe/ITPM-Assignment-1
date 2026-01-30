const { test, expect } = require('@playwright/test');

test('Pos_Fun_0001 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('mama gedhara yanavaa adha havasata');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=යනවා');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('යනවා');
});

test('Pos_Fun_0002 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('oyaa enavadha?');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=එනවද');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });
  // Validate partial Sinhala text
  await expect(outputBox).toContainText('එනවද');
});
test('Pos_Fun_0003 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('api kaeema kanna yanavaa saha passe cinema yamu');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=කන්න');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('කන්න');
});
test('Pos_Fun_0004 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('Zoom meeting ekak thiyennee heta 7.30 AM');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=තියෙන්නේ');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('තියෙන්නේ');
});

test('Pos_Fun_0005 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('karunaakara mata podi udhavvak karanna puluvandha?');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=උදව්වක්');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('උදව්වක්');
});
test('Pos_Fun_0006 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('mama dhaen vaeda karanavaa');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=කරනවා');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('කරනවා');
});
test('Pos_Fun_0007 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('issarahata yanna');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=යන්න');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('යන්න');
});
test('Pos_Fun_0008 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('mata eeka karanna baee');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=කරන්න ');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('කරන්න ');
});
test('Pos_Fun_0009 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('api heta gedhara yamu');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=ගෙදර ');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('ගෙදර ');
});
test('Pos_Fun_0010 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('api Kandy trip ekak plan karanavaa');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=කරනවා');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('කරනවා');
});
test('Pos_Fun_0011 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('magee bill eka Rs. 2450');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=මගේ');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('මගේ');
});
test('Pos_Fun_0012 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('api iilaga sathiyee meeting ekak thiyenavaa');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=තියෙනවා');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('තියෙනවා');
});
test('Pos_Fun_0013 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('puLuvannam mata email ekak evanna');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=එවන්න');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('එවන්න');
});
test('Pos_Fun_0014 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('karunaakaralaa heta mata call ekak ganna puluvandha?');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=හෙට ');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('හෙට');
});
test('Pos_Fun_0015 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('mata adha hari sathutuyi, api passe celebrate karamu');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=කරමු ');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('කරමු');
});
test('Pos_Fun_0016 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('oya Kandy giyoth Temple eka balanna amathaka karanna epaa');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=එපා ');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('එපා');
});
test('Pos_Fun_0017 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('mama laptop eka restart karalaa WiFi connect karanavaa');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=කරනවා ');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('කරනවා');
});
test('Pos_Fun_0018 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('meeting eka 10.45 AM start venavaa kiyalaa manager kiyuvvaa');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=කියලා');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('කියලා');
});
test('Pos_Fun_0019 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('api lamayi okkoma ekka beach ekata yamu');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=ඔක්කොම ');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('ඔක්කොම');
});
test('Pos_Fun_0020 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('mata adha office enna baee nisaa leave ekak dhaala inne');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=ඉන්නේ ');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('ඉන්නේ');
});
test('Pos_Fun_0021 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('vaessa thiyenavaa nam api trip eka cancel karamu');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=තියෙනවා');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('තියෙනවා');
});
test('Pos_Fun_0022 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('puLuvannam mage documents tika today submit karanna');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=ටික');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('ටික');
});
test('Pos_Fun_0023 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('oyaata me system eka use karanna pahasuyi kiyalaa hithenavadha?');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=හිතෙනවද');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('හිතෙනවද');
});
test('Pos_Fun_0024 – Simple Singlish to Sinhala conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  await inputBox.fill('hari, mama eka adha evening hariyata karannam');

  // Trigger translation
  await inputBox.press('Enter');

  const outputBox = page.locator('text=කරන්නම්');

  // Wait until translation appears
  await expect(outputBox).toBeVisible({ timeout: 15000 });

  // Validate partial Sinhala text
  await expect(outputBox).toContainText('කරන්නම්');
});
