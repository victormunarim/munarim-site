// Cloudflare Pages Function: POST /api/orcamento
// Variáveis (Cloudflare > Pages > Settings > Variables, tipo Secret):
//   RESEND_API_KEY, ORCAMENTO_DESTINO (e-mail que recebe), ORCAMENTO_ORIGEM (remetente verificado),
//   TURNSTILE_SECRET (opcional; se definido, valida o captcha)

interface Env {
	RESEND_API_KEY?: string;
	ORCAMENTO_DESTINO?: string;
	ORCAMENTO_ORIGEM?: string;
	TURNSTILE_SECRET?: string;
}

const esc = (s: string) =>
	s.replace(
		/[&<>"']/g,
		(c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!,
	);
const json = (corpo: unknown, status = 200) =>
	new Response(JSON.stringify(corpo), {
		status,
		headers: { 'content-type': 'application/json' },
	});

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
	const f = await request.formData();

	// Honeypot: robô preenche, humano não. Responde "ok" para não dar pista.
	if (String(f.get('empresa_site') ?? '')) return json({ ok: true });

	const nome = String(f.get('nome') ?? '')
		.trim()
		.slice(0, 120);
	const whatsapp = String(f.get('whatsapp') ?? '')
		.trim()
		.slice(0, 40);
	const cidade = String(f.get('cidade') ?? '')
		.trim()
		.slice(0, 120);
	const tipo = String(f.get('tipo') ?? '')
		.trim()
		.slice(0, 40);
	const mensagem = String(f.get('mensagem') ?? '')
		.trim()
		.slice(0, 2000);
	if (!nome || !whatsapp || !cidade || !f.get('lgpd'))
		return json({ ok: false, erro: 'campos' }, 400);

	if (env.TURNSTILE_SECRET) {
		const token = String(f.get('cf-turnstile-response') ?? '');
		const v = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
			method: 'POST',
			body: new URLSearchParams({ secret: env.TURNSTILE_SECRET, response: token }),
		});
		const r = (await v.json()) as { success: boolean };
		if (!r.success) return json({ ok: false, erro: 'captcha' }, 400);
	}

	if (!env.RESEND_API_KEY || !env.ORCAMENTO_DESTINO || !env.ORCAMENTO_ORIGEM) {
		return json({ ok: false, erro: 'configuracao' }, 500);
	}

	const html = `<p><b>Nome:</b> ${esc(nome)}</p><p><b>WhatsApp:</b> ${esc(whatsapp)}</p>
<p><b>Cidade:</b> ${esc(cidade)}</p><p><b>Tipo:</b> ${esc(tipo)}</p><p><b>Mensagem:</b><br>${esc(mensagem).replace(/\n/g, '<br>')}</p>`;

	const envio = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: {
			authorization: `Bearer ${env.RESEND_API_KEY}`,
			'content-type': 'application/json',
		},
		body: JSON.stringify({
			from: env.ORCAMENTO_ORIGEM,
			to: [env.ORCAMENTO_DESTINO],
			subject: `Orçamento pelo site: ${nome}`,
			html,
		}),
	});
	return envio.ok ? json({ ok: true }) : json({ ok: false, erro: 'envio' }, 502);
};
