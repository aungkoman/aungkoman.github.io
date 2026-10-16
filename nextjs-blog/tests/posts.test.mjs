import {test} from 'node:test';
import assert from 'node:assert/strict';
import {getPosts,renderBody} from '../lib/posts.mjs';
test('explicit permalinks, Burmese and legacy paths survive migration',()=>{
 const posts=getPosts();assert(posts.length>500);assert.equal(new Set(posts.map(p=>p.url)).size,posts.length);
 assert(posts.some(p=>p.url==='/software-development/erd-business-logic-authorization-before-ai-coding/'&&p.title.includes('ERD')));
 assert(posts.some(p=>p.url.includes('/2014/03/03/Hello-World.html')));
 for(const p of posts)assert(p.title&&typeof p.html==='string'&&p.cover.source.startsWith('https://unsplash.com/'));
});
test('legacy Liquid assets resolve while code examples survive and scripts are removed',()=>{
 const html=renderBody('![Photo]({{ page.image }})\n\n{% highlight php %}\n{{ $wish->name }}\n{% endhighlight %}\n<script>alert(1)</script>',{image:'/images/test.png'});
 assert(html.includes('/images/test.png'));assert(html.includes('$wish'));assert(!html.includes('<script>'));assert(!html.includes('{%'));
});
