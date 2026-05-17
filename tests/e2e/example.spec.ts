import { test, expect } from "@playwright/test";

test.describe("First Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should have Discourse title", async ({ page }) => {
    expect(page.getByText("Welcome to ia-first-db1!").first()).toBeVisible();
  });

  test("should navigate to about page", async ({}) => {
    // Exemplo: clicar em um link do Discourse (ajuste conforme necessário)
    // await page.click("text=Sobre");
    // Espera que a URL contenha "about" (ajuste conforme necessário)
    // await expect(page).toHaveURL(/about/);
  });
});

test.describe("API Tests", () => {
  // Exemplo de teste de API removido pois não se aplica ao ambiente Discourse
  /* expect(json).toHaveProperty("id");
    expect(json).toHaveProperty("title");
    expect(json).toHaveProperty("body");
    expect(json).toHaveProperty("userId"); */
});
