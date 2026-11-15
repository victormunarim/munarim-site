import empresa from '../../conteudo/empresa.json';

export { empresa };

/** Só dígitos, com DDI 55, para o link wa.me. */
export function whatsappDigits(numero?: string): string | null {
	const v = numero ?? empresa.contatos.whatsapp.valor;
	if (!v) return null;
	const d = v.replace(/\D/g, '');
	return d.startsWith('55') ? d : `55${d}`;
}

/** Link do WhatsApp com mensagem pronta. Sem número cadastrado, volta à página de contato. */
export function whatsappLink(mensagem: string, numero?: string): string {
	const n = whatsappDigits(numero);
	if (!n) return '/contato';
	return `https://wa.me/${n}?text=${encodeURIComponent(mensagem)}`;
}

export const mensagemPadrao = 'Olá! Vim pelo site da Escadas Munarim e gostaria de um orçamento.';

export function mensagemModelo(nome: string): string {
	return `Olá! Vim pelo site da Escadas Munarim e gostaria de um orçamento da escada ${nome}.`;
}

/** Em produção só publica o que está pronto; em desenvolvimento mostra tudo. */
export const mostrarPendentes = !import.meta.env.PROD;
export function publicavel<T extends { data: { status: string } }>(itens: T[]): T[] {
	return mostrarPendentes ? itens : itens.filter((i) => i.data.status === 'pronto');
}

/** Muda para true quando conteudo/faq.md tiver perguntas respondidas e confirmadas. */
export const faqPronta = false;

/** Anos de mercado, calculados no build a partir do ano de fundação (conteudo/empresa.json). */
export const anosDeMercado = new Date().getFullYear() - empresa.fundacao.ano;
