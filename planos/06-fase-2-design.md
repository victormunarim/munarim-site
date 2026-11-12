# 06 — Fase 2: Design

Duração prevista: 1 semana · Responsável: Victor Eduardo Peixer Munarim
Pré-requisitos: plano aprovado (Fase 0) e fotos de obras reunidas (Fase 1). Sem fotos reais boas o design não fecha.

Objetivo: sair com a estrutura de cada tela definida e a direção visual aprovada, pronta para construir na Fase 3.

## 1. Tipo de site

**Product** (fabricante de produto físico sob medida), na classificação da skill `design-taste-frontend`, que será usada na Fase 3. Se a direção quiser vender o serviço de projeto e montagem como carro-chefe, muda para `service`. Decisão a confirmar com a direção.

Ação principal: **Pedir orçamento pelo WhatsApp**. Região: todo o Sul.

## 2. Regras de design (valem para todas as telas)

Vêm da skill e substituem preferências de gosto:

1. **Fotografia real lidera.** O produto aparece grande e inteiro, uma foto diferente por seção, nunca a mesma vista duas vezes. Fotos de stock só como substituta provisória, listada como tal.
2. **Sem legenda sob imagens.** Créditos de foto em uma única linha no rodapé.
3. **Uma seção por tela:** o hero sozinho na primeira tela; cada seção ocupa uma ou duas telas (1440x900); título da seção primeiro e alinhado ao topo.
4. **Bordas esquerda e direita iguais:** todo bloco alinhado à mesma grade; sem rolagem lateral.
5. **Fundos chapados.** Nada de gradiente, efeito, shader, cena 3D ou loop: não é site de tecnologia. Movimento só em: entrada única do hero, 1 ou 2 momentos de destaque guiados por foto ou tipografia, e microinterações de hover (botão sobe e afunda, cartão sobe 2px, foto amplia 1,02–1,03, sem tilt nem carrossel).
6. **Sem violeta ou lavanda** em nenhum elemento próprio.
7. **Um sistema só:** um par de botões, um estilo de cartão, uma escala de raios, uma escala de títulos.
8. **Texto:** o h1 diz o que se vende e para quem, com um fato concreto na primeira tela. Botões em verbo + objeto ("Pedir orçamento"). Nada de frases de efeito, depoimentos ou números inventados.
9. **Mobile:** uma coluna aos 390 px, botões em largura total, menu em tela cheia, alvos de toque de 44 px, barra de ação fixa com "Pedir orçamento".

**Contatos nas páginas publicadas:** a skill, por padrão, esconde número da rua, CEP e telefone em páginas de demonstração. No site real da Munarim vale a decisão da empresa: publicar telefone, WhatsApp e endereço completo, que são o objetivo do site.

## 3. Cor, tipografia e raio

Não se escolhe por gosto: a skill sorteia três paletas e pares de fontes feitos para o ramo, com histórico, e usa a primeira. Há duas opções:

- **Cores da marca da Munarim** (se o logo tiver cores próprias): usa-se o comando `brand` com as cores do logo. É o caminho preferido.
- **Paleta sorteada** se o logo não definir cores.

A paleta citada em `02-design-e-tecnologia.md` (cinzas de concreto + acento azul `#2c455e`, tirado da logo) é só ponto de partida. A marca é azul, então a opção "cores da marca" (`start.mjs brand`) é a indicada. Raio: `soft` por padrão, `sharp` se quiser um ar mais industrial. Isso fecha no começo da Fase 3.

## 4. Telas e estrutura

Cada bloco abaixo é uma seção de 1 ou 2 telas. Wireframes em texto; os de desktop valem para 1440 px.

### Home

```
+------------------------------------------------------+
| LOGO   Escadas  Obras  Como funciona   |  [Pedir orçamento]
|        Sobre  Contato                                |
+------------------------------------------------------+
| HERO (tela inteira)                                  |
|  H1: Escadas pré-moldadas de concreto sob medida     |
|  para obras no Sul  (texto final: Fase 1/3)          |
|  1 fato confirmado (ex.: ano de fundação)            |
|  [Pedir orçamento]   Ver obras                       |
|  Foto grande: escada polida em obra, sem legenda     |
+------------------------------------------------------+
| MODELOS (1-2 telas)                                  |
|  Grade 4x2: foto + nome de cada modelo, link         |
+------------------------------------------------------+
| POR QUE CONCRETO PRÉ-MOLDADO (1 tela)                |
|  3 afirmações confirmadas + 1 foto de detalhe        |
+------------------------------------------------------+
| COMO FUNCIONA (1-2 telas)  <- candidato a momento    |
|  medição > projeto > fabricação > entrega > montagem|
|  uma foto por etapa                                  |
+------------------------------------------------------+
| OBRAS EM DESTAQUE (1 tela)                           |
|  3 a 6 fotos grandes com cidade e tipo               |
+------------------------------------------------------+
| ATENDIMENTO NO SUL (1 tela)                          |
|  mapa de SC, PR, RS, sede em São José                |
+------------------------------------------------------+
| FAQ (1 tela)  4 a 6 perguntas                        |
+------------------------------------------------------+
| FECHAMENTO: chamada final + [Pedir orçamento] + WhatsApp |
| RODAPÉ: endereço, contatos, redes, créditos de foto  |
+------------------------------------------------------+
```

