---
name: qa-playwright-cenarios-e2e
description: "Use when: criar testes E2E Playwright a partir de historias, requisitos ou criterios de aceite. Gera cenarios Given/When/Then, casos positivos e negativos, e codigo TypeScript no padrao do projeto (tests/e2e, fixtures em tests/fixtures, describe/beforeEach, Arrange/Act/Assert)."
---

# QA Cenario E2E

Converta requisitos em cenarios E2E e em testes Playwright prontos para uso no projeto.

## Objetivo

- Cobrir comportamento esperado e validacoes de erro.
- Reutilizar fixtures existentes antes de propor novas.
- Seguir convencoes do repositorio para nomenclatura e estrutura.

## Entradas Esperadas

- Descricao da feature ou historia.
- Criterios de aceite.
- Regras de negocio e restricoes.

## Processo

1. Extraia os fluxos principais e alternativos.
2. Gere cenarios em Given/When/Then com pre-condicoes claras.
3. Mapeie cada cenario para casos de teste Playwright.
4. Priorize locators robustos e assertions orientadas ao usuario.
5. Reaproveite fixtures em `tests/fixtures/` quando possivel.

## Saida Obrigatoria

1. Lista de cenarios em Given/When/Then.
2. Matriz de cobertura (criterio -> teste).
3. Codigo Playwright TypeScript com:
   - `test.describe(...)`
   - `test.beforeEach(...)` quando necessario
   - Blocos Arrange/Act/Assert
4. Lista de riscos ou lacunas de teste nao cobertas.

## Regras do Projeto

- Criar testes em `tests/e2e/*.spec.ts`.
- Manter nomes descritivos para `test(...)`.
- Incluir pelo menos 1 caso negativo por fluxo relevante.
- Evitar waits arbitrarios; prefira esperas por estado/elemento.

## Nao Fazer

- Nao inventar endpoints, dados ou regras sem sinalizar como hipotese.
- Nao usar locators frageis baseados em estrutura de DOM sem semantica.
- Nao duplicar setup se fixture resolver.

## Prompt de Ativacao Sugerido

"Gere cenarios E2E e testes Playwright para esta historia, cobrindo sucesso, validacoes e erros, seguindo o padrao deste repositorio."
