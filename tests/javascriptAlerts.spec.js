// tests/javascriptAlerts.spec.js
const { test, expect } = require("@playwright/test");

test.describe("JavaScript Alerts", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/javascript_alerts");
  });

  test("should handle JS Alert", async ({ page }) => {
    page.on("dialog", async (dialog) => {
      expect(dialog.type()).toBe("alert");
      expect(dialog.message()).toBe("I am a JS Alert");
      await dialog.accept();
    });

    await page.click('button:has-text("Click for JS Alert")');
    await expect(page.locator("#result")).toContainText("You successfully clicked an alert");
  });

  test("should handle JS Confirm - Accept", async ({ page }) => {
    page.on("dialog", async (dialog) => {
      expect(dialog.type()).toBe("confirm");
      expect(dialog.message()).toBe("I am a JS Confirm");
      await dialog.accept();
    });

    await page.click('button:has-text("Click for JS Confirm")');
    await expect(page.locator("#result")).toContainText("You clicked: Ok");
  });

  test("should handle JS Confirm - Dismiss", async ({ page }) => {
    page.on("dialog", async (dialog) => {
      expect(dialog.type()).toBe("confirm");
      expect(dialog.message()).toBe("I am a JS Confirm");
      await dialog.dismiss();
    });

    await page.click('button:has-text("Click for JS Confirm")');
    await expect(page.locator("#result")).toContainText("You clicked: Cancel");
  });

  test("should handle JS Prompt - Accept with text", async ({ page }) => {
    const promptText = "Playwright Test";
    
    page.on("dialog", async (dialog) => {
      expect(dialog.type()).toBe("prompt");
      expect(dialog.message()).toBe("I am a JS prompt");
      await dialog.accept(promptText);
    });

    await page.click('button:has-text("Click for JS Prompt")');
    await expect(page.locator("#result")).toContainText(`You entered: ${promptText}`);
  });

  test("should handle JS Prompt - Dismiss", async ({ page }) => {
    page.on("dialog", async (dialog) => {
      expect(dialog.type()).toBe("prompt");
      expect(dialog.message()).toBe("I am a JS prompt");
      await dialog.dismiss();
    });

    await page.click('button:has-text("Click for JS Prompt")');
    await expect(page.locator("#result")).toContainText("You entered: null");
  });
});

