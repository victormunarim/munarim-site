# DESIGN: Escadas Munarim

Identidade visual do site. Código em `src/styles/global.css` e `src/layouts/Base.astro`.

## Ideia

Concreto e engenharia: superfícies claras e planas, azul da marca como única cor forte, fotos reais de escadas como prova. Um só caminho de ação: WhatsApp.

## Cor

| Token          | Valor     | Uso                                                                   |
| -------------- | --------- | --------------------------------------------------------------------- |
| `--accent`     | `#284360` | azul do logo: topo, header, rodapé, carrossel, títulos do hero, botão |
| `--accent-ink` | `#ffffff` | texto sobre azul                                                      |
| `--bg`         | `#eef0f2` | fundo de página (cinza concreto)                                      |
| `--surface`    | `#ffffff` | faixa "pedido", cards                                                 |
| `--ink`        | `#1d1f21` | texto                                                                 |
| `--muted`      | `#4f5760` | texto secundário                                                      |
| `--line`       | `#d0d6dc` | bordas                                                                |

Estratégia: restrita. Um azul, neutros frios. Sem amarelo (testado e rejeitado).

## Tipografia

- Títulos: Barlow Condensed 700, caixa normal, `line-height` 1.05, `text-wrap: balance`. h1 `clamp(2.75rem, 7vw, 5rem)`; h2 `clamp(2rem, 4vw, 2.75rem)`.
- Corpo: Barlow 400/500/600, 17px, `line-height` 1.55.

## Forma e espaço

- Raio 6px. Largura limitada de 1200px (`.wrap`, gutter 20px) em topo, header, conteúdo e rodapé. Só o carrossel e os fundos coloridos vão de ponta a ponta.
- Seções com `.secao`: 64px de padding vertical no mobile, 88px a partir de 768px.
- Sem sombras decorativas. Profundidade por troca de fundo (cinza, branco, azul, preto).

## Estrutura global

1. **Topo** (azul, `.topbar`): telefone, WhatsApp vendas e e-mail à esquerda (telefone some abaixo de 768px, e-mail abaixo de 1024px; no celular só o WhatsApp); ícones das redes sociais à direita.
2. **Header** (azul, fixo): logo com "N anos" ao lado (idade da empresa calculada no build a partir de 2007; some abaixo de 420px), menu com a página atual sublinhada, botão "Pedir orçamento". Abaixo de 1024px o menu vira botão "Menu".
3. **Rodapé**: bloco azul com três colunas (logo e descrição; contato com endereço, telefone, WhatsApp atendimento geral, e-mail e horário; redes sociais), seguido de faixa preta com copyright e o contato de quem fez o site.

## Ritmo da página inicial

1. Carrossel azul logo abaixo do header, de ponta a ponta. 12 fotos escolhidas (`src/lib/selecao.ts`). Infinito, arrasta com o mouse, avança sozinho a cada 5 s (pausa com mouse, foco, toque ou aba oculta; desligado com reduzir movimento). No celular a altura é 60svh, máx. 480px. Legenda à esquerda e "1 / N · Ver todas" à direita ficam dentro da foto, sobre degradê escuro leve, alinhados à borda do conteúdo.
2. Hero cinza: título, uma frase, "N anos de mercado.", botão, foto grande sem moldura.
3. "Modelos" (quando houver modelos publicáveis).
4. "Como funciona": cinco etapas, numeral grande sobre régua azul de 3px.
5. "Pedido": faixa branca de ponta a ponta com lista e botão.
6. Avaliação no Google (quando houver link).

## Outras páginas

- **Fotos**: seleção curada agrupada por modelo (títulos h2), botão de orçamento no fim e barra fixa de WhatsApp no mobile. Botão de compartilhar sobre cada foto só em aparelhos de toque (`pointer: coarse`): compartilha o arquivo pelo menu nativo, ou abre diálogo com WhatsApp/Telegram/Facebook/X/e-mail.
- **Entre em Contato**: um caminho principal (botão WhatsApp), lista do que ter em mãos e lista de canais com ícone. WhatsApp, telefone e endereço são clicáveis (endereço abre o Google Maps); o ícone de copiar endereço aparece ao lado só com o mouse por perto (sempre visível em telas de toque). Sem redes sociais nem e-mail não confirmado nesta página.
- Não há política de privacidade nem formulário.

## Componentes

- Botão `.btn`: azul, texto branco, raio 6px, altura mínima 44px (`.btn-lg` 56px). Sobre azul, invertido (`.on-brand .btn`).
- Carrossel: scroll-snap com clones para o loop, slide azul-escuro `#1c2f44` com fundo desfocado da própria foto, setas discretas (círculo preto 25%, ícone branco 85%), legenda/contador/"Ver todas" dentro da foto.
- Ícones (`Icone.astro`: telefone, e-mail, local, relógio, copiar; `IconeWhatsapp`; `Redes`): traço fino, 14px no texto, 18px nas redes. Servem a ações e contatos, não a decoração.
- Barra fixa de WhatsApp no mobile, some quando um botão grande está visível e também aparece na página de fotos.

## Movimento

Um momento: foto e texto do hero chegam em sequência (`chega`, `chega-foto`). Etapas entram em cascata ao rolar. Tudo parte de estado visível; `prefers-reduced-motion` troca por fade.

## Regras

- Só fatos confirmados em texto; nada de preços, números ou depoimentos inventados.
- Foto real antes de adjetivo. Sem ilustração; ícones só onde indicam contato ou ação.
- Menos texto: uma ideia por bloco.
