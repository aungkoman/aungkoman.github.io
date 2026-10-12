const { chromium } = require('playwright');
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve('_site');
const types = {'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml'};
const server = http.createServer((req,res) => {
  let file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url,'http://localhost').pathname));
  if (!file.startsWith(root + path.sep) && file !== root) { res.writeHead(403); return res.end(); }
  try {
    if (fs.statSync(file).isDirectory()) file = path.join(file,'index.html');
    res.setHeader('Content-Type',types[path.extname(file)] || 'application/octet-stream');
    fs.createReadStream(file).pipe(res);
  } catch { res.writeHead(404); res.end(); }
});
(async()=>{
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  let browser;
  try {
    browser = await chromium.launch({headless:true});
    const base = `http://127.0.0.1:${server.address().port}`;
    fs.mkdirSync('ui-checks',{recursive:true});
    for (const width of [320,360,390,768,1280]) {
      const page = await browser.newPage({viewport:{width,height:860},deviceScaleFactor:1});
      for (const route of ['/', '/posts/', '/business-software/define-business-problem-before-software/']) {
        await page.goto(base+route,{waitUntil:'load'});
        const result=await page.evaluate(()=>({
          viewport:innerWidth, width:document.documentElement.scrollWidth,
          cover:document.querySelector('.article-cover img')?.getAttribute('src'),
          columns:getComputedStyle(document.querySelector('.post-grid') || document.body).gridTemplateColumns,
          title:document.querySelector('h1')?.textContent.trim()
        }));
        assert(result.title,`Missing title: ${route}`);
        assert(result.width<=width+1,`Horizontal overflow: ${width}px ${route}: ${result.width}`);
        if (route.includes('business-software')) {
          assert(result.cover?.startsWith('/assets/images/covers/'));
          await page.locator('.article-cover img').scrollIntoViewIfNeeded();
          const loaded=await page.locator('.article-cover img').evaluate(img=>img.complete && img.naturalWidth>0);
          assert(loaded,`Article image did not load: ${width}px`);
          assert(await page.locator('.article-cover figcaption a').count()===2);
        } else {
          assert(await page.locator('.card-cover img').count()>0);
          const gridColumns=result.columns.split(' ').length;
          assert.equal(gridColumns,width<640?1:width<1024?2:3);
        }
        if (width<768) {
          const summary=page.locator('.mobile-nav summary');
          assert(await summary.isVisible());
          const box=await summary.boundingBox();
          assert(box.width>=44 && box.height>=44);
          await summary.click();
          assert(await page.getByRole('navigation',{name:'Mobile navigation'}).isVisible());
          assert(await page.getByRole('navigation',{name:'Mobile navigation'}).getByRole('link',{name:'Writing',exact:true}).isVisible());
          assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
          await summary.click();
        } else assert(await page.getByRole('navigation',{name:'Main navigation'}).isVisible());
        if (route==='/' || route.includes('business-software'))
          await page.screenshot({path:`ui-checks/${route==='/'?'home':'article'}-${width}.png`,fullPage:true});
      }
      await page.close();
    }
    console.log('Verified mobile menus, touch targets, images, grids and no horizontal overflow at 320/360/390/768/1280px.');
  } finally { if(browser) await browser.close(); await new Promise(resolve=>server.close(resolve)); }
})().catch(e=>{console.error(e);process.exitCode=1;});
