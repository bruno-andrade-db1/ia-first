# Contexto do Projeto Discourse

## 📋 Informações Gerais

**Repositório:** https://github.com/discourse/discourse

**Descrição:** Uma plataforma moderna e altamente customizável para construção de comunidades. Discourse é uma solução gratuita, aberta e simples para discussões comunitárias.

**Licença:** GPL-2.0

**Comunidade:**

- ⭐ 46.5k stars
- 👀 879 watchers
- 🔀 8.8k forks

---

## 🏗️ Arquitetura

Discourse possui uma arquitetura de duas camadas bem definida:

### Backend

- **Linguagem Principal:** Ruby
- **Framework:** Ruby on Rails
- **Banco de Dados:** PostgreSQL
- Responsável pela lógica de negócio, processamento de dados e APIs

### Frontend

- **Linguagem Principal:** JavaScript (32.6% do codebase)
- **Framework:** Ember.js
- **Build Tool:** pnpm (workspace)
- Interface de usuário moderna e responsiva

### Composição do Codebase

| Componente | Percentual |
| ---------- | ---------- |
| Ruby       | 61.3%      |
| JavaScript | 32.6%      |
| HTML       | 3.0%       |
| SCSS       | 2.9%       |
| Mustache   | 0.1%       |
| CSS        | 0.1%       |

---

## 🧩 Estrutura do Projeto

### Componentes Principais

#### 1. **Discourse Core**

- Plataforma compartilhada que forma a base das comunidades Discourse
- Combina Rails backend com Ember.js frontend

#### 2. **Themes**

- Customizações frontend usando CSS e JavaScript
- Cada tema tem seu próprio repositório Git
- Admins podem instalar e gerenciar via painel administrativo
- Funciona até em plataformas de hospedagem compartilhada

#### 3. **Theme Components**

- Temas projetados para uso combinado com outros Theme Components
- Do ponto de vista do desenvolvimento, praticamente idênticos aos Themes
- Permitem composição e reutilização de componentes visuais

#### 4. **Plugins**

- Extensões que adicionam funcionalidades ao Discourse
- Seguem estrutura específica de desenvolvimento

---

## 🛠️ Stack Tecnológico

### Backend

```
Ruby on Rails
PostgreSQL
Rswag (API Documentation)
```

### Frontend

```
Ember.js
JavaScript/TypeScript
SCSS
pnpm (gerenciador de pacotes)
```

### Desenvolvimento

```
Webpack
ESLint
Stylelint
Prettier
```

### Infraestrutura

```
Docker (padrão)
CI/CD pipelines
GitHub Actions
```

---

## 📚 Recursos de Documentação

### Documentação Oficial

1. **Developer Docs** (discourse-developer-docs)
   - Repositório: https://github.com/discourse/discourse-developer-docs
   - Publicada automaticamente em Discourse
   - Sincronização via API

2. **API Docs** (discourse_api_docs)
   - Repositório: https://github.com/discourse/discourse_api_docs
   - Gerada automaticamente via Rswag
   - Especificações OpenAPI

3. **Docs Internas**
   - Localização: `docs/developer-guides/` dentro do repositório principal
   - Estrutura organizada por seções

### Conteúdo Disponível

- **Introduction to Discourse Development** - Guia introdutório para desenvolvimento
- **Code Internals** - Documentação de internals do código
- **Plugin Beginners Guide** - Guia para iniciantes em desenvolvimento de plugins
- **Architecture Overview** - Visão geral da arquitetura
- **Theme Development** - Desenvolvimento de temas
- **API Documentation** - Documentação completa de APIs

---

## 🔌 Plugin Ecosystem

### Exemplo: GitHub Plugin

O Discourse possui um ecossistema robusto de plugins. Exemplo notável:

**Discourse GitHub Plugin**

- **Badges GitHub:** Atribui badges aos usuários baseado em contribuições no GitHub
  - Bronze: 1 commit
  - Silver: 25 commits
  - Gold: 1000 commits
- **Linkbacks:** Conexão entre GitHub e Discourse
- **PR Status:** Status de pull requests em oneboxes
- **Permalinks:** Substituição de links GitHub por permanentes

