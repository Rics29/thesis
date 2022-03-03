import { test, expect } from '@playwright/test';
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

  await page.locator('text=HR').click();
  await expect(page).toHaveURL('http://172.27.22.216:8001/app/hr');
  await page.locator('text=Employee Health Insurance').click();
  await expect(page).toHaveURL('http://172.27.22.216:8001/app/employee-health-insurance');

  await page.locator('button:has-text("Add Employee Health Insurance")').click();
  await page.locator('text=Health Insurance Name undefined >> input[type="text"]').fill('Family');
  await page.locator('button:has-text("Save")').click();

  await page.locator('button:has-text("Add Employee Health Insurance")').click();
  await page.locator('text=Health Insurance Name undefined >> input[type="text"]').fill('Parents');
  await page.locator('text=Save').nth(3).click();

  await page.locator('button:has-text("Add Employee Health Insurance")').click();
  await page.locator('text=Health Insurance Name undefined >> input[type="text"]').fill('Spouse');
  await page.locator('text=Save').nth(4).click();

  await page.locator('button:has-text("Add Employee Health Insurance")').click();
  await page.locator('text=Health Insurance Name undefined >> input[type="text"]').fill('Retirement');
  await page.locator('button:has-text("Save")').nth(3).click();

  await page.locator('button:has-text("Add Employee Health Insurance")').click();
  await page.locator('text=Health Insurance Name undefined >> input[type="text"]').fill('Self');
  await page.locator('button:has-text("Save")').nth(4).click();

  await page.locator('button:has-text("Add Employee Health Insurance")').click();
  await page.locator('text=Health Insurance Name undefined >> input[type="text"]').fill('Distant Relative');
  await page.locator('text=New Employee Health Insurance Health Insurance Name Distant Relative Edit in ful >> button').nth(4).click();

  await page.locator('button:has-text("Add Employee Health Insurance")').click();
  await page.locator('text=Health Insurance Name undefined >> input[type="text"]').fill('Blood relative');
  await page.locator('text=New Employee Health Insurance Health Insurance Name Blood relative Edit in full  >> button').nth(4).click();
});
