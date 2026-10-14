"""Create a self-contained offline review copy outside the deployed directory."""
from pathlib import Path
import base64
import re

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / 'dist'
OUT = ROOT / 'review'
OUT.mkdir(exist_ok=True)
html = (DIST / 'index.html').read_text()
html = re.sub(r'<link rel="stylesheet" href="([^"]+)">', lambda m: '<style>\n' + (DIST / m[1]).read_text() + '\n</style>', html)
scripts = re.findall(r'<script src="([^"]+)" defer></script>', html)
html = re.sub(r'<script src="([^"]+)" defer></script>', '', html)
for name in scripts:
    code = (DIST / name).read_text().replace('</script', '<\\/script')
    html = html.replace('</body>', '<script>\n' + code + '\n</script>\n</body>')
for path in (DIST / 'assets').iterdir():
    mime = 'image/svg+xml' if path.suffix == '.svg' else 'image/jpeg'
    uri = 'data:' + mime + ';base64,' + base64.b64encode(path.read_bytes()).decode()
    html = html.replace('assets/' + path.name, uri)

# Normal internal policy clicks in this single-file copy use the existing dialogs.
# The ZIP includes the actual static pages for no-JavaScript and new-tab checks.
bridge = '''<script>
document.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link || event.defaultPrevented || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  const match = /^(privacy|cookies)(?:-(?:en|hu))?\\.html$/.exec(link.getAttribute('href') || '');
  if (!match) return;
  event.preventDefault();
  window.CalmSilverDialogs.open(match[1] === 'privacy' ? 'privacy-dialog' : 'cookies-policy-dialog', link);
});
</script>'''
html = html.replace('</body>', bridge + '\n</body>')
(OUT / 'CalmSilver-GDPR-review.html').write_text(html)
print('Created offline review copy; dist is unchanged.')