Momentos de destaque (1 ou 2 por página, nenhum além): (a) "Como funciona" como sequência de fotos que se revelam ao rolar; (b) o fechamento com o nome da empresa em tipografia grande. Definidos no sorteio da Fase 3.

### Home no celular (390 px)

```
[logo]            [menu]
HERO: foto em cima, h1, fato,
[Pedir orçamento] (largura total)
Modelos (1 coluna, 8 cartões)
...
Barra fixa no rodapé: [Pedir orçamento no WhatsApp]
```

### Página de modelo (`/escadas/<slug>`)

```
HERO: foto grande do modelo + h1 (nome) + 1 frase + [Pedir orçamento deste modelo]
DETALHES: medidas, acabamentos (só dados confirmados), ícones de opções
GALERIA: 3 a 4 fotos diferentes (conjunto, degrau, corrimão, vista)
OBRAS COM ESTE MODELO: 2 a 3 obras
OUTROS MODELOS: 3 cartões
FECHAMENTO: [Pedir orçamento]
```

O botão abre o WhatsApp com a mensagem já preenchida com o nome do modelo.

### Obras (`/obras`)

Grade de fotos grandes com filtro simples (residencial, construtora, comercial). Cada obra: foto, cidade e tipo. Página da obra: galeria, modelo usado, [Pedir orçamento]. Só entra obra com `autorizacaoImagem: true`.

### Orçamento (`/orcamento`)

Formulário curto: nome, WhatsApp, cidade, tipo, modelo (opcional), mensagem, anexo opcional. Dois botões: **Enviar por WhatsApp** (mensagem pronta) e **Enviar por e-mail**. Confirmação só depois do envio de fato, e erro sob o campo.

### Demais páginas

Como funciona, Sobre, Contato (mapa, telefone, horário), FAQ e Privacidade seguem a mesma grade e o mesmo sistema. Contato usa mapa estático com o endereço, sem script pesado.

## 5. Fotografia necessária para fechar o design

Mínimo para a Fase 3 começar sem fotos provisórias:

- 1 foto de hero, horizontal e muito boa.
- 1 foto principal por modelo (8).
- 1 foto de detalhe (degrau, junta, acabamento).
- 4 a 5 fotos de etapas do processo (fábrica, cura, polimento, entrega, montagem).
- 6 fotos de obras diferentes com cidade e tipo.
- 1 foto de fachada e equipe.

Especificações em `conteudo/fotos/LEIAME.md`. Sem isso, a skill usa fotos de stock como substitutas, listadas no relatório final, e a troca vira pendência.

## 6. Entregas da Fase 2

| #   | Entrega                                                      | Status                                                                                       |
| --- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------- |
| 1   | Tipo de site confirmado (product ou service)                 | Pendente                                                                                     |
| 2   | Direção de cor decidida: marca da Munarim ou paleta sorteada | Azul da marca `#2c455e` aplicado em `global.css` e no favicon; confirmar com o logo vetorial |
| 3   | Estrutura de telas deste documento aprovada                  | Pendente                                                                                     |
| 4   | Lista de fotos recebidas vs. faltando                        | Pendente (depende da Fase 1)                                                                 |
| 5   | Texto do h1 e do fato da primeira tela, escrito e confirmado | Pendente                                                                                     |

## 7. Como a Fase 3 começa (para registro)

Quando as fotos e o texto estiverem prontos, a Fase 3 segue a skill: escrever todos os textos primeiro; planejar a página por telas; sortear hero, paleta, fontes e momentos; montar a página; rodar o checador e a porta de verificação (`GATE`) até passar. O stack continua sendo o definido em `02-design-e-tecnologia.md`: Astro + Tailwind em Cloudflare Pages. A skill gera HTML estático, e usá-la dentro do Astro exige copiar o kit para `public/assets`. Isso será avaliado no início da Fase 3.

## Critério para encerrar a Fase 2

Estrutura de telas aprovada pela direção, direção de cor definida, fotos mínimas em mãos, texto do hero confirmado.
