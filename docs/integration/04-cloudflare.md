# Cloudflare Workers deployment

## Wrangler configuration

ဒီ site က Cloudflare Workers Static Assets ကို သုံးပါတယ်။ Cloudflare Pages project အတွက် configuration မဟုတ်ပါ။ Astro static build ဖြစ်တဲ့အတွက် `@astrojs/cloudflare` SSR adapter မလိုပါ။

`wrangler.jsonc` မှာ:

- `name`: Worker name; ကိုယ့် account ထဲ publish လုပ်မယ့် name ကို သတ်မှတ်ပါ။
- `main`: Hono entry point `worker/index.ts`။
- `assets.directory`: Astro output `./dist`။
- `assets.binding`: Worker fallback သုံးတဲ့ `ASSETS`။
- `assets.run_worker_first`: `/api/*` requests ကို Hono ဆီ အရင်ပို့ခြင်း။
- `assets.html_handling`: extensionless HTML paths ကို resolve လုပ်ခြင်း။
- `assets.not_found_handling`: generated `404.html` ကို သုံးခြင်း။

## CLI deployment

Repo root မှာ:

```sh
npm ci
npm run check
npm test
npx wrangler login
SITE_URL=https://your-worker.your-subdomain.workers.dev npm run deploy
```

Placeholder domain ကို account ရဲ့ actual Workers domain နဲ့ အစားထိုးပါ။ Origin မသိသေးရင် Cloudflare dashboard မှာ Workers subdomain ကို စစ်ပြီး Worker name နဲ့ URL ကို သတ်မှတ်ပါ။ `npm run deploy` က build နဲ့ upload နှစ်ခုလုံး လုပ်ပါတယ်။

Upload မလုပ်ဘဲ packaging စမ်းဖို့:

```sh
npm run build
npx wrangler deploy --dry-run
```

## Git integration

Cloudflare dashboard ရဲ့ Workers & Pages မှာ Git repository နဲ့ ချိတ်ထားတဲ့ Worker ကို ဖန်တီးပါ။

1. Repo နဲ့ deploy လုပ်ချင်တဲ့ branch ကို ရွေးပါ။
2. Root directory ကို repository root အဖြစ် ထားပါ။
3. Build command: `npm run build`။
4. Deploy command: `npx wrangler deploy`။
5. Build environment မှာ `SITE_URL=https://your-domain.example` သတ်မှတ်ပါ။
6. Cloudflare build environment ရဲ့ Node.js version ကို 22.12+ ဖြစ်အောင် သတ်မှတ်ပါ။

`SITE_URL` က build-time variable ဖြစ်တာကြောင့် Worker runtime variable တစ်ခုတည်း ထည့်ရုံနဲ့ generated HTML မပြောင်းပါ။ Existing GitHub Actions workflow က validation နဲ့ dry-run ပဲ လုပ်ပါတယ်။ Production deployment ကို အလိုအလျောက် မလုပ်ပါ။

## Custom domain

Cloudflare dashboard ထဲ Worker ရဲ့ Domains & Routes မှာ custom domain ထည့်ပြီး Cloudflare ပြတဲ့ DNS setup ကို လိုက်လုပ်ပါ။ Canonical links ပြောင်းဖို့ custom domain ပါတဲ့ `SITE_URL` နဲ့ rebuild/deploy လုပ်ပါ။

`aungkoman.github.io` က GitHub ပိုင် domain ဖြစ်လို့ Cloudflare Worker ဆီ ကိုယ့် DNS နဲ့ ပြောင်းမချိတ်နိုင်ပါ။ Workers subdomain သို့မဟုတ် ကိုယ်ပိုင် custom domain သုံးပါ။ URL paths ထိန်းထားပေမယ့် hostname ပြောင်းရင် old GitHub Pages site မှာ redirects/links ကို သီးခြား စီစဉ်ရပါမယ်။

## After deployment

```sh
curl -I https://your-domain.example/
curl -i https://your-domain.example/api/health
curl -I https://your-domain.example/feed.xml
curl -I https://your-domain.example/sitemap.xml
```

Browser နဲ့ Burmese text၊ images၊ search နဲ့ old post paths တွေကိုပါ စစ်ပါ။ ဒီ docs ထည့်တဲ့အချိန်အထိ remote deployment မလုပ်ထားပါ။

[Guide index](README.md)
