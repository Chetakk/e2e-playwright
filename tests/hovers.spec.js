// tests/hovers.spec.js
const { test, expect } = require("@playwright/test");

test.describe("Hovers", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/hovers");
  });

  test("should show user 1 profile on hover", async ({ page }) => {
    const user1 = page.locator(".figure").first();
    await user1.hover();
    
    const user1Profile = page.locator(".figcaption").first();
    await expect(user1Profile).toBeVisible();
    await expect(user1Profile).toContainText("name: user1");
    await expect(user1Profile.locator("a")).toHaveAttribute("href", "/users/1");
  });

  test("should show user 2 profile on hover", async ({ page }) => {
    const user2 = page.locator(".figure").nth(1);
    await user2.hover();
    
    const user2Profile = page.locator(".figcaption").nth(1);
    await expect(user2Profile).toBeVisible();
    await expect(user2Profile).toContainText("name: user2");
    await expect(user2Profile.locator("a")).toHaveAttribute("href", "/users/2");
  });

  test("should show user 3 profile on hover", async ({ page }) => {
    const user3 = page.locator(".figure").last();
    await user3.hover();
    
    const user3Profile = page.locator(".figcaption").last();
    await expect(user3Profile).toBeVisible();
    await expect(user3Profile).toContainText("name: user3");
    await expect(user3Profile.locator("a")).toHaveAttribute("href", "/users/3");
  });

  test("should navigate to user profile on click", async ({ page }) => {
    const user1 = page.locator(".figure").first();
    await user1.hover();
    
    const profileLink = page.locator(".figcaption").first().locator("a");
    await profileLink.click();
    
    await expect(page).toHaveURL(/\/users\/1/);
    await expect(page.locator("h1")).toContainText("Not Found");
  });
});

