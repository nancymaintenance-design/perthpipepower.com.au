// Mechanical asset optimisation and content-backed sitemap timestamps.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const gallery = require('../electrical-work-gallery.js');
const sharp = require(process.env.PERTH_SHARP_MODULE || 'C:/Users/UFTR/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const date = process.argv[2];
if (!/^\d{4}-\d{2}-\d{2}$/.test(date || '') || new Date(date).toISOString().slice(0, 10) !== date) throw new Error('Supply the actual content change date: YYYY-MM-DD');
(async () => {
  const assets = [];
  for (const photo of gallery.ELECTRICAL_WORK_GALLERY) {
    for (const width of [480, 960]) {
      const target = photo.image.replace(/\.jpg$/, `-${width}.webp`);
      // Match the existing centre-cropped 4:3 gallery slot; retain originals.
      await sharp(path.join(root, photo.image)).rotate().resize({width, height:width * 3 / 4, fit:'cover', position:'centre'}).webp({quality:75}).toFile(path.join(root, target));
      assets.push({file:target, bytes:fs.statSync(path.join(root, target)).size});
    }
  }
  const manifestPath = path.join(root, 'data/sitemap-content-dates.json');
  const manifest = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, 'utf8')) : {};
  const sitemapPath = path.join(root, 'sitemap.xml');
  let sitemap = fs.readFileSync(sitemapPath, 'utf8');
  sitemap = sitemap.replace(/<url>([\s\S]*?)<\/url>/g, (_, entry) => {
    const url = entry.match(/<loc>([^<]+)<\/loc>/)[1];
    const file = new URL(url).pathname.slice(1) || 'index.html';
    const sha256 = crypto.createHash('sha256').update(fs.readFileSync(path.join(root, file))).digest('hex');
    if (manifest[file]?.sha256 !== sha256) manifest[file] = {sha256, lastmod:date};
    entry = entry.replace(/\s*<lastmod>[^<]*<\/lastmod>/g, '');
    return '<url>' + entry.replace(/<\/loc>/, `</loc><lastmod>${manifest[file].lastmod}</lastmod>`) + '</url>';
  });
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
  fs.writeFileSync(sitemapPath, sitemap);
  const sourceBytes = gallery.ELECTRICAL_WORK_GALLERY.reduce((sum, p) => sum + fs.statSync(path.join(root, p.image)).size, 0);
  console.log(JSON.stringify({sourceBytes, variants:assets, sitemapPages:Object.keys(manifest).length}, null, 2));
})().catch(e => {console.error(e);process.exitCode = 1;});
