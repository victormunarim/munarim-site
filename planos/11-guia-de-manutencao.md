# 11 — Guia de manutenção

Para quem mantém o site (hoje: Victor Eduardo Peixer Munarim). Site estático em Astro, sem painel: o conteúdo mora em arquivos e é publicado por deploy.

## Como o projeto é organizado

```
conteudo/           tudo que muda no dia a dia (textos e dados)
  empresa.json      contatos, endereço, redes, região atendida
  faq.md            perguntas frequentes (ainda não ligado à página)
  modelos/*.md      um arquivo por modelo de escada
  redirecionamentos.csv   URLs antigas -> novas
  fotos/            fotos originais e regras (LEIAME.md)
src/                código do site (layout, páginas, estilo)
public/             robots, favicon, _redirects, _headers
scripts/            utilidades
planos/             documentação do projeto
```

## Rodar no seu computador

Instruções completas, com requisitos, parar o servidor e problemas comuns, no `README.md` da raiz do projeto. Resumo:

```
npm install        # só na primeira vez
npm run dev        # http://localhost:4321, roda em segundo plano (npx astro dev stop para parar)
npm run build      # gera dist/ como será publicado
npm run preview    # confere a versão de produção
```

O `npm run dev` mostra tudo, mesmo o que não está pronto. O site publicado mostra só o que está com `status: pronto`.

## Tarefas comuns

**Mudar telefone, WhatsApp, e-mail, endereço ou horário.** Editar `conteudo/empresa.json`. Marcar `"confirmado": true` no campo depois de conferir. Os dados estruturados do Google só usam campos confirmados.

**Publicar ou atualizar um modelo.** Editar `conteudo/modelos/<modelo>.md`: preencher `resumo`, `medidas`, `acabamentos` e o texto abaixo do cabeçalho, e trocar `status: pendente` por `status: pronto`. Só então a página aparece no site.

**Redirecionar uma URL antiga.** Acrescentar uma linha em `conteudo/redirecionamentos.csv` (`url_antiga,url_nova,observacao`) e rodar `node scripts/gerar-redirects.mjs`.

**Mudar cores, fontes ou botões.** Editar o bloco `:root` em `src/styles/global.css`.

**Mudar o texto de uma página.** Editar o arquivo em `src/pages/` (por exemplo `sobre.astro`). Os textos de `home`, `sobre`, `como-funciona`, `perguntas-frequentes` e `politica-de-privacidade` ainda têm marcadores `[PENDENTE]` e precisam do conteúdo confirmado.

> Limite atual: a exibição de fotos nas páginas ainda não foi construída (etapa 3b em `07-fase-3-desenvolvimento.md`). Depois dela este guia ganha a seção de fotos.

## Publicar uma mudança

Depois que o repositório e a Cloudflare Pages estiverem ligados (Fase 5): fazer a alteração, rodar `npm run build` para ver se não há erro, e enviar para o repositório (`git push`). A Cloudflare gera e publica o site sozinha, em alguns minutos. Mudanças em uma ramificação secundária geram uma versão de teste, que serve para conferir antes de publicar.

## Voltar atrás

Na Cloudflare Pages, a aba de deploys mostra todas as versões. Escolher uma anterior e reverter leva ao site antigo em segundos, sem mexer em código.

## Acessos que precisam estar guardados (cofre de senhas da empresa)

Registro.br (domínio), DNS, Cloudflare, repositório git, Google (Meu Negócio, Search Console, Analytics), Facebook da empresa. Pelo menos duas pessoas devem ter acesso, para o site não depender só de uma.

## Rotina sugerida

| Frequência           | Tarefa                                                                                     |
| -------------------- | ------------------------------------------------------------------------------------------ |
| Toda semana          | Clicar no botão de WhatsApp do header e conferir que abre a conversa com a mensagem pronta |
| Todo mês             | Abrir o site no celular; conferir telefone, WhatsApp e endereço; ver Search Console        |
| A cada obra entregue | Pedir fotos e autorização; adicionar ao modelo correspondente                              |
| A cada 6 meses       | `npm outdated` e atualizar dependências; rodar `npm run build` e conferir                  |
| Todo ano             | Renovar o domínio (conferir a data no registro.br)                                         |
