const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const contentTypes = { '.html': 'text/html; charset=utf-8', '.png': 'image/png' };

const server = http.createServer((request, response) => {
  const pathname = request.url === '/' ? '/index.html' : request.url;
  const file = path.resolve(root, `.${pathname}`);

  if (!file.startsWith(root) || !fs.existsSync(file)) {
    response.writeHead(404).end();
    return;
  }

  response.writeHead(200, { 'content-type': contentTypes[path.extname(file)] ?? 'application/octet-stream' });
  fs.createReadStream(file).pipe(response);
});

const request = (port, pathname) => new Promise((resolve, reject) => {
  http.get({ hostname: '127.0.0.1', port, path: pathname }, (response) => {
    const chunks = [];
    response.on('data', (chunk) => chunks.push(chunk));
    response.on('end', () => resolve({ status: response.statusCode, body: Buffer.concat(chunks).toString('utf8') }));
  }).on('error', reject);
});

server.listen(0, '127.0.0.1', async () => {
  try {
    const port = server.address().port;
    const home = await request(port, '/');

    assert.equal(home.status, 200, 'the homepage should be served');
    assert.match(home.body, /<link\s+rel=["']icon["']\s+href=["']\/favicon\.png["']\s+type=["']image\/png["']\s*\/?\s*>/i,
      'the homepage should declare the standard PNG favicon');
    assert.match(home.body, /<link\s+rel=["']apple-touch-icon["']\s+href=["']\/favicon\.png["']\s*\/?\s*>/i,
      'the homepage should retain an Apple touch icon declaration');

    const favicon = await request(port, '/favicon.png');
    assert.equal(favicon.status, 200, 'the declared favicon URL should resolve');

    console.log('Homepage favicon requirements passed.');
  } finally {
    server.close();
  }
});
