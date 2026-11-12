# 09 — Fase 5: Lançamento

Início do preparo: 2026-11-09 · Responsável: Victor Eduardo Peixer Munarim · Duração da virada: 1 dia

**Nada foi publicado.** Esta fase troca o site que clientes veem hoje e mexe em DNS, e-mail e Google. Só começa a virada (seção 3) quando as Fases 0 a 4 estiverem fechadas: plano aprovado, conteúdo e fotos reais, QA sem pendências.

## 1. O que já está pronto

| Item                             | Arquivo                                  | Observação                                                                                                                                |
| -------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Gerador de redirecionamentos 301 | `scripts/gerar-redirects.mjs`            | Lê `conteudo/redirecionamentos.csv`, grava `public/_redirects`. Ignora linhas incompletas, repetidas ou com origem = destino (evita laço) |
| Redirecionamentos atuais         | `public/_redirects`                      | 2 regras confirmadas: `/nossa-empresa` → `/sobre` e `/entre-em-contato` → `/contato`. O resto vem da auditoria do site antigo             |
| Cabeçalhos de segurança e cache  | `public/_headers`                        | `nosniff`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`; cache de 1 ano para `/_astro/*`                                    |
| Sitemap e robots                 | `sitemap-index.xml`, `public/robots.txt` |                                                                                                                                           |
| Build                            | `npm run build`                          | Passa; `_redirects` e `_headers` vão para `dist/`                                                                                         |

Para atualizar os redirecionamentos depois da auditoria: editar o CSV e rodar `node scripts/gerar-redirects.mjs`.

## 2. Preparação (uma semana antes)

- [ ] **Backup do WordPress atual:** arquivos e banco de dados. Guardar fora do servidor.
- [ ] **Lista completa de URLs antigas** no CSV, com a página nova equivalente. Priorizar as que aparecem no Search Console.
- [ ] **Baixar o TTL do DNS para 300 s** no provedor atual, 24 a 48 horas antes da virada. Isso torna a volta atrás rápida.
- [ ] **Anotar todos os registros DNS atuais** (A, CNAME, MX, TXT, SPF, DKIM), em captura de tela ou texto.
- [ ] **Repositório git** em nome da empresa, com o projeto enviado.
- [ ] **Cloudflare Pages:** projeto ligado ao repositório; build `npm run build`, saída `dist`.
- [ ] **Variáveis:** `RESEND_API_KEY`, `ORCAMENTO_DESTINO`, `ORCAMENTO_ORIGEM`, `TURNSTILE_SECRET` (secrets) e `PUBLIC_TURNSTILE_SITEKEY` (build).
- [ ] **Remetente verificado no Resend** para o domínio (exige registros DNS próprios: ver seção 3, passo 2).
- [ ] **Homologação:** abrir o endereço `*.pages.dev` e repetir o checklist de `08-fase-4-qa.md`, incluindo o formulário. Confirmar que a versão de teste não é indexada pelo Google.
- [ ] **Avisar a equipe** da data e do horário, e quem atende se o WhatsApp ou o e-mail falharem.

## 3. Virada (dia do lançamento)

Escolher um horário de baixo movimento, com a equipe avisada. Antes de começar, ter o plano de volta atrás (seção 5) à mão.

**Atenção ao e-mail.** Se o DNS do domínio passar para a Cloudflare, todos os registros do e-mail atual (MX, SPF, DKIM, DMARC) precisam ser copiados para lá **antes** de trocar os nameservers. Sem isso, `vendas@escadasmunarim.com.br` para de receber mensagens. Alternativa mais segura: manter o DNS onde está e apenas apontar o site para a Cloudflare por registro CNAME (ou o que o provedor permitir para o domínio raiz).

1. [ ] No Cloudflare Pages, adicionar o domínio personalizado `escadasmunarim.com.br` (e `www`, redirecionando para um só).
2. [ ] Criar os registros DNS que o Resend pede (SPF/DKIM) sem apagar os existentes de e-mail.
3. [ ] Apontar o domínio para o Pages, conforme a opção escolhida acima. Aguardar o certificado HTTPS ficar ativo.
4. [ ] Abrir o site no domínio real, de rede de celular e de computador.
5. [ ] Conferir o **smoke test** da seção 4.
6. [ ] Enviar um pedido de orçamento real e confirmar que o e-mail chega.
7. [ ] Só então avisar a equipe e divulgar.

## 4. Smoke test pós-virada

- [ ] Home, modelo, obras, contato e orçamento abrem em HTTPS, sem aviso de segurança.
- [ ] `https://www.` leva ao endereço principal.
- [ ] `/robots.txt` e `/sitemap-index.xml` abrem.
- [ ] `/nossa-empresa` e outros redirecionamentos 301 levam ao destino certo (testar 5 URLs antigas, com `curl -I`).
- [ ] Botão do WhatsApp abre a conversa certa.
- [ ] Formulário envia e o e-mail chega.
- [ ] Compartilhar a home no WhatsApp mostra título, descrição e imagem.
- [ ] E-mail da empresa continua recebendo (enviar um teste de fora).

## 5. Plano de volta atrás

Se algo crítico falhar (site fora do ar, e-mail parado, formulário perdendo pedidos):

1. Restaurar no DNS os registros anotados na preparação. Com TTL de 300 s, volta em minutos.
2. **Não apagar o WordPress nem o backup por 30 dias.**
3. Corrigir em homologação e repetir a virada.

## 6. Depois de publicar (mesmo dia e primeira semana)

- [ ] **Google Search Console:** verificar o domínio e enviar `https://escadasmunarim.com.br/sitemap-index.xml`.
- [ ] **Google Meu Negócio:** trocar o endereço do site pelo novo e conferir endereço, telefone e horário.
- [ ] **Facebook (e Instagram, se existir):** atualizar o link do site.
- [ ] **Assinatura de e-mail, cartões e orçamentos impressos:** atualizar o endereço do site.
- [ ] **Analytics** ligado e com o evento de clique no WhatsApp funcionando.
- [ ] **Search Console, primeira semana:** olhar erros de cobertura e páginas antigas que ainda aparecem sem redirecionamento.
- [ ] **Diariamente por 7 dias:** conferir se os pedidos de orçamento estão chegando (e-mail e WhatsApp).

## 7. Pós-lançamento (30 dias)

Relatório simples ao fim do mês: visitas, cliques no WhatsApp, pedidos pelo formulário, páginas mais vistas, consultas no Google com mais cliques. Lista de ajustes de conteúdo e fotos para a rodada seguinte. Depois de 30 dias estáveis, desligar o WordPress antigo.

## Critério para encerrar a Fase 5

Site no ar no domínio real, smoke test aprovado, redirecionamentos funcionando, Search Console com o sitemap enviado, Google Meu Negócio atualizado e um pedido real recebido pelo novo formulário.
