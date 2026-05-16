import { test as base } from "@playwright/test";
import { Page } from "@playwright/test";

type AuthFixtures = {
  authenticatedPage: Page;
};

/**
 * Fixture customizado para páginas autenticadas
 * Pode ser expandido com lógica de login real
 */
export const test = base.extend<AuthFixtures>({
  authenticatedPage: async ({ page }, use) => {
    // Aqui você pode adicionar lógica de autenticação
    // Por exemplo: fazer login antes de cada teste
    // await page.goto('/login');
    // await page.fill('input[name="email"]', 'user@example.com');
    // await page.fill('input[name="password"]', 'password123');
    // await page.click('button[type="submit"]');
    // await page.waitForNavigation();

    await use(page);
  },
});

export { expect } from "@playwright/test";
