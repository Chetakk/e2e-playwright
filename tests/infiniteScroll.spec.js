// tests/infiniteScroll.spec.js
const { test, expect } = require("@playwright/test");

test.describe("Infinite Scroll", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/infinite_scroll");
  });

  test("should load more content on scroll", async ({ page }) => {
    const initialDivs = await page.locator(".jscroll-added").count();
    
    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1000); // Wait for content to load
    
    const afterScrollDivs = await page.locator(".jscroll-added").count();
    expect(afterScrollDivs).toBeGreaterThan(initialDivs);
  });

  test("should scroll multiple times", async ({ page }) => {
    for (let i = 0; i < 3; i++) {
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await page.waitForTimeout(1000);
    }
    
    const divs = await page.locator(".jscroll-added").count();
    expect(divs).toBeGreaterThan(0);
  });
});

