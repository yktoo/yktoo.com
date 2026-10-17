# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The source of [yktoo.com](https://yktoo.com/) — a trilingual (en/ru/nl) Hugo static site combining a blog, a
software/downloads section, a music (Radiolaria) section and a video catalogue. No JS framework: Bootstrap 5 + jQuery,
bundled by Hugo Pipes. Deployed to Netlify (`netlify.toml`); CI in `.github/workflows/build.yml`.

Requires **Hugo extended** at the minimum set in `module.hugoVersion` in the config, and Node with Yarn 4 via Corepack.
The exact Hugo and Node versions are pinned in the CI workflow and `netlify.toml`; bump all three Hugo versions together.

## Commands

```bash
yarn install                     # Yarn 4 (Corepack); use --immutable in CI
yarn start                       # dev server on :1313 (-DFO: drafts, future, expired, open browser)
yarn build                       # development environment (no Google Analytics)
yarn build:prod                  # production environment
./_dev_/new-post [lang]          # create the next blog post (auto-increments the numeric ID); lang defaults to en
```

`build`/`build:prod` run `clean` then `hugo --gc --minify` then `copy-assets`; the latter hoists `public/en/_redirects`
to `public/` and deletes `public/index.html` (see "Languages & the root URL").

### Tests

E2E is Cypress against a **production-environment** server (GA assertions need it), so the dev server from `yarn start`
will not do:

```bash
yarn start:e2e &                 # hugo server, production env, :1313
yarn cy                          # interactive runner (Chrome)
yarn cy:ci                       # headless, no video
yarn cypress run --spec cypress/e2e/site.cy.ts   # a single spec
```

`yarn test` is not wired up — it exits 1.

Link/image checking uses HTMLProofer over the built `public/` (Ruby, see `Gemfile`; a Docker wrapper is in
`Dockerfile` and `_dev_/html-proofer`):

```bash
bundle exec htmlproofer public/ --allow-missing-href true --checks Links,Images,Scripts,Favicon,OpenGraph \
    --disable-external true --enforce-https false --ignore-empty-mailto true
```

## Architecture

### Configuration

`config/_default/hugo.yaml` holds everything: languages, params, `permalinks`, `taxonomies`, `outputs`,
`outputFormats`, module mounts and all three menus (`nav`, `blog`, `footer`). `config/development/hugo.yaml` only
overrides the site title; the practical difference of the `development` environment is that
`layouts/partials/google-analytics.html` skips the GA snippet.

### Content model

Content type drives layout selection (`type:` in front matter), and `permalinks` rewrites the URLs so the on-disk
layout has little to do with the public path:

| On disk                                       | Type                           | Public URL                                                     |
|-----------------------------------------------|--------------------------------|----------------------------------------------------------------|
| `content/blog/posts/NNNN/index.<lang>.md`     | `post`                         | `/blog/post/YYYY/MM/DD-title/`                                 |
| `content/software/<product>/_index.<lang>.md` | `software` (`layout: product`) | `/software/<product>/`                                         |
| `content/radiolaria/tracks/…`, `…/articles/…` | `radiolaria`, `musicalbums`    | `/radiolaria/…`                                                |
| taxonomy terms                                | —                              | `/blog/tags/…`, `/blog/series/…`, `/blog/places/…`, `/video/…` |

Blog posts are **page bundles named by a zero-padded numeric ID** (`0905/index.en.md`); `_dev_/new-post` finds the
highest ID, increments it, and calls `hugo new` with `archetypes/default.md`. Translations are sibling files in the
same bundle (`index.ru.md`), so a post exists in 1–3 languages.

Taxonomies (`tags`, `series`, `glossary`, `places`, `musicalbums`, `videoartists`, `videoevents`, `videocategories`,
`videotracks`) are declared in the config; `series` and `software` front-matter values also feed Hugo's `related`
indices for "see also" listings.

Structured data that isn't page content lives in `data/`: `downloads.yml` (per-product download lists with
`{version}` placeholders, rendered by `layouts/software/downloads.html`), `blog.yml` (subscribe links),
`about.yml`, `datefmt.yml`.

