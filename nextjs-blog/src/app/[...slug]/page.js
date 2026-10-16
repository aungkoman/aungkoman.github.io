import { notFound } from 'next/navigation';
import { getPosts,allRoutes,site,getAboutHtml } from '../../../lib/posts.mjs';
import { Card,Cover } from '../components';
import Search from '../search';
export const dynamicParams=false;
export function generateStaticParams(){return allRoutes().map(r=>({slug:r.split('/')}));}
function find(slug){const route='/'+slug.join('/');return getPosts().find(p=>p.url.replace(/\/$/,'')===route);}
export async function generateMetadata({params}){const {slug}=await params;const p=find(slug);return p?{title:p.title,description:p.excerpt,alternates:{canonical:p.url},openGraph:{title:p.title,description:p.excerpt,url:p.url,type:'article',publishedTime:p.date,images:[p.cover.image]}}:{title:slug[0],alternates:{canonical:'/'+slug.join('/')+'/'}};}
export default async function Page({params}){const {slug}=await params,route=slug.join('/'),posts=getPosts();
 if(route==='posts')return <section className="section"><h1>All writing</h1><p>{posts.length} articles on code, business and life.</p><a href="/search/">Search articles →</a><div className="post-grid">{posts.map(p=><Card key={p.url} post={p}/>)}</div></section>;
 if(route==='search')return <section className="reading"><h1>Search</h1><Search posts={posts.map(p=>({title:p.title,url:p.url,text:p.plain}))}/></section>;
 if(route==='about')return <section className="reading"><div className="prose" dangerouslySetInnerHTML={{__html:getAboutHtml()}}/></section>;
 if(['categories','tags'].includes(route)){const key=route==='categories'?'categories':'tags',terms=[...new Set(posts.flatMap(p=>p[key]))].sort();return <section className="reading"><h1>{route==='tags'?'Tags':'Categories'}</h1><div className="topics">{terms.map(t=><a key={t} href={'#'+encodeURIComponent(t)}>{t}</a>)}</div>{terms.map(t=><section key={t} id={t}><h2>{t}</h2><ul>{posts.filter(p=>p[key].includes(t)).map(p=><li key={p.url}><a href={p.url}>{p.title}</a></li>)}</ul></section>)}</section>}
 const post=find(slug);if(!post)notFound();return <article className="reading"><a className="text-link" href="/posts/">← All writing</a><header className="article-header"><p className="eyebrow">{post.categories.join(' / ')}</p><h1>{post.title}</h1><p className="muted"><time dateTime={post.date}>{post.date.slice(0,10)}</time> · {post.author}</p></header><Cover post={post}/><div className="prose" dangerouslySetInnerHTML={{__html:post.html}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'BlogPosting',headline:post.title,datePublished:post.date,author:{'@type':'Person',name:post.author},url:site.url+post.url,image:site.url+post.cover.image}).replace(/</g,'\\u003c')}}/><footer className="article-footer"><a href="/posts/">More writing →</a></footer></article>;
}
