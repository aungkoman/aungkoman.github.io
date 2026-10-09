# Validation and troubleshooting

## Required checks

```sh
npm ci
npm run check
npm test
npm run build
npx wrangler deploy --dry-run
```

Type checks၊ post URL uniqueness၊ Hono health/404 routes နဲ့ static asset fallback ကို စစ်ပါတယ်။ Build output ထဲ published posts အားလုံးနဲ့ shared assets ပါလာရပါမယ်။

Wrangler runtime စမ်းဖို့ `npm run preview` ကို run ပြီး အခြား terminal မှာ:

```sh
curl -i http://localhost:8787/api/health
curl -I http://localhost:8787/about/
curl -I http://localhost:8787/no-such-page
curl -L -I http://localhost:8787/productivity/programming/2025/05/18/laravel-basic-part-6-crud.html
```

Health/about က 200၊ unknown page က 404၊ old post URL က redirects ရှိရင် follow လုပ်ပြီး 200 ဖြစ်ရပါမယ်။

## Common problems

| Symptom | Check / fix |
| --- | --- |
| `/api/health` fails on port 4321 | Astro dev server မှာ Hono မရှိပါ။ `npm run preview` နဲ့ Wrangler port ကို သုံးပါ။ |
| Wrangler cannot find `dist/` | `npm run build` အရင် run ပါ။ |
| API returns HTML | `run_worker_first` ထဲ `/api/*` နဲ့ `main` entry point ကို စစ်ပါ။ |
| Post link gives 404 | Generated filename၊ categories နဲ့ front matter date ကို စစ်ပါ။ Catch-all parameter မှာ `.html` နှစ်ခါ မပါစေပါနဲ့။ |
| Canonical/RSS domain is old | Correct `SITE_URL` နဲ့ rebuild/deploy လုပ်ပါ။ |
| Image disappears after build | Generated `public/` အစား original assets directory ကို ပြင်ပါ။ Copy list ထဲ directory ပါမပါ စစ်ပါ။ |
| Old embed is missing | HTML sanitizer နဲ့ unsupported Jekyll/Liquid markup ကို စစ်ပြီး content ကို ပြင်ပါ။ |
| Package peer dependency error | `npm ci` နဲ့ committed lockfile ကို သုံးပါ။ Wrangler နဲ့ workers-types ကို update လုပ်ရင် versions ကို တွဲစစ်ပါ။ |
| Production authentication fails | Worker secrets/bindings ကို စစ်ပါ။ Local `.dev.vars` ကို production ဆီ အလိုအလျောက် မတင်ပါ။ |

## Logs and rollback

```sh
npx wrangler tail
npx wrangler deployments list
```

Production runtime errors ကို logs မှာ စစ်ပါ။ Rollback လိုရင် Cloudflare Worker deployment history မှာ previous working version ကို ရွေးပါ၊ သို့မဟုတ် `npx wrangler rollback --help` နဲ့ installed CLI ရဲ့ syntax ကို စစ်ပါ။ Static content/config ကို ပြန်ထုတ်ဖို့ previous working Git revision ကို သီးခြား checkout လုပ်ပြီး မှန်ကန်တဲ့ `SITE_URL` နဲ့ rebuild/deploy လုပ်နိုင်ပါတယ်။

[Guide index](README.md)
