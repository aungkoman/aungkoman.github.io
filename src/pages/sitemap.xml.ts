import { posts } from '../lib/posts';
import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) => new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${['/', '/about/', '/posts/', '/categories/', '/tags/', '/search/', ...posts.map(p => p.url)].map(url => `<url><loc>${new URL(url, site).href.replace(/&/g, '&amp;')}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
