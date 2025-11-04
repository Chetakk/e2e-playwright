// tests/fileDownload.spec.js
const { test, expect } = require("@playwright/test");
const path = require("path");
const fs = require("fs");

test.describe("File Download", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/download");
  });

  test("should download a file", async ({ page, context }) => {
    const downloadPromise = page.waitForEvent("download");
    await page.click('a:has-text("some-file.txt")');
    const download = await downloadPromise;

    // Get the suggested filename
    const suggestedFilename = download.suggestedFilename();
    expect(suggestedFilename).toBeTruthy();

    // Save the downloaded file
    const downloadPath = path.join(__dirname, suggestedFilename);
    await download.saveAs(downloadPath);

    // Verify file was downloaded
    expect(fs.existsSync(downloadPath)).toBeTruthy();

    // Clean up
    if (fs.existsSync(downloadPath)) {
      fs.unlinkSync(downloadPath);
    }
  });

  test("should have multiple download links", async ({ page }) => {
    const downloadLinks = page.locator("a");
    const count = await downloadLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test("should verify download link exists", async ({ page }) => {
    const downloadLink = page.locator('a:has-text("some-file.txt")');
    await expect(downloadLink).toBeVisible();
    await expect(downloadLink).toHaveAttribute("href");
  });
});

