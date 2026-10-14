'use strict';
const fs = require('node:fs');
const path = require('node:path');
const SOURCE_ROOT = path.resolve(__dirname, '../..');
function loadCompiledModule(relativeModule) {
  if (typeof relativeModule !== 'string' || !/^(?:site|tools)\/(?:[a-zA-Z0-9_-]+\/)*[a-zA-Z0-9_-]+\.mjs$/.test(relativeModule)) {
    throw new Error('Invalid controlled compiled module path');
  }
  const root = path.join(SOURCE_ROOT, '.build');
  const target = path.join(root, relativeModule);
  let current = SOURCE_ROOT;
  for (const part of ['.build', ...relativeModule.split('/')]) {
    current = path.join(current, part);
    const stat = fs.lstatSync(current, {throwIfNoEntry:false});
    if (stat?.isSymbolicLink()) throw new Error('Invalid controlled compiled module link');
    if (!stat) throw new Error(`Missing compiled module ${relativeModule}; run npm run compile first.`);
  }
  // Node 24 loads this synchronous ESM graph; no top-level await or implicit build.
  return require(target);
}
function retired() { throw new Error('Legacy write command retired. Edit canonical site content and run npm run build.'); }
function resolvePublicRoot(explicitRoot) {
  const root = path.resolve(explicitRoot ?? path.join(SOURCE_ROOT, 'dist'));
  if (!fs.statSync(root, {throwIfNoEntry:false})?.isDirectory()) throw new Error(`Missing public directory ${root}; run npm run build.`);
  if (!fs.statSync(path.join(root,'index.html'), {throwIfNoEntry:false})?.isFile()) throw new Error(`Missing public index.html in ${root}`);
  return root;
}
module.exports = {loadCompiledModule, resolvePublicRoot, retired, SOURCE_ROOT};
