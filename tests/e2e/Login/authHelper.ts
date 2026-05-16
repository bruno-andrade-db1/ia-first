import { Page } from "@playwright/test";

export class AuthHelper {
  static async openLoginModal(page: Page): Promise<void> {
    await page.goto("/");
    await page.locator(".login-button").click();
    await page.locator(".login-body").isVisible();
  }

  static async login(
    page: Page,
    username: string,
    password: string,
  ): Promise<void> {
    await page.locator("#login-account-name").fill(username);
    await page.locator("#login-account-password").fill(password);
    await page.locator("#login-button").click();
  }
}
