const { test, expect } = require('@playwright/test');
const { login } = require('./helpers/login');

test('After logging in, access the food posts page', async ({ page }) => {
    await login(page);

    await page.getByRole('link', { name: 'Food' }).click();

    await page.waitForTimeout(3000);

    await expect (page.getByRole('heading', { name: 'Food Posts' })).toBeVisible();
})