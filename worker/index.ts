import { Hono } from 'hono';
const app = new Hono<{ Bindings: { ASSETS: Fetcher } }>();
app.get('/api/health', c => c.json({ status: 'ok', service: 'aungkoman-blog' }));
app.all('/api/*', c => c.json({ error: 'Not found' }, 404));
app.all('*', c => c.env.ASSETS.fetch(c.req.raw));
export default app;
