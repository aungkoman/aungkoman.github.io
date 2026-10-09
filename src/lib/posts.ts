import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';
export interface Post { title: string; date: string; url: string; categories: string[]; tags: string[]; excerpt: string; html: string; }
export const terms = (value: unknown): string[] => Array.isArray(value) ? value.map(String) : typeof value === 'string' ? value.split(/\s+/).filter(Boolean) : [];
export function readPosts(): Post[] {
  return fs.readdirSync('_posts').filter(name => /\.(md|markdown|html)$/.test(name)).flatMap(name => {
    const match = name.match(/^(\d{4})-(\d{1,2})-(\d{1,2})-(.+)\.(?:md|markdown|html)$/);
    if (!match) return [];
    const source = fs.readFileSync(path.join('_posts', name), 'utf8');
    const { data, content } = matter(source);
    if (data.published === false) return [];
    const fallback = `${match[1]}-${match[2].padStart(2, '0')}-${match[3].padStart(2, '0')}`;
    // Preserve the calendar date in Jekyll's offset, without UTC shifting.
    const dateMatch = source.split('---')[1]?.match(/^date:\s*[\"']?(\d{4})-(\d{1,2})-(\d{1,2})/m);
    const date = dateMatch ? `${dateMatch[1]}-${dateMatch[2].padStart(2, '0')}-${dateMatch[3].padStart(2, '0')}` : fallback;
    const categories = terms(data.categories ?? data.category);
    const slug = String(data.slug || match[4]).toLowerCase();
    const url = typeof data.permalink === 'string' ? data.permalink : '/' + [...categories, ...date.split('-'), `${slug}.html`].join('/');
    const body = content.replace(/\{\{\s*site\.baseurl\s*\}\}/g, '').replace(/\{\{\s*page\.image\s*\}\}/g, String(data.image || ''));
    const rendered = marked.parse(body, { async: false });
    const html = sanitizeHtml(rendered, { allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'h1', 'h2']), allowedAttributes: { ...sanitizeHtml.defaults.allowedAttributes, img: ['src', 'alt', 'title', 'width', 'height', 'loading'], '*': ['id', 'class'] } });
    const excerpt = sanitizeHtml(html, { allowedTags: [], allowedAttributes: {} }).replace(/\s+/g, ' ').slice(0, 200);
    return [{ title: String(data.title || slug), date, url, categories, tags: terms(data.tags), excerpt, html }];
  }).sort((a,b) => b.date.localeCompare(a.date));
}
export const posts = readPosts();
