# Escadas Munarim — site institucional

Site estático da Escadas Munarim (escadas pré-moldadas de concreto sob medida, São José/SC), feito com Astro 7 e Tailwind 4. Hospedagem prevista: Cloudflare Pages.

Status: base técnica pronta, com conteúdo, fotos e visual finais ainda pendentes. O plano completo está em [`planos/`](planos/00-visao-geral.md).

## Requisitos

- **Node.js 22.23.4 ou mais novo** (testado com Node 24) e npm. Confira com `node -v`.
- Nenhum banco de dados, painel ou servidor próprio.

## Rodar no computador

```bash
npm install          # só na primeira vez, ou quando o package.json mudar
npm run dev          # abre o site em http://localhost:4321
```

No Astro 7 o servidor de desenvolvimento roda **em segundo plano**: o comando devolve o terminal logo e mostra o endereço. Para gerenciar:

```bash
npx astro dev status   # informa se está rodando e em qual porta
npx astro dev logs     # mostra o log
npx astro dev stop     # para o servidor
```

Para escolher outra porta: `npm run dev -- --port 4322`.

Em desenvolvimento o site mostra **tudo**, inclusive modelos com `status: pendente` e os marcadores vermelhos entre colchetes (ex.: `[foto de hero]`) que indicam conteúdo ainda não confirmado.

## Gerar e conferir a versão que será publicada

```bash
npm run build        # gera a pasta dist/
npm run preview      # serve dist/ em http://localhost:4321
```

A versão de produção **esconde** o que não está pronto: modelos sem `status: pronto` e todos os marcadores. Por isso, enquanto o conteúdo não for preenchido, a página de fotos aparece como "em preparação". Sempre confira o `preview` antes de publicar.

## Onde mexer

| Para mudar                        | Edite                                                                       |
| --------------------------------- | --------------------------------------------------------------------------- |
| Contatos, endereço, redes, região | `conteudo/empresa.json`                                                     |
| Um modelo de escada               | `conteudo/modelos/<modelo>.md`                                              |
| Textos das páginas                | `src/pages/*.astro`                                                         |
| Cores, fontes, botões             | bloco `:root` em `src/styles/global.css`                                    |
| Cabeçalho, rodapé, SEO            | `src/layouts/Base.astro`                                                    |
| Redirecionamentos de URLs antigas | `conteudo/redirecionamentos.csv`, depois `node scripts/gerar-redirects.mjs` |

Mais receitas em [`planos/11-guia-de-manutencao.md`](planos/11-guia-de-manutencao.md).

## Orçamento

Só por WhatsApp: o botão do header abre a conversa com mensagem pronta (número em `conteudo/empresa.json`). Não há formulário nem função no servidor. O formulário e a função de e-mail antigos estão guardados em `arquivo/`, fora do build.

## Publicar

Ainda não há repositório git nem projeto na Cloudflare. O roteiro está em [`planos/09-fase-5-lancamento.md`](planos/09-fase-5-lancamento.md). Configuração na Cloudflare Pages: comando de build `npm run build`, pasta de saída `dist`.

## Problemas comuns

| Sintoma                                          | Causa e solução                                                                 |
| ------------------------------------------------ | ------------------------------------------------------------------------------- |
| `Node.js vX is not supported`                    | Versão do Node abaixo de 22.23.4. Atualizar o Node                              |
| `EADDRINUSE` ou porta ocupada                    | Outra instância rodando. `npx astro dev stop` ou usar `--port`                  |
| Página `/escadas/<modelo>` dá 404 no preview     | O modelo está com `status: pendente`. Marcar `pronto` e refazer `npm run build` |
| Alterei o CSV de redirecionamentos e nada mudou  | Rodar `node scripts/gerar-redirects.mjs` e refazer o build                      |
| Estilo quebrado depois de atualizar dependências | Apagar `node_modules` e `.astro`, rodar `npm install`                           |

## Estrutura

```
conteudo/    textos e dados editáveis
src/         layout, páginas, estilo e leitura do conteúdo
arquivo/     formulário e função de e-mail desativados
public/      robots, favicon, _redirects, _headers
scripts/     utilidades (gerar redirecionamentos)
planos/      planejamento e documentação do projeto
```
