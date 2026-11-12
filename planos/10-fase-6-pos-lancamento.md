# 10 — Fase 6: Pós-lançamento

Duração: 30 dias depois do lançamento · Responsável: Victor Eduardo Peixer Munarim

**Status:** preparada, não iniciada. Começa no dia em que o site entrar no ar (Fase 5). Antes disso não há dado para medir.

Objetivo: confirmar que o site funciona e gera pedidos de orçamento, corrigir o que falhar e decidir a próxima rodada de melhorias.

## 1. Calendário de acompanhamento

| Quando              | O que fazer                                                                                                          |
| ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Dia 0 a 7, todo dia | Conferir se os pedidos chegam (e-mail e WhatsApp). Abrir o site no celular. Ver erros no painel da Cloudflare        |
| Dia 3               | Search Console: o sitemap foi lido? Há erros de cobertura ou páginas antigas sem redirecionamento?                   |
| Dia 7               | Ver quantos pedidos de orçamento vieram do site. Comparar com o que a equipe lembra da semana anterior ao lançamento |
| Dia 14              | Revisar páginas mais vistas e as consultas do Google com mais cliques. Corrigir títulos e descrições fracos          |
| Dia 21              | Lighthouse mobile de novo nas páginas principais. Conferir se alguma foto nova pesou o site                          |
| Dia 30              | Fechar o relatório (seção 3). Decidir o desligamento do WordPress antigo                                             |

## 2. Métricas

Poucas e úteis. Escolher a ferramenta de analytics antes do lançamento (decisão pendente em `03-cronograma-e-pendencias.md`); o Cloudflare Web Analytics é gratuito e não usa cookies, o que simplifica a LGPD.

| Métrica                                     | Onde ver                    | Por que importa                                                              |
| ------------------------------------------- | --------------------------- | ---------------------------------------------------------------------------- |
| Cliques no botão do WhatsApp                | Evento no analytics         | É a conversão principal                                                      |
| Envios do formulário                        | E-mail recebido e analytics | Conversão secundária                                                         |
| Visitas e origem (Google, Facebook, direto) | Analytics                   | Mostra de onde vêm os pedidos                                                |
| Páginas mais vistas (modelos, obras)        | Analytics                   | Diz quais fotos e modelos atraem                                             |
| Consultas e cliques no Google               | Search Console              | Mostra se o SEO local no Sul funciona                                        |
| Cidades e estados dos visitantes            | Analytics                   | Mostra se o Sul além de SC enxerga o site                                    |
| Pedidos que viraram orçamento e venda       | Equipe comercial            | A métrica que importa de verdade: perguntar a cada cliente "como nos achou?" |

## 3. Modelo do relatório de 30 dias

Copiar para um arquivo novo (`planos/relatorio-30-dias.md`) e preencher.

```
# Relatório de 30 dias — Escadas Munarim
Período: __/__/____ a __/__/____

## Números
- Visitas: ___   (origem: Google ___ / Facebook ___ / direto ___)
- Cliques no WhatsApp: ___
- Envios do formulário: ___
- Pedidos que a equipe comercial atribui ao site: ___
- Orçamentos fechados vindos do site: ___

## O que funcionou
-

## O que não funcionou
-

## Páginas mais vistas
1.
2.
3.

## Consultas do Google que mais trouxeram cliques
1.
2.

## Problemas encontrados e corrigidos
-

## Pendências para a próxima rodada
- [ ]

## Decisão sobre o WordPress antigo
(desligar / manter mais ___ dias, e por quê)
```

## 4. Rodada de melhorias (depois do relatório)

Candidatas, a priorizar pelo que os números mostrarem. Nenhuma está aprovada:

- Mais obras e fotos novas (costuma ser o maior ganho).
- Páginas por cidade, só onde houver obra real entregue.
- Catálogo em PDF para construtoras, se o comercial pedir.
- Depoimentos de clientes, com permissão.
- Configurador ou simulador de escada: entra só se houver demanda comprovada.
- Instagram da empresa ligado ao site.

## 5. Riscos do pós-lançamento

| Risco                                                                     | Sinal                                                 | Resposta                                                                   |
| ------------------------------------------------------------------------- | ----------------------------------------------------- | -------------------------------------------------------------------------- |
| Pedidos de orçamento se perdem (e-mail na caixa de spam ou erro de envio) | Equipe comercial relata menos contatos que o esperado | Testar o formulário toda semana; manter o WhatsApp como caminho principal  |
| Queda no Google depois da troca                                           | Cliques no Search Console caem mais de 30%            | Conferir redirecionamentos 301, títulos e se alguma página saiu do sitemap |
| Conteúdo desatualizado (telefone, horário, modelo novo)                   | Cliente aponta                                        | Seguir `11-guia-de-manutencao.md`                                          |
| Só uma pessoa sabe manter o site                                          | Victor indisponível                                   | Guardar acessos em cofre de senhas da empresa e manter o guia atualizado   |
| Spam no formulário                                                        | Muitos pedidos sem sentido                            | Turnstile ativo; revisar honeypot                                          |

## Critério para encerrar a Fase 6

Relatório de 30 dias escrito, problemas abertos corrigidos ou registrados, decisão tomada sobre o WordPress antigo e lista da próxima rodada definida. O projeto passa então para manutenção contínua (`11-guia-de-manutencao.md`).
