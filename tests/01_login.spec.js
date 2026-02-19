const { test, expect } = require("@playwright/test");

test("User can log in with correct credentials", async ({ page }) => {
    await page.goto("/login");

    const email = page.locator("#email");
    const password = page.locator("#password");

    await expect(email).toBeVisible();
    await expect(password).toBeVisible();

    await email.fill("test@gmail.com");
    await password.fill("Garfield20$");

    await page.locator("form").locator('button[type="submit"]').click();

    await expect(page).toHaveURL("/");
    await expect(
        page.getByRole("heading", { name: "Mike's World!" })
    ).toBeVisible();
})