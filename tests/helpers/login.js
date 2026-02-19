const { expect } = require("@playwright/test")

const TEST_USER = {
    email: process.env.TEST_EMAIL,
    password: process.env.TEST_PASSWORD,
}

async function login(page, creds = TEST_USER) {

    const { email, password } = creds;

  await page.goto("/login");

  await page.locator("#email").fill(email);
  await page.locator("#password").fill(password);

  await page.locator('button[type="submit"]').click();

  await page.waitForTimeout(3000);

    await expect(page.getByText("Latest News")).toBeVisible();

}

module.exports = { login };