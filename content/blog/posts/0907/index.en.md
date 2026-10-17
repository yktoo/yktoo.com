---
type: post
date: "2026-10-17T09:23:31+02:00"
title: "3.19.0 Maghera"
tags:
    - Comentario
    - web
    - software
    - development
    - release
    - Go
    - Angular
image: "https://res.cloudinary.com/yktoo/image/upload/v1792221340/blog/s2jaaqe9e1cgjjjmauqy.jpg"
imageCredit: "AI-generated image."
series: comentario
software: comentario
---

**Comentario** [**3.19.0 Maghera**](https://gitlab.com/comentario/comentario/-/releases/v3.19.0) is released, bringing webhooks, an audit log, and a widget that is now fully accessible.

[Comentario](/software/comentario) is a fast and powerful free comment server for web pages, written in Go.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1792221340/blog/s2jaaqe9e1cgjjjmauqy.jpg" "AI-generated image." >}}

> <i class="fas fa-info-circle"></i> You can follow relevant news in the [Comentario blog](/series/comentario) or via {{< rss-permalink "/series/comentario" "RSS" >}}.

## Enter AI

One thing worth mentioning here.

This version is the first developed with the extensive assistance of AI (Claude Code). All the generated code, though, is meticulously reviewed and corrected by me (still human). It often takes numerous iterations — planning, refining, re-planning, implementing and reimplementing — but all in all, I'm **very** positive about the results of this collaboration. It has immensely accelerated the development, allowing me to build much more feature-rich implementations without getting bogged down in the increasingly more complex internal machinery: just have a look at the sheer volume of [changes since the last release](https://gitlab.com/comentario/comentario/-/compare/v3.18.0...v3.19.0?from_project_id=42486427).

## What's new

<!--more-->

### Toasts are now notices

The most visible change in the Administration UI is that toasts, the messages that popped up in a corner of the screen and faded away a few seconds later, have been replaced with notices ([!38](https://gitlab.com/comentario/comentario/-/merge_requests/38)).

A notice shows up where it's relevant: on the page it applies to, globally in the Control Center, or, for things that require your attention right away, in a modal dialog. Errors and warnings are scrolled into view, so they can't go *unnoticed*, and a dismissed notice stays dismissed for that user.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1792225177/blog/bb53n21rod8cczjuuqt5.png" "Example of an error notice." "border shadow" >}}

Routine confirmations no longer need a message at all: a successfully completed action now briefly displays a tick on the button you've just clicked.

{{< video "https://res.cloudinary.com/yktoo/video/upload/v1792225519/blog/lf1mpmeris7esmc65qct.mp4" "autoplay loop muted" "16x9" >}}

Notices also tell you when a new Comentario version is available, and the number of pending Control Center notices is shown on the User button in the navbar.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1792225049/blog/lwtfamejb6o97ovztbkd.png" "Upgrade Available notice." "border shadow" >}}

### Webhooks

Comentario can now notify your own services of what's happening on a domain via [outbound webhooks](https://docs.comentario.app/en/kb/webhooks/) ([#152](https://gitlab.com/comentario/comentario/-/issues/152)). Whenever a comment is created, updated, deleted, approved, or rejected, Comentario `POST`s a JSON payload describing the event to a URL you nominate.

This turns Comentario into an event source for the rest of your stack: a new comment can land in a chat channel, kick off a static site rebuild, or feed a moderation queue of your own, all without polling the API.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1792222560/blog/zgia4q7wk271vszerfyt.png" "Comentario webhook properties." "border shadow" >}}

Webhooks are registered per domain by its owner, via the new **Webhooks** button in the domain properties. Each webhook gets its own signing secret for verifying deliveries, and a test (`ping`) delivery tells you right away whether your endpoint is reachable and accepts what Comentario sends. Commenters' personal data (email, IP address, and country) is never included in the payload.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1792222713/blog/gzpy7fs6mi02opbfssg5.png" "Webhook delivery details." "border shadow" >}}

### Audit log

The new [audit log](https://docs.comentario.app/en/kb/audit-log/) records administrative and security-relevant actions on the instance: who signed in (or failed to), who changed domain settings, who moderated a comment, who banned a user, and so on.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1792223030/blog/ieh1nje4v8uwwe4l9oxq.png" "Comentario audit log." "border shadow" >}}

The log is append-only, cleaned up automatically after the [retention period](https://docs.comentario.app/en/legal/privacy/#addendum-i-data-cleanup-policy), and a user's personal data is scrubbed from it when their [account is deleted](https://docs.comentario.app/en/legal/account-removal/), making it GDPR-compliant.

Its entries can also be filtered by multiple criteria, such as object type, action, outcome, used authentication method, correlation ID (an identifier used for grouping related entries, so it's easy to connect a reported error with what happened on the server), and others.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1792223279/blog/j4lxhvxjc7rtgfeefwfy.png" "Audit log with filter applied." "border shadow" >}}

### Accessibility

Following up on the work done in [3.18.0](0906), the embedded comments widget has seen further accessibility improvements, with the initial work contributed by Georgiana Frincu. All colour contrast issues are now resolved ([#234](https://gitlab.com/comentario/comentario/-/issues/234)), and the widget is [built to meet WCAG 2.2 Level AA](https://docs.comentario.app/en/about/features/embedded/#accessibility), which is automatically checked with [axe](https://github.com/dequelabs/axe-core) in the end-to-end tests.

### TLS and Unix socket listeners

Until now, Comentario only spoke plain HTTP, leaving TLS to a reverse proxy. It can now also [listen](https://docs.comentario.app/en/configuration/backend/static/#listener) on HTTPS directly, or on a Unix domain socket ([#233](https://gitlab.com/comentario/comentario/-/issues/233)), selected with the new `scheme` option:

```bash
comentario --scheme=unix --socket-path=/run/comentario/comentario.sock --socket-perms=0660
```

A socket is handy when the reverse proxy runs on the same host: no TCP port is occupied, and access is governed by file permissions. HTTPS is meant for setups with no TLS-terminating proxy at all; keep in mind the certificate is only read at startup.

### Administration UI

* New editors for domain and user attributes.
* The Domain User Manager gained a role filter ([#166](https://gitlab.com/comentario/comentario/-/issues/166)).

### Other changes

* Only count approved, non-deleted comments on domain and page ([#203](https://gitlab.com/comentario/comentario/-/issues/203))
* Embed: fix race in live update resurrecting comments, or racing own comment changes
* Admin UI: render checkmarks with translated screen-reader text
* Admin UI: user properties: domain role list items now link to domain users rather than domains
* Backend: fix domain SSO config verification; unify URL checks
* Backend: allow `EmailFrom` to contain a non-ASCII name
* Backend: more robust i18n; reset attribute caches on DB reset
* Plugins: extend the (experimental) plugin API with audit, KV store, mailer, i18n, notices, confirmations, actor-aware events, and new plug locations
* Helm: add schema for values, webhooks config; chart now officially carries the version 1.0.0
* Docs: add audit log and WCAG compliance notes
* E2e: embed API coverage, headless interactive SSO test
* Toolchain/dependency updates (Go 1.27.2, Yarn 4.18). Comentario now *requires at least* Go 1.27 to compile.

{{< include-file "/blog/_snippets/_comentario-footer.en.md" >}}
