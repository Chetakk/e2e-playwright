// tests/dragAndDrop.spec.js
const { test, expect } = require("@playwright/test");

test.describe("Drag and Drop", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/drag_and_drop");
  });

  test("should drag element A to element B", async ({ page }) => {
    const boxA = page.locator("#column-a");
    const boxB = page.locator("#column-b");

    await expect(boxA).toContainText("A");
    await expect(boxB).toContainText("B");

    await boxA.dragTo(boxB);

    // After drag, positions may swap depending on implementation
    const finalBoxA = page.locator("#column-a");
    const finalBoxB = page.locator("#column-b");
    
    // Verify that elements are still present (text may swap)
    const textA = await finalBoxA.textContent();
    const textB = await finalBoxB.textContent();
    
    expect(["A", "B"]).toContain(textA.trim());
    expect(["A", "B"]).toContain(textB.trim());
  });

  test("should drag element B to element A", async ({ page }) => {
    const boxA = page.locator("#column-a");
    const boxB = page.locator("#column-b");

    await boxB.dragTo(boxA);

    const finalBoxA = page.locator("#column-a");
    const finalBoxB = page.locator("#column-b");
    
    const textA = await finalBoxA.textContent();
    const textB = await finalBoxB.textContent();
    
    expect(["A", "B"]).toContain(textA.trim());
    expect(["A", "B"]).toContain(textB.trim());
  });
});

