---
name: qa-anti-flaky
description: "Use when: reduzir flakiness em testes Playwright, estabilizar suite E2E, melhorar locators e sincronizacao, revisar timeouts/retries e eliminar dependencias de timing. Indicado para falhas intermitentes em local ou CI."
---

# QA Anti-Flaky

Analise testes instaveis e proponha correcoes objetivas para aumentar confiabilidade sem mascarar bugs.

## Objetivo

- Diagnosticar causa raiz de intermitencia.
- Propor correcoes minimas e seguras.
- Melhorar robustez de sincronizacao e isolamento.

## Entradas Esperadas

- Arquivo(s) de teste com falha.
- Mensagens de erro e stack trace.
- Contexto de execucao (local/CI, browser, headless/headed).

## Checklist de Diagnostico

1. Locator fragil (texto ambiguo, nth, seletor estrutural).
2. Sincronizacao inadequada (acao antes do estado pronto).
3. Estado compartilhado entre testes (dados, sessao, cache).
4. Dependencia de ambiente (rede lenta, feature flag, horario).
5. Uso de `waitForTimeout` em vez de espera por condicao.

## Acoes Recomendadas

1. Trocar locators por papeis, labels, test ids e semantica.
2. Esperar estados observaveis: visibilidade, URL, resposta, carregamento.
3. Isolar dados por teste e limpar efeitos colaterais.
4. Ajustar timeout de forma pontual e justificada.
5. Usar retry apenas como ultimo recurso, com motivo explicito.

## Saida Obrigatoria

1. Causa raiz provavel (e alternativas, se houver).
2. Patch sugerido no(s) teste(s), com explicacao curta.
3. Impacto esperado (estabilidade, tempo de execucao, risco).
4. Plano de validacao (rodadas locais e criterio de aceite).

## Nao Fazer

- Nao esconder falhas reais de produto com retry global excessivo.
- Nao aumentar timeout global sem diagnostico.
- Nao alterar comportamento funcional do teste sem necessidade.

## Prompt de Ativacao Sugerido

"Analise este teste Playwright intermitente, identifique causa raiz e proponha ajustes anti-flaky com patch minimo."
