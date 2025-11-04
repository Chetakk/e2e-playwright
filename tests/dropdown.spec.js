// tests/dropdown.spec.js
const { test, expect } = require("@playwright/test");

test.describe("Dropdown", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/dropdown");
  });

  test("should have dropdown with options", async ({ page }) => {
    const dropdown = page.locator("#dropdown");
    await expect(dropdown).toBeVisible();
    
    const options = dropdown.locator("option");
    await expect(options).toHaveCount(3); // Please select an option + 2 options
  });

  test("should select Option 1", async ({ page }) => {
    const dropdown = page.locator("#dropdown");
    await dropdown.selectOption("1");
    await expect(dropdown).toHaveValue("1");
    
    const selectedOption = dropdown.locator("option:checked");
    await expect(selectedOption).toContainText("Option 1");
  });

  test("should select Option 2", async ({ page }) => {
    const dropdown = page.locator("#dropdown");
    await dropdown.selectOption("2");
    await expect(dropdown).toHaveValue("2");
    
    const selectedOption = dropdown.locator("option:checked");
    await expect(selectedOption).toContainText("Option 2");
  });

  test("should change selection from Option 1 to Option 2", async ({ page }) => {
    const dropdown = page.locator("#dropdown");
    
    await dropdown.selectOption("1");
    await expect(dropdown).toHaveValue("1");
    
    await dropdown.selectOption("2");
    await expect(dropdown).toHaveValue("2");
  });
});

