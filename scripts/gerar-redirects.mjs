// Converte conteudo/redirecionamentos.csv em public/_redirects (formato Cloudflare Pages).
// Uso: node scripts/gerar-redirects.mjs
import { readFileSync, writeFileSync } from 'node:fs';

const linhas = readFileSync('conteudo/redirecionamentos.csv', 'utf8').split(/\r?\n/).slice(1);
const norm = (u) => (u.length > 1 ? u.replace(/\/+$/, '') : u);
const vistos = new Set();
const saida = [];
const ignoradas = [];

for (const l of linhas) {
	if (!l.trim()) continue;
	const [antiga, nova] = l.split(',').map((s) => (s ?? '').trim());
	if (!antiga || !nova || !antiga.startsWith('/') || !nova.startsWith('/')) {
		ignoradas.push(`${l}  (incompleta)`);
		continue;
	}
	const a = norm(antiga),
		n = norm(nova);
	if (a === n) {
		ignoradas.push(`${l}  (origem = destino)`);
		continue;
	}
	if (vistos.has(a)) {
		ignoradas.push(`${l}  (origem repetida)`);
		continue;
	}
	vistos.add(a);
	saida.push(`${a} ${n} 301`);
}

writeFileSync('public/_redirects', saida.join('\n') + (saida.length ? '\n' : ''));
console.log(`${saida.length} redirecionamentos gravados em public/_redirects`);
for (const i of ignoradas) console.log('ignorada:', i);
