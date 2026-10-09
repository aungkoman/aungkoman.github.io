import { defineConfig } from 'astro/config';
export default defineConfig({ site: process.env.SITE_URL || 'https://aungkoman.github.io', output: 'static', build: { format: 'file' } });
