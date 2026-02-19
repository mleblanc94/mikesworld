// playwright.config.js
require('dotenv').config();
const { defineConfig } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./tests",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },
  webServer: {
    command: "npm run dev",
    url: "http://localhost:3000",
    reuseExistingServer: true,
    timeout: 120 * 1000,
  },
});