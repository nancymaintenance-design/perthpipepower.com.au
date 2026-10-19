import { createHash } from 'node:crypto';
import { existsSync, lstatSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import type { Difference } from '../baseline.mjs';
import { assets as approvedAssets } from '../content/assets.mjs';
import { expectedPageFiles, loadSiteData } from '../content/pages.mjs';
import { renderBilingualSite } from './render-bilingual.mjs';
import {loadApprovedLocales} from '../localization/approved.mjs';
import {feedPaths} from '../discovery/machine.mjs';
import { assertNoLinks, checkRoots, listOutputFiles, projectRoot, publicPath, readPublicAssets } from './copy-assets.mjs';

export interface BuildResult {
  pages: number;
  sitemapUrls: number;
  written: readonly string[];
  differences: readonly Difference[];
}
interface OwnerManifest { version: 1; outDir: string; files: Record<string, string> }
const hash = (bytes: string | Buffer): string => createHash('sha256').update(bytes).digest('hex');
const artifacts = ['sitemap.xml', 'robots.txt', 'llms.txt', 'ai-content.json', 'rss.xml', 'atom.xml',...feedPaths];
const allowed = new Set([...expectedPageFiles,...expectedPageFiles.map(file=>'zh/'+file), ...approvedAssets, ...artifacts]);

function ownerPath(outDir: string): string {
  const location = resolve(projectRoot, '.build/output-manifests', `${hash(outDir.toLowerCase())}.json`);
  assertNoLinks(location);
  const stat = lstatSync(location, { throwIfNoEntry: false });
  if (stat && !stat.isFile()) throw new Error('Build owner manifest must be a regular file');
  return location;
}
function readOwner(location: string, outDir: string): OwnerManifest | null {
  if (!existsSync(location)) return null;
  const value = JSON.parse(readFileSync(location, 'utf8')) as OwnerManifest;
  if (value.version !== 1 || value.outDir !== outDir || !value.files || typeof value.files !== 'object'
    || Array.isArray(value.files) || Object.entries(value.files).some(([file, digest]) => !allowed.has(file) || !/^[a-f0-9]{64}$/.test(digest))) {
    throw new Error('Invalid build owner manifest');
  }
  return value;
}

/**
 * sourceRoot selects public asset input only. The loaded compiled canonical data
 * remains authoritative; old root HTML, dist, and CJS data are never fallbacks.
 * All data, assets, existing output and optional mirror paths are preflighted
 * before the first write. Missing input cannot damage an existing valid build.
 */
export function buildSite(options: { sourceRoot: string; outDir: string; mirrorRoot?: string }): BuildResult {
  const site = loadSiteData(), rendered = renderBilingualSite(site,loadApprovedLocales(projectRoot,site));
  const roots = checkRoots(options.sourceRoot, options.outDir);
  const resources = readPublicAssets(roots.sourceRoot, site.assets);
  const output = new Map<string, string | Buffer>([...rendered, ...resources]);
  const written = [...output.keys()].sort();
  for (const file of written) {
    const target = publicPath(roots.outDir, file), stat = lstatSync(target, { throwIfNoEntry: false });
    if (stat && !stat.isFile()) throw new Error(`Output target is not a regular file: ${file}`);
  }
  const manifestPath = ownerPath(roots.outDir), previous = readOwner(manifestPath, roots.outDir);
  const stale: string[] = [];
  for (const file of listOutputFiles(roots.outDir, new Set([...written, ...Object.keys(previous?.files ?? {})]))) {
    if (!output.has(file) && !previous?.files[file]) throw new Error(`Unexpected public output file: ${file}`);
    if (!previous?.files[file]) throw new Error(`Unowned output file; build owner manifest required: ${file}`);
    const location = publicPath(roots.outDir, file);
    if (hash(readFileSync(location)) !== previous.files[file]) throw new Error(`User-modified output hash: ${file}`);
    if (!output.has(file)) stale.push(location);
  }
  let mirror: string | undefined;
  if (options.mirrorRoot !== undefined) {
    mirror = resolve(options.mirrorRoot);
    if (mirror.toLowerCase() !== roots.sourceRoot.toLowerCase()) throw new Error('Unsafe compatibility mirror: must equal sourceRoot');
    assertNoLinks(mirror);
    for (const file of rendered.keys()) {
      const target = publicPath(mirror, file), stat = lstatSync(target, { throwIfNoEntry: false });
      if (stat && !stat.isFile()) throw new Error(`Compatibility mirror target is not a regular file: ${file}`);
    }
  }
  const manifest: OwnerManifest = { version: 1, outDir: roots.outDir,
    files: Object.fromEntries(written.map(file => [file, hash(output.get(file)!)])) };
  // No recursive cleanup or directory replacement. Only owner-registered,
  // hash-verified stale files can be removed, and every target was resolved above.
  for (const file of written) {
    const target = publicPath(roots.outDir, file);
    mkdirSync(dirname(target), { recursive: true }); writeFileSync(target, output.get(file)!);
  }
  for (const location of stale) { assertNoLinks(location); unlinkSync(location); }
  if (mirror) for (const [file, text] of rendered) {const target=publicPath(mirror,file);mkdirSync(dirname(target),{recursive:true});writeFileSync(target, text);}
  mkdirSync(dirname(manifestPath), { recursive: true });
  writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  return { pages: [...rendered.keys()].filter(file=>file.endsWith('.html')).length,
    sitemapUrls: [...(rendered.get('sitemap.xml') ?? '').matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].length,
    written, differences: [] };
}
