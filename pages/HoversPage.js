// pages/HoversPage.js
class HoversPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("/hovers");
  }

  getUserFigure(userIndex) {
    return this.page.locator(".figure").nth(userIndex);
  }

  getUserProfile(userIndex) {
    return this.page.locator(".figcaption").nth(userIndex);
  }

  async hoverOverUser(userIndex) {
    const userFigure = this.getUserFigure(userIndex);
    await userFigure.hover();
  }

  async getUserName(userIndex) {
    const profile = this.getUserProfile(userIndex);
    return await profile.textContent();
  }

  async getUserProfileLink(userIndex) {
    const profile = this.getUserProfile(userIndex);
    return profile.locator("a");
  }

  async clickUserProfile(userIndex) {
    const link = await this.getUserProfileLink(userIndex);
    await link.click();
  }
}

module.exports = HoversPage;

