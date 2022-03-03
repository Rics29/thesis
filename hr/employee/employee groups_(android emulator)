import { test, expect, devices } from '@playwright/test';
test.use({
  ...devices['Pixel 2'],
});
test('test', async ({ page }) => {
  test.setTimeout(12000000);
  await page.goto('http://172.27.22.216:8001/login');
  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://172.27.22.216:8001/login#login' }*/),
    page.locator('text=Email Password Show Forgot Password? >> [placeholder="jane\\@example\\.com"]').click()
  ]);
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
  await page.locator('text=Employee Group').click();
  await expect(page).toHaveURL('http://172.27.22.216:8001/app/employee-group');
  await page.locator('button:has-text("Add Employee Group")').click();
  await page.locator('text=Name undefined >> input[type="text"]').fill('freshers');
  await page.locator('button:has-text("Save")').click();
  await page.locator('button:has-text("Add Employee Group")').click();
  await page.locator('text=Name undefined >> input[type="text"]').fill('interns');
  await page.locator('text=Save').nth(3).click();
  await page.locator('button:has-text("Add Employee Group")').click();
  await page.locator('text=Name undefined >> input[type="text"]').fill('junior dev');
  await page.locator('text=Save').nth(4).click();
  await page.locator('button:has-text("Add Employee Group")').click();
  await page.locator('text=Name undefined >> input[type="text"]').fill('senior dev');
  await page.locator('button:has-text("Save")').nth(3).click();
  await page.locator('button:has-text("Add Employee Group")').click();
  await page.locator('text=Name undefined >> input[type="text"]').fill('managers');
  await page.locator('button:has-text("Save")').nth(4).click();
  await page.locator('button:has-text("Add Employee Group")').click();
  await page.locator('text=Name undefined >> input[type="text"]').fill('regional manager');
  await page.locator('text=New Employee Group Name regional manager Edit in full page Save >> button').nth(4).click();
  await page.locator('button:has-text("Add Employee Group")').click();
  await page.locator('text=Name undefined >> input[type="text"]').fill('ceo');
  await page.locator('text=New Employee Group Name ceo Edit in full page Save >> button').nth(4).click();
  await page.locator('button:has-text("Add Employee Group")').click();
  await page.locator('text=Name undefined >> input[type="text"]').fill('vice chairman');
  await page.locator('text=New Employee Group Name vice chairman Edit in full page Save >> button').nth(4).click();
});
