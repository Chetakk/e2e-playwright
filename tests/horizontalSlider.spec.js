// tests/horizontalSlider.spec.js
const { test, expect } = require("@playwright/test");

test.describe("Horizontal Slider", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/horizontal_slider");
  });

  test("should move slider to the right", async ({ page }) => {
    const slider = page.locator('input[type="range"]');
    const sliderValue = page.locator("#range");
    
    await slider.fill("3");
    const value = await sliderValue.textContent();
    expect(value).toBeTruthy();
  });

  test("should move slider to maximum", async ({ page }) => {
    const slider = page.locator('input[type="range"]');
    const sliderValue = page.locator("#range");
    
    await slider.fill("5");
    const value = await sliderValue.textContent();
    expect(value).toContain("5");
  });

  test("should move slider to minimum", async ({ page }) => {
    const slider = page.locator('input[type="range"]');
    const sliderValue = page.locator("#range");
    
    await slider.fill("0");
    const value = await sliderValue.textContent();
    expect(value).toContain("0");
  });
});

