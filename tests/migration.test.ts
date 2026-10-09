import { test } from 'node:test';
import assert from 'node:assert/strict';
import { posts } from '../src/lib/posts';
import app from '../worker';
test('every published post has a unique original Jekyll URL and rendered content', () => {
 assert.ok(posts.length > 500);
 assert.equal(new Set(posts.map(post => post.url)).size, posts.length);
 for (const post of posts) { assert.ok(post.title); assert.match(post.url, /^\//); assert.ok(!post.html.includes('{{ site.baseurl }}')); }
});
test('Hono health and unknown API routes do not require asset bindings', async () => {
 const response = await app.request('/api/health');
 assert.equal(response.status, 200);
 assert.equal(((await response.json()) as { status: string }).status, 'ok');
 assert.equal((await app.request('/api/missing')).status, 404);
});
test('Hono delegates page requests to Cloudflare assets', async () => {
 const response = await app.fetch(new Request('https://example.com/about/'), { ASSETS: { fetch: async () => new Response('About page') } as unknown as Fetcher });
 assert.equal(await response.text(), 'About page');
});
