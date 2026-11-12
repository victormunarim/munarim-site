# 03 — Cronograma, pendências e riscos

Contexto: projeto interno da Escadas Munarim. Sem cliente externo e sem edição por usuário. Quem mantém o projeto altera os arquivos e publica.

## Fases

| Fase                   | Conteúdo                                                                                                 | Entrega                    | Estimativa  |
| ---------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------- | ----------- |
| 0. Alinhamento interno | Validar este plano com a direção, definir quem aprova conteúdo e design, abrir acesso ao site atual      | Plano aprovado             | 2–3 dias    |
| 1. Conteúdo            | Reunir fotos, textos e dados confirmados; mapear URLs do WordPress atual para redirecionamentos 301      | Pacote de conteúdo         | 1–2 semanas |
| 2. Design              | Moodboard, wireframes de Home, modelo, obras e orçamento; telas em desktop e mobile                      | Protótipo aprovado         | 1 semana    |
| 3. Desenvolvimento     | Projeto Astro, componentes, páginas, formulário, SEO técnico, analytics                                  | Site em homologação        | 2 semanas   |
| 4. QA                  | Lighthouse, acessibilidade, testes de dispositivos, revisão de textos, teste do formulário e do WhatsApp | Lista de correções fechada | 3–5 dias    |
| 5. Lançamento          | Troca de DNS, redirecionamentos, Search Console, Google Meu Negócio, sitemap                             | Site no ar                 | 1 dia       |
| 6. Pós-lançamento      | Monitoramento por 30 dias, ajustes, relatório de conversão                                               | Relatório                  | 1 mês       |

Prazo total estimado: 5 a 7 semanas, dominado pela coleta de conteúdo.

## Material a reunir internamente

1. Logo vetorial e cores da marca.
2. Fotos de obras, no mínimo 20 de boa qualidade, com cidade e tipo. Confirmar autorização de uso de imagem das obras e dos clientes.
3. Catálogo ou fichas técnicas dos 8 modelos (medidas, acabamentos, capacidade).
4. Dados oficiais: endereço, telefones, WhatsApp, e-mail, horário, CNPJ, ano de fundação, cidades atendidas.
5. Diferenciais reais (prazo, garantia, montagem própria, projeto técnico).
6. Depoimentos de clientes ou construtoras, com permissão.
7. Acessos: WordPress atual, domínio (registro.br), Google Meu Negócio, Facebook e Analytics.
8. Um responsável único por aprovar conteúdo e design.

## Decisões tomadas

- **Ação principal:** orçamento pelo WhatsApp.
- **Região atendida:** todo o Sul do Brasil (SC, PR e RS). A sede continua em São José/SC.
- **Manutenção:** Victor Eduardo Peixer Munarim mantém o site. Altera o conteúdo no código e publica.

## Decisões pendentes

- Haverá sessão fotográfica?
- Confirmar que a empresa realmente entrega e monta em todo o Sul (prazo, frete e montagem fora da Grande Florianópolis) antes de publicar essa promessa.

## Riscos

| Risco                                                            | Impacto                        | Mitigação                                                                      |
| ---------------------------------------------------------------- | ------------------------------ | ------------------------------------------------------------------------------ |
| Demora em juntar fotos e textos                                  | Atraso do cronograma           | Prazo interno combinado; começar o design com fotos provisórias identificadas  |
| Dados divergentes na internet (CNPJ, endereço, tempo de mercado) | Informação errada publicada    | Confirmar com a direção; publicar só o confirmado                              |
| Perda de posição no Google na troca de site                      | Queda de tráfego               | Mapa de 301, manter URLs e títulos com bom ranking, Search Console             |
| Fotos fracas                                                     | Site com cara genérica         | Sessão fotográfica curta                                                       |
| Confusão com site de terceiros (repositório `theusinshow`)       | Risco de autoria ou duplicação | Não reutilizar código ou conteúdo; partir do zero                              |
| Spam no formulário                                               | Leads falsos                   | Honeypot, Turnstile, validação                                                 |
| Conteúdo depende de quem sabe mexer no código                    | Atualizações lentas            | Estrutura de conteúdo simples (Markdown/JSON) e um guia curto de como publicar |

## Próximo passo

Aprovar este plano (ou ajustar premissas) e então iniciar a Fase 0. Nenhuma linha de código do site foi escrita até aqui.
