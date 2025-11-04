// pages/AddRemoveElementsPage.js
class AddRemoveElementsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.addElementButton = page.locator('button:has-text("Add Element")');
    this.deleteButtons = page.locator('button:has-text("Delete")');
  }

  async goto() {
    await this.page.goto("/add_remove_elements/");
  }

  async addElement() {
    await this.addElementButton.click();
  }

  async addElements(count) {
    for (let i = 0; i < count; i++) {
      await this.addElement();
    }
  }

  async deleteElement(index = 0) {
    await this.deleteButtons.nth(index).click();
  }

  async deleteAllElements() {
    const count = await this.deleteButtons.count();
    for (let i = 0; i < count; i++) {
      await this.deleteButtons.first().click();
    }
  }

  async getDeleteButtonCount() {
    return await this.deleteButtons.count();
  }
}

module.exports = AddRemoveElementsPage;

