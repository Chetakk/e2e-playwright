// tests/contextMenu.spec.js
const { test, expect } = require("@playwright/test");

test.describe("Context Menu", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/context_menu");
  });

  test("should open context menu", async ({ page }) => {
    const contextMenuArea = page.locator("#hot-spot");
    await contextMenuArea.click({ button: "right" });
    
    // Wait for alert to appear
    page.on("dialog", async (dialog) => {
      expect(dialog.type()).toBe("alert");
      expect(dialog.message()).toBe("You selected a context menu");
      await dialog.accept();
    });
  });

  test("should handle JavaScript alert on right click", async ({ page }) => {
    const contextMenuArea = page.locator("#hot-spot");
    
    const dialogPromise = page.waitForEvent("dialog");
    await contextMenuArea.click({ button: "right" });
    const dialog = await dialogPromise;
    
    expect(dialog.type()).toBe("alert");
    expect(dialog.message()).toBe("You selected a context menu");
    await dialog.accept();
  });
});

