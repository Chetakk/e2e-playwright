// tests/checkboxes.spec.js
const { test, expect } = require("@playwright/test");

test.describe("Checkboxes", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/checkboxes");
  });

  test("should have two checkboxes", async ({ page }) => {
    const checkboxes = page.locator('input[type="checkbox"]');
    await expect(checkboxes).toHaveCount(2);
  });

  test("should check first checkbox", async ({ page }) => {
    const checkbox1 = page.locator('input[type="checkbox"]').first();
    await expect(checkbox1).not.toBeChecked();
    await checkbox1.check();
    await expect(checkbox1).toBeChecked();
  });

  test("should uncheck second checkbox", async ({ page }) => {
    const checkbox2 = page.locator('input[type="checkbox"]').last();
    await expect(checkbox2).toBeChecked();
    await checkbox2.uncheck();
    await expect(checkbox2).not.toBeChecked();
  });

  test("should toggle both checkboxes", async ({ page }) => {
    const checkboxes = page.locator('input[type="checkbox"]');
    const checkbox1 = checkboxes.first();
    const checkbox2 = checkboxes.last();

    // Toggle checkbox 1
    await checkbox1.check();
    await expect(checkbox1).toBeChecked();

    // Toggle checkbox 2
    await checkbox2.uncheck();
    await expect(checkbox2).not.toBeChecked();

    // Toggle again
    await checkbox1.uncheck();
    await checkbox2.check();
    await expect(checkbox1).not.toBeChecked();
    await expect(checkbox2).toBeChecked();
  });
});

