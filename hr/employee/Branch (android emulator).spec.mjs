import { test, expect, devices } from '@playwright/test';
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
  await page.locator('text=Home Create Workspace Edit Actions >> use').nth(1).click();
  await page.locator('div:nth-child(12) .desk-sidebar-item .item-anchor .sidebar-item-icon .icon use').click();
  await expect(page).toHaveURL('http://172.27.22.216:8001/app/hr');
  await page.locator('text=Branch').click();
  await expect(page).toHaveURL('http://172.27.22.216:8001/app/branch');
  await page.locator('button:has-text("Add Branch")').click()
  await page.locator('text=Branch undefined >> input[type="text"]').fill('Noida');
  await page.locator('button:has-text("Save")').click();
  await page.locator('button:has-text("Add Branch")').click();
  await page.locator('text=Branch undefined >> input[type="text"]').fill('Greater Noida');
  await page.locator('text=Save').nth(3).click();
  await page.locator('button:has-text("Add Branch")').click();
  await page.locator('text=Branch undefined >> input[type="text"]').fill('Delhi');
  await page.locator('text=Save').nth(4).click();
  await page.locator('button:has-text("Add Branch")').click();
  await page.locator('text=Branch undefined >> input[type="text"]').fill('Gurgaon');
  await page.locator('button:has-text("Save")').nth(3).click();
  await page.locator('button:has-text("Add Branch")').click();
  await page.locator('text=Branch undefined >> input[type="text"]').fill('MP');
  await page.locator('button:has-text("Save")').nth(4).click();
  await page.locator('button:has-text("Add Branch")').click();
  await page.locator('text=Branch undefined >> input[type="text"]').fill('Dankaur');
  await page.locator('text=New Branch Branch Dankaur Edit in full page Save >> button').nth(4).click();
  await page.locator('button:has-text("Add Branch")').click();
  await page.locator('text=Branch undefined >> input[type="text"]').fill('Dehradun');
  await page.locator('text=New Branch Branch Dehradun Edit in full page Save >> button').nth(4).click();
  await page.locator('button:has-text("Add Branch")').click();
  await page.locator('text=Branch undefined >> input[type="text"]').fill('Kolkata');
  await page.locator('text=New Branch Branch Kolkata Edit in full page Save >> button').nth(4).click();
});
