---
name: Testes Playwright
description: Regras e padroes para testes E2E Playwright neste projeto.
applyTo: tests/**/*.{ts,tsx}
---

# Instrucoes para Copilot - Projeto Playwright

Este arquivo contem instrucoes para gerar e revisar testes E2E Playwright neste repositorio.

## Informacoes do Projeto

- Nome: Projeto Playwright E2E
- Tipo: Testes de Automacao E2E
- Framework: Playwright Test
- Linguagem: TypeScript
- Estrutura: testes em `tests/e2e/` e fixtures em `tests/fixtures/`

## Convencoes e Padroes

### Nomenclatura

- Arquivos de teste: `*.spec.ts`
- Arquivos de fixture: `*.fixture.ts`
- Use camelCase para variaveis e funcoes
- Use PascalCase para tipos e interfaces

### Estrutura de Testes

```typescript
import { test, expect } from "@playwright/test";

test.describe("Feature Name", () => {
  test.beforeEach(async ({ page }) => {
    // Setup
  });

  test("should do something", async ({ page }) => {
    // Arrange
    // Act
    // Assert
  });
});
```

### Fixtures Customizados

- Localize em `tests/fixtures/`
- Estenda `base` test do Playwright
- Use para autenticacao, configuracao de dados e setup compartilhado

## Regras para Geracao de Testes

- Use `test.describe()` para agrupar cenarios relacionados.
- Inclua casos positivos e negativos para cada fluxo relevante.
- Prefira locators semanticos: `getByRole`, `getByLabel`, `getByTestId`.
- Evite `waitForTimeout`; prefira esperas por estado observavel.
- Reaproveite fixtures antes de criar setup duplicado.
- Mantenha nomes descritivos para suites e casos (`should ...`).

## Comandos Uteis

```bash
npm install
npx playwright install
npm run test:ui
npm run test:debug
npm run codegen
```

## Checklist de Qualidade

- [ ] Testes com nomes descritivos
- [ ] Suites organizadas com `test.describe()`
- [ ] Cleanup/teardown quando aplicavel
- [ ] Reuso de fixtures para reduzir duplicacao
- [ ] Esperas por condicao real, sem timeout arbitrario
- [ ] Cobertura de cenarios de erro
- [ ] Assertivas com mensagem e intencao claras

## Recursos

- Playwright Docs: https://playwright.dev
- Best Practices: https://playwright.dev/docs/best-practices
- Locator Strategies: https://playwright.dev/docs/locators
