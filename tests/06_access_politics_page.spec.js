const { test, expect } = require('@playwright/test');
const { login } = require('./helpers/login');

test('After logging into page, navigate to the Politics page', async ({ page }) => {

    await login(page);

    await page.getByRole('link', { name: 'Politics' }).click();

    await page.waitForTimeout(3000);

    await expect(page.getByRole('heading', { name: 'Politics Posts' })).toBeVisible();

});