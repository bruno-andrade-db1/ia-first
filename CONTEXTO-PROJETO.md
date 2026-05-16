# Contexto do Projeto ia-first

## 📋 Informações Gerais

**Projeto:** ia-first

**Descrição:** Suite de testes end-to-end (E2E) para automação de testes de interface e API utilizando Playwright. Projeto de QA automation focado em garantir qualidade da plataforma através de testes automatizados em múltiplos navegadores.

**Aplicação Alvo:** https://ia-first-db1-team.discourse.group/

**Versão do Projeto:** 1.0.0

**Licença:** MIT

---

## 🏗️ Arquitetura

O projeto segue uma arquitetura modular de automação de testes, estruturada em camadas de responsabilidade:

### Camada de Testes (E2E)

- **Linguagem Principal:** TypeScript
- **Framework:** Playwright
- **Nível:** End-to-End (Interface e API)
- Responsável pelos testes automatizados que simulam ações reais de usuários

### Camada de Suporte

- **Fixtures:** Reutilização de contextos de teste
- **Helpers:** Utilitários de autenticação e setup
- **Configuração:** Centralizada em `playwright.config.ts`

### Composição do Codebase

| Componente     | Descrição                             |
| -------------- | ------------------------------------- |
| TypeScript     | Código de testes com tipagem estática |
| Playwright     | Framework de automação e E2E testing  |
| Node.js        | Runtime para execução                 |
| GitHub Actions | CI/CD automation                      |

---

## 🧩 Estrutura do Projeto

### Diretórios Principais

#### 1. **tests/e2e/**

- Contém todos os testes E2E da aplicação
- Organizado por domínio funcional
- Exemplos:
  - `example.spec.ts` - Testes de exemplo/baseline
  - `Login/auth.spec.ts` - Testes de autenticação
  - Padrão: `*.spec.ts`

#### 2. **tests/fixtures/**

- Fixtures customizados para reutilização em testes
- Exemplo: `auth.fixture.ts` - Fixture de autenticação
- Permite compartilhar contextos entre testes

#### 3. **.github/**

