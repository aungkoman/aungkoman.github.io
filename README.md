# Aung Ko Man — Astro + Hono on Cloudflare Workers

The main website and Jekyll blog are migrated to Astro. Hono serves `/api/*` on Cloudflare Workers; Cloudflare static assets serve the generated pages. Existing demo/app directories remain source archives and are not included in this deployment.

## Run locally

Requires Node.js 22.12+ and npm.

```sh
npm ci
npm run build
npm run dev
```

`npm run dev` runs Astro. Run `npm run preview` to test the built site and Hono API together under Wrangler.

## Validate

```sh
npm run check
npm test
npm run build
```

## Deploy to Cloudflare

```sh
npx wrangler login
SITE_URL=https://your-domain.example npm run deploy
```

Use the actual Workers/custom domain as `SITE_URL` so canonical links, RSS, and sitemap use the new origin. Set `SITE_URL` in Cloudflare's build environment when connecting this Git repository; use `npm run build` as build command and `npx wrangler deploy` as deploy command. No Cloudflare deployment has been performed in this workspace.

## Content and URL compatibility

Published `_posts/*.md`, `*.markdown`, and `*.html` are read at build time. The loader keeps category/year/month/day/slug.html URLs based on Jekyll front matter dates, including explicit permalinks. Drafts and `published: false` posts are excluded. Markdown is rendered and HTML sanitized; shared blog assets are copied by `scripts/prepare-assets.mjs`. Search includes full article text. Archive, categories, tags, about, RSS, sitemap, and a 404 page are included.

The original Jekyll sources are retained. Jekyll plugins, theme behavior, arbitrary Liquid templates, and unrelated app/demo projects are not converted. Common `site.baseurl` and `page.image` expressions are supported. Review older plugin embeds and any external image links before replacing the public site. GitHub Pages cannot execute the Hono Worker; deploy this build to Cloudflare and update DNS/domain links separately.
