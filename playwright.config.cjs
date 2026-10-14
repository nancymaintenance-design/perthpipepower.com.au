const path = require('node:path');
const {defineConfig} = require('@playwright/test');
const report = path.resolve(__dirname, '../reports/content-navigation-repair-2026-10-14');
const baseURL = process.env.TS_PREVIEW_URL || 'http://127.0.0.1:4189';
const url = new URL(baseURL);
if (url.protocol !== 'http:' || url.hostname !== '127.0.0.1') throw new Error('Browser tests require a 127.0.0.1 HTTP preview');
module.exports = defineConfig({
  testDir: './tests/browser', timeout: 60000, workers: 1, retries: 0,
  outputDir: path.join(report, 'browser-results'),
  reporter: [['list'], ['json', {outputFile: path.join(report, 'browser-results.json')}]],
  use: {baseURL, channel: 'msedge', headless: true, viewport: {width:1440,height:900}, trace:'retain-on-failure'},
});
