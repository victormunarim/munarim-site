// Seleção de fotos escolhida a dedo (as demais continuam em conteudo/modelos/*.md).
const img = (slug: string, n: number) => `/img/modelos/${slug}-${String(n).padStart(2, '0')}.jpg`;

// Carrossel da home: poucas fotos, as mais fortes, alternando modelos. Não inclui a foto do hero.
export const fotosHome: { src: string; modelo: string }[] = [
	['caracol', 2],
	['viga-lateral', 3],
	['leke', 6],
	['mista', 8],
	['premium', 7],
	['reta', 13],
	['caracol', 12],
	['viga-lateral', 2],
	['leke', 11],
	['mista', 2],
	['viga-central', 5],
	['cascata-in-loco', 1],
].map(([slug, n]) => ({ src: img(slug as string, n as number), modelo: slug as string }));

// Página /fotos: melhores fotos por modelo, na ordem de exibição.
export const fotosGaleria: Record<string, string[]> = {
	caracol: [2, 4, 9, 12, 14, 1, 13].map((n) => img('caracol', n)),
	leke: [6, 11, 1, 5, 7, 12].map((n) => img('leke', n)),
	mista: [8, 2, 5, 11, 12, 7].map((n) => img('mista', n)),
	premium: [7, 3, 1, 8].map((n) => img('premium', n)),
	reta: [13, 12, 11, 2, 14].map((n) => img('reta', n)),
	'viga-central': [5, 4, 2, 7, 14].map((n) => img('viga-central', n)),
	'viga-lateral': [3, 2, 4, 13, 1].map((n) => img('viga-lateral', n)),
	'cascata-in-loco': [img('cascata-in-loco', 1)],
};
