// pages/JavaScriptAlertsPage.js
class JavaScriptAlertsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.alertButton = page.locator('button:has-text("Click for JS Alert")');
    this.confirmButton = page.locator('button:has-text("Click for JS Confirm")');
    this.promptButton = page.locator('button:has-text("Click for JS Prompt")');
    this.result = page.locator("#result");
  }

  async goto() {
    await this.page.goto("/javascript_alerts");
  }

  async clickAlert() {
    this.page.on("dialog", async (dialog) => {
      await dialog.accept();
    });
    await this.alertButton.click();
  }

  async clickConfirm(accept = true) {
    this.page.on("dialog", async (dialog) => {
      if (accept) {
        await dialog.accept();
      } else {
        await dialog.dismiss();
      }
    });
    await this.confirmButton.click();
  }

  async clickPrompt(text = null, accept = true) {
    this.page.on("dialog", async (dialog) => {
      if (accept) {
        await dialog.accept(text || "");
      } else {
        await dialog.dismiss();
      }
    });
    await this.promptButton.click();
  }

  async getResultText() {
    return await this.result.textContent();
  }
}

module.exports = JavaScriptAlertsPage;

