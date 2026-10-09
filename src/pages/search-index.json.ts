import { posts } from '../lib/posts';
import sanitizeHtml from 'sanitize-html';
export const GET = () => Response.json(posts.map(({ title, url, html }) => ({ title, url, text: sanitizeHtml(html, { allowedTags: [], allowedAttributes: {} }) })));
