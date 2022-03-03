import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(1200000);
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
  await page.locator('text=Designation').click();
  await expect(page).toHaveURL('http://172.27.22.216:8001/app/designation');

  await page.locator('button:has-text("Add Designation")').click();
  await page.locator('text=Designation undefined >> input[type="text"]').fill('Researcher');
  await page.locator('button:has-text("Save")').click();

  await page.locator('button:has-text("Add Designation")').click();
  await page.locator('text=Designation undefined >> input[type="text"]').fill('Designer');
  await page.locator('text=Save').nth(3).click();

  await page.locator('button:has-text("Add Designation")').click();
  await page.locator('text=Designation undefined >> input[type="text"]').fill('Software Developer');
  await page.locator('text=Save').nth(4).click();

  await page.locator('button:has-text("Add Designation")').click();
  await page.locator('text=Designation undefined >> input[type="text"]').fill('Head of Marketing and Sales');
  await page.locator('button:has-text("Save")').nth(3).click();

  await page.locator('button:has-text("Add Designation")').click();
  await page.locator('text=Designation undefined >> input[type="text"]').fill('Project Manager');
  await page.locator('button:has-text("Save")').nth(4).click();

  await page.locator('button:has-text("Add Designation")').click();
  await page.locator('text=Designation undefined >> input[type="text"]').fill('HR Manager');
  await page.locator('text=New Designation Designation HR Manager Edit in full page Save >> button').nth(4).click();

  await page.locator('button:has-text("Add Designation")').click();
  await page.locator('text=Designation undefined >> input[type="text"]').fill('Business Developer Manager');
  await page.locator('text=New Designation Designation Business Developer Manager Edit in full page Save >> button').nth(4).click();
  
  await page.locator('button:has-text("Add Designation")').click();
  await page.locator('text=Designation undefined >> input[type="text"]').fill('Administrative Officer');
  await page.locator('text=New Designation Designation Administrative Officer Edit in full page Save >> button').nth(4).click();
  
  await page.locator('button:has-text("Add Designation")').click();
  await page.locator('text=Designation undefined >> input[type="text"]').fill('Associate');
  await page.locator('text=New Designation Designation Associate Edit in full page Save >> button').nth(4).click();
  
  await page.locator('button:has-text("Add Designation")').click();
  await page.locator('text=Designation undefined >> input[type="text"]').fill('Secretary');
  await page.locator('text=New Designation Designation Secretary Edit in full page Save >> button').nth(4).click();
  
  await page.locator('button:has-text("Add Designation")').click();
  await page.locator('text=Designation undefined >> input[type="text"]').fill('Accountant');
  await page.locator('text=New Designation Designation Accountant Edit in full page Save >> button').nth(4).click();
  
  await page.locator('button:has-text("Add Designation")').click();
  await page.locator('text=Designation undefined >> input[type="text"]').fill('Engineer');
  await page.locator('text=New Designation Designation Engineer Edit in full page Save >> button').nth(4).click();
  
  await page.locator('button:has-text("Add Designation")').click();
  await page.locator('text=Designation undefined >> input[type="text"]').fill('Analyst');
  await page.locator('text=New Designation Designation Analyst Edit in full page Save >> button').nth(4).click();
  
  await page.locator('button:has-text("Add Designation")').click();
  await page.locator('text=Designation undefined >> input[type="text"]').fill('Manager');
  await page.locator('text=New Designation Designation Manager Edit in full page Save >> button').nth(4).click();
  
  await page.locator('button:has-text("Add Designation")').click();
  await page.locator('text=Designation undefined >> input[type="text"]').fill('CEO');
  await page.locator('text=New Designation Designation CEO Edit in full page Save >> button').nth(4).click();
  
  await page.locator('button:has-text("Add Designation")').click();
  await page.locator('text=Designation undefined >> input[type="text"]').fill('Data Scientist');
  await page.locator('text=New Designation Designation Data Scientist Edit in full page Save >> button').nth(4).click();
  
  await page.locator('button:has-text("Add Designation")').click();
  await page.locator('text=Designation undefined >> input[type="text"]').fill('Data Analyst');
  await page.locator('text=New Designation Designation Data Analyst Edit in full page Save >> button').nth(4).click();
  
  await page.locator('button:has-text("Add Designation")').click();
  await page.locator('text=Designation undefined >> input[type="text"]').fill('Blockchain Developer');
  await page.locator('text=New Designation Designation Blockchain Developer Edit in full page Save >> button').nth(4).click();
});
