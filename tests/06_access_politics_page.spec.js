const { test, expect } = require('@playwright/test');
const { login } = require('./helpers/login');

test('After logging into page, navigate to the Politics page', async ({ page }) => {

    await login(page);

})