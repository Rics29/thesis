import { test, expect, devices } from '@playwright/test';
test.use({
  ...devices['Pixel 2'],
});
test('test', async ({ page }) => {
    test.setTimeout(120000000);
  await page.goto('http://172.27.22.216:8001/login');
  await page.goto('http://172.27.22.216:8001/login#login');
  await page.locator('text=Email Password Show Forgot Password? >> [placeholder="jane\\@example\\.com"]').click();
  await page.locator('text=Email Password Show Forgot Password? >> [placeholder="jane\\@example\\.com"]').fill('Administrator')
  await page.locator('text=Email Password Show Forgot Password? >> [placeholder="jane\\@example\\.com"]').press('Tab');
  await page.locator('[placeholder="•••••"]').fill('admin');

  await Promise.all([
    page.waitForNavigation(/*{ url: 'http://172.27.22.216:8001/app' }*/),
    page.locator('[placeholder="•••••"]').press('Enter')
  ]);
  await page.locator('text=Home Create Workspace Edit Actions >> svg').nth(1).click();
  await page.locator('text=HR').click();
  await expect(page).toHaveURL('http://172.27.22.216:8001/app/hr');
  await page.locator('text=Employee Health Insurance').click();
  await expect(page).toHaveURL('http://172.27.22.216:8001/app/employee-health-insurance');

  /*...Entering data for Employee Health Insurance...*/
  await page.locator('button:has-text("Add Employee Health Insurance")').click();
  await page.locator('text=Health Insurance Name undefined >> input[type="text"]').fill('Parental');
  await page.locator('button:has-text("Save")').click();

  await page.locator('button:has-text("Add Employee Health Insurance")').click();
  await page.locator('text=Health Insurance Name undefined >> input[type="text"]').fill('Family');
  await page.locator('text=Save').nth(3).click();

  await page.locator('button:has-text("Add Employee Health Insurance")').click();
  await page.locator('text=Health Insurance Name undefined >> input[type="text"]').fill('Personal');
  await page.locator('text=Save').nth(4).click();
  
  await page.locator('button:has-text("Add Employee Health Insurance")').click();
  await page.locator('text=Health Insurance Name undefined >> input[type="text"]').fill('Managers Health');
  await page.locator('button:has-text("Save")').nth(3).click();

  await page.locator('button:has-text("Add Employee Health Insurance")').click();
  await page.locator('text=Health Insurance Name undefined >> input[type="text"]').fill('Total');
  await page.locator('button:has-text("Save")').nth(4).click();

  await page.locator('button:has-text("Add Employee Health Insurance")').click();
  await page.locator('text=Health Insurance Name undefined >> input[type="text"]').fill('Emergency');
  await page.locator('text=New Employee Health Insurance Health Insurance Name Emergency Edit in full page  >> button').nth(4).click();
  /*...After 5 data the format for saving is the same as it is for the 6th one...*/
});
