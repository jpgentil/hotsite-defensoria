# Repository Guidelines

## Project Structure & Module Organization
This repository is a static web project with page-specific HTML and shared assets at the root:

- `index.html`: main landing page.
- `informacoes_defensores.html` and `nomes.html`: supporting content pages.
- `styles.css`: shared visual styles.
- `script.js`: shared client-side behavior/animations.
- `video/hero.mp4`: media asset used by the hero section.

Keep new static assets in clearly named folders (for example, `video/`, `img/`, `audio/`) and prefer reusing shared CSS/JS before adding page-specific duplicates.

## Build, Test, and Development Commands
No build pipeline is configured; run locally with a static server:

- `python -m http.server 8000` from repo root: serves files at `http://localhost:8000`.
- `npx serve .` (optional): alternative static server if Node tooling is available.

After changes, manually verify:
- Main page load (`/index.html`)
- Secondary pages (`/informacoes_defensores.html`, `/nomes.html`)
- Video load and responsive layout behavior.

## Coding Style & Naming Conventions
Use consistent, readable front-end conventions:

- Indentation: 2 spaces in HTML, CSS, and JavaScript.
- File names: lowercase with underscores for multiword HTML files (existing pattern).
- CSS classes: kebab-case (for example, `.hero__video-wrap`, `.header-badge`).
- JavaScript: `const`/`let` (avoid `var`), descriptive camelCase identifiers.

Prefer semantic HTML and preserve accessibility attributes (`aria-*`, skip links, landmark roles).

## Testing Guidelines
There is currently no automated test suite. Use lightweight manual regression checks before PRs:

- Verify console has no JavaScript errors.
- Check layout on desktop and mobile widths.
- Confirm links, navigation anchors, and media playback.

If automation is introduced, place tests under `tests/` and name files `*.test.js`.

## Commit & Pull Request Guidelines
Git metadata is not available in this folder, so follow these conventions going forward:

- Commit format: `type(scope): short summary` (for example, `feat(hero): improve video fallback`).
- Keep commits focused and atomic.
- PRs should include: objective, changed files, manual test notes, and screenshots/GIFs for UI updates.
- Link related issue/task IDs when applicable.
