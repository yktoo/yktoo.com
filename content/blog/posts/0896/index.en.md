---
type: post
date: "2024-10-25T11:11:20+02:00"
title: "3.11.0 Enniskillen"
tags:
    - Comentario
    - web
    - software
    - development
    - release
    - Go
    - Angular
image: "https://res.cloudinary.com/yktoo/image/upload/v1729847452/blog/ga9qrqmkyfndr4lkirf4.jpg"
imageCredit: "AI-generated image."
series: comentario
software: comentario
---

New **Comentario** version [**3.11.0 Enniskillen**](https://gitlab.com/comentario/comentario/-/releases/v3.11.0) is released.

[Comentario](/software/comentario) is a fast and powerful free comment server for web pages, written in Go.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1729847452/blog/ga9qrqmkyfndr4lkirf4.jpg" "AI-generated image." >}}

> <i class="fas fa-info-circle"></i> You can follow relevant news in the [Comentario blog](/series/comentario) or via {{< rss-permalink "/series/comentario" "RSS" >}}.

## What's new

<!--more-->

### Dashboard and Domain statistics

The most notable change in this release are the enhanced **Dashboard** and **Domain statistics** pages.

Both display now pie charts of page views, broken down by *country*, *device*, *browser*, and *operating system*:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1729849646/blog/ebtpkk7adibj3rhejve8.png" "Page view pie charts." "border shadow" >}}

They've also got the **Top performing pages** section, allowing you to see top five pages by views and comments:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1729849646/blog/uvj6vnizsxvr6l1dytko.png" "Top performing pages in Comentario." "border shadow" >}}

Clicking a page in the table will bring you directly to the page details.

The chart data reflects the same period as the daily charts — the last **30** days. The Dashboard displays information across all your domains, while Domain statistics page shows data specific to the selected domain only.

### Comment editor

Embedded Comentario has gotten better, too. You can now use keyboard shortcuts in the Comment editor:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1729850383/blog/tnokqflqibnkbutebbmv.png" "Keyboard shortcuts in the Comment editor." "border shadow" >}}

So you can, for example, hit <kbd>Ctrl</kbd><kbd>B</kbd> to make selected text **bold** or <kbd>Ctrl</kbd><kbd>I</kbd> to turn it *italic* — see the [editor documentation page](https://docs.comentario.app/en/kb/comment-editor/) for a complete list of supported key combinations.

Moreover, on a Mac shortcuts will use <kbd>Cmd</kbd> (a.k.a. <kbd>⌘</kbd>) instead of Ctrl, including sending forms using <kbd>⌘</kbd><kbd>Enter</kbd>.

### Crisper avatars

Comentario now renders avatar icons at double pixel density on high-DPI screens, such as Retina displays ([#123](https://gitlab.com/comentario/comentario/-/issues/123)), which makes them much sharper:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1729851658/blog/cpqm2ti2aqdfjpobkbdv.png" "Avatars before and after the upscaling." "border" >}}

The same applies to avatars displayed in the Administration UI.

### Non-root Comentario path

The backend now supports Comentario installations hosted on non-root paths, such as `https://example.com/comentario/`, providing added flexibility ([#126](https://gitlab.com/comentario/comentario/-/issues/126)).

### Fixed user import

This version also fixes a bug in the [Domain import](https://docs.comentario.app/en/installation/migration/) feature that marked all imported users as SSO users ([#133](https://gitlab.com/comentario/comentario/-/issues/133)).

### From email address validation

If you've configured email sending via SMTP, Comentario now validates that the "From" address is a compliant RFC 5322 address, such as `Comentario <noreply@example.com>` ([#129](https://gitlab.com/comentario/comentario/-/issues/129)). This prevents issues that would otherwise only appear during the initial SMTP server interaction and be logged as server errors.

### Other changes

* Admin UI: user details: fix SSO user property display
* Admin UI: fix the web app manifest for installation
* I18n: French translation
* Backend: fix XSRF token renewal regression ([#130](https://gitlab.com/comentario/comentario/-/issues/130))
* Backend: refactor DB statements to use ORM
* Docs: minor README and link update
* Docs: add editor help
* Docs: correct `--email-from=` default value ([#129](https://gitlab.com/comentario/comentario/-/issues/129))
* CI: add `go vet`
* CI: demo: send emails from `@comentario.app`

### Demo website improvements

The [Live Demo website](https://demo.comentario.app/) now includes additional languages, letting you experience localized versions of Comentario in action:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1729853358/blog/lqfmnpl1lab2faleikvo.png" "Language selector on the Live Demo website." >}}

{{< include-file "/blog/_snippets/_comentario-footer.en.md" >}}
