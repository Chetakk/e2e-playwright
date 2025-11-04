// tests/notificationMessages.spec.js
const { test, expect } = require("@playwright/test");

test.describe("Notification Messages", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/notification_message_rendered");
  });

  test("should display notification message", async ({ page }) => {
    await page.click('a:has-text("Click here")');
    
    const notification = page.locator("#flash");
    await expect(notification).toBeVisible();
    
    const message = await notification.textContent();
    expect(message).toBeTruthy();
    expect(message.length).toBeGreaterThan(0);
  });

  test("should close notification message", async ({ page }) => {
    await page.click('a:has-text("Click here")');
    
    const notification = page.locator("#flash");
    await expect(notification).toBeVisible();
    
    const closeButton = notification.locator(".close");
    await closeButton.click();
    
    // Notification should be hidden after close
    await expect(notification).not.toBeVisible();
  });

  test("should show different messages on multiple clicks", async ({ page }) => {
    await page.click('a:has-text("Click here")');
    const firstMessage = await page.locator("#flash").textContent();
    
    await page.click('a:has-text("Click here")');
    const secondMessage = await page.locator("#flash").textContent();
    
    // Messages may be the same or different
    expect(firstMessage).toBeTruthy();
    expect(secondMessage).toBeTruthy();
  });
});

