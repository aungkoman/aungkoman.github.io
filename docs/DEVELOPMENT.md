# Development and release workflow

The root website is Jekyll. Existing standalone demos remain in their original directories. Keep post filenames and permalinks stable.

## Local development

Use Ruby 3.3, then `bundle install` and `bundle exec jekyll serve`. For production validation run `JEKYLL_ENV=production bundle exec jekyll build` and `python3 scripts/verify-site.py`.

## Implementation plan

1. Remove workflows sending repository secrets to external servers (completed).
2. Fix invalid post dates and ambiguous About/404 sources (completed).
3. Introduce responsive homepage, typography, navigation, project cards, article reading layout, archives, and local search (implemented).
4. Verify desktop/mobile layout, internal navigation, and production build in PR CI.
5. Merge to master; Pages workflow builds and publishes the verified artifact automatically.
6. Check the deployment result and production homepage, archive, article, and demo URLs.

## Codex prompts

### Add a feature
Inspect `_config.yml`, `_layouts`, `_includes`, `assets/css/modern.css`, and the affected routes. Implement [feature] with accessible HTML and responsive styles. Preserve post URLs and standalone demos. Run the production build and verifier, inspect desktop and mobile screenshots, and open a focused PR.

### Fix a deployment
Read the failed Actions job logs before editing. Fix the root cause with the smallest change, retaining existing routes. Run production validation, update the PR, and verify the master deployment after merge.

### Publish content
Create a post in `_posts/YYYY-MM-DD-slug.md` using a valid ISO date, an escaped title in YAML, and appropriate categories/tags. Preview the rendered content and verify internal links. Avoid changing historical permalinks.

## Release and rollback

PR builds do not deploy. Pushes to master deploy only after the build and link checks succeed. Revert the offending merge commit through a new PR for rollback; do not force-push master.

## Security finding

Three removed workflows transmitted secrets or scanned repository history to an external IP. Removing them prevents future runs from master. Previously exposed Firebase credentials and any other affected credentials require revocation/rotation in their issuing services; removal cannot revoke credentials already copied elsewhere.
