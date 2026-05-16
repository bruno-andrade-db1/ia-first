import { test, expect } from "@playwright/test";
import { AuthHelper } from "./authHelper";

test.describe("Authentication Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display login form", async ({ page }) => {
    await AuthHelper.openLoginModal(page);

    // Assert
    await expect(page.locator("#login-account-name")).toBeVisible();
    await expect(page.locator("#login-account-password")).toBeVisible();
    await expect(page.locator("#login-button")).toBeVisible();
  });

  test.only("should login successfully with valid credentials", async ({
    page,
  }) => {
    const email = process.env.AUTH_EMAIL || "";
    const password = process.env.AUTH_PASSWORD || "";

    await AuthHelper.openLoginModal(page);
    await AuthHelper.login(page, email, password);

    // Assert
    await expect(
      page.getByRole("link", { name: "ia-first-db1", exact: true }),
    ).toBeVisible();
  });
});
