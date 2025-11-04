// pages/LoginPage.js
class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.username = page.locator("#username");
    this.password = page.locator("#password");
    this.submit = page.locator('button[type="submit"]');
    this.flash = page.locator("#flash");
  }

  async goto() {
    await this.page.goto("/");
    await this.page.click('a[href="/login"]');
  }

  async login(user, pass) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.submit.click();
  }
}

module.exports = LoginPage;
