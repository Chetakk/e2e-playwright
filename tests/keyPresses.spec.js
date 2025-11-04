// tests/keyPresses.spec.js
const { test, expect } = require("@playwright/test");

test.describe("Key Presses", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/key_presses");
  });

  test("should detect Enter key press", async ({ page }) => {
    const input = page.locator("#target");
    await input.click();
    await page.keyboard.press("Enter");
    
    await expect(page.locator("#result")).toContainText("You entered: ENTER");
  });

  test("should detect Space key press", async ({ page }) => {
    const input = page.locator("#target");
    await input.click();
    await page.keyboard.press("Space");
    
    await expect(page.locator("#result")).toContainText("You entered: SPACE");
  });

  test("should detect Arrow keys", async ({ page }) => {
    const input = page.locator("#target");
    await input.click();
    
    await page.keyboard.press("ArrowUp");
    await expect(page.locator("#result")).toContainText("You entered: UP");
    
    await page.keyboard.press("ArrowDown");
    await expect(page.locator("#result")).toContainText("You entered: DOWN");
  });

  test("should detect letter key press", async ({ page }) => {
    const input = page.locator("#target");
    await input.click();
    await page.keyboard.press("A");
    
    await expect(page.locator("#result")).toContainText("You entered: A");
  });

  test("should detect number key press", async ({ page }) => {
    const input = page.locator("#target");
    await input.click();
    await page.keyboard.press("1");
    
    await expect(page.locator("#result")).toContainText("You entered: 1");
  });
});

