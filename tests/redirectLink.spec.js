// tests/redirectLink.spec.js
const { test, expect } = require("@playwright/test");

test.describe("Redirect Link", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/redirector");
  });

  test("should redirect to status codes page", async ({ page }) => {
    await page.click('a#redirect');
    
    await page.waitForURL(/\/status_codes/);
    await expect(page).toHaveURL(/\/status_codes/);
  });

  test("should verify redirect link exists", async ({ page }) => {
    const redirectLink = page.locator('a#redirect');
    await expect(redirectLink).toBeVisible();
    await expect(redirectLink).toContainText("here");
  });
});

