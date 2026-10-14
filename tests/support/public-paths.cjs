const fs = require('node:fs');
const path = require('node:path');
const SOURCE_ROOT = path.resolve(__dirname, '../..');
const REPORT_ROOT = path.resolve(SOURCE_ROOT, '../reports/typescript-migration-2026-10-13');
const {resolvePublicRoot}=require('../../scripts/lib/ts-compat.cjs');
function createFixture(prefix) {
  if (!/^[a-z0-9-]+$/i.test(prefix)) throw new Error('Invalid fixture prefix');
  const parent = path.join(REPORT_ROOT, 'test-temp');
  fs.mkdirSync(parent,{recursive:true});
  return fs.mkdtempSync(path.join(parent,prefix));
}
module.exports = {SOURCE_ROOT, REPORT_ROOT, resolvePublicRoot, createFixture};
