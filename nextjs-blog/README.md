# Aung Ko Man — Next.js blog

The production blog is a Next.js App Router static export. `_posts/` at the repository root remains the source of truth; do not move or duplicate posts.

## Local development

Use Node.js 24:

```sh
cd nextjs-blog
npm ci
npm run dev
```

For a complete production export and validation:

```sh
npm test
npm run build
npm run verify
```

Build output is `nextjs-blog/out/`. GitHub Actions installs the locked dependencies, tests the importer, exports pages, validates all post routes and published historical URLs, and deploys the output to GitHub Pages on pushes to `master`. No Ruby or running Node server is required in production.

## Content and compatibility

- Markdown front matter: title, date, categories, tags, author, excerpt, lang, cover, permalink, published.
- Explicit `permalink` values are retained. `lib/legacy-urls.json` records the published Jekyll sitemap at migration to preserve old URLs and casing. New posts without permalinks use the category/date/filename pattern.
- Future-dated and `published: false` posts are excluded.
- Existing local responsive covers, Myanmar fonts and Unsplash credits come from root `_data/` and `assets/`.
- Markdown tables, code blocks and raw HTML are rendered; unsafe scripts/event attributes are removed. Jekyll asset placeholders and highlight blocks are converted. Unrecognized legacy template expressions in code are retained as text; unsupported embeds become comments rather than executable templates.
- Home, writing archive, about, categories, tags, search, Atom RSS, sitemap and article metadata are generated at build time.
- Legacy demo/app assets are copied into the export without overwriting generated pages. Existing source assets and Jekyll files remain in the repository for rollback, but the deployment workflow uses Next.js only.

Search uses a static client-side index of published article text. Adding or editing a post requires a new build; SSR/API routes are intentionally not used on GitHub Pages.
