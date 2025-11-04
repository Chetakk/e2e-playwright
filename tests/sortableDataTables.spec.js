// tests/sortableDataTables.spec.js
const { test, expect } = require("@playwright/test");

test.describe("Sortable Data Tables", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/tables");
  });

  test("should display table headers", async ({ page }) => {
    const headers = page.locator("#table1 thead th");
    await expect(headers).toHaveCount(6);
    await expect(headers.first()).toContainText("Last Name");
  });

  test("should have table rows", async ({ page }) => {
    const rows = page.locator("#table1 tbody tr");
    await expect(rows).toHaveCount(4);
  });

  test("should sort by Last Name column", async ({ page }) => {
    const lastNameHeader = page.locator("#table1 thead th").filter({ hasText: "Last Name" });
    await lastNameHeader.click();
    
    // Verify table is still visible after sort
    const rows = page.locator("#table1 tbody tr");
    await expect(rows.first()).toBeVisible();
  });

  test("should sort by First Name column", async ({ page }) => {
    const firstNameHeader = page.locator("#table1 thead th").filter({ hasText: "First Name" });
    await firstNameHeader.click();
    
    const rows = page.locator("#table1 tbody tr");
    await expect(rows.first()).toBeVisible();
  });

  test("should access table cell data", async ({ page }) => {
    const firstRow = page.locator("#table1 tbody tr").first();
    const cells = firstRow.locator("td");
    await expect(cells).toHaveCount(6);
    
    const lastName = await cells.first().textContent();
    expect(lastName).toBeTruthy();
  });

  test("should verify second table exists", async ({ page }) => {
    const table2 = page.locator("#table2");
    await expect(table2).toBeVisible();
    
    const rows = table2.locator("tbody tr");
    await expect(rows).toHaveCount(4);
  });
});

