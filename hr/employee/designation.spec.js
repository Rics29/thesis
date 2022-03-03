const { test, expect } = require('@playwright/test') ;
  test('basic test', async ({ page }) => {
    test.setTimeout(12000000);
 
  // Go to http://172.27.22.216:8001/login
  await page.goto('http://172.27.22.216:8001/login');
  // Go to http://172.27.22.216:8001/login#login
  await page.goto('http://172.27.22.216:8001/login#login');
  // Click text=Email Password Show Forgot Password? >> [placeholder="jane\@example\.com"]
  await page.locator('text=Email Password Show Forgot Password? >> [placeholder="jane\\@example\\.com"]').click();
  // Fill text=Email Password Show Forgot Password? >> [placeholder="jane\@example\.com"]
  await page.locator('text=Email Password Show Forgot Password? >> [placeholder="jane\\@example\\.com"]').fill('Administrator');
  // Click [placeholder="•••••"]
  await page.locator('[placeholder="•••••"]').click();
 
  // Fill [placeholder="•••••"]
  await page.locator('[placeholder="•••••"]').fill('admin');
  // Press Enter
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://172.27.22.216:8001/app' }*/),
    page.locator('[placeholder="•••••"]').press('Enter')
  ]);
  // Click a:has-text("HR")
  await page.locator('a:has-text("HR")').click();
  await expect(page).toHaveURL('http://172.27.22.216:8001/app/hr');
  // Click text=Designation
  await page.locator('text=Designation').click();
  await expect(page).toHaveURL('http://172.27.22.216:8001/app/designation');
  // Click button:has-text("Add Designation")await page.locator('text=Designation').click()
  // Click button:has-text("Add Designation")
  await page.locator('button:has-text("Add Designation")').click();
  // Fill text=Designation undefined >> input[type="text"]
  await page.locator('text=Designation undefined >> input[type="text"]').fill('gonda');
  // Click button:has-text("Save")
  await page.locator('button:has-text("Save")').click();
});