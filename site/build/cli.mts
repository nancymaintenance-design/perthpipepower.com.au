import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { projectRoot } from './copy-assets.mjs';
import { buildSite } from './write-output.mjs';

/** No implicit compatibility mirror; CLI only produces the dedicated dist. */
export function runCli(args: readonly string[] = process.argv.slice(2)): void {
  if (args.length) throw new Error('Build CLI takes no arguments; use buildSite for explicit fixture/mirror options');
  const result = buildSite({ sourceRoot: projectRoot, outDir: resolve(projectRoot, 'dist') });
  console.log(`Built ${result.pages} pages, ${result.sitemapUrls} sitemap URLs, ${result.written.length} public files.`);
}
if (process.argv[1] && pathToFileURL(resolve(process.argv[1])).href === import.meta.url) {
  try { runCli(); }
  catch (error) { console.error(error instanceof Error ? error.message : String(error)); process.exitCode = 1; }
}
