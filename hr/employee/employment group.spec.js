const { test, expect } = require('@playwright/test') ;
  test('basic test', async ({ page }) => {
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
    
  await page.locator('text=HR').click();
  await expect(page).toHaveURL('http://172.27.22.216:8001/app/hr');
  await page.locator('text=Employee Group').click();
  await expect(page).toHaveURL('http://172.27.22.216:8001/app/employee-group');
  await page.locator('button:has-text("Add Employee Group")').click();
  // Click text=Name undefined >> input[type="text"]
  await page.locator('text=Name undefined >> input[type="text"]').click();
  await page.locator('text=Name undefined >> input[type="text"]').fill('HR');
  await page.locator('button:has-text("Save")').click();
  await page.locator('button:has-text("Add Employee Group")').click();
  await page.locator('text=Name undefined >> input[type="text"]').click();
  
  await page.locator('text=Name undefined >> input[type="text"]').fill('Marketing');
  await page.locator('text=Save').nth(3).click();
  await page.locator('button:has-text("Add Employee Group")').click();
  await page.locator('text=Name undefined >> input[type="text"]').click();
  await page.locator('text=Name undefined >> input[type="text"]').fill('Sales executive');
  await page.locator('button:has-text("Save")').nth(2).click();
});
