const { expect, test } = require('@playwright/test');
const { login } = require('./helpers/login');

test('After logging in, users can access the Sports posts page', async ({ page }) => {

    await login(page);

    await page.getByRole('link', { name: 'Sports' }).click();

    await page.waitForTimeout(3000);

    await expect (page.getByRole('heading', { name: 'Sports Posts' })).toBeVisible();

});