---

## 📂 Estrutura de Repositórios

### Repositório Principal

```
discourse/
├── docs/                    # Documentação
├── app/                     # Código da aplicação
├── spec/                    # Testes
├── config/                  # Configuração
├── pnpm-workspace.yaml      # Workspace pnpm
├── tsconfig.json            # TypeScript config
├── stylelint.config.mjs     # Stylelint config
├── versions.json            # Versionamento
└── ...
```

### Repositórios Relacionados

- `discourse-developer-docs` - Documentação de desenvolvimento
- `discourse_api_docs` - Documentação de APIs (OpenAPI)
- Vários plugins e temas específicos

---

## 👥 Comunidade e Contribuições

### Code of Conduct

Discourse mantém um código de conduta para garantir comunidade acolhedora e inclusiva.

### Security Policy

Política de segurança definida para tratamento responsável de vulnerabilidades.

### Acessibilidade

- Segue guidelines W3C WCAG (Web Content Accessibility Guidelines)
- Email para reportar issues: accessibility@discourse.org
- Site: discourse.org/accessibility

### Como Contribuir

1. Forcar o repositório
2. Criar uma branch para sua feature/fix
3. Implementar as mudanças
4. Submeter Pull Request
5. Contribuições são revisadas pela comunidade

---

## 🚀 Desenvolvimento Local

### Requisitos

- Ruby e Rails
- PostgreSQL
- Node.js e pnpm
- Docker (recomendado)

### Setup

1. Clonar o repositório
2. Instalar dependências (`bundle install`, `pnpm install`)
3. Configurar banco de dados
4. Iniciar servidor (`rails s` e `ember serve`)
5. Acessar em `http://localhost:3000`

### Para Desenvolvimento de Plugins

- Seguir Plugin Beginners Guide
- Estrutura específica de plugins
- Sistema de ativação/desativação via admin

### Para Desenvolvimento de Temas

- CSS e JavaScript customizados
- Possibilidade de usar Theme Components
- Gerenciamento via painel admin

### Para Desenvolvimento de Core

- Requer setup de ambiente dedicado
- Documentação nos Code Internals
- Testes via RSpec

---

## 🎯 Casos de Uso Principais

1. **Fóruns de Comunidade** - Plataforma completa para discussões
2. **Suporte ao Cliente** - Categorias e permissões flexíveis
3. **Comunidades Internas** - Knowledge bases corporativas
4. **Learning Communities** - Plataformas educacionais
5. **Fan Communities** - Comunidades de nicho

---

## 📊 Estatísticas do Projeto

- **Linguagens:** 6 principais (Ruby, JavaScript, HTML, SCSS, Mustache, CSS)
- **Atividade:** Projeto muito ativo com contribuições contínuas
- **Maturidade:** Projeto estabelecido e estável
- **Escalabilidade:** Testado em comunidades de diversos tamanhos
- **Customização:** Altamente extensível via temas e plugins

---

## 🔗 Links Importantes

| Recurso               | URL                                                   |
| --------------------- | ----------------------------------------------------- |
| Repositório Principal | https://github.com/discourse/discourse                |
| Developer Docs        | https://github.com/discourse/discourse-developer-docs |
| API Docs              | https://github.com/discourse/discourse_api_docs       |
| Site Oficial          | https://www.discourse.org                             |
| Acessibilidade        | https://discourse.org/accessibility                   |
| Meta Forum            | https://meta.discourse.org                            |

---

## 📝 Notas Finais

Discourse é um projeto maduro, bem-documentado e fortemente orientado à comunidade. Seu código é aberto (GPL-2.0), permitindo fork, estudo e contribuição. A arquitetura modular (com suporte a themes e plugins) torna fácil estender funcionalidades sem modificar o core, facilitando manutenção e atualizações.

O projeto tem forte foco em acessibilidade, segurança e experiência do usuário, sendo uma escolha popular para organizações que precisam de plataformas de comunidade robustas e customizáveis.

---

**Documento criado em:** 2025
**Versão:** 1.0
