# 01 — Arquitetura e conteúdo

## Mapa do site

```
/                      Home
/escadas               Fotos (menu "Fotos"; todos os modelos)
  /escadas/caracol
  /escadas/reta
  /escadas/leke
  /escadas/mista
  /escadas/premium
  /escadas/viga-central
  /escadas/viga-lateral
  /escadas/cascata-in-loco
/corrimaos-e-guarda-corpos
/como-funciona         Processo: medição → projeto → fabricação → entrega → montagem
/sobre                 Empresa, história, fábrica, equipe
/orcamento             Formulário curto + WhatsApp
/contato               Endereço, mapa, telefone, horário
/perguntas-frequentes  FAQ (também ajuda no SEO)
/politica-de-privacidade   (LGPD)
```

Navegação principal: Fotos · Como funciona · Sobre · Contato, mais botão fixo "Pedir orçamento".

## Home (uma seção por tela)

1. **Hero**: foto real de escada polida em obra, promessa em uma frase, botão "Pedir orçamento" e link "Ver fotos".
2. **Modelos**: grade com os 8 modelos e foto de cada.
3. **Por que concreto pré-moldado**: durabilidade, acabamento, prazo de montagem (só afirmações confirmadas internamente).
4. **Como funciona**: 4 a 5 passos.
5. **Números**: anos de mercado, escadas entregues (somente se confirmados).
6. **FAQ curto**.
7. **Chamada final** com orçamento, WhatsApp e mapa.

## Página de modelo (template)

Foto principal e galeria · descrição curta · onde combina melhor · medidas e opções de acabamento (cor, corrimão, guarda-corpo) · ficha técnica (PDF opcional) · modelos relacionados · botão de orçamento já preenchido com o nome do modelo.

## Orçamento

Campos mínimos: nome, WhatsApp, cidade, tipo (residencial/construtora/comércio), modelo (opcional), mensagem e anexo opcional (planta ou foto). Envio por e-mail e botão alternativo que abre o WhatsApp com mensagem pronta. Consentimento LGPD no formulário.

## Conteúdo: regra de ouro

Nenhum texto, número, prazo, depoimento ou foto entra sem confirmação interna (dono, comercial ou produção da Munarim). Onde faltar material, usar marcador visível `[PENDENTE]` em ambiente de desenvolvimento, nunca texto inventado em produção.

## SEO

- Cobertura: todo o Sul (SC, PR e RS). Prioridade de SEO na Grande Florianópolis (São José, Florianópolis, Palhoça, Biguaçu), onde fica a sede, e páginas de região para Curitiba, Porto Alegre, Joinville, Blumenau, Itajaí, Criciúma e Londrina, conforme a Munarim confirmar a entrega. Páginas de cidade só com conteúdo real (obras feitas ali), nunca páginas-cópia só para ranquear.
- Palavras-chave: escada pré-moldada, escada de concreto, escada caracol de concreto, escada sob medida, corrimão e guarda-corpo, fábrica de escadas Florianópolis.
- Dados estruturados `LocalBusiness` + `Product`, sitemap, robots, Open Graph.
- Ficha no Google Meu Negócio atualizada e ligada ao site (alta prioridade para busca local).
- Imagens em AVIF/WebP, com `alt` descritivo.
- Redirecionamentos 301 das URLs do WordPress atual para as novas (mapear antes do lançamento).

## Analytics e conversão

Google Analytics 4 ou Plausible; eventos: clique no WhatsApp, envio de formulário, clique em telefone, download de catálogo. Tag Manager apenas se houver campanha paga.
