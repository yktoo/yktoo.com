---
type: post
date: "2024-09-15T16:16:07+02:00"
title: "3.10.0 Donaghadee"
tags:
    - Comentario
    - web
    - software
    - development
    - release
    - Go
    - Angular
    - Commento++
image: "https://res.cloudinary.com/yktoo/image/upload/v1726409725/blog/ni6elgzbaxv5cemqgbga.jpg"
imageCredit: "AI-generated image."
series: comentario
software: comentario
---

New version [Comentario **3.10.0 Donaghadee**](https://gitlab.com/comentario/comentario/-/releases/v3.10.0) has seen the light of day.

[Comentario](/software/comentario) is a fast and powerful free comment server for web pages, written in Go.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1726409725/blog/ni6elgzbaxv5cemqgbga.jpg" "AI-generated image." >}}

> **An important announcement:** if you're only interested in news about Comentario, feel free to bookmark the [Comentario series page](/series/comentario). It also provides a dedicated [<i class="fas fa-rss"></i> RSS feed](https://yktoo.com/en/blog/series/comentario/index.xml).

## What's new

<!--more-->

### Spinners

The embedded Comentario comments now display a spinner during (potentially) long-running operations, such as signing in, submitting a comment, voting on a comment, stickying a comment etc. ([#94](https://gitlab.com/comentario/comentario/-/issues/94)):

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1726413253/blog/ed80vo45b8wq2gwgz5i3.gif" "Spinners showing during API calls." "border shadow" >}}

It also addresses another problem related to submitting comments: the `Add Comment` button gets disabled after the first click, making it impossible to repeatedly submit the same comment ([#116](https://gitlab.com/comentario/comentario/-/issues/116)).

### Language fallback path

Language fallback path handling has been added ([#121](https://gitlab.com/comentario/comentario/-/issues/121), thanks to [@Func86](https://gitlab.com/Func86)). Now, if there's no direct match for the requested page language, the embedded Comentario will try to find an appropriate available regional or script variant first, before falling back to a generic variant and, finally, to the global default (English).

For those interested, the fallback path should look a bit like below:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1726414283/blog/y75umj77wx8oew8vefac.svg" "Language variants diagram." >}}

### Comment properties

Comment properties page now also show comment text in HTML, as well as its Markdown source:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1726415184/blog/xvnqfrjmkq158dd2ogbj.gif" "Comment text in Properties." "border shadow" >}}

### Domain user properties

Domain owners got the ability to change their users' notification settings on the corresponding Edit page ([#119](https://gitlab.com/comentario/comentario/-/issues/119)):

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1726415390/blog/qwsyfnflb4ccde4f7qrv.png" "Edit domain user page with the new switches." "border shadow" >}}

### IPv6 support

Finally, Comentario fully supports registering complete IPv6 addresses, fixing bugs ([#95](https://gitlab.com/comentario/comentario/-/issues/95)) in the user and comment database tables. As a bonus, the user's or commenter's IP address and country are now displayed, too (don't worry, the below is just an example; Comentario only registers the first two bytes of the address by default):

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1726415703/blog/njepket0e6piqlyfaw5e.png" "User's IP address and country." "border shadow" >}}

### Documentation

This release significantly improves on [Comentario documentation](https://docs.comentario.app/):

* Added the [Architecture](https://docs.comentario.app/en/about/architecture/) section ([#117](https://gitlab.com/comentario/comentario/-/issues/117)).
* Added Read on link to section children snippets
* Fixed and improved [Search](https://docs.comentario.app/en/search/) functionality:
    * Results are ranked based on location and number of occurrences.
    * Search is re-run on back/forward navigation in the browser.
    * Added result count display.

### Other changes

* Embed: use `Intl.RelativeTimeFormat` for relative time ([#122](https://gitlab.com/comentario/comentario/-/issues/122))
* Embed: display localized date and time
* Embed: fix code blocks expanding beyond the card's width ([#110](https://gitlab.com/comentario/comentario/-/issues/110))
* Embed: add Jest and unit tests for `Utils`
* Embed: only *build* by default; *test* and *lint* are executed separately
* Admin UI: improve front page placeholder display, replace deprecated test code
* I18n: add translations for Chinese
* I18n: enlarge user `lang_id` col to 255 chars ([#107](https://gitlab.com/comentario/comentario/-/issues/107))
* Docs: expand self-host desc somewhat
* Docs: switch to using Hugo environments
* Docs: README: update blog link
* Support for custom user attributes
* Docker: fix `ENV` warning
* CI: run the pipeline for each commit, but publish stuff in dev/tag only
* Code: require Go 1.23.0

{{< include-file "/blog/_snippets/_comentario-footer.en.md" >}}
