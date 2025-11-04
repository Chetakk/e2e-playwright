// tests/frames.spec.js
const { test, expect } = require("@playwright/test");

test.describe("Frames", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/frames");
  });

  test("should access iframe content", async ({ page }) => {
    await page.click('a[href="/iframe"]');
    await page.waitForLoadState("networkidle");

    const frame = page.frameLocator("#mce_0_ifr").locator("body");
    await expect(frame).toBeVisible();
    
    const text = await frame.textContent();
    expect(text).toBeTruthy();
  });

  test("should interact with iframe editor", async ({ page }) => {
    await page.click('a[href="/iframe"]');
    await page.waitForLoadState("networkidle");

    const frame = page.frameLocator("#mce_0_ifr").locator("body");
    await frame.click();
    await frame.fill("Hello from Playwright!");
    
    const content = await frame.textContent();
    expect(content).toContain("Hello from Playwright!");
  });
});

test.describe("Nested Frames", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/nested_frames");
  });

  test("should access nested frame content", async ({ page }) => {
    // Access top frame
    const topFrame = page.frameLocator("frame[name='frame-top']");
    const leftFrame = topFrame.frameLocator("frame[name='frame-left']");
    const leftContent = leftFrame.locator("body");
    
    await expect(leftContent).toBeVisible();
    const leftText = await leftContent.textContent();
    expect(leftText).toBeTruthy();
  });

  test("should access middle frame", async ({ page }) => {
    const topFrame = page.frameLocator("frame[name='frame-top']");
    const middleFrame = topFrame.frameLocator("frame[name='frame-middle']");
    const middleContent = middleFrame.locator("#content");
    
    await expect(middleContent).toBeVisible();
    const middleText = await middleContent.textContent();
    expect(middleText).toBeTruthy();
  });

  test("should access bottom frame", async ({ page }) => {
    const bottomFrame = page.frameLocator("frame[name='frame-bottom']");
    const bottomContent = bottomFrame.locator("body");
    
    await expect(bottomContent).toBeVisible();
    const bottomText = await bottomContent.textContent();
    expect(bottomText).toBeTruthy();
  });
});

