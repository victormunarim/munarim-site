# 02 — Design e tecnologia

## Direção visual (proposta, a validar)

- **Conceito:** "concreto como acabamento nobre". Industrial, limpo e arquitetônico, longe do visual de loja de material de construção.
- **Paleta:** cinzas de concreto (claro a grafite), branco quente, acento no azul da marca, `#2c455e` (média da faixa azul da logo encontrada no diretório Akilar, imagem de 140 px; confirmar com o arquivo vetorial da empresa). Contraste com branco 9,9:1, passa AA.
- **Tipografia:** uma família sem serifa geométrica para títulos e uma neutra legível para texto (ex.: Inter, DM Sans ou similar, auto-hospedadas).
- **Fotografia:** protagonista do site. Fotos reais de obra, com luz natural e ângulos que mostrem a geometria da escada. Se a empresa não tiver fotos boas, agendar uma sessão fotográfica curta em 3 ou 4 obras, que rende mais que qualquer ajuste de layout. Como a fábrica e as obras são acessíveis internamente, isso é viável.
- **Movimento:** discreto. Entrada suave do hero, revelação ao rolar e zoom leve em fotos. Respeitar `prefers-reduced-motion`.
- **Layout:** uma ideia por seção, margens generosas, grade consistente, botão de orçamento sempre visível no mobile.

## Logo e marca

Reaproveitar o logo atual da Munarim. Se estiver em baixa resolução, pedir o vetorial (SVG/AI/PDF).

## Stack recomendada (minha escolha)

| Camada     | Escolha                                                                                        | Motivo                                                                                                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework  | Astro                                                                                          | Site majoritariamente estático, HTML leve, ótimo SEO                                                                                                                                    |
| Estilo     | Tailwind CSS                                                                                   | Rapidez e consistência                                                                                                                                                                  |
| Conteúdo   | Markdown/JSON (content collections) para modelos e obras                                       | Simples, versionado no git                                                                                                                                                              |
| Edição     | Sem CMS e sem login. Conteúdo alterado no código e publicado por deploy automático a cada push | Decisão: não há edição por usuário                                                                                                                                                      |
| Formulário | Cloudflare Pages Function que envia o e-mail (ex.: Resend) + Turnstile + atalho WhatsApp       | Sem servidor próprio, tudo na Cloudflare                                                                                                                                                |
| Imagens    | Otimização do Astro (AVIF/WebP, srcset)                                                        | Performance                                                                                                                                                                             |
| Hospedagem | **Cloudflare Pages** (decidido)                                                                | Plano grátis com uso comercial permitido, banda ilimitada, CDN com boa latência no Brasil, DNS e Turnstile no mesmo painel. Vercel descartada: o plano grátis não permite uso comercial |
| Domínio    | escadasmunarim.com.br (já existe)                                                              | Troca de DNS no lançamento                                                                                                                                                              |
| Analytics  | GA4 ou Plausible                                                                               | A escolher                                                                                                                                                                              |

## Qualidade e acessibilidade

- Lighthouse ≥ 95 em Performance, Acessibilidade, Boas práticas e SEO no mobile.
- Navegação por teclado, foco visível, `alt` em todas as imagens, formulários com rótulos.
- Testes em Chrome, Safari iOS, Firefox e Edge; larguras de 360 px a 1920 px.
- Banner de cookies somente se houver cookies de analytics que exijam consentimento.

## Segurança e LGPD

Sem banco de dados nem login, o que reduz a superfície de ataque. Proteção anti-spam no formulário (honeypot + Turnstile). Política de privacidade com finalidade, retenção e contato do responsável.
