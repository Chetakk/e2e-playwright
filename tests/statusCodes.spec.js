// tests/statusCodes.spec.js
const { test, expect } = require("@playwright/test");

test.describe("Status Codes", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/status_codes");
  });

  test("should navigate to 200 status code", async ({ page }) => {
    await page.click('a[href="status_codes/200"]');
    await expect(page.locator("p")).toContainText("200");
  });

  test("should navigate to 301 status code", async ({ page }) => {
    await page.click('a[href="status_codes/301"]');
    await expect(page.locator("p")).toContainText("301");
  });

  test("should navigate to 404 status code", async ({ page }) => {
    await page.click('a[href="status_codes/404"]');
    await expect(page.locator("p")).toContainText("404");
  });

  test("should navigate to 500 status code", async ({ page }) => {
    await page.click('a[href="status_codes/500"]');
    await expect(page.locator("p")).toContainText("500");
  });

  test("should verify all status code links exist", async ({ page }) => {
    const links = page.locator('a[href^="status_codes/"]');
    await expect(links).toHaveCount(4);
  });
});

