// pages/FileUploadPage.js
const path = require("path");
const fs = require("fs");

class FileUploadPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.fileInput = page.locator("#file-upload");
    this.submitButton = page.locator("#file-submit");
    this.uploadedFiles = page.locator("#uploaded-files");
  }

  async goto() {
    await this.page.goto("/upload");
  }

  async uploadFile(filePath) {
    await this.fileInput.setInputFiles(filePath);
    await this.submitButton.click();
  }

  async getUploadedFileName() {
    return await this.uploadedFiles.textContent();
  }

  async getSelectedFileName() {
    return await this.fileInput.inputValue();
  }

  createTestFile(fileName, content = "Test file content") {
    const filePath = path.join(__dirname, "..", "tests", fileName);
    fs.writeFileSync(filePath, content);
    return filePath;
  }

  deleteTestFile(filePath) {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }
}

module.exports = FileUploadPage;

