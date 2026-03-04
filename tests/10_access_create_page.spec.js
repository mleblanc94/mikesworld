const { test, expect } = require('@playwright/test');
const { login } = require('./helpers/login');

test('After logging in, see that the user can access the create post page, which will eventually be turned private', async ({ page }) => {

    await login(page);

    await page.getByRole('link', { name: 'Create' }).click();

    await page.waitForTimeout(3000);

    await expect (page.getByRole('heading', { name: 'Create a Post!' })).toBeVisible();
});