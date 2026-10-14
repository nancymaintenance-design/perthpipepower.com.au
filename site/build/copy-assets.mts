import { existsSync, lstatSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, isAbsolute, parse, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { assets as approvedAssets } from '../content/assets.mjs';
import { isSafePublicPath } from '../validate-content.mjs';

export const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '../../..');
export const reportRoot = resolve(projectRoot, '../reports/typescript-migration-2026-10-13');
const fold = (value: string): string => value.toLowerCase();
export function inside(root: string, target: string): boolean {
  const rel = relative(fold(resolve(root)), fold(resolve(target)));
  return rel !== '' && rel !== '..' && !rel.startsWith(`..${sep}`) && !isAbsolute(rel);
}

/** Ancestors must be directories; reject symbolic links and shared regular-file inodes. */
export function assertNoLinks(location: string): void {
  const target = resolve(location), disk = parse(target).root;
  let current = disk;
  for (const part of relative(disk, target).split(sep).filter(Boolean)) {
    current = resolve(current, part);
    const stat = lstatSync(current, { throwIfNoEntry: false });
    if (stat?.isSymbolicLink()) throw new Error(`Unsafe symbolic link or junction: ${current}`);
    if (stat?.isFile() && stat.nlink > 1) throw new Error(`Unsafe hard-linked regular file: ${current}`);
    if (stat && current !== target && !stat.isDirectory()) throw new Error(`Unsafe path ancestor is not a directory: ${current}`);
  }
}
export function publicPath(root: string, file: string): string {
  if (!isSafePublicPath(file) || file.split('/').some(part => /[. ]$/.test(part)
    || /^(?:con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i.test(part))) throw new Error(`Unsafe public path: ${file}`);
  const result = resolve(root, file);
  if (!inside(root, result)) throw new Error(`Public path escapes directory: ${file}`);
  assertNoLinks(result);
  return result;
}
export function checkRoots(sourceRoot: string, outDir: string): { sourceRoot: string; outDir: string } {
  const source = resolve(sourceRoot), output = resolve(outDir);
  const fixture = (target: string): boolean => inside(reportRoot, target) && relative(reportRoot, target).split(sep).length >= 2;
  if (fold(source) !== fold(projectRoot) && !fixture(source)) throw new Error(`Unsafe source directory scope: ${source}`);
  if (fold(output) !== fold(resolve(projectRoot, 'dist')) && !fixture(output)) throw new Error(`Unsafe output directory scope: ${output}`);
  if (fold(source) === fold(output) || inside(output, source)) throw new Error('Unsafe output directory is source or its parent');
  assertNoLinks(source); assertNoLinks(output);
  if (!lstatSync(source, { throwIfNoEntry: false })?.isDirectory()) throw new Error('Missing source asset directory');
  if (existsSync(output) && !lstatSync(output).isDirectory()) throw new Error('Output must be a directory');
  return { sourceRoot: source, outDir: output };
}

/** Read and validate every asset before exposing any partial copy. */
export function readPublicAssets(sourceRoot: string, assets: readonly string[]): ReadonlyMap<string, Buffer> {
  const files = new Map<string, Buffer>(), seen = new Set<string>();
  for (const file of assets) {
    const key = fold(file);
    if (seen.has(key)) throw new Error(`Duplicate public asset collision: ${file}`);
    seen.add(key);
    if (!approvedAssets.includes(file)) throw new Error(`Asset is outside public allowlist: ${file}`);
    const location = publicPath(sourceRoot, file);
    if (!lstatSync(location, { throwIfNoEntry: false })?.isFile()) throw new Error(`Missing regular public asset: ${file}`);
    files.set(file, readFileSync(location));
  }
  return files;
}

export function listOutputFiles(root: string, allowedFiles: ReadonlySet<string>, prefix = ''): string[] {
  if (!existsSync(root)) return [];
  assertNoLinks(root);
  return readdirSync(root, { withFileTypes: true }).flatMap(entry => {
    const file = `${prefix}${entry.name}`, location = publicPath(root, entry.name);
    if (entry.isSymbolicLink()) throw new Error(`Unsafe output symbolic link: ${file}`);
    if (entry.isDirectory()) {
      if (![...allowedFiles].some(allowed => allowed.startsWith(`${file}/`))) throw new Error(`Unexpected public output directory: ${file}`);
      return listOutputFiles(location, allowedFiles, `${file}/`);
    }
    if (!entry.isFile()) throw new Error(`Non-regular output file: ${file}`);
    return [file];
  }).sort();
}

/** Refuse differing existing bytes; identical files are retained without writing. */
export function copyPublicAssets(sourceRoot: string, outDir: string, assets: readonly string[]): void {
  const roots = checkRoots(sourceRoot, outDir), files = readPublicAssets(roots.sourceRoot, assets);
  for (const file of listOutputFiles(roots.outDir, new Set(files.keys()))) if (!files.has(file)) throw new Error(`Unexpected public output file: ${file}`);
  const pending = new Map<string, Buffer>();
  for (const [file, bytes] of files) {
    const target = publicPath(roots.outDir, file), stat = lstatSync(target, { throwIfNoEntry: false });
    if (stat && !stat.isFile()) throw new Error(`Public asset output is not a regular file: ${file}`);
    if (stat) {
      if (!readFileSync(target).equals(bytes)) throw new Error(`Existing public asset has different bytes: ${file}`);
    } else pending.set(file, bytes);
  }
  for (const [file, bytes] of pending) {
    const target = publicPath(roots.outDir, file);
    mkdirSync(dirname(target), { recursive: true }); writeFileSync(target, bytes);
  }
}
