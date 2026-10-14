"""Isolated static review server. Never proxies requests or accepts submissions."""
import argparse
import json
import mimetypes
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit

CSP = ("default-src 'self'; script-src 'self' 'unsafe-inline'; "
       "style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; "
       "connect-src 'none'; frame-src 'none'; object-src 'none'; "
       "form-action 'none'; base-uri 'self'; frame-ancestors 'none'")
DENIED = {'api', 'data', 'scripts', 'tests', 'tools', 'docs', 'internal', 'node_modules', 'site', 'source'}
ASSETS = {'.html', '.css', '.js', '.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif',
          '.svg', '.ico', '.woff', '.woff2', '.ttf', '.txt', '.xml'}


class PreviewHandler(BaseHTTPRequestHandler):
    # Persistent HTTP/1.1 framing avoids closing a large, unread response while
    # Node's fetch parser is paused. Every response has an exact Content-Length.
    protocol_version = 'HTTP/1.1'
    def log_message(self, *_args):
        pass

    def respond(self, status, body=b'', content_type='text/plain; charset=utf-8', location=None):
        self.send_response(status)
        self.send_header('Content-Type', content_type)
        self.send_header('Content-Length', str(len(body)))
        self.send_header('Cache-Control', 'no-store')
        self.send_header('X-Robots-Tag', 'noindex, nofollow, noarchive')
        self.send_header('Content-Security-Policy', CSP)
        self.send_header('X-Content-Type-Options', 'nosniff')
        if self.close_connection:
            self.send_header('Connection', 'close')
        if location:
            self.send_header('Location', location)
        self.end_headers()
        if self.command != 'HEAD':
            self.wfile.write(body)

    def do_POST(self):
        # No submission processing. Close this connection so an unread request
        # body cannot be mistaken for a subsequent request on keep-alive.
        self.close_connection = True
        self.respond(403, b'{"error":"Preview submissions are disabled"}', 'application/json')

    def do_HEAD(self):
        self.do_GET()

    def do_GET(self):
        request = urlsplit(self.path)
        raw_path = request.path
        decoded = unquote(raw_path)
        # Reject encoded separators and noncanonical syntax before file resolution.
        parts = decoded.split('/')
        if (request.scheme or request.netloc or not decoded.startswith('/') or
                decoded.startswith('//') or '%' in decoded or '\\' in decoded or
                ':' in decoded or '\x00' in decoded or
                any(p.startswith(('.', 'check-', 'test-')) or p.lower() in DENIED
                    for p in parts if p) or
                '%2f' in raw_path.lower() or '%5c' in raw_path.lower()):
            return self.respond(404)
        target = (self.server.root / decoded.lstrip('/')).resolve()
        if not target.is_relative_to(self.server.root):
            return self.respond(404)
        if decoded in self.server.redirects:
            destination = self.server.redirects[decoded]
            if request.query:
                destination += '?' + request.query
            return self.respond(308, location=destination)
        if decoded == '/':
            target = self.server.root / 'index.html'
        elif target.is_dir():
            return self.respond(404)
        if target.suffix.lower() not in ASSETS and decoded != '/ai-content.json':
            return self.respond(404)
        if not target.is_file():
            return self.respond(404)
        self.respond(200, target.read_bytes(), mimetypes.guess_type(target)[0] or 'application/octet-stream')


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--root', type=Path, required=True)
    parser.add_argument('--config', type=Path, required=True)
    parser.add_argument('--port', type=int, default=4188)
    args = parser.parse_args()
    root = args.root.resolve(strict=True)
    config = json.loads(args.config.resolve(strict=True).read_text(encoding='utf-8-sig'))
    port = args.port
    while True:
        try:
            server = ThreadingHTTPServer(('127.0.0.1', port), PreviewHandler)
            break
        except OSError as error:
            if port == 0 or error.errno not in (48, 98, 10048):
                raise
            port += 1
    server.root = root
    server.redirects = {r['source']: r['destination'] for r in config.get('redirects', [])
                        if r.get('permanent') and ':' not in r['source']}
    print(f'Preview http://127.0.0.1:{server.server_port}', flush=True)
    server.serve_forever()


if __name__ == '__main__':
    main()
