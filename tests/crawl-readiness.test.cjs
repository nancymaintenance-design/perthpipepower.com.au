const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8');
const map=read('sitemap.xml');
const indexable=fs.readdirSync(root).filter(f=>f.endsWith('.html')&&!/name="robots" content="noindex/i.test(read(f)));
for(const file of indexable){const canonical=read(file).match(/<link\s+rel="canonical"\s+href="([^"]+)"/)[1];assert(map.includes(`<loc>${canonical}</loc>`),file+' missing from sitemap');}
for(const file of indexable){const html=read(file);for(const [id,target] of [['plumbing-menu','fixtures-appliances-perth.html'],['electrical-menu','renewables-smart-home-perth.html']]){const menu=html.match(new RegExp(`<ul[^>]*id="${id}"[^>]*>([\\s\\S]*?)<\\/ul>`))?.[1];if(menu)assert(menu.includes(`href="${target}"`),file+' missing native service link');}}
assert.equal(indexable.length,35);
console.log('PASS all 35 indexable pages in sitemap; new-service dropdown links available without JavaScript.');
