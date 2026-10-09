# Astro integration

## Pages and components

`src/pages/index.astro` က homepage ဖြစ်ပါတယ်။ Shared HTML shell ကို `src/layouts/Layout.astro`၊ post listing ကို `src/components/PostList.astro` မှာ ထားပါတယ်။ Styles ကို `src/styles/global.css` မှာ ပြင်နိုင်ပါတယ်။

Page အသစ်ထည့်ဖို့ `src/pages/contact.astro` လို file တစ်ခု ဖန်တီးပါ။

```astro
---
import Layout from '../layouts/Layout.astro';
---
<Layout title="Contact">
  <h1>Contact</h1>
  <a href="mailto:admin@mmsoftware100.com">Email me</a>
</Layout>
```

`build.format: 'file'` ကြောင့် `contact.html` ထုတ်ပါတယ်။ Cloudflare HTML handling က extensionless paths ကို resolve ပေးပါတယ်။ Post routes တွေမှာ `.html` suffix နှစ်ခါ မထည့်မိအောင် catch-all route က suffix ကို ဖြုတ်ပြီး Astro ကို ထုတ်ခိုင်းထားပါတယ်။

## Jekyll posts

`_posts/YYYY-MM-DD-slug.md` ထဲ post အသစ်ထည့်နိုင်ပါတယ်။

```yaml
---
title: "My new article"
date: 2026-10-09
categories: programming web
tags: [astro, hono]
---
```

Body ကို Markdown နဲ့ ရေးပါ။ Loader က categories နဲ့ date ကို သုံးပြီး `/programming/web/2026/10/09/slug.html` URL ထုတ်ပါတယ်။ Explicit literal `permalink` ရှိရင် အဲဒါကို သုံးပါတယ်။ Jekyll permalink template tokens ကို expand မလုပ်ပါ။ ပုံမှန် post URL အတွက် `.html` ending ကို သုံးပါ။

Timezone offset ပါတဲ့ front matter date တွေကို UTC ပြောင်းပြီး ရက်မရွှေ့အောင် မူရင်း calendar date ကို ယူထားပါတယ်။ `published: false` နဲ့ `_drafts` content တွေ build ထဲ မပါပါ။

Markdown က HTML အဖြစ် render လုပ်ပြီး sanitize လုပ်ပါတယ်။ Arbitrary scripts၊ iframe embeds နဲ့ unsupported HTML attributes တွေ ဖယ်နိုင်ပါတယ်။ `{{ site.baseurl }}` နဲ့ `{{ page.image }}` ကို support လုပ်ထားပေမယ့် arbitrary Liquid နဲ့ Jekyll plugins တွေကို မလုပ်ပါ။ Article အဟောင်းတွေမှာ special embeds ရှိရင် review လုပ်ပါ။

## Assets

`npm run dev` နဲ့ `npm run build` က shared `images/`, `assets/`, `css/`, `font/`, `favicon.png`, `app-ads.txt` ကို `public/` ထဲ copy လုပ်ပါတယ်။ `public/` ကို run တိုင်း ပြန်ဖန်တီးတာကြောင့် အဲဒီထဲ တိုက်ရိုက် edit မလုပ်ပါနဲ့။ Asset directory အသစ်ပါချင်ရင် `scripts/prepare-assets.mjs` ရဲ့ list ကို ပြင်ပါ။

## Site origin and generated endpoints

```sh
SITE_URL=https://your-domain.example npm run build
```

`SITE_URL` မသတ်မှတ်ရင် `https://aungkoman.github.io` ကို သုံးပါတယ်။ Deploy origin နဲ့ ကိုက်အောင် သတ်မှတ်ပါ။ Canonical links၊ `/feed.xml` နဲ့ `/sitemap.xml` မှာ ဒီ origin ကို သုံးပါတယ်။ `/search-index.json` က full-text search index ဖြစ်ပြီး build time မှာ ထုတ်ပါတယ်။ Content ပြင်ရင် rebuild လိုပါတယ်။

[Guide index](README.md)
