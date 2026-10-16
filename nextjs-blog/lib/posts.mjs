import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import yaml from 'js-yaml';
import MarkdownIt from 'markdown-it';
import sanitize from 'sanitize-html';
const root = path.resolve(process.cwd(), '..');
const readYaml = file => yaml.load(fs.readFileSync(path.join(root,file),'utf8'));
const covers = readYaml('_data/covers.yml');
const coverMap = readYaml('_data/post_covers.yml');
const rules = readYaml('_data/cover_rules.yml');
const legacy = JSON.parse(fs.readFileSync(path.join(process.cwd(),'lib/legacy-urls.json'),'utf8'));
export const site = {url:'https://aungkoman.github.io',name:'Aung Ko Man',email:'admin@mmsoftware100.com'};
const md = new MarkdownIt({html:true,linkify:true,typographer:false});
const clean = html => sanitize(html,{allowedTags: [...sanitize.defaults.allowedTags,'img','figure','figcaption','iframe','video','source'],allowedAttributes:{...sanitize.defaults.allowedAttributes,'*':['class','id'],img:['src','alt','width','height','loading'],iframe:['src','title','width','height','allowfullscreen','loading'],video:['src','controls','poster'],source:['src','type'],a:['href','name','target','rel']},allowedIframeHostnames:['www.youtube.com','www.youtube-nocookie.com','player.vimeo.com'],transformTags:{a:sanitize.simpleTransform('a',{rel:'noopener noreferrer'})}});
const strip = s => sanitize(md.render(String(s)),{allowedTags:[],allowedAttributes:{}}).trim();
const arr = x => Array.isArray(x) ? x.map(String) : typeof x==='string' ? x.split(/\s+/).filter(Boolean) : [];
export function renderBody(body,data={}) {
  // Resolve Jekyll-only presentation syntax without evaluating template code in examples.
  let text=body.replace(/\{%\s*raw\s*%\}|\{%\s*endraw\s*%\}/g,'');
  text=text.replace(/\{%\s*highlight\s+(\S+).*?%\}/g,'```$1').replace(/\{%\s*endhighlight\s*%\}/g,'```');
  text=text.replace(/\{\{\s*site\.baseurl\s*\}\}/g,'').replace(/\{\{\s*site\.url\s*\}\}/g,site.url).replace(/\{\{\s*page\.image\s*\}\}/g,String(data.image||''));
  text=text.replace(/\{%\s*(?:include|include_relative|gist|youtube)\s+[^%]*%\}/g,match=>'\n<!-- Legacy embed: '+match.replace(/[<>]/g,'')+' -->\n');
  return clean(md.render(text));
}
let cached;
export function getPosts() {
 if(cached) return cached;
 const posts=[];
 for(const file of fs.readdirSync(path.join(root,'_posts')).filter(x=>/\.md$|\.markdown$/i.test(x))) {
  const match=file.match(/^(\d{4})-(\d{1,2})-(\d{1,2})-(.+)\.(?:md|markdown)$/i); if(!match) continue;
  const {data,content}=matter(fs.readFileSync(path.join(root,'_posts',file),'utf8'),{engines:{yaml:s=>yaml.load(s,{schema:yaml.JSON_SCHEMA})}});
  if(data.published===false) continue;
  const [,y,m,d,slug]=match, date=String(data.date||`${y}-${m.padStart(2,'0')}-${d.padStart(2,'0')}`);
  const timestamp=new Date(date.replace(/ (\d\d:\d\d:\d\d) ([+-]\d\d)(\d\d)$/,'T$1$2:$3')).getTime();
  if(Number.isFinite(timestamp)&&timestamp>Date.now()) continue;
  const categories=arr(data.categories||data.category),tags=arr(data.tags);
  const suffix=`/${y}/${m.padStart(2,'0')}/${d.padStart(2,'0')}/${data.slug||slug}.html`;
  const actual=Number.isFinite(timestamp)?new Date(timestamp).toISOString().slice(0,10).replaceAll('-','/'):`${y}/${m.padStart(2,'0')}/${d.padStart(2,'0')}`;
  const normalizedSuffix=suffix.replace(/-+/g,'-').replace(/\/-/g,'/');
  let url=data.permalink||legacy.find(u=>u.endsWith(normalizedSuffix))||legacy.find(u=>u.endsWith(`/${actual}/${data.slug||slug}.html`))||legacy.find(u=>u.endsWith(suffix))||`/${categories.map(c=>c.toLowerCase().replace(/[^\p{L}\p{N}_-]+/gu,'-')).join('/')}${suffix}`;
  url=url.replace(/\/+/g,'/');
  let key=data.cover||coverMap[file];
  if(!key){const t=(String(data.title)+' '+slug).toLowerCase();key=rules.find(r=>r.keywords.some(k=>t.includes(String(k))))?.topic;}
  const html=renderBody(content,data),plain=strip(content);
  posts.push({file,id:file.replace(/\.(md|markdown)$/i,''),title:String(data.title||slug),date:Number.isFinite(timestamp)?new Date(timestamp).toISOString():`${y}-${m.padStart(2,'0')}-${d.padStart(2,'0')}T00:00:00Z`,url,categories,tags,author:String(data.author||site.name),lang:data.lang||'my',cover:covers[key]||covers.writing,html,excerpt:strip(data.excerpt||plain.slice(0,200)),plain});
 }
 // Historical source files already share some URLs; retain one canonical page per URL.
 cached=[...new Map(posts.sort((a,b)=>a.file.localeCompare(b.file)).map(p=>[p.url,p])).values()].sort((a,b)=>b.date.localeCompare(a.date)||b.file.localeCompare(a.file));
 return cached;
}
export function allRoutes(){return ['posts','about','search','categories','tags',...getPosts().map(p=>p.url.replace(/^\/|\/$/g,''))];}

export function getAboutHtml(){return renderBody(matter(fs.readFileSync(path.join(root,'about.md'),'utf8')).content);}
