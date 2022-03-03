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
    await page.locator('text=Department').click();
    await expect(page).toHaveURL('http://172.27.22.216:8001/app/department/view/tree');
    await page.locator('button:has-text("New")').click();
    await page.locator('text=Department null >> input[type="text"]').click();
    await page.locator('text=Department null >> input[type="text"]').fill('Sales');
    await page.locator('text=Company Begin typing for results. >> input[role="combobox"]').click();
    await page.locator('text=Company Begin typing for results. >> input[role="combobox"]').fill('IIT');
    await page.locator('p:has-text("IIT K")').click();
    await page.locator('text=Create New').click();
    await page.locator('[id="page-Tree\\/Department"] button:has-text("New")').click();
    await page.locator('text=Department null >> input[type="text"]').click();
    await page.locator('text=Department null >> input[type="text"]').fill('Marketing');
    await page.locator('text=Company Begin typing for results. >> input[role="combobox"]').click();
    await page.locator('text=Company Begin typing for results. >> input[role="combobox"]').fill('i');
    await page.locator('#awesomplete_list_7 li:has-text("IIT K")').click();
    await page.locator('text=Create New').nth(1).click();
    await page.locator('[id="page-Tree\\/Department"] button:has-text("New")').click();
    await page.locator('text=Department null >> input[type="text"]').click();
    await page.locator('text=Department null >> input[type="text"]').fill('Quality testing');
    await page.locator('text=Company Begin typing for results. >> input[role="combobox"]').click();
    await page.locator('text=Company Begin typing for results. >> input[role="combobox"]').fill('i');
    await page.locator('#awesomplete_list_8 p:has-text("IIT K")').click();
    await page.locator('text=Create New').nth(2).click();
  });
