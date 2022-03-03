import { _android as android, } from 'playwright';
import { test, expect, devices, _android } from '@playwright/test';
test.use({
  ...devices['Pixel 2'],
});
test('test', async ({ page }) => {
    test.setTimeout(12000000);
  await page.goto('http://172.27.22.216:8001/login');
  await page.goto('http://172.27.22.216:8001/login#login');
  await page.locator('text=Email Password Show Forgot Password? >> [placeholder="jane\\@example\\.com"]').click();
  await page.locator('text=Email Password Show Forgot Password? >> [placeholder="jane\\@example\\.com"]').fill('Administrator');
  await page.locator('text=Email Password Show Forgot Password? >> [placeholder="jane\\@example\\.com"]').press('Tab');
  await page.locator('[placeholder="•••••"]').fill('admin');
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://172.27.22.216:8001/app' }*/),
    page.locator('[placeholder="•••••"]').press('Enter')
  ]);
  await page.locator('text=Home Create Workspace Edit Actions >> svg').nth(1).click();
  await page.locator('text=HR').click();
  await expect(page).toHaveURL('http://172.27.22.216:8001/app/hr');
  await page.locator('text=Employment Type').click();
  await expect(page).toHaveURL('http://172.27.22.216:8001/app/employment-type');
  await page.locator('button:has-text("Add Employment Type")').click();
  await page.locator('text=Employment Type undefined >> input[type="text"]').fill('rookie');
  await page.locator('button:has-text("Save")').click();
  await page.locator('button:has-text("Add Employment Type")').click();
  await page.locator('text=Employment Type undefined >> input[type="text"]').fill('Migrant');
  await page.locator('text=Save').nth(3).click();
  await page.locator('button:has-text("Add Employment Type")').click();
  await page.locator('text=Employment Type undefined >> input[type="text"]').fill('nightshifter');
  await page.locator('text=Save').nth(4).click();
  await page.locator('button:has-text("Add Employment Type")').click();
  await page.locator('text=Employment Type undefined >> input[type="text"]').fill('Overseas');
  await page.locator('button:has-text("Save")').nth(3).click();
  await page.locator('button:has-text("Add Employment Type")').click();
  await page.locator('text=Employment Type undefined >> input[type="text"]').fill('part-time');
  await page.locator('button:has-text("Save")').nth(4).click();
  await page.locator('button:has-text("Add Employment Type")').click();
  await page.locator('text=Employment Type undefined >> input[type="text"]').fill('CEO');
  await page.locator('text=New Employment Type Employment Type CEO Edit in full page Save >> button').nth(4).click();
  await page.locator('button:has-text("Add Employment Type")').click();
  await page.locator('text=Employment Type undefined >> input[type="text"]').fill('Gamer');
  await page.locator('text=New Employment Type Employment Type Gamer Edit in full page Save >> button').nth(4).click();
  await page.locator('button:has-text("Add Employment Type")').click();
  await page.locator('text=Employment Type undefined >> input[type="text"]').fill('Intern');
  await page.locator('text=New Employment Type Employment Type Intern Edit in full page Save >> button').nth(4).click();
});
