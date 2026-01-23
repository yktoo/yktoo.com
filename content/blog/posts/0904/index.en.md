---
type: post
date: "2026-01-23T07:38:37+01:00"
title: "3.16.0 Jerrettspass"
tags:
    - Comentario
    - web
    - software
    - development
    - release
    - Go
    - Angular
image: "https://res.cloudinary.com/yktoo/image/upload/v1769152585/blog/ewe4h6zjrhvrbt6tro0c.jpg"
imageCredit: "AI-generated image."
series: comentario
software: comentario
---

**Comentario** [**3.16.0 Jerrettspass**](https://gitlab.com/comentario/comentario/-/releases/v3.16.0) is released.

[Comentario](/software/comentario) is a fast and powerful free comment server for web pages, written in Go.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1769152585/blog/ewe4h6zjrhvrbt6tro0c.jpg" "AI-generated image." >}}

> <i class="fas fa-info-circle"></i> You can follow relevant news in the [Comentario blog](/series/comentario) or via {{< rss-permalink "/series/comentario" "RSS" >}}.

## What's new

<!--more-->

### Per-page email notifications

Any registered user can now subscribe to *all new comments on a specific page* by ticking off the corresponding checkbox in Settings ([#209](https://gitlab.com/comentario/comentario/-/issues/209)):

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1769152942/blog/atvxr9rift6pupeknywt.png" "Page comment notification setting." "border shadow" >}}

When enabled, the user will get an email about each new comment on this particular page.

Previously, one could only subscribe to site-wide notifications about *replies to their comments*.

### Repeated notifications fix

This version also resolves an issue with double or even triple notifications about the same comment. They would be sent to moderators about, for example, a pending comment that was also a reply, as two separate emails.

Now every comment can result in at most one email notification per recipient, in the order of preference:

1. Comment pending moderation;
2. Reply to your comment;
3. New comment on a page you subscribed to.

### Other changes

* AdminUI: fix base href when deployed on a non-root path ([#217](https://gitlab.com/comentario/comentario/-/issues/217))
* Backend: use correct paths in `site.webmanifest`
* Docs: add explicit mentions of Edit domain page ([#210](https://gitlab.com/comentario/comentario/-/issues/210))
* Docs: docker compose example: fix PostgreSQL warnings, add healthchecks
* I18n: improve logging for missing messages, add contribute page link
* I18n: DE: add missing messages

{{< include-file "/blog/_snippets/_comentario-footer.en.md" >}}
