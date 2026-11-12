# 08 — Fase 4: QA

Início: 2026-11-09 · Responsável: Victor Eduardo Peixer Munarim · Duração prevista: 3–5 dias

A Fase 4 completa só pode ser fechada com o site final (fotos, textos e visual da Fase 3b). Esta primeira passada testa a base técnica atual. Repetir tudo na versão final.

## Passada 1: base técnica (2026-11-09)

Build de produção (`npm run build`) servido com `astro preview` e testado com Lighthouse (Chrome headless, perfil mobile).

| Página    | Performance | Acessibilidade | Boas práticas   | SEO |
| --------- | ----------- | -------------- | --------------- | --- |
| Home      | 100         | 100            | 96 → corrigido* | 100 |
| Orçamento | 100         | 100            | 96 → corrigido* | 100 |
| Contato   | 100         | 100            | 96 → corrigido* | 100 |

\* A única falha era `favicon.ico` com 404. Foi criado `public/favicon.svg` (provisório) e ligado no `<head>`. O build foi refeito e o link confere, mas o Lighthouse não foi rodado de novo depois da correção.

Também verificado no build:

- 11 páginas com `title`, `description`, 1 `h1` e `lang="pt-BR"`.
- Nenhum link interno quebrado.
- Nenhum marcador `[PENDENTE]` no site de produção.
- Sitemap gerado (`sitemap-index.xml`) e referenciado no `robots.txt`.

Os números altos refletem uma página com pouco conteúdo, sem fotos e sem fontes externas. Vão mudar quando entrarem as fotos: o alvo continua ≥ 95 no mobile.

## Pendente: testes que exigem o site final

### Automáticos (repetir)

- [ ] Lighthouse mobile ≥ 95 em todas as categorias, em Home, modelo, obras, orçamento e contato.
- [ ] Checador e `GATE: PASS` da skill `design-taste-frontend`.
- [ ] Peso das imagens (AVIF/WebP, sem original de 5 MB), LCP < 2,5 s em 4G.
- [ ] Links externos (WhatsApp, Facebook, e-mail) funcionando.
- [ ] Sitemap e `robots.txt` publicados no domínio real.

### Dispositivos e navegadores (manual)

- [ ] Chrome, Safari iOS, Firefox e Edge.
- [ ] Larguras 320, 390, 768, 1024 e 1440. Sem rolagem lateral.
- [ ] Menu móvel abre, fecha e é usável com o dedo; barra fixa do WhatsApp não cobre conteúdo nem o rodapé.
- [ ] Alvos de toque de 44 px.

### Acessibilidade (manual)

- [ ] Navegar só com teclado: "Ir para o conteúdo" é o primeiro foco, o foco é sempre visível e nunca fica escondido sob o cabeçalho.
- [ ] Leitor de tela: botões e campos com nome, `alt` em todas as fotos, ordem de títulos sem saltos.
- [ ] Contraste do texto em todos os fundos, depois de definidas as cores finais.
- [ ] `prefers-reduced-motion` desliga as animações.

### Formulário e WhatsApp (precisa de configuração na Cloudflare)

- [ ] Botão do WhatsApp abre a conversa com a mensagem pronta, no celular e no desktop.
- [ ] No botão de um modelo, a mensagem leva o nome do modelo.
- [ ] Envio válido: e-mail chega a `ORCAMENTO_DESTINO` e a tela só confirma depois do envio real.
- [ ] Envio com campo vazio: o erro aparece sob o campo.
- [ ] Sem marcar o LGPD: o envio é bloqueado.
- [ ] Honeypot preenchido: nenhum e-mail sai.
- [ ] Turnstile ativo: envio sem validação é recusado.
- [ ] Falha de envio: aparece a mensagem que leva ao WhatsApp.

### Conteúdo

- [ ] Revisão de todo texto em voz alta, com ortografia e acentos.
- [ ] Todo dado confere com `conteudo/empresa.json` já confirmado (telefone, endereço, CNPJ, horário).
- [ ] Nenhuma obra ou foto sem autorização de imagem.
- [ ] Nenhuma afirmação sem confirmação interna (prazos, garantia, atendimento em todo o Sul).
- [ ] Política de privacidade revisada por quem entende de LGPD.

### SEO e lançamento

- [ ] `og:image` (`public/share.jpg`, 1200x630) existe e aparece ao compartilhar no WhatsApp.
- [ ] Redirecionamentos 301 de todas as URLs do site antigo (`public/_redirects`) testados.
- [ ] Dados estruturados validados (Rich Results Test).
- [ ] Ficha do Google Meu Negócio aponta para o novo site.

## Critério para encerrar a Fase 4

Todos os itens acima marcados, nenhum erro aberto no `GATE`, e uma lista de correções zerada. Então inicia a Fase 5 (lançamento).
