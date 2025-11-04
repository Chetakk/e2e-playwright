// pages/SortableDataTablesPage.js
class SortableDataTablesPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.table1 = page.locator("#table1");
    this.table2 = page.locator("#table2");
  }

  async goto() {
    await this.page.goto("/tables");
  }

  getTable1Headers() {
    return this.table1.locator("thead th");
  }

  getTable1Rows() {
    return this.table1.locator("tbody tr");
  }

  getTable2Rows() {
    return this.table2.locator("tbody tr");
  }

  async getHeaderByText(text) {
    return this.table1.locator("thead th").filter({ hasText: text });
  }

  async sortByColumn(columnName) {
    const header = await this.getHeaderByText(columnName);
    await header.click();
  }

  async getRowData(rowIndex) {
    const row = this.getTable1Rows().nth(rowIndex);
    const cells = row.locator("td");
    const cellCount = await cells.count();
    const data = [];
    
    for (let i = 0; i < cellCount; i++) {
      data.push(await cells.nth(i).textContent());
    }
    
    return data;
  }

  async getCellData(rowIndex, columnIndex) {
    const row = this.getTable1Rows().nth(rowIndex);
    const cell = row.locator("td").nth(columnIndex);
    return await cell.textContent();
  }
}

module.exports = SortableDataTablesPage;

