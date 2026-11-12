# 05 — Fase 1: Conteúdo

Duração prevista: 1–2 semanas · Responsável: Victor Eduardo Peixer Munarim
Pré-requisito: Fase 0 encerrada (ver `04-fase-0-alinhamento.md`).

Objetivo: reunir tudo o que o site vai exibir, confirmado pela equipe, em `conteudo/`, na estrutura que o site vai ler na Fase 3.

Regra: nada de texto, número, prazo, depoimento ou foto sem confirmação interna. O que falta fica com `status: pendente`.

## Estrutura criada em `conteudo/`

```
conteudo/
  empresa.json              dados oficiais, contatos, números
  faq.md                    perguntas frequentes
  redirecionamentos.csv     mapa de URLs antigas para novas (301)
  modelos/<slug>.md         um arquivo por modelo (8 modelos)
  obras/_modelo.md          molde para cada obra (copiar e renomear)
  fotos/LEIAME.md           padrão de nomes e roteiro de fotos
```

## Tarefas

| #   | Tarefa                                                          | Arquivo                 | Status   |
| --- | --------------------------------------------------------------- | ----------------------- | -------- |
| 1   | Preencher dados oficiais (usar a tabela da Fase 0)              | `empresa.json`          | Pendente |
| 2   | Fichas dos 8 modelos: descrição, medidas, acabamentos, foto     | `modelos/*.md`          | Pendente |
| 3   | Reunir 20+ fotos de obras com cidade, tipo e data               | `fotos/`, `obras/`      | Pendente |
| 4   | Escrever 6 a 10 obras com foto, cidade e tipo                   | `obras/*.md`            | Pendente |
| 5   | Diferenciais reais (prazo, garantia, montagem, projeto técnico) | `empresa.json`          | Pendente |
| 6   | Depoimentos com permissão                                       | `empresa.json`          | Pendente |
| 7   | Perguntas frequentes reais (as que o comercial mais ouve)       | `faq.md`                | Pendente |
| 8   | Mapa de redirecionamentos a partir da auditoria do site antigo  | `redirecionamentos.csv` | Pendente |
| 9   | Logo vetorial e cores                                           | `fotos/`                | Pendente |
| 10  | Decidir e agendar sessão fotográfica, se faltarem fotos boas    |                         | Pendente |

## Como conseguir as informações mais rápido

- **Modelos e FAQ:** perguntar ao comercial e ao vendedor. As dúvidas que eles respondem toda semana viram o FAQ.
- **Medidas e acabamentos:** pegar da produção ou da tabela de orçamento atual.
- **Fotos:** pedir à equipe de montagem e às construtoras parceiras o que tiverem. O WhatsApp da empresa costuma ter muitas fotos de obras.
- **Obras:** escolher as de maior valor visual e que representem os públicos (residencial, construtora, comercial).

## Critério para encerrar a Fase 1

- `empresa.json` sem campos pendentes.
- 8 modelos com descrição, medidas e pelo menos 1 foto boa.
- Pelo menos 6 obras cadastradas, com autorização de uso de imagem.
- FAQ com no mínimo 8 perguntas.
- Mapa de redirecionamentos completo.
- Logo vetorial disponível.

Então inicia a Fase 2 (design).
