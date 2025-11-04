// tests/fileUpload.spec.js
const { test, expect } = require("@playwright/test");
const path = require("path");
const fs = require("fs");

test.describe("File Upload", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/upload");
  });

  test("should upload a file", async ({ page }) => {
    // Create a temporary test file
    const testFilePath = path.join(__dirname, "test-upload.txt");
    fs.writeFileSync(testFilePath, "This is a test file for upload");

    try {
      const fileInput = page.locator("#file-upload");
      await fileInput.setInputFiles(testFilePath);

      await page.click("#file-submit");

      const uploadedFiles = page.locator("#uploaded-files");
      await expect(uploadedFiles).toBeVisible();
      await expect(uploadedFiles).toContainText("test-upload.txt");
    } finally {
      // Clean up test file
      if (fs.existsSync(testFilePath)) {
        fs.unlinkSync(testFilePath);
      }
    }
  });

  test("should show file name before upload", async ({ page }) => {
    const testFilePath = path.join(__dirname, "test-upload.txt");
    fs.writeFileSync(testFilePath, "Test content");

    try {
      const fileInput = page.locator("#file-upload");
      await fileInput.setInputFiles(testFilePath);

      // File name should be visible before clicking submit
      const fileName = await fileInput.inputValue();
      expect(fileName).toContain("test-upload.txt");
    } finally {
      if (fs.existsSync(testFilePath)) {
        fs.unlinkSync(testFilePath);
      }
    }
  });
});

