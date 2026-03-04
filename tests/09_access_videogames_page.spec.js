const { test, expect } = require('@playwright/test');
const { login } = require('./helpers/login');

test('After logging in, user is able to access Video Games page', async ({ page }) => {
    
    await login(page);

    await page.getByRole('link', { name: 'Video Games' }).click();

    await page.waitForTimeout(3000);

    await expect (page.getByRole('heading', { name: 'Video Games Post' })).toBeVisible();

})