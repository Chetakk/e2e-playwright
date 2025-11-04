// tests/multipleWindows.spec.js
const { test, expect } = require("@playwright/test");

test.describe("Multiple Windows", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/windows");
  });

  test("should open new window", async ({ context, page }) => {
    const pagePromise = context.waitForEvent("page");
    await page.click('a:has-text("Click Here")');
    const newPage = await pagePromise;

    await newPage.waitForLoadState();
    await expect(newPage.locator("h3")).toContainText("New Window");
  });

  test("should navigate to new window and verify content", async ({ context, page }) => {
    const pagePromise = context.waitForEvent("page");
    await page.click('a:has-text("Click Here")');
    const newPage = await pagePromise;

    await newPage.waitForLoadState();
    const heading = newPage.locator("h3");
    await expect(heading).toBeVisible();
    await expect(heading).toContainText("New Window");
    
    await newPage.close();
  });
});

