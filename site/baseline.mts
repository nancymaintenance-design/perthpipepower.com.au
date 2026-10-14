import { createHash } from 'node:crypto';
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, extname, isAbsolute, relative, resolve, sep } from 'node:path';
import { parse, type DefaultTreeAdapterTypes } from 'parse5';

export interface PageSnapshot {
  sha256: string;
  title: string;
  description: string | null;
  canonical: string;
  robots: string | null;
  headings: readonly { level: number; text: string }[];
  faq: readonly { question: string; answer: string }[];
  jsonLd: readonly unknown[];
  dom: string;
  rawText: readonly { tag: string; content: string }[];
}
export interface BaselineManifest {
  version: 1;
  capturedAt: string;
  pages: Readonly<Record<string, PageSnapshot>>;
  sitemapUrls: readonly string[];
  assets: Readonly<Record<string, string>>;
  artifacts: Readonly<Record<string, string>>;
  protectedSourceHashes: Readonly<Record<string, string>>;
}
export interface Difference { file: string; field: string; expected: unknown; actual: unknown }
type Node = DefaultTreeAdapterTypes.Node;
type Element = DefaultTreeAdapterTypes.Element;
const hash = (data: string | Buffer): string => createHash('sha256').update(data).digest('hex');
const normalLines = (text: string): string => text.replace(/\r\n?/g, '\n');
const children = (node: Node): Node[] => 'childNodes' in node ? node.childNodes : [];
const isElement = (node: Node): node is Element => 'tagName' in node;
const attr = (node: Element, name: string): string | null => node.attrs.find(a => a.name === name)?.value ?? null;
const textContent = (node: Node): string => node.nodeName === '#text'
  ? (node as DefaultTreeAdapterTypes.TextNode).value : children(node).map(textContent).join('');
const readable = (node: Node): string => textContent(node).replace(/\s+/g, ' ').trim();
function walk(node: Node): Element[] {
  const result: Element[] = isElement(node) ? [node] : [];
  for (const child of children(node)) result.push(...walk(child));
  if (isElement(node) && node.tagName === 'template') result.push(...walk((node as DefaultTreeAdapterTypes.Template).content));
  return result;
}
// Keep every text node, including whitespace between inline elements. parse5 normalizes
// CRLF and resolves entities; attribute ordering alone is deliberately irrelevant.
function canonicalNode(node: Node): unknown {
  if (node.nodeName === '#text') return ['text', textContent(node)];
  if (node.nodeName === '#comment') return ['comment', (node as DefaultTreeAdapterTypes.CommentNode).data];
  if (node.nodeName === '#documentType') {
    const doctype = node as DefaultTreeAdapterTypes.DocumentType;
    return ['doctype', doctype.name, doctype.publicId, doctype.systemId];
  }
  if (isElement(node)) {
    const attributes = node.attrs.map(a => [a.namespace ?? '', a.name, a.value]);
    attributes.sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b), 'en'));
    const content = node.tagName === 'template' ? children((node as DefaultTreeAdapterTypes.Template).content) : children(node);
    return ['element', node.namespaceURI, node.tagName, attributes, content.map(canonicalNode)];
  }
  return [node.nodeName === '#document' ? 'document' : 'fragment', children(node).map(canonicalNode)];
}
function snapshot(html: string): PageSnapshot {
  const document = parse(html);
  const elements = walk(document);
  const find = (tag: string, name?: string, value?: string): Element | undefined =>
    elements.find(node => node.tagName === tag && (!name || attr(node, name)?.toLowerCase() === value));
  const jsonLd = elements.filter(node => node.tagName === 'script' && attr(node, 'type') === 'application/ld+json')
    .map(node => JSON.parse(textContent(node)) as unknown);
  return {
    sha256: hash(html), title: textContent(find('title') ?? document),
    description: find('meta', 'name', 'description') ? attr(find('meta', 'name', 'description')!, 'content') : null,
    canonical: find('link', 'rel', 'canonical') ? attr(find('link', 'rel', 'canonical')!, 'href') ?? '' : '',
    robots: find('meta', 'name', 'robots') ? attr(find('meta', 'name', 'robots')!, 'content') : null,
    headings: elements.filter(node => /^h[1-6]$/.test(node.tagName)).map(node => ({ level: Number(node.tagName[1]), text: readable(node) })),
    faq: elements.filter(node => node.tagName === 'details').flatMap(node => {
      const summary = children(node).find(child => isElement(child) && child.tagName === 'summary');
      return summary ? [{ question: readable(summary), answer: children(node).filter(child => child !== summary).map(textContent).join('').replace(/\s+/g, ' ').trim() }] : [];
    }),
    jsonLd, dom: JSON.stringify(canonicalNode(document)),
    rawText: elements.filter(node => ['pre', 'textarea', 'script', 'style'].includes(node.tagName)).map(node => ({ tag: node.tagName, content: textContent(node) }))
  };
}

