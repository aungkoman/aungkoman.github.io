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
# Every rendered article must have a local, responsive, attributed cover.
article_count = 0
for page in root.rglob('*.html'):
    text = page.read_text(errors='replace')
    if '<article class="reading">' not in text or '<time datetime=' not in text:
        continue
    article_count += 1
    assert 'class="article-cover"' in text, f'Missing cover: {page}'
    assert 'Illustrative photo by' in text and 'https://unsplash.com/photos/' in text, f'Missing credit: {page}'
    assert 'srcset=' in text and 'width="1280" height="720"' in text, f'Missing responsive image: {page}'
    parser = Check(); parser.feed(text)
    for link in parser.hrefs:
        if link.startswith('/assets/images/covers/'):
            assert (root / link.lstrip('/')).is_file(), f'Missing photo: {link}'
assert article_count > 0, 'No article pages were found'
print(f'Verified responsive Unsplash covers and credits on all {article_count} article pages.')
