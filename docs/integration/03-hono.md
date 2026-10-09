# Hono integration

## API routes

`worker/index.ts` မှာ routes သတ်မှတ်ပါတယ်။ Existing health endpoint က `GET /api/health` ဖြစ်ပါတယ်။ Route အသစ်တွေကို unknown API fallback မတိုင်ခင် ထည့်ပါ။

```ts
app.get('/api/version', c => c.json({ version: '1.0.0' }));

// Specific API routes must appear before these fallbacks.
app.all('/api/*', c => c.json({ error: 'Not found' }, 404));
app.all('*', c => c.env.ASSETS.fetch(c.req.raw));
```

API အသစ်တွေကို `/api/` အောက်မှာ ထားရင် existing `run_worker_first` setting နဲ့ အလုပ်လုပ်ပါတယ်။ အခြား prefix သုံးရင် `wrangler.jsonc` ထဲ routing setting ကိုပါ ပြင်ရပါမယ်။

Browser ကနေ same-origin API ကို ခေါ်နိုင်ပါတယ်။

```js
const response = await fetch('/api/health');
if (!response.ok) throw new Error('API request failed');
const health = await response.json();
```

ဒီ code ကို Astro client script မှာ သုံးပါ။ `.astro` front matter ထဲက code က static build time မှာ run တာ ဖြစ်ပါတယ်။

## Bindings

`ASSETS` binding ကို Wrangler config က ထည့်ပေးပါတယ်။ Worker type က `Hono<{ Bindings: { ASSETS: Fetcher } }>` ဖြစ်ပါတယ်။ D1၊ KV သို့ R2 သုံးမယ်ဆိုရင် resource ဖန်တီးပြီး Wrangler config နဲ့ TypeScript `Bindings` နှစ်ခုလုံးမှာ ထည့်ရပါမယ်။ လက်ရှိ integration မှာ database မပါပါ။

## Secrets

Secret လိုတဲ့ API ထည့်တဲ့အခါ production secret ကို Wrangler နဲ့ သိမ်းပါ။

```sh
npx wrangler secret put API_TOKEN
```

Local secret ကို `.dev.vars` ထဲ ထည့်ပါ။ ဒီ file ကို `.gitignore` ထဲ ထည့်ထားပါတယ်။ Secret binding ကို Hono `Bindings` type မှာ `API_TOKEN: string` လို့ ထည့်ပြီး `c.env.API_TOKEN` ကနေ ဖတ်ပါ။ Frontend scripts၊ public assets၊ `PUBLIC_*` environment variables ထဲ secrets မထည့်ပါနဲ့။

## Local verification

```sh
npm run preview
```

အခြား terminal မှာ:

```sh
curl -i http://localhost:8787/api/health
curl -i http://localhost:8787/api/missing
```

Health က 200 JSON၊ missing API က 404 JSON ဖြစ်ရပါမယ်။ Astro dev server အစား Wrangler URL ကို သုံးပါ။

[Guide index](README.md)