const artifactNames = new Set(['sitemap.xml', 'robots.txt', 'llms.txt', 'ai-content.json', 'feed.xml', 'rss.xml', 'atom.xml']);
const imageExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif', '.svg', '.ico', '.woff', '.woff2']);
function pageFiles(root: string): string[] {
  return readdirSync(root, { withFileTypes: true }).filter(entry => entry.isFile() && entry.name.endsWith('.html')).map(entry => entry.name).sort();
}
function runtimeFile(file: string): boolean {
  return extname(file) === '.css' || (extname(file) === '.js' && !/^(?:test-|check-)/.test(file));
}
function publicAssets(root: string): string[] {
  const files = readdirSync(root, { withFileTypes: true }).filter(entry => entry.isFile()
    && (runtimeFile(entry.name) || imageExtensions.has(extname(entry.name)))).map(entry => entry.name);
  function directory(name: string): void {
    const location = resolve(root, name);
    if (!existsSync(location)) return;
    for (const entry of readdirSync(location, { withFileTypes: true })) {
      const file = `${name}/${entry.name}`;
      if (entry.isDirectory() && !entry.name.startsWith('.')) directory(file);
      else if (entry.isFile() && (imageExtensions.has(extname(file)) || (name === 'service-areas' && extname(file) === '.html'))) files.push(file);
    }
  }
  directory('images'); directory('service-areas');
  return files.sort();
}
function checkedPath(root: string, file: string): string {
  if (!file || isAbsolute(file) || file.includes('\\') || file.split('/').some(part => part === '.' || part === '..' || part.startsWith('.'))) {
    throw new Error(`Unsafe baseline path: ${file}`);
  }
  const location = resolve(root, file);
  const inside = relative(resolve(root), location);
  if (inside.startsWith(`..${sep}`) || isAbsolute(inside)) throw new Error(`Baseline path escapes root: ${file}`);
  return location;
}
function sitemapUrls(xml: string): string[] {
  return [...xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)].map(match => match[1]!.replace(/&amp;/g, '&'));
}
export function captureBaseline(publicRoot: string, reportRoot: string): BaselineManifest {
  const pages = Object.fromEntries(pageFiles(publicRoot).map(file => [file, snapshot(readFileSync(checkedPath(publicRoot, file), 'utf8'))]));
  const assets = Object.fromEntries(publicAssets(publicRoot).map(file => [file, hash(readFileSync(checkedPath(publicRoot, file)))]));
  const artifacts = Object.fromEntries([...artifactNames].sort().filter(file => existsSync(resolve(publicRoot, file)))
    .map(file => [file, readFileSync(checkedPath(publicRoot, file), 'utf8')]));
  const protectedFiles = Object.keys(assets).filter(runtimeFile);
  if (existsSync(resolve(publicRoot, 'api/enquiry.js'))) protectedFiles.push('api/enquiry.js');
  const manifest: BaselineManifest = {
    version: 1, capturedAt: new Date().toISOString(), pages, sitemapUrls: sitemapUrls(artifacts['sitemap.xml'] ?? ''), assets, artifacts,
    protectedSourceHashes: Object.fromEntries(protectedFiles.sort().map(file => [file, hash(readFileSync(checkedPath(publicRoot, file)))]))
  };
  // Evidence is a narrowly selected recovery record, never a deployable source tree.
  for (const file of [...Object.keys(pages), ...Object.keys(assets), ...Object.keys(artifacts)]) {
    const destination = checkedPath(resolve(reportRoot, 'public-evidence'), file);
    mkdirSync(dirname(destination), { recursive: true });
    copyFileSync(checkedPath(publicRoot, file), destination);
  }
  return manifest;
}
function stable(value: unknown): string {
  return JSON.stringify(value, (_key, item: unknown) => item && typeof item === 'object' && !Array.isArray(item)
    ? Object.fromEntries(Object.entries(item).sort(([a], [b]) => a.localeCompare(b, 'en'))) : item);
}
export function comparePublicOutput(publicRoot: string, manifest: BaselineManifest): Difference[] {
  const differences: Difference[] = [];
  const compare = (file: string, field: string, expected: unknown, actual: unknown): void => {
    if (stable(expected) !== stable(actual)) differences.push({ file, field, expected, actual });
  };
  for (const file of pageFiles(publicRoot)) if (!Object.hasOwn(manifest.pages, file)) compare(file, 'unexpected', null, 'page');
  for (const [file, expected] of Object.entries(manifest.pages)) {
    const location = checkedPath(publicRoot, file);
    if (!existsSync(location)) { compare(file, 'missing', 'page', null); continue; }
    let actual: PageSnapshot;
    try { actual = snapshot(readFileSync(location, 'utf8')); }
    catch (error) { compare(file, 'parse', 'valid HTML and JSON-LD', String(error)); continue; }
    // Raw byte hashes remain recovery evidence. Semantic equality permits CRLF/LF
    // and reordered attributes but compares the complete text-preserving DOM.
    for (const field of ['title', 'description', 'canonical', 'robots', 'headings', 'faq', 'jsonLd', 'dom', 'rawText'] as const) compare(file, field, expected[field], actual[field]);
  }
  for (const file of publicAssets(publicRoot)) if (!Object.hasOwn(manifest.assets, file)) compare(file, 'unexpected', null, 'asset');
  for (const [file, expected] of Object.entries(manifest.assets)) {
    const location = checkedPath(publicRoot, file);
    if (!existsSync(location)) compare(file, 'missing', expected, null);
    else compare(file, 'sha256', expected, hash(readFileSync(location)));
  }
  for (const file of artifactNames) if (existsSync(resolve(publicRoot, file)) && !Object.hasOwn(manifest.artifacts, file)) compare(file, 'unexpected', null, 'artifact');
  for (const [file, expected] of Object.entries(manifest.artifacts)) {
    const location = checkedPath(publicRoot, file);
    if (!existsSync(location)) { compare(file, 'missing', expected, null); continue; }
    const actual = readFileSync(location, 'utf8');
    compare(file, 'text', normalLines(expected), normalLines(actual));
    if (file === 'sitemap.xml') compare(file, 'sitemapUrls', manifest.sitemapUrls, sitemapUrls(actual));
  }
  return differences;
}
