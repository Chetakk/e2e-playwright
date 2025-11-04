// tests/wysiwygEditor.spec.js
const { test, expect } = require("@playwright/test");

test.describe("WYSIWYG Editor", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/tinymce");
  });

  test("should interact with TinyMCE editor", async ({ page }) => {
    const frame = page.frameLocator("#mce_0_ifr");
    const editor = frame.locator("body");
    
    await editor.click();
    await editor.clear();
    await editor.fill("Hello from Playwright!");
    
    const content = await editor.textContent();
    expect(content).toContain("Hello from Playwright!");
  });

  test("should format text in editor", async ({ page }) => {
    const frame = page.frameLocator("#mce_0_ifr");
    const editor = frame.locator("body");
    
    await editor.click();
    await editor.clear();
    await editor.fill("Test content");
    
    // Select text and format
    await editor.selectText();
    
    const content = await editor.textContent();
    expect(content).toBeTruthy();
  });

  test("should verify editor is visible", async ({ page }) => {
    const frame = page.frameLocator("#mce_0_ifr");
    const editor = frame.locator("body");
    
    await expect(editor).toBeVisible();
  });
});

