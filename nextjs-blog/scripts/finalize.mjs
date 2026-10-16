import fs from 'node:fs';
import path from 'node:path';
import {getPosts,site} from '../lib/posts.mjs';
const root=path.resolve('..'),out=path.resolve('out');
// Retain independently hosted demos, assets and downloads. Never replace Next output.
const skip=new Set(['nextjs-blog','node_modules','scripts','docs','ui-checks','Gemfile','LICENSE','package.json','package-lock.json']);
for(const entry of fs.readdirSync(root,{withFileTypes:true})){
 const n=entry.name;if(n.startsWith('.')||n.startsWith('_')||skip.has(n)||/\.(md|markdown|yml|lock|json\.gz)$/i.test(n))continue;
 fs.cpSync(path.join(root,n),path.join(out,n),{recursive:true,force:false,errorOnExist:false,filter:src=>!src.split(path.sep).includes('node_modules')&&!src.split(path.sep).includes('.git')});
}
const xml=x=>String(x).replace(/[<>&"']/g,c=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[c]));
const posts=getPosts();
// Static hosts serve *.html literally; normalize Next's nested export for old URLs.
for(const post of posts.filter(p=>p.url.endsWith('.html'))){
 const target=path.join(out,post.url),nested=path.join(target,'index.html');
 if(fs.existsSync(nested)){const html=fs.readFileSync(nested);fs.rmSync(target,{recursive:true});fs.writeFileSync(target,html);}
}
fs.writeFileSync(path.join(out,'.nojekyll'),'');
fs.writeFileSync(path.join(out,'feed.xml'),`<?xml version="1.0" encoding="UTF-8"?><feed xmlns="http://www.w3.org/2005/Atom"><title>${site.name}</title><id>${site.url}/</id><updated>${posts[0]?.date||new Date().toISOString()}</updated><link href="${site.url}/feed.xml" rel="self"/><link href="${site.url}/"/>${posts.slice(0,30).map(p=>`<entry><title>${xml(p.title)}</title><id>${xml(site.url+p.url)}</id><link href="${xml(site.url+p.url)}"/><updated>${p.date}</updated><author><name>${xml(p.author)}</name></author><summary>${xml(p.excerpt)}</summary><content type="html">${xml(p.html)}</content></entry>`).join('')}</feed>`);
fs.writeFileSync(path.join(out,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${['/','/posts/','/about/','/search/','/categories/','/tags/',...posts.map(p=>p.url)].map(url=>`<url><loc>${xml(site.url+url)}</loc></url>`).join('')}</urlset>`);
fs.writeFileSync(path.join(out,'robots.txt'),`User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml\n`);
fs.writeFileSync('route-manifest.json',JSON.stringify(posts.map(({file,url,title})=>({file,url,title})),null,2));
console.log(`Prepared static export with ${posts.length} posts and legacy assets.`);
