// tests/dynamicLoading.spec.js
const { test, expect } = require("@playwright/test");

test.describe("Dynamic Loading", () => {
  test("should load hidden element", async ({ page }) => {
    await page.goto("/dynamic_loading/1");
    
    await page.click("button");
    
    const loadingIndicator = page.locator("#loading");
    await expect(loadingIndicator).toBeVisible();
    
    const finishText = page.locator("#finish");
    await expect(finishText).toBeVisible({ timeout: 10000 });
    await expect(finishText).toContainText("Hello World!");
  });

  test("should load element that renders after trigger", async ({ page }) => {
    await page.goto("/dynamic_loading/2");
    
    await page.click("button");
    
    const finishText = page.locator("#finish");
    await expect(finishText).toBeVisible({ timeout: 10000 });
    await expect(finishText).toContainText("Hello World!");
  });
});

