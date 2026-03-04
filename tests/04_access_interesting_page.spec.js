const  { test, expect } = require('@playwright/test');
const { login } = require('./helpers/login');

test("After logging in, access the Interesting page on the website", async ({ page }) => {
    await login(page);

    await page.getByRole('link', { name: 'Interesting' }).click();

    await page.waitForTimeout(3000);

    await expect (page.getByRole('heading', { name: 'Interesting Posts' })).toBeVisible();
})