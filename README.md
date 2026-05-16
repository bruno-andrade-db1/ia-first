# Projeto Playwright E2E

Projeto de testes end-to-end com Playwright para automação de testes de interface e API.

## 🎯 Características

- ✅ Testes E2E com Playwright
- 🌐 Suporte para múltiplos navegadores (Chromium, Firefox, WebKit)
- 📱 Testes em viewport móvel
- 🔧 Fixtures customizados para reutilização
- 🎥 Screenshots e vídeos on-demand
- 📊 Relatórios HTML automáticos
- 🤖 CI/CD com GitHub Actions
- 🐛 Debug mode incluído

## 📋 Pré-requisitos

- Node.js 18+ ou superior
- npm ou yarn

## 🚀 Instalação

1. Clone o repositório:

```bash
git clone <repository-url>
cd <project-directory>
```

2. Instale as dependências:

```bash
npm install
```

3. Instale os browsers do Playwright:

```bash
npx playwright install
```

## 📝 Scripts Disponíveis

| Comando                | Descrição                            |
| ---------------------- | ------------------------------------ |
| `npm test`             | Executa todos os testes              |
| `npm run test:ui`      | Executa testes com UI Playwright     |
| `npm run test:debug`   | Executa testes em modo debug         |
| `npm run test:headed`  | Executa testes com navegador visível |
| `npm run test:chrome`  | Executa testes apenas no Chromium    |
| `npm run test:firefox` | Executa testes apenas no Firefox     |
| `npm run test:webkit`  | Executa testes apenas no WebKit      |
| `npm run codegen`      | Abre Codegen para gravar testes      |
| `npm run report`       | Exibe o último relatório HTML        |

## 📁 Estrutura do Projeto

```
.
├── tests/
│   ├── e2e/                 # Testes E2E
│   │   ├── example.spec.ts  # Exemplos de testes
│   │   └── auth.spec.ts     # Testes de autenticação
│   └── fixtures/            # Fixtures customizados
│       └── auth.fixture.ts  # Fixture para autenticação
├── .github/
│   └── workflows/
│       └── playwright-tests.yml  # CI/CD GitHub Actions
├── playwright.config.ts     # Configuração do Playwright
├── tsconfig.json            # Configuração TypeScript
├── package.json             # Dependências do projeto
└── README.md                # Este arquivo
```

## 🔧 Configuração

### Alterando a URL Base

Edite `playwright.config.ts`:

```typescript
use: {
  baseURL: 'https://sua-aplicacao.com',
}
```

### Adicionando um Novo Teste

1. Crie um arquivo `.spec.ts` em `tests/e2e/`
2. Use o Codegen para ajudar:

```bash
npm run codegen
```

Exemplo básico:

```typescript
import { test, expect } from "@playwright/test";

test.describe("My Feature", () => {
  test("should work correctly", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Expected Title/);
  });
});
```

### Criando Fixtures Customizados

Edite `tests/fixtures/` e importe em seus testes:

```typescript
import { test, expect } from "./fixtures/auth.fixture";

test("logged in user test", async ({ authenticatedPage }) => {
  // Use authenticatedPage
});
```

## 🎥 Recursos

- **Screenshots**: Automaticamente capturados em caso de falha
- **Vídeos**: Gravados em caso de falha (configure em `playwright.config.ts`)
- **Traces**: Use `trace: 'on-first-retry'` para debugging detalhado

## 🚨 Troubleshooting

### Browsers não instalados

```bash
npx playwright install
```

### Permissões de execução em Linux/Mac

```bash
chmod +x node_modules/.bin/playwright
```

### Problemas com CI/CD

Verifique se `.github/workflows/playwright-tests.yml` está configurado corretamente e faça push para `main` ou `develop`.

## 📚 Documentação Oficial

- [Playwright Documentation](https://playwright.dev)
- [Playwright Test Documentation](https://playwright.dev/docs/intro)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)

## 📄 Licença

MIT

---

**Última atualização**: Maio 2026
