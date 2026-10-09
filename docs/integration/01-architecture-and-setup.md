# Architecture and local setup

## Request flow

```text
Browser → Cloudflare Workers Static Assets → Astro-generated HTML / CSS / JS
Browser → /api/* → Hono Worker → JSON response
```

Astro က build time မှာ `_posts` ကို ဖတ်ပြီး `dist/` ထဲ static pages ထုတ်ပါတယ်။ Hono ရဲ့ entry point က `worker/index.ts` ဖြစ်ပါတယ်။ `wrangler.jsonc` ထဲက `run_worker_first: ["/api/*"]` ကြောင့် API requests တွေ Hono ဆီ အရင်ဝင်ပါတယ်။ အခြား requests တွေကို Cloudflare static assets က serve လုပ်ပါတယ်။ Worker ဆီ ရောက်လာတဲ့ non-API requests အတွက်လည်း `ASSETS.fetch()` fallback ထည့်ထားပါတယ်။

## Requirements

- Node.js 22.12+; CI က Node.js 22 ကို သုံးပါတယ်။
- npm; reproducible installation အတွက် committed `package-lock.json` ကို သုံးပါ။
- Deployment အတွက် Cloudflare account နဲ့ Worker deploy permissions လိုပါတယ်။

Repo root မှာ run ပါ။

```sh
npm ci
npm run dev
```

Astro dev server URL ကို terminal မှာ ပြပါမယ်။ Default port က 4321 ဖြစ်ပါတယ်။ ဒီ command က assets ပြင်ဆင်ပေးပြီး Astro ကို run ပါတယ်။ Hono API ကို ဒီ server မှာ မစမ်းနိုင်ပါ။

Frontend နဲ့ Worker ကို တွဲစမ်းဖို့:

```sh
npm run preview
```

ဒီ command က site ကို build ပြီး Wrangler local runtime ကို run ပါတယ်။ Default URL က `http://localhost:8787` ဖြစ်ပါတယ်။ Source ပြောင်းပြီး static output အသစ်ကြည့်ဖို့ preview ကို ရပ်ပြီး ပြန် run ပါ။

## Important files

| File | Purpose |
| --- | --- |
| `astro.config.mjs` | Static build နဲ့ site origin |
| `src/pages/` | Astro pages နဲ့ build-time endpoints |
| `src/lib/posts.ts` | Jekyll post loader |
| `scripts/prepare-assets.mjs` | Shared assets ကို `public/` ထဲ copy လုပ်ခြင်း |
| `worker/index.ts` | Hono routes |
| `wrangler.jsonc` | Cloudflare Worker နဲ့ assets configuration |
| `.github/workflows/main.yml` | Validation CI |

[Guide index](README.md)
