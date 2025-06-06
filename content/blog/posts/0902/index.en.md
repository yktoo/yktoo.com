---
type: post
date: "2025-06-06T15:57:42+02:00"
title: "3.14.0 Hamiltonsbawn"
tags:
    - Comentario
    - web
    - software
    - development
    - release
    - Go
    - Angular
image: "https://res.cloudinary.com/yktoo/image/upload/v1749218114/blog/fdmhb3ik2m3ifpxt3mto.jpg"
imageCredit: "AI-generated image."
series: comentario
software: comentario
draft: true
---

It's that time again: [**Comentario 3.14.0 Hamiltonsbawn**](https://gitlab.com/comentario/comentario/-/releases/v3.14.0) has landed!

[Comentario](/software/comentario) is a fast and powerful free comment server for web pages, written in Go.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1749218114/blog/fdmhb3ik2m3ifpxt3mto.jpg" "AI-generated image." >}}

> <i class="fas fa-info-circle"></i> You can follow relevant news in the [Comentario blog](/series/comentario) or via {{< rss-permalink "/series/comentario" "RSS" >}}.

## What's new

<!--more-->

A lot has changed under the hood — the kind of changes you don't see, but that stop things from catching fire. Mostly.

### Database transaction support

Until now, Comentario didn’t support transactional operations — something that’s long been on our to-do list since the early Commento days.

With **3.14.0**, each logical operation now runs inside a database transaction. That means:

* If everything works, the transaction is committed.
* If something goes wrong, the changes are rolled back entirely.

This approach significantly improves data integrity and reduces the risk of inconsistencies. It also involved a fair bit of internal refactoring, but the results are well worth it.

### Improvements to Domain Pages

Domain pages are now more flexible.

#### Editable title

You can now assign a custom title to any domain page by editing it. This is especially useful for single-page applications (like those built with Angular or React), where meaningful titles can’t always be extracted automatically.

#### Page deletion

Another trivial piece of functionality that was lacking is the ability to delete a page. This is helpful when the original page no longer exists or if you'd like to remove all its associated comments in one step.

Domain pages are created automatically by Comentario whenever someone requests comments on a new, previously unknown path, and are used to keep track of *comments* and *visits* to that page.

#### Move data feature

Website URLs change — it’s part of how websites grow and evolve. But previously, changing a URL could mean losing access to old comments.

With the new *Move data* feature, you can now transfer all comments and statistics from one domain page to another.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1749220802/blog/qlrtklvol4rtvhb0vfyr.png" "Move domain page data screen." "border shadow" >}}

Once moved, the original ("donor") page is deleted automatically.

This makes it much easier to keep discussions intact across URL changes or redesigns.

### Persisted list sort

List views in Comentario now remember your last sort order and restore it the next time you open them. In addition, the sort buttons now display the sorting property clearly, so no more guessing what "Sort" actually means.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1749221788/blog/h4ox7mcogyphvyhksrxd.png" "The new sort button." "border shadow" >}}

### Other changes

* Add `--stats-max-days` CLI option, static config param ([#178](https://gitlab.com/comentario/comentario/-/issues/178))
* Data import: mark imported user's email confirmed if it's a real one
* Add *Show login dialog for unauthenticated users* domain setting ([#154](https://gitlab.com/comentario/comentario/-/issues/154))
* Admin UI: user props: put *Unlock* next to other buttons
* Admin UI: user props: add number of owned domains
* Admin UI: persist sort settings ([#168](https://gitlab.com/comentario/comentario/-/issues/168))
* Admin UI: sort selector: display current sort on button
* Admin UI: add domain count to user/domain user list; fix plurals in comment/view counts
* Admin UI: user avatar: fix vertical alignment
* Admin UI: migrate to Angular signals
* Backend: enforce correct comment counts
* Backend: add trusted origin for XSRF check ([CVE-2025-24358](https://nvd.nist.gov/vuln/detail/CVE-2025-24358), `gorilla/csrf` 1.7.3)
* Backend: fix wrong message when non-SSO federated user tries to use SSO ([#161](https://gitlab.com/comentario/comentario/-/issues/161))
* Backend: fix the `superfluous response.WriteHeader call` warning in `webSocketsHandler`
* Backend: ignore non-`2xx` HTTP status codes when fetching page title
* Backend: implement PostgreSQL SSL cert params ([#170](https://gitlab.com/comentario/comentario/-/issues/170)) 
* Backend: streamline/unify/fix logging
* Backend: retry cleanup indefinitely; log at `INFO` level
* Backend: PL/pgSQL should use `ELSIF`, not `ELSEIF`
* Docs: Contact: add callout about issue tracker
* Go 1.24.3 and other dependencies update ([#172](https://gitlab.com/comentario/comentario/-/issues/172))
* Plugin subsystem updates
* CI: Netlify config updates
* CI: upgrade to k8s 1.31
* I18n: add German translation (de)

{{< include-file "/blog/_snippets/_comentario-footer.en.md" >}}
