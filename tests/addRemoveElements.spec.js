// tests/addRemoveElements.spec.js
const { test, expect } = require("@playwright/test");

test.describe("Add/Remove Elements", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/add_remove_elements/");
  });

  test("should add an element", async ({ page }) => {
    await page.click('button:has-text("Add Element")');
    const deleteButton = page.locator('button:has-text("Delete")');
    await expect(deleteButton).toBeVisible();
    await expect(deleteButton).toHaveCount(1);
  });

  test("should add multiple elements", async ({ page }) => {
    await page.click('button:has-text("Add Element")');
    await page.click('button:has-text("Add Element")');
    await page.click('button:has-text("Add Element")');
    const deleteButtons = page.locator('button:has-text("Delete")');
    await expect(deleteButtons).toHaveCount(3);
  });

  test("should remove an element", async ({ page }) => {
    await page.click('button:has-text("Add Element")');
    await page.click('button:has-text("Delete")');
    const deleteButtons = page.locator('button:has-text("Delete")');
    await expect(deleteButtons).toHaveCount(0);
  });

  test("should remove multiple elements", async ({ page }) => {
    await page.click('button:has-text("Add Element")');
    await page.click('button:has-text("Add Element")');
    await page.click('button:has-text("Add Element")');
    
    const deleteButtons = page.locator('button:has-text("Delete")');
    await deleteButtons.first().click();
    await expect(deleteButtons).toHaveCount(2);
    
    await deleteButtons.first().click();
    await expect(deleteButtons).toHaveCount(1);
    
    await deleteButtons.first().click();
    await expect(deleteButtons).toHaveCount(0);
  });
});