### Languages & the root URL

`defaultContentLanguageInSubdir: true`, so every real page lives under `/en/`, `/ru/` or `/nl/` and **nothing is served
from `/`**. The root is handled by Netlify redirects generated from `layouts/index.redir` via the custom `redir`
output format: it emits language/country-based 302s, per-post legacy `/blog/post/<ID>` redirects (with and without
leading zeros, and language-free variants), and the 404 rules. That file is generated into `public/en/_redirects`,
which `yarn copy-assets` copies to `public/_redirects`.

Localisation strings are in `i18n/*.yaml` (`{{ T "id" }}`). **Dates do not use Hugo's `.Format`** — Hugo lacks date
localisation, so `layouts/partials/date.html` expands the `dateFormat`/`shortDateFormat` param patterns
(`DOW`, `D`, `DD`, `MON`, `MONTH`, `YYYY`…) against `data/datefmt.yml`. Call it as
`{{ partial "date.html" (dict "date" .Date "long" true) }}`.

### Layouts

`layouts/_default/baseof.html` defines the blocks every layout can override: `title`, `schema-dot-org`, `breadcrumbs`,
`secondary-navbar`, `heading`, `main`, `bottom-navbar`, `extra-scripts`. Per-type directories (`layouts/post/`,
`layouts/blog/`, `layouts/software/`, `layouts/radiolaria/`, …) hold the type-specific templates plus fragments such as
`post/card.html`, `post/list-item.html`, `post/_rss-item.xml`.

The link render hook `layouts/_default/_markup/render-link.html` is load-bearing: markdown links without a scheme are
resolved to actual pages, tagged `class="internal"`, and titled with the page's series prefix — **an unresolvable
internal link calls `errorf` and fails the build**. A link may target another language with an `xx;` prefix, e.g.
`[text](ru;/blog/…)`.

Custom shortcodes in `layouts/shortcodes/` are used heavily in content (`imgfig`, `opener-image`, `carousel`, `toc`,
`table`, `spoiler`, `wiki`, `abbr`, `fl` for foreign-language spans, `video`, `stats`, `snapcraft-card`,
`rss-permalink`, `audio-page-player`, …). Read the shortcode's comment header for its argument order before using it.

### Assets

`module.mounts` maps `node_modules` into `assets/node_modules`, so SCSS and JS reference dependencies straight from
there. `assets/main.scss` sets brand variables (primary `#089664`, accent `#ffcc00`) *before* importing Bootstrap,
FontAwesome, magnific-popup and cookieconsent, then adds site styles — Bootstrap customisation goes through those
variables, not overrides. `layouts/partials/scripts.html` concatenates jQuery → Popper → Bootstrap → magnific-popup →
cookieconsent → GSAP/ScrollTrigger → `assets/main.js` into one minified bundle; **a new JS dependency must be appended
to that slice**, and FontAwesome webfonts are mounted into `static/webfonts`.

SCSS goes through Hugo's built-in libsass (`toCSS` in `layouts/_default/baseof.html`). That constrains the
dependencies: **FontAwesome must stay on 6.x** — 7.x uses SCSS that libsass cannot parse, and moving to it means
switching to Dart Sass (`css.Sass` with `transpiler: dartsass` plus a `sass-embedded` dependency), which in turn
breaks the `@import`s of the plain-CSS dependencies (magnific-popup, cookieconsent) unless they are mounted under
an `.scss` name.

`assets/main.js` is a single jQuery-ready block: GSAP scroll animations (`[data-slide-in]`), cookie consent (strings
injected from i18n by the template), scroll-to-top, image lightbox (`.image-popup`), copy-permalink, the audio player
(`a[type="audio/mpeg"]` playlists), the client-side `#filterBox` filter over `.filterable` elements, and contact-form
validation.

Post images are hosted on Cloudinary (`res.cloudinary.com/yktoo/…`), referenced by absolute URL in front matter and
`imgfig`. `_dev_/cloudinary-backup` (`yarn backup`) and `_dev_/reimage` are Python maintenance scripts for that asset
store.
