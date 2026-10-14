"""Read-only checks for static resources, semantic links and preserved design."""
from pathlib import Path
from html.parser import HTMLParser
import json
import re
import subprocess
import sys
from urllib.parse import urlsplit, unquote

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / 'dist'


class Markup(HTMLParser):
    def __init__(self):
        super().__init__()
        self.nodes = []
        self.stack = []

    def handle_starttag(self, tag, attrs):
        a = {key: value or '' for key, value in attrs}
        parent_dialog = next((a.get('id') for t, a in reversed(self.stack) if t == 'dialog'), None)
        self.nodes.append({'tag': tag, 'attrs': a, 'text': '', 'dialog': parent_dialog})
        if tag not in ('area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'):
            self.stack.append((tag, a))

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)

    def handle_endtag(self, tag):
        for i in range(len(self.stack) - 1, -1, -1):
            if self.stack[i][0] == tag:
                self.stack = self.stack[:i]
                break

    def handle_data(self, data):
        if self.nodes:
            self.nodes[-1]['text'] += data


index = (DIST / 'index.html').read_text()
parser = Markup()
parser.feed(index)
if '--emit-dom' in sys.argv:
    print(json.dumps(parser.nodes))
    raise SystemExit

pages = list(DIST.glob('*.html'))
for page in pages:
    p = Markup()
    text = page.read_text()
    p.feed(text)
    ids = [n['attrs']['id'] for n in p.nodes if 'id' in n['attrs']]
    assert len(ids) == len(set(ids)), f'Duplicate ID: {page}'
    assert len([n for n in p.nodes if n['tag'] == 'h1']) == 1, page
    for n in p.nodes:
        a = n['attrs']
        for key in ['src', 'href']:
            value = a.get(key, '')
            url = urlsplit(value)
            if not value or url.scheme or url.netloc:
                continue
            if url.path:
                assert (page.parent / unquote(url.path)).is_file(), f'{page}: missing {value}'
            elif url.fragment:
                assert url.fragment in ids, f'{page}: missing #{url.fragment}'
        for key in ['aria-labelledby', 'aria-describedby', 'aria-controls']:
            for target in a.get(key, '').split():
                assert target in ids, f'{page}: missing ARIA target {target}'
        if a.get('target') == '_blank':
            assert 'noopener' in a.get('rel', '') and 'noreferrer' in a.get('rel', ''), page
        if n['tag'] == 'script':
            assert a.get('src') and not urlsplit(a['src']).scheme, 'Unexpected script or inline script'
        if n['tag'] == 'img':
            assert 'alt' in a, 'Image lacks alt text'
    if page.name != 'index.html':
        assert 'legal-review-note' in text
        assert len([n for n in p.nodes if n['attrs'].get('aria-current') == 'page']) == 1
        assert not any(n['tag'] == 'script' for n in p.nodes), 'Static policies must work without scripting'
        assert '410050' not in text, 'Unconfirmed postal identifier must not be presented as address'

baseline = subprocess.check_output(['git', 'show', 'c14016eb1b4a82e0ebee954509b2d9ab573a2748:dist/index.html'], cwd=ROOT, text=True)
for start, end in [('<header class="site-header">', '</header>'), ('<main id="main">', '</main>')]:
    extract = lambda text: text[text.index(start):text.index(end) + len(end)]
    assert extract(index) == extract(baseline), f'Approved design changed: {start}'
for path in ['dist/styles.css', 'dist/refinement.css', 'dist/assets/favicon.svg', 'dist/assets/anpc-sal.jpg', 'dist/assets/anpc-sal-square.jpg']:
    old = subprocess.check_output(['git', 'show', 'c14016eb1b4a82e0ebee954509b2d9ab573a2748:' + path], cwd=ROOT)
    assert old == (ROOT / path).read_bytes(), path

for name in ['app.js', 'consent.js', 'legal.js']:
    src = (DIST / name).read_text()
    assert not re.search(r'\b(?:fetch|XMLHttpRequest|WebSocket|sendBeacon|indexedDB|sessionStorage)\b', src), name
    assert not re.search(r'document\.cookie\s*=', src), name
assert '<form id="brief-form" inert>' in index
assert "briefForm.removeAttribute('inert')" in (DIST / 'app.js').read_text()
assert 'min-width:680px' in (DIST / 'legal.css').read_text() and 'overflow-x:auto' in (DIST / 'legal.css').read_text()
print(f'PASS: {len(pages)} pages; local resources, IDs, ARIA targets, images and external-link protection.')
print('PASS: approved header, full main content, palette, typography, animation CSS and brand/SAL assets are byte-identical.')
print('PASS: static trilingual policies, real footer links, unconfirmed facts labelled, no form endpoint or added tracking.')
print('Scope: source checks; actual browser layout, focus trapping and assistive-technology output are not verified.')
