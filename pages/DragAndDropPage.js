// pages/DragAndDropPage.js
class DragAndDropPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.boxA = page.locator("#column-a");
    this.boxB = page.locator("#column-b");
  }

  async goto() {
    await this.page.goto("/drag_and_drop");
  }

  async dragAToB() {
    await this.boxA.dragTo(this.boxB);
  }

  async dragBToA() {
    await this.boxB.dragTo(this.boxA);
  }

  async getBoxAText() {
    return await this.boxA.textContent();
  }

  async getBoxBText() {
    return await this.boxB.textContent();
  }
}

module.exports = DragAndDropPage;

