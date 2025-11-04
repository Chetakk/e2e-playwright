// tests/inputs.spec.js
const { test, expect } = require("@playwright/test");

test.describe("Inputs", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/inputs");
  });

  test("should accept number input", async ({ page }) => {
    const input = page.locator('input[type="number"]');
    await input.fill("123");
    await expect(input).toHaveValue("123");
  });

  test("should accept negative numbers", async ({ page }) => {
    const input = page.locator('input[type="number"]');
    await input.fill("-456");
    await expect(input).toHaveValue("-456");
  });

  test("should accept decimal numbers", async ({ page }) => {
    const input = page.locator('input[type="number"]');
    await input.fill("123.45");
    await expect(input).toHaveValue("123.45");
  });

  test("should clear input", async ({ page }) => {
    const input = page.locator('input[type="number"]');
    await input.fill("999");
    await input.clear();
    await expect(input).toHaveValue("");
  });

  test("should use keyboard input", async ({ page }) => {
    const input = page.locator('input[type="number"]');
    await input.click();
    await page.keyboard.type("789");
    await expect(input).toHaveValue("789");
  });
});

