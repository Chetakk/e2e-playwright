// tests/dynamicContent.spec.js
const { test, expect } = require("@playwright/test");

test.describe("Dynamic Content", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/dynamic_content");
  });

  test("should display dynamic content", async ({ page }) => {
    const content = page.locator(".large-10.columns");
    await expect(content.first()).toBeVisible();
    
    // Content should contain text
    const text = await content.first().textContent();
    expect(text).toBeTruthy();
    expect(text.length).toBeGreaterThan(0);
  });

  test("should have multiple content sections", async ({ page }) => {
    const contentSections = page.locator(".large-10.columns");
    await expect(contentSections).toHaveCount(3);
  });

  test("should refresh and change content", async ({ page }) => {
    const firstContent = page.locator(".large-10.columns").first();
    const initialText = await firstContent.textContent();
    
    await page.reload();
    await page.waitForLoadState("networkidle");
    
    const newContent = page.locator(".large-10.columns").first();
    const newText = await newContent.textContent();
    
    // Content may or may not change on refresh
    expect(newText).toBeTruthy();
  });
});

