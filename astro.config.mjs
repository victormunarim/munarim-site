import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Site estático. Hospedagem: Cloudflare Pages.
export default defineConfig({
	site: 'https://escadasmunarim.com.br',
	trailingSlash: 'never',
	build: { format: 'file' },
	integrations: [sitemap()],
	vite: { plugins: [tailwindcss()] },
});
