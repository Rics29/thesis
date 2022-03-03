const { test, expect } = require('@playwright/test') ;
  test('basic test', async ({ page }) => {
    test.setTimeout(12000000);
  await page.goto('http://172.27.22.216:8001/login');
  await page.goto('http://172.27.22.216:8001/login#login');
  await page.locator('text=Email Password Show Forgot Password? >> [placeholder="jane\\@example\\.com"]').click();
  await page.locator('text=Email Password Show Forgot Password? >> [placeholder="jane\\@example\\.com"]').fill('Administrator');
  await page.locator('[placeholder="•••••"]').click();
  await page.locator('[placeholder="•••••"]').fill('admin');
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://172.27.22.216:8001/app' }*/),
    page.locator('[placeholder="•••••"]').press('Enter')
  ]);
  await page.locator('text=HR').click();
  await expect(page).toHaveURL('http://172.27.22.216:8001/app/hr');
  await page.locator('text=Employment Type').click();
  await expect(page).toHaveURL('http://172.27.22.216:8001/app/employment-type');
  await page.locator('button:has-text("Add Employment Type")').click();
  await page.locator('text=Employment Type undefined >> input[type="text"]').click();
  await page.locator('text=Employment Type undefined >> input[type="text"]').fill('hired');
  await page.locator('button:has-text("Save")').click();
});
