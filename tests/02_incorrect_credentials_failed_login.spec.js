const { test, expect } = require("@playwright/test");

test("Using incorrect credentials, user cannot sign in", async ({ page }) => {
    await page.goto('/login');

    const email = page.locator("#email");
    const password = page.locator("#password");

    await expect(email).toBeVisible();
    await expect(password).toBeVisible();

    await email.fill('wrongcreds@gmail.com');
    await password.fill('wrongcreds');

    await page.locator("form").locator('button[type="submit"]').click();
    await expect(page).toHaveURL("/login");

    await expect(page.getByText("Invalid email or password.")).toBeVisible();
})