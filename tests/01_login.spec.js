const { test, expect } = require("@playwright/test");
const { login } = require("./helpers/login");

test("User can log in with correct credentials", async ({ page }) => {
    
    await login(page);
})