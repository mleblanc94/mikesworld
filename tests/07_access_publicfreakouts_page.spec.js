const { test, expect } = require('@playwright/test');
const { login } = require('./helpers/login');

test('After logging in, access the public freakouts page', async ({ page }) => {

    await login(page);

    await page.getByRole('link', { name: 'Public Freakouts' }).click();

    await page.waitForTimeout(3000);

    await expect(page.getByRole('heading', { name: 'Public Freakouts Posts' })).toBeVisible();

})