---
type: post
date: "2024-07-30T14:28:26+02:00"
title: "3.9.0 Crossgar"
tags:
    - Comentario
    - web
    - software
    - development
    - release
    - Go
    - Angular
    - Commento++
image: "https://res.cloudinary.com/yktoo/image/upload/v1722343200/blog/lmvroqjhgrgvsrcprvwy.jpg"
imageCredit: "AI-generated image."
series: comentario
software: comentario
---

New version [Comentario **3.9.0 Crossgar**](https://gitlab.com/comentario/comentario/-/releases/v3.9.0) has seen the light of day.

[Comentario](/software/comentario) is a fast and powerful free comment server for web pages, written in Go.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1722343200/blog/lmvroqjhgrgvsrcprvwy.jpg" "AI-generated image." >}}

## What's new

In today's menu: OIDC support, dark theme, migration from Commento++, and more!

<!--more-->

### OIDC authentication

We have added support for a generic [OIDC identity provider](https://docs.comentario.app/en/configuration/idps/oidc/). **OIDC** stands for [OpenID Connect](https://openid.net/developers/how-connect-works/) and represents an open authentication protocol implemented by many companies and products.

One example of that is LinkedIn, which you can now easily [configure](https://docs.comentario.app/en/configuration/idps/linkedin/) as an identity provider.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1722345304/blog/ecwylpv1aoj8bnxx8h0i.png" "Configuring login via LinkedIn for Comentario." "border shadow" >}}

[Comentario documentation](https://docs.comentario.app/) contains detailed instructions on configuring [login via LinkedIn](https://docs.comentario.app/en/configuration/idps/linkedin/), as well as a [generic OIDC provider](https://docs.comentario.app/en/configuration/idps/oidc/).

### Dark theme

It's now possible to properly embed Comentario on a website using a dark theme.

The desired theme can be specified with the [`theme` attribute](https://docs.comentario.app/en/configuration/embedding/comments-tag/theme/) on the `<comentario-comments>` tag. It can even be switched on-the-fly, an example of which you can see on the [demo page](https://demo.comentario.app/):

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1722346861/blog/ep6lf7msn4hrx6vzvegg.gif" "Switching Comentario between light and dark themes." "border shadow" >}}

### Migration from Commento++

Commento++ (a.k.a. [Commentoplusplus](https://github.com/souramoo/commentoplusplus)) is another fork of Commento, but it's seemingly discontinued nowadays, just like its predecessor.

As of this release, Comentario will [automatically upgrade/migrate](https://docs.comentario.app/en/installation/migration/commento/#commento-1) from Commento++ if you run it against the same database. Don't forget to back up your database up front!

### Favicons and manifests

This release also includes necessary icons of all sizes, as well as related manifests, so that Comentario icon will be properly rendered across all popular browsers and OSes — verified by the [RealFaviconGenerator](https://realfavicongenerator.net/favicon_checker?protocol=http&site=comentario.app):

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1722347831/blog/a66ivwylletqedoslqri.png" "Favicon analysis." "border shadow" >}}

### Docker images

There has also been a slight change in [Docker image](https://docs.comentario.app/en/installation/docker-image/) versioning:

* `latest` will now always point to the **most recent released version**; previously it pointed to the latest development build.
* `edge` will refer to the **latest development version** (the `dev` branch); it used to be `latest` before.

This scheme is more in line with the industry standards and Docker Hub practices: `latest` is usually the most recent stable version.

Next to that, we started building Ubuntu-based images of Comentario. They're dynamically linked (as opposed to the statically-linked "default" Alpine-based ones). These images are tagged with the `-ubuntu` suffix, including `latest-ubuntu` and `edge-ubuntu` for the above.

### Other changes

* Use federated ID for user lookups, before resorting to email lookup ([#99](https://gitlab.com/comentario/comentario/-/issues/99))
* SSO: add `link` payload property ([#98](https://gitlab.com/comentario/comentario/-/issues/98))
* Frontend: add `robots.txt`
* Publish Comentario Helm chart to GitLab chart repository
* Frontend: dependency upgrade (Angular 18, ESLint 9, et al.)
* Add translation to Vietnamese
* Fix: set XSRF & language cookies only when necessary ([#103](https://gitlab.com/comentario/comentario/-/issues/103))
* Fix: XSRF key generation
* Fix: page title fetching when path contains query ([#106](https://gitlab.com/comentario/comentario/-/issues/106))
* Fix: double pageview counting ([#108](https://gitlab.com/comentario/comentario/-/issues/108))
* Fix: Embed: non-interactive SSO message handler removal ([#96](https://gitlab.com/comentario/comentario/-/issues/96))
* Fix: Embed: remove Comentario background ([#105](https://gitlab.com/comentario/comentario/-/issues/105))

{{< include-file "/blog/_snippets/_comentario-footer.en.md" >}}
