---
name: qa-triagem-falhas
description: "Use when: investigar falhas E2E Playwright com base em erro, trace, screenshot, video e logs para gerar diagnostico, reproducao, severidade e bug report acionavel para time de produto/dev."
---

# QA Triagem de Falhas

Transforme uma falha de execucao em analise tecnica clara e acionavel.

## Objetivo

- Reduzir tempo de investigacao.
- Separar problema de teste vs problema de produto.
- Produzir reporte com evidencias e proximo passo.

## Entradas Esperadas

- Mensagem de erro completa.
- Arquivos de evidencia (trace, screenshot, video, logs).
- Contexto do teste (suite, ambiente, branch, build).

## Processo

1. Classifique o tipo da falha: produto, teste, ambiente, dados.
2. Correlacione evidencias com o ponto de quebra.
3. Monte hipoteses e descarte as inconsistentes.
4. Defina reproducao minima confiavel.
5. Recomende acao imediata e acao preventiva.

## Saida Obrigatoria

1. Resumo tecnico da falha (curto e objetivo).
2. Causa raiz provavel + nivel de confianca.
3. Passos de reproducao.
4. Impacto no usuario/regra de negocio.
5. Classificacao de severidade e prioridade sugeridas.
6. Bug report pronto para tracker (titulo, descricao, evidencias, criterio de pronto).

## Template de Bug Report

- Titulo:
- Ambiente:
- Build/Commit:
- Pre-condicoes:
- Passos para reproduzir:
- Resultado esperado:
- Resultado obtido:
- Evidencias:
- Impacto:
- Severidade/Prioridade:
- Hipotese de causa raiz:
- Proposta de correcao:

## Nao Fazer

- Nao concluir causa raiz sem evidencias minimas.
- Nao ignorar variaveis de ambiente e massa de dados.
- Nao abrir bug sem reproducao ou criterio de validacao.

## Prompt de Ativacao Sugerido

"Faca a triagem desta falha E2E, identifique causa raiz provavel e gere bug report com evidencias e prioridade."
