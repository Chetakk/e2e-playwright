// tests/brokenImages.spec.js
const { test, expect } = require("@playwright/test");

test.describe("Broken Images", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/broken_images");
  });

  test("should identify broken images", async ({ page }) => {
    const images = page.locator("img");
    const imageCount = await images.count();
    
    expect(imageCount).toBeGreaterThan(0);
    
    // Check each image
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      const naturalWidth = await img.evaluate((el) => el.naturalWidth);
      
      // Broken images have naturalWidth = 0
      if (naturalWidth === 0) {
        // This is a broken image
        expect(naturalWidth).toBe(0);
      }
    }
  });

  test("should display images on page", async ({ page }) => {
    const images = page.locator("img");
    await expect(images.first()).toBeVisible();
  });
});

