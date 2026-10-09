import { cp, mkdir, rm } from 'node:fs/promises';
// Only copy the blog's shared assets. The unrelated demo apps remain in the repository.
await rm('public', { recursive: true, force: true });
await mkdir('public', { recursive: true });
for (const path of ['images', 'assets', 'css', 'font', 'favicon.png', 'app-ads.txt']) {
  await cp(path, `public/${path}`, { recursive: true });
}
