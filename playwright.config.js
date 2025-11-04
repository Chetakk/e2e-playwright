// playwright.config.js
const { devices } = require('@playwright/test');

module.exports = {
  testDir: 'tests',
  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  retries: 1,
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
  use: {
    actionTimeout: 0,
    trace: 'on-first-retry',         // collect trace on first retry
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://the-internet.herokuapp.com',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox',  use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit',   use: { ...devices['Desktop Safari'] } },
  ],
};
