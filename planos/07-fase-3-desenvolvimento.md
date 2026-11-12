# 07 — Fase 3: Desenvolvimento

Início: 2026-11-09 · Responsável: Victor Eduardo Peixer Munarim

Divisão em duas etapas, porque a parte visual depende de fotos, logo e texto que ainda não existem.

## Etapa 3a — Base técnica (FEITA)

Projeto Astro 7 + Tailwind 4 na raiz, com build estático passando (11 páginas).

| Item                  | Onde                                                       | Observação                                                                                                                          |
| --------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Configuração          | `astro.config.mjs`                                         | Site estático, sitemap automático, URLs sem barra final                                                                             |
| Conteúdo              | `src/content.config.ts`                                    | Lê `conteudo/modelos/*.md` (arquivos com `_` são ignorados)                                                                         |
| Dados da empresa      | `src/lib/empresa.ts`                                       | Lê `conteudo/empresa.json`; gera links do WhatsApp com mensagem pronta                                                              |
| Regra de publicação   | `empresa.ts` (`publicavel`)                                | Em produção só entra o que tem `status: pronto`                                                                                     |
| Marcador `[PENDENTE]` | `src/components/Pendente.astro`                            | Aparece só em desenvolvimento, nunca no site publicado                                                                              |
| Layout                | `src/layouts/Base.astro`                                   | Cabeçalho, menu móvel, rodapé, barra fixa de WhatsApp no celular, SEO, Open Graph, dados estruturados que só usam dados confirmados |
| Estilo                | `src/styles/global.css`                                    | Tokens **provisórios** (cor, raio, botões, cartões, movimento reduzido). Trocar só o bloco `:root` quando a direção de cor fechar   |
| Páginas               | `src/pages/`                                               | Home, escadas (menu "Fotos": lista e modelo), como-funciona, sobre, contato, orçamento, perguntas-frequentes, privacidade, 404      |
| Formulário            | `src/pages/orcamento.astro` + `functions/api/orcamento.ts` | WhatsApp primário; formulário com honeypot, LGPD, Turnstile opcional e envio por e-mail (Resend)                                    |
| SEO técnico           | `public/robots.txt`, sitemap                               |                                                                                                                                     |

Comandos:

```
npm install
npm run dev       # mostra marcadores [PENDENTE] e tudo, mesmo sem status pronto
npm run build     # gera dist/ como será publicado
npm run preview
```

## Etapa 3b — Visual e conteúdo final (PENDENTE)

Depende das Fases 1 e 2. Segue a skill `design-taste-frontend`: escrever todos os textos, planejar por telas, sortear hero, paleta, fontes e momentos, montar, rodar o checador e o `GATE` até passar.

Pontos a resolver no início da 3b:

- **A skill gera HTML estático com seu kit em `assets/`.** Decidir se o kit é copiado para `public/assets` e as páginas Astro usam o markup dela, ou se as regras dela são seguidas só como guia. Recomendação: usar o kit em `public/assets`, como a própria skill prevê para projetos existentes.
- **Fotos:** otimizar (AVIF/WebP, `srcset`) e pôr em `src/assets` ou `public`. Sem foto real, a home segue sem imagem.
- **Textos finais:** h1 e fato da primeira tela, descrições de etapas, sobre, FAQ, privacidade (esta com revisão jurídica).
- **Imagem de compartilhamento:** criar `public/share.jpg` (1200x630). Hoje o `og:image` aponta para um arquivo que não existe.
- **Favicon e logo** vetorial.

## Pendências de configuração (antes do lançamento)

| Item                    | O que fazer                                                                                                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Cloudflare Pages        | Criar projeto ligado ao repositório; build `npm run build`, saída `dist`                                                                                                 |
| Variáveis do formulário | `RESEND_API_KEY`, `ORCAMENTO_DESTINO`, `ORCAMENTO_ORIGEM` (remetente verificado no Resend), `TURNSTILE_SECRET` (secrets); `PUBLIC_TURNSTILE_SITEKEY` (variável de build) |
| WhatsApp                | Confirmar o número em `conteudo/empresa.json`; sem número cadastrado, os botões levam ao formulário                                                                      |
| Git                     | Esta pasta ainda não é repositório. Criar o repositório em nome da empresa antes de ligar à Cloudflare                                                                   |
| Redirecionamentos 301   | Converter `conteudo/redirecionamentos.csv` em `public/_redirects` depois da auditoria do site antigo                                                                     |
| Analytics               | Escolher GA4 ou Plausible e adicionar ao `Base.astro`                                                                                                                    |

## O que NÃO foi verificado

- O formulário e a função de e-mail não foram testados de ponta a ponta (sem chaves do Resend e sem Cloudflare).
- Layout em celular e tablet não foi conferido no navegador. O visual atual é provisório e sem fotos.
- Acessibilidade e performance (Lighthouse) só serão medidas na 3b.
- `functions/` usa o tipo `PagesFunction`, que exige `@cloudflare/workers-types` para o editor; não afeta o build do site.

## Critério para encerrar a Fase 3

Site completo com conteúdo e fotos reais, `npm run build` sem erro, checador e `GATE: PASS`, formulário testado em ambiente de homologação da Cloudflare.