- **instructions/** - Instruções customizadas para o projeto
  - Regras de testes E2E Playwright
  - Padrões de nomenclatura e estrutura
- **skills/** - Skills de domínio específico
  - `qa-playwright-anti-flaky/` - Redução de flakiness em testes
  - `qa-playwright-cenarios-e2e/` - Criação de testes E2E
  - `qa-playwright-triagem-falhas/` - Investigação de falhas
- **workflows/** - Pipelines de CI/CD com GitHub Actions

#### 4. **playwright-report/**

- Relatórios HTML gerados automaticamente
- Visualização de resultados de testes

#### 5. **test-results/**

- Artefatos de testes (screenshots, vídeos, traces)
- Gerados apenas em caso de falhas

---

## 🛠️ Stack Tecnológico

### Automação de Testes

```
Playwright @1.46.0
TypeScript
Node.js 18+
```

### Desenvolvimento

```
TSConfig (TypeScript Configuration)
npm (package manager)
```

### Infraestrutura & CI/CD

```
GitHub Actions
Docker (suportado)
Múltiplos navegadores (Chromium, Firefox, WebKit)
```

### Relatórios

```
HTML Reporter (padrão do Playwright)
Screenshot on failure
Video on failure
Trace on first retry
```

---

## 🚀 Recursos Principais

### Execução de Testes

| Comando                | Descrição                      |
| ---------------------- | ------------------------------ |
| `npm test`             | Executa todos os testes        |
| `npm run test:ui`      | Interface visual do Playwright |
| `npm run test:debug`   | Modo debug com passo a passo   |
| `npm run test:headed`  | Testes com navegador visível   |
| `npm run test:chrome`  | Apenas Chromium                |
| `npm run test:firefox` | Apenas Firefox                 |
| `npm run test:webkit`  | Apenas WebKit                  |
| `npm run codegen`      | Gerador de código Playwright   |
| `npm run report`       | Exibe último relatório         |

### Configuração Playwright

**Arquivo:** `playwright.config.ts`

**Configurações-chave:**

- **baseURL:** `https://ia-first-db1-team.discourse.group/`
- **Parallelização:** `fullyParallel: true`
- **Reporter:** HTML reporter padrão
- **Trace:** `on-first-retry` (captura automática em falhas)
- **Screenshot:** `only-on-failure`
- **Video:** `retain-on-failure`
- **Browsers:** Chromium, Firefox, WebKit (Desktop)

---

## 📚 Recursos de Documentação

### Documentação Customizada do Projeto

#### 1. **Instructions** (`.github/instructions/`)

- `testing.instructions.md` - Regras e padrões para testes E2E Playwright
- Define convenções e boas práticas do projeto

#### 2. **Skills** (`.github/skills/`)

**qa-playwright-anti-flaky/**

- Estratégias para reduzir flakiness em testes
- Técnicas de estabilização de E2E
- Melhoria de locators e sincronização
- Otimização de timeouts/retries

**qa-playwright-cenarios-e2e/**

- Criação de testes E2E a partir de histórias e requisitos
- Geração de cenários Given/When/Then
- Casos positivos e negativos
- Padrões TypeScript do projeto

**qa-playwright-triagem-falhas/**

- Investigação de falhas E2E
- Análise de traces, screenshots e vídeos
- Geração de diagnósticos acionáveis
- Documentação de bugs

### Documentação Oficial

- **Playwright Docs:** https://playwright.dev/docs/intro
- **Playwright Test:** https://playwright.dev/docs/writing-tests
- **Fixtures:** https://playwright.dev/docs/test-fixtures
- **Reporters:** https://playwright.dev/docs/test-reporters

---

## 📂 Estrutura Completa de Diretórios

```
ia-first/
├── .github/
│   ├── instructions/
│   │   └── testing.instructions.md        # Regras E2E
│   ├── skills/
│   │   ├── qa-playwright-anti-flaky/      # Skill anti-flaky
│   │   ├── qa-playwright-cenarios-e2e/    # Skill criação cenários
│   │   └── qa-playwright-triagem-falhas/  # Skill triagem de falhas
│   └── workflows/
│       └── playwright-tests.yml           # CI/CD GitHub Actions
├── tests/
│   ├── e2e/
│   │   ├── example.spec.ts                # Testes de exemplo
│   │   ├── Login/
│   │   │   ├── auth.spec.ts               # Testes de autenticação
│   │   │   └── authHelper.ts              # Helpers de auth
│   ├── fixtures/
│   │   └── auth.fixture.ts                # Fixture de autenticação
│   └── ...
├── playwright-report/                     # Relatórios HTML
├── test-results/                          # Artefatos de testes
├── .vscode/                               # Configuração VS Code
├── playwright.config.ts                   # Config Playwright
├── tsconfig.json                          # Config TypeScript
├── package.json                           # Dependências
├── package-lock.json                      # Lock file
├── README.md                              # Documentação geral
└── CONTEXTO-PROJETO.md                    # Este arquivo
```

---

## 🧪 Padrões de Testes

### Estrutura de um Teste

```typescript
import { test, expect } from "@playwright/test";

test.describe("Funcionalidade", () => {
  test.beforeEach(async ({ page }) => {
    // Setup
  });

  test("deveria fazer algo específico", async ({ page }) => {
    // Arrange
    // Act
    // Assert
  });
});
```

### Usando Fixtures

```typescript
import { test, expect } from "@playwright/test";
import { authFixture } from "../fixtures/auth.fixture";

test.use(authFixture);

test("teste autenticado", async ({ page, authenticatedUser }) => {
  // Teste com usuário autenticado
});
```

---

## 🔍 Funcionalidades Principais

### 1. **Suporte Multi-Browser**

- Chromium (Chrome)
- Firefox
- WebKit (Safari)
- Execução paralela de testes

### 2. **Testes em Múltiplos Viewports**

- Desktop
- Mobile (configurável)
- Tablet

### 3. **Evidência Automática**

- ✅ Screenshots em falhas
- ✅ Vídeos em falhas
- ✅ Traces para debug
- ✅ Relatórios HTML

### 4. **Debug & Development**

- Playwright Inspector
- Code Generation (codegen)
- UI Mode para desenvolvimento interativo
- Debug Mode com passo a passo

### 5. **CI/CD Integration**

- GitHub Actions workflows
- Execução automática em pull requests
- Relatórios automáticos
- Artefatos capturados

---

## 👥 Padrões de Qualidade

### Code Standards

- **Linguagem:** TypeScript (tipagem estática)
- **Namespacing:** Organização por domínios (Login, etc)
- **Reusability:** Fixtures e Helpers para DRY
- **Readability:** Padrões Arrange/Act/Assert

### Testing Patterns

- **Page Object Model:** Suportado via custom helpers
- **Fixtures:** Para compartilhamento de estado
- **Helpers:** Para ações repetidas (authHelper.ts)
- **Parallelização:** Testes rodando em paralelo

### CI/CD Pipeline

- Execução automática de testes
- Múltiplos navegadores
- Captura de evidências
- Relatórios consolidados

---

## 🚀 Desenvolvimento Local

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- Navegadores do Playwright

### Setup Inicial

```bash
# 1. Clonar repositório
git clone <repository-url>
cd ia-first

# 2. Instalar dependências
npm install

# 3. Instalar browsers Playwright
npx playwright install

# 4. Executar testes
npm test
```

### Desenvolvimento Interativo

```bash
# UI Mode (interativo)
npm run test:ui

# Debug Mode (com inspector)
npm run test:debug

# Codegen (gravar testes)
npm run codegen
```

---

## 🔐 Autenticação

O projeto inclui suporte a autenticação via fixtures:

- **auth.fixture.ts** - Fixture reutilizável
- **authHelper.ts** - Helpers para login
- **auth.spec.ts** - Testes de autenticação

Permite que testes autenticados reutilizem estado de login sem repetir o processo.

---

## 📊 Relatórios e Análise

### Geração de Relatórios

```bash
npm run report
```

Abre relatório HTML com:

- ✅ Testes passados/falhados
- 📊 Estatísticas por navegador
- 📸 Screenshots e vídeos
- 🔍 Traces para investigação

### Artefatos de Falha

Em caso de falha:

- `test-results/` contém artefatos
- Screenshots (PNG)
- Vídeos (WebM)
- Traces (ZIP)

---

## 🔄 CI/CD Pipeline

### GitHub Actions

**Arquivo:** `.github/workflows/playwright-tests.yml`

**Acionadores:**

- Push para branches principais
- Pull requests
- Agendado (conforme configurado)

**Ações:**

- Instala dependências
- Instala browsers Playwright
- Executa testes em paralelo
- Upload de artefatos (em caso de falha)
- Publica relatório

---

## 📝 Convenções do Projeto

### Nomenclatura de Testes

- Arquivos: `*.spec.ts`
- Padrão: Descrever o que está sendo testado
- Exemplo: `auth.spec.ts`, `example.spec.ts`

### Organização de Pastas

- Por domínio funcional (Login/)
- Helpers e fixtures em estrutura clara
- Testes em `tests/e2e/`

### TypeScript Config

- Strict mode ativado
- Target: ES2020
- Module: ESNext

---

## 🎯 Próximos Passos para Desenvolvimento

1. **Adicionar novos testes:**
   - Criar arquivo `.spec.ts` em `tests/e2e/`
   - Usar fixtures existentes
   - Seguir padrão Arrange/Act/Assert

2. **Melhorar estabilidade:**

- Consultar skill `qa-playwright-anti-flaky`
- Revisar timeouts e retries
- Usar locators robustos

3. **Expandir cobertura:**
   - Criar novos domínios de teste
   - Adicionar testes de regressão
   - Cobrir cenários negativos

4. **Otimizar CI/CD:**
   - Ajustar parallelização
   - Configurar alertas
   - Integrar com ferramentas externas

---

## 📞 Referências Importantes

### Documentação Externa

- [Playwright Official Docs](https://playwright.dev)
- [Playwright Test](https://playwright.dev/docs/writing-tests)
- [Fixtures](https://playwright.dev/docs/test-fixtures)
- [Reporters](https://playwright.dev/docs/test-reporters)

### Stack Tecnológico

- TypeScript: https://www.typescriptlang.org/
- Node.js: https://nodejs.org/
- npm: https://www.npmjs.com/

### Comunidade

- Discourse (alvo): https://ia-first-db1-team.discourse.group/
- Playwright Community: https://github.com/microsoft/playwright

---

**Última atualização:** Maio de 2026
**Status:** Ativo
**Mantenedor:** Equipe QA Automation
