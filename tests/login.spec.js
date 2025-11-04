// tests/login.spec.js
const { test, expect } = require("@playwright/test");
const LoginPage = require("../pages/LoginPage");

test.describe("Form Authentication", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    await page.click('a[href="/login"]');
  });

  test("successful login shows secure area", async ({ page }) => {
    await page.fill("#username", "tomsmith");
    await page.fill("#password", "SuperSecretPassword!");
    await page.click('button[type="submit"]');

    await expect(page.locator("#flash")).toContainText(
      "You logged into a secure area!"
    );
    await expect(page).toHaveURL(/\/secure/);
  });

  test("invalid login shows error", async ({ page }) => {
    await page.fill("#username", "wrong");
    await page.fill("#password", "bad");
    await page.click('button[type="submit"]');
    await expect(page.locator("#flash")).toContainText(
      "Your username is invalid!"
    );
  });

  test("POM successful login", async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login("tomsmith", "SuperSecretPassword!");
    await expect(login.flash).toContainText("You logged into a secure area!");
  });
});
