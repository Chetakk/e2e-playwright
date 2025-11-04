// tests/floatingMenu.spec.js
const { test, expect } = require("@playwright/test");

test.describe("Floating Menu", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/floating_menu");
  });

  test("should display floating menu", async ({ page }) => {
    const menu = page.locator("#menu");
    await expect(menu).toBeVisible();
  });

  test("should keep menu visible after scroll", async ({ page }) => {
    const menu = page.locator("#menu");
    await expect(menu).toBeVisible();
    
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(500);
    
    await expect(menu).toBeVisible();
  });

  test("should navigate to menu items", async ({ page }) => {
    const homeLink = page.locator('a[href="#home"]');
    await homeLink.click();
    
    // Menu should still be visible
    const menu = page.locator("#menu");
    await expect(menu).toBeVisible();
  });
});

