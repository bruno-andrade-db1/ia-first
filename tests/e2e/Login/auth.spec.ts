import { test, expect } from "@playwright/test";
import { AuthHelper } from "./authHelper";

test.describe("Authentication Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should display login form", async ({ page }) => {
    // Arrange
    await AuthHelper.openLoginModal(page);

    // Assert
    await expect(page.locator("#login-account-name")).toBeVisible();
    await expect(page.locator("#login-account-password")).toBeVisible();
    await expect(page.locator("#login-button")).toBeVisible();
  });

  test("should show validation alert when submitting without username and password", async ({
    page,
  }) => {
    // Arrange
    await AuthHelper.openLoginModal(page);

    // Act
    await page.locator("#login-button").click();

    // Assert
    await expect(
      page.getByText("Please enter your email or username, and password.", {
        exact: true,
      }),
    ).toBeVisible();
  });

  test("should show invalid credentials alert when submitting wrong username or password", async ({
    page,
  }) => {
    // Arrange
    await AuthHelper.openLoginModal(page);
    const invalidUsername = "usuario.invalido";
    const invalidPassword = "senha.invalida";

    // Act
    await AuthHelper.login(page, invalidUsername, invalidPassword);

    // Assert
    await expect(
      page.getByText("Incorrect username, email or password", { exact: true }),
    ).toBeVisible();
  });

  test("should login successfully with valid credentials", async ({ page }) => {
    // Arrange
    const email = process.env.AUTH_EMAIL || "";
    const password = process.env.AUTH_PASSWORD || "";
    await AuthHelper.openLoginModal(page);

    // Act
    await AuthHelper.login(page, email, password);

    // Assert
    await expect(
      page.getByRole("link", { name: "ia-first-db1", exact: true }),
    ).toBeVisible();
  });
});
