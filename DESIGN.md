# DESIGN: Escadas Munarim

Identidade visual do site. Código em `src/styles/global.css` e `src/layouts/Base.astro`.

## Ideia

Concreto e engenharia: superfícies claras e planas, azul da marca como única cor forte, fotos reais de escadas como prova. Um só caminho de ação: WhatsApp.

## Cor

| Token          | Valor     | Uso                                                                  |
| -------------- | --------- | -------------------------------------------------------------------- |
| `--accent`     | `#284360` | azul do logo: header, rodapé, faixa de fotos, títulos do hero, botão |
| `--accent-ink` | `#ffffff` | texto sobre azul                                                     |
| `--bg`         | `#eef0f2` | fundo de página (cinza concreto)                                     |
| `--surface`    | `#ffffff` | faixa "pedido", cards                                                |
| `--ink`        | `#1d1f21` | texto                                                                |
| `--muted`      | `#4f5760` | texto secundário                                                     |
| `--line`       | `#d0d6dc` | bordas                                                               |

Estratégia: restrita. Um azul, neutros frios. Sem amarelo (testado e rejeitado).

## Tipografia

- Títulos: Barlow Condensed 700, caixa normal, `line-height` 1.05, `text-wrap: balance`. h1 `clamp(2.75rem, 7vw, 5rem)`; h2 `clamp(2rem, 4vw, 2.75rem)`.
- Corpo: Barlow 400/500/600, 17px, `line-height` 1.55.

## Forma e espaço

- Raio 6px. Largura máxima 1200px, gutter 20px.
- Seções com `.secao`: 64px de padding vertical no mobile, 88px a partir de 768px.
- Sem sombras decorativas. Profundidade por troca de fundo (cinza, branco, azul).

## Ritmo da página

1. Header azul fixo.
2. Hero cinza: título, uma frase, botão, foto grande sem moldura.
3. Bloco azul "Escadas que já instalamos": título, carrossel de largura total e botão, todos dentro do azul. Corte reto do cinza do hero para o azul, sem sobreposição.
4. "Como funciona": cinco etapas, numeral grande sobre régua azul de 3px.
5. "Pedido": faixa branca de ponta a ponta com lista e botão.
6. Avaliação no Google (quando houver link) e rodapé azul.

## Componentes

- Botão `.btn`: azul, texto branco, raio 6px, altura mínima 44px (`.btn-lg` 56px). Sobre azul, invertido (`.on-brand .btn`).
- Carrossel: scroll-snap, slide azul-escuro `#1c2f44` com fundo desfocado da própria foto, setas brancas, legenda e contador, "Ver todas".
- Barra fixa de WhatsApp no mobile, some quando um botão grande está visível.

## Movimento

Um momento: foto e texto do hero chegam em sequência (`chega`, `chega-foto`). Etapas entram em cascata ao rolar. Tudo parte de estado visível; `prefers-reduced-motion` troca por fade.

## Regras

- Só fatos confirmados em texto; nada de preços, números ou depoimentos inventados.
- Foto real antes de adjetivo. Sem ilustração, sem ícones decorativos.
- Menos texto: uma ideia por bloco.
