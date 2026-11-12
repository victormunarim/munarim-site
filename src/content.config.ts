import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Conteúdo mora em /conteudo (fora de src). Arquivos que começam com "_" são ignorados.
const modelos = defineCollection({
	loader: glob({ pattern: '*.md', base: './conteudo/modelos' }),
	schema: z.object({
		nome: z.string(),
		slug: z.string(),
		status: z.enum(['pendente', 'pronto']).default('pendente'),
		resumo: z.string().default(''),
		medidas: z.string().default(''),
		acabamentos: z.array(z.string()).default([]),
		corrimaoGuardaCorpo: z.string().default(''),
		foto_principal: z.string().default(''),
		fotos: z.array(z.string()).default([]),
	}),
});

export const collections = { modelos };
