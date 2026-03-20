---
type: post
date: "2026-03-20T12:17:07+01:00"
title: "3.17.0 Knockloughrim"
tags:
    - Comentario
    - web
    - software
    - development
    - release
    - Go
    - Angular
image: "https://res.cloudinary.com/yktoo/image/upload/v1774005386/blog/oha6clzytsy2mzvjultz.jpg"
imageCredit: "AI-generated image."
series: comentario
software: comentario
---

**Comentario** [**3.17.0 Knockloughrim**](https://gitlab.com/comentario/comentario/-/releases/v3.17.0) is released.

[Comentario](/software/comentario) is a fast and powerful free comment server for web pages, written in Go.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1774005386/blog/oha6clzytsy2mzvjultz.jpg" "AI-generated image." >}}

> <i class="fas fa-info-circle"></i> You can follow relevant news in the [Comentario blog](/series/comentario) or via {{< rss-permalink "/series/comentario" "RSS" >}}.

## What's new

<!--more-->

### Custom name for moderators

Domain owners can now enable moderators to change name they comment with ([#222](https://gitlab.com/comentario/comentario/-/issues/222)). For example, one can use their business unit name, or any other name while replying to users' comments.

First, the feature has to be enabled in the [instance](https://docs.comentario.app/en/configuration/backend/dynamic/domain.defaults.comments.customname.moderator/) or domain configuration. Once it's turned on, moderator users (which includes owners and [superusers](https://docs.comentario.app/en/kb/permissions/superuser/), too) will see a new *Custom name* input in their settings:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1774025351/blog/qnyc4iri0l3mfl9g4nos.png" "Custom name in User settings." "border shadow" >}}

This name can be set per [domain](https://docs.comentario.app/en/kb/domain/) and will apply to all comments the moderator creates or edits on that domain.

It can also be changed in the domain user properties via the Admin UI:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1774025916/blog/cj8mvmfehoepefb9rnav.png" "Custom name in Edit domain user." "border shadow" >}}

### PostgreSQL support

This release lands support for PostgreSQL 18 ([#224](https://gitlab.com/comentario/comentario/-/issues/224)). In fact, no additional effort was required, apart from adding an extra test pipeline for that DB.

It also addresses situations when a database schema other than `public` is used for storing Comentario data ([#225](https://gitlab.com/comentario/comentario/-/issues/225)). The server will now correctly use schemas listed in `search_path` for object lookups.

### Other changes

* Backend: fix resource leak in `DecompressGzip()`
* Backend: use Go 1.26, update dependencies, modernise code
* I18n: add Portuguese messages (pt) by [@pt.cesar.monteiro](https://gitlab.com/pt.cesar.monteiro)
* I18n: add Ukrainian translation (uk) by [@kleindberg](https://gitlab.com/kleindberg)
* CI: bump deployer image version

{{< include-file "/blog/_snippets/_comentario-footer.en.md" >}}
