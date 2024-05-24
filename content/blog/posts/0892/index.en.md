---
type: post
date: "2024-05-24T13:57:01+02:00"
title: "3.8.0 Belfast"
tags:
    - Comentario
    - web
    - software
    - development
    - release
    - Go
    - Angular
image: "https://res.cloudinary.com/yktoo/image/upload/v1716551682/blog/nglvr7hasxqcky6ydixu.jpg"
imageCredit: "AI-generated image."
series: comentario
software: comentario
---

New version [Comentario **3.8.0 Belfast**](https://gitlab.com/comentario/comentario/-/releases/v3.8.0) is released.

[Comentario](/software/comentario) is a fast and powerful free comment server for web pages, written in Go.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1716551682/blog/nglvr7hasxqcky6ydixu.jpg" "AI-generated image." >}}

## What's new

<!--more-->

### More Dashboard metrics

Dashboard now also displays total number of comments you've written, as well as the number of pages you commented on:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1716552541/blog/j6g0brxiachzz0gfpdaq.png" "New Dashboard metrics in Comentario." "border shadow" >}}

### Animated placeholders

If your website or network is slow, users will see animated placeholders indicating comment loading is in progress — instead of a blank page:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1716555645/blog/i6y2yg9smrihziwblyza.gif" "Animated placeholders while loading comments." "border shadow" >}}

Hopefully you'll never see them, anyway. Comentario is, as you surely know, blazing fast.

### Transparent commenter login to Admin UI

On a page with comments, when you click on the gear (Settings) button and then on `Edit Comentario profile`, you don't need to log into the Admin UI anymore. This was previously necessary because your Admin UI is always on a different domain than the comments page, and every domain maintains its own session cookies.

The **3.8.0** release solves it by requesting a special single-use *authentication token*, which gets subsequently passed to the Admin UI web app and used there to log in.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1716554338/blog/ym91p7ibhbemwyemoyag.png" "Edit Comentario profile button." "border shadow" >}}

### Version upgrade check

[Superusers](https://docs.comentario.app/en/kb/permissions/superuser/) (instance admins) will now see a notification badge in the sidebar, as well as a link to the latest release in the Static configuration, when a newer version is available:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1716554851/blog/nivou4ypbo5eppg9ogxk.png" "Config manager and the Upgrade available notification." "border shadow" >}}

This way you can stay up-to-date with the latest features and security updates.

### Startup error handling

When you're trying to open a comment page in a misconfigured environment and Comentario could not load, you'll see a clear message stating there's a problem, instead of a piece of some obscure JSON:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1716555148/blog/jgb5cvliwy5qlyyq3nd2.png" "Comentario failed to load." "border shadow" >}}

### Shared XSRF secret

In this version a new [secret](https://docs.comentario.app/en/configuration/backend/secrets/) key was introduced: `xsrfSecret`. If it's empty (the default), Comentario will generate a random key used to protect the Administration UI from CSRF (XSRF) attacks, like before.

When you provide a value, it will be SHA256-hashed and used as the XSRF key. Such a non-random secret value should be used in setups with multiple Comentario instances serving the same website; it would guarantee an XSRF token issued by one instance is accepted by another.

### Other changes

* Embed: disable toolbar on preview ([#93](https://gitlab.com/comentario/comentario/-/issues/93))
* Backend logging improvements:
    * log colouring and the `--no-color` CLI option to disable it
    * log times with millisecond precision
    * better formatting
* Add translation to Brazilian Portuguese (thanks to [Guilherme Alves](https://gitlab.com/behindsecurity))
* Dynamic config: disable images in markdown by default to mitigate possible identity attacks
* Fix: only support IPv4 in `signup_ip`/`author_ip` (works around [#95](https://gitlab.com/comentario/comentario/-/issues/95))
* Fix: also mask `author_ip`
* Fix: reset failed login counter on unlock ([#91](https://gitlab.com/comentario/comentario/-/issues/91))

## Live Demo

You can see the new version, as well as its Administrative UI (login with email `admin@admin` and password `admin`), on the demo website:

{{< button "https://demo.comentario.app/" "Comments Live Demo" "btn-primary mb-3" >}}
{{< button "https://edge.comentario.app/" "Administrative UI Demo" "btn-primary mb-3" >}}

## Installation

If you're interested in trying out Comentario, you can start with these documentation pages:

* [Getting started](https://docs.comentario.app/en/getting-started/).
* [Installation](https://docs.comentario.app/en/installation/).
* [Migration](https://docs.comentario.app/en/installation/migration/) (from [Commento](https://docs.comentario.app/en/installation/migration/commento/), [Disqus](https://docs.comentario.app/en/installation/migration/disqus/), [Wordpress](https://docs.comentario.app/en/installation/migration/wordpress/)).
