import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {getPosts} from '../lib/posts.mjs';
const out=path.resolve('out');
for(const route of ['','posts','about','search','categories','tags'])assert(fs.existsSync(path.join(out,route,'index.html')),`Missing ${route}`);
for(const post of getPosts()){
 const file=path.join(out,post.url,post.url.endsWith('.html')?'':'index.html');
 assert(fs.existsSync(file),`Missing post: ${post.url}`);
 const html=fs.readFileSync(file,'utf8');
 assert(html.includes('article-cover')&&html.includes('Illustrative photo by')&&html.includes('application/ld+json'),`Article metadata/cover missing: ${post.url}`);
 assert(fs.existsSync(path.join(out,post.cover.image)),`Cover missing: ${post.cover.image}`);
}
for(const n of ['feed.xml','sitemap.xml','.nojekyll'])assert(fs.existsSync(path.join(out,n)),`Missing ${n}`);
const legacy=JSON.parse(fs.readFileSync('lib/legacy-urls.json','utf8'));
const postRoutes=legacy.filter(u=>/\/\d{4}\/\d{2}\/\d{2}\//.test(u));
for(const url of postRoutes)assert(fs.existsSync(path.join(out,url)),`Published URL lost: ${url}`);
console.log(`Verified ${getPosts().length} post pages, covers, feed, sitemap and ${postRoutes.length} historical URLs.`);
