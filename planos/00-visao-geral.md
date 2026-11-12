# Escadas Munarim — Plano do site institucional

Data: 2026-11-09 · Status: rascunho para aprovação (nada foi construído)

## 1. Empresa (dados levantados na internet)

| Item              | Dado                                                                                                        | Confiança                                                                                                    |
| ----------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| Atividade         | Fabricação e comércio de escadas pré-moldadas de concreto polido, sob medida                                | Alta (AECweb, Facebook, site oficial via buscas)                                                             |
| Local             | São José/SC, Grande Florianópolis                                                                           | Alta                                                                                                         |
| Endereço          | Rua Ervino Schmitt, 115, Sertão do Maruim, São José/SC, CEP 88122-453                                       | Alta (ponto da empresa no Google Maps, link do Linktree oficial; o endereço antigo dos diretórios era outro) |
| Telefone          | (48) 3257-2015                                                                                              | Média                                                                                                        |
| WhatsApp          | (48) 99981-0707                                                                                             | Média (diretórios)                                                                                           |
| E-mail            | vendas@escadasmunarim.com.br                                                                                | Alta                                                                                                         |
| Razão social      | Fabricação e Comércio de Escadas Munarim Ltda                                                               | Alta (Serasa)                                                                                                |
| CNPJ              | 08.689.875/0001-54 (matriz). O 0002-35 consta como baixado                                                  | Média                                                                                                        |
| Fundação          | 19/11/2009 (Serasa)                                                                                         | Média                                                                                                        |
| Porte             | 11 a 50 funcionários (ZoomInfo)                                                                             | Baixa                                                                                                        |
| Clientes          | Construtoras, pessoas físicas, comércio                                                                     | Média                                                                                                        |
| Redes             | Facebook (~2,4 mil seguidores). Instagram não encontrado                                                    | Média                                                                                                        |
| Linha de produtos | Caracol, reta, leke, mista, premium, viga central, viga lateral, cascata in loco; corrimãos e guarda-corpos | Média                                                                                                        |

**Divergências a confirmar internamente (pela equipe da Munarim) antes de publicar:** tempo de mercado (13 ou 15 anos; pela fundação de 2009 seriam ~17), endereço (um diretório lista São Paulo, provavelmente errado), CNPJ ativo, números de telefone e WhatsApp, região efetivamente atendida (um anúncio cita Curitiba).

Nota: o site atual (escadasmunarim.com.br, WordPress) não pôde ser aberto na pesquisa. O repositório público `theusinshow/escadas-munarim` NÃO é trabalho nosso e não será usado nem copiado.

**Contexto do projeto:** o site é feito por alguém de dentro da empresa. Os dados, fotos e textos são levantados internamente. Não há cliente externo nem aprovação de terceiros. O site não terá edição por usuários (sem CMS, sem login): todo conteúdo é alterado no código e publicado por quem mantém o projeto, Victor Eduardo Peixer Munarim.

## 2. Objetivo e público

Decidido: o site existe para gerar pedidos de orçamento qualificados, com atendimento em todo o Sul (SC, PR e RS).

- Conversão principal: orçamento via WhatsApp.
- Conversão secundária: formulário com envio por e-mail; ligação.
- Público A, construtoras e arquitetos: precisam de catálogo técnico, prazos, capacidade e obras entregues.
- Público B, pessoa física: precisa de inspiração, fotos reais e um passo simples para pedir preço.

## 3. Metas, não-metas e anti-metas

**Metas**

- Transmitir solidez industrial e acabamento premium.
- Mostrar o produto com fotografia real de obra.
- Reduzir o atrito para pedir orçamento (máximo 2 cliques/toques a partir de qualquer página).
- Aparecer no Google para "escada pré-moldada Florianópolis / São José / Grande Florianópolis".
- Carregar rápido no celular (LCP < 2,5 s em 4G).

**Não-metas (v1)**

- E-commerce ou preço online.
- Área de cliente, login, blog extenso.
- Configurador 3D de escadas (candidato a v2).

**Anti-metas** (falha mesmo que "funcione")

- Visual de template genérico, com banco de imagens evidente.
- Textos inventados: números, prazos, depoimentos ou obras que a equipe da Munarim não confirmou.
- Formulário longo que afasta o cliente.

## 4. Abordagens consideradas

| #   | Abordagem                                                         | Prós                                                                                                                   | Contras                                                                                            |
| --- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| A   | **Site estático com Astro + Tailwind, conteúdo em Markdown/JSON** | Muito rápido, ótimo SEO, hospedagem grátis ou barata, sem servidor nem painel para manter, superfície de ataque mínima | Mudança de conteúdo exige editar arquivos e publicar                                               |
| B   | WordPress novo com tema sob medida                                | Edição por painel                                                                                                      | Lento, exige manutenção e segurança, é o que se quer substituir; edição por usuário foi descartada |
| C   | Next.js com CMS headless (Sanity/Strapi)                          | Edição amigável                                                                                                        | Peso e custo sem benefício, já que não haverá edição por usuário                                   |

**Recomendação: A**, sem CMS. Como não há edição por usuário, o conteúdo fica em arquivos versionados no repositório.

## 5. Índice dos planos

- `01-arquitetura-e-conteudo.md`: mapa do site, páginas, conteúdo e SEO.
- `02-design-e-tecnologia.md`: identidade visual, UI, stack, hospedagem, performance.
- `03-cronograma-e-pendencias.md`: fases, entregas, material a reunir internamente, riscos.
