from pathlib import Path
from html.parser import HTMLParser
root = Path('_site')
class Check(HTMLParser):
    def __init__(self):
        super().__init__(); self.hrefs=[]
    def handle_starttag(self, tag, attrs):
        for key,value in attrs:
            if key in ('href','src') and value and value.startswith('/') and not value.startswith('//'):
                self.hrefs.append(value.split('#')[0].split('?')[0])
for name in ['index.html','posts/index.html','about/index.html','search/index.html','categories/index.html','tags/index.html']:
    page=root/name
    assert page.is_file(), f'Missing page: {name}'
    text=page.read_text()
    assert 'viewport' in text and 'modern.css' in text, f'Missing modern layout: {name}'
    assert '{{' not in text and '{%' not in text, f'Unrendered Liquid: {name}'
    parser=Check(); parser.feed(text)
    for link in parser.hrefs:
        target=root/link.lstrip('/')
        assert target.exists(), f'Broken local link in {name}: {link}'
print('Verified homepage, archives, search, about, and local links.')
