---
type: post
date: "2025-02-17T08:31:55+01:00"
title: "3.13.0 Garvagh"
tags:
    - Comentario
    - web
    - software
    - development
    - release
    - Go
    - Angular
image: "https://res.cloudinary.com/yktoo/image/upload/v1739777430/blog/zbfzyzr8ysfsbefeehhw.jpg"
imageCredit: "AI-generated image."
series: comentario
software: comentario
---

New **Comentario** version [**3.13.0 Garvagh**](https://gitlab.com/comentario/comentario/-/releases/v3.13.0) is released.

[Comentario](/software/comentario) is a fast and powerful free comment server for web pages, written in Go.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1739777430/blog/zbfzyzr8ysfsbefeehhw.jpg" "AI-generated image." >}}

> <i class="fas fa-info-circle"></i> You can follow relevant news in the [Comentario blog](/series/comentario) or via {{< rss-permalink "/series/comentario" "RSS" >}}.

## What's new

<!--more-->

### Comment RSS feeds

As of this version users can subscribe to [RSS feeds](https://docs.comentario.app/en/kb/rss/) for comments written on a specific page or the entire domain, with optional filtering on the author or the user replied to.

There's an `RSS` link added to the embedded Comentario, right under the `Add a comment` text input, which opens the `Comment RSS feed` popup:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1739778394/blog/wqfuxz2zuaebapwuzjdi.png" "Comment RSS feed popup in Comentario." >}}

Toggling the checkboxes will update the displayed RSS feed URL accordingly. In order to be able to filter comments by replies, you have to sign in first.

In the Admin UI, you can look up the RSS feed URL in domain or domain page properties, with slightly different options:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1739787973/blog/ri7xfk3rqonvjdll8xpb.png" "Comment RSS feed in Domain Page properties." "border shadow" >}}

All of the above is enabled by default, but can be turned off and hidden using the [Enable comment RSS feeds](https://docs.comentario.app/en/configuration/backend/dynamic/domain.defaults.comments.rss.enabled/) dynamic configuration parameter, independently for each domain.

### Comment count widget

This feature ([#147](https://gitlab.com/comentario/comentario/-/issues/147)) was requested a while ago, but prior to this release was only available via an API call.

Now, next to the [embedded comments component](https://docs.comentario.app/en/configuration/embedding/comments-tag/) (`<comentario-comments>`), there's another web component, which can be inserted with the [`<comentario-count>` tag](https://docs.comentario.app/en/configuration/embedding/count-tag/).

Website owners can use it to display the number of comments on a specific page, for example, in a blog post. You can see it in action in the language switcher on [Comentario Demo](https://demo.comentario.app/) website:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1739779153/blog/m9ksszngwgqrmhpatbh9.png" "Comment count widget in the language menu." "border shadow" >}}

### Welcome message to the Dashboard

Users who've just registered an account will now see a bit of explanation in the otherwise empty Dashboard:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1739779533/blog/fws9oeknqibz8ieda9je.png" "Dashboard welcome message." "border shadow" >}}

I hope it helps to smooth the learning curve just a little bit.

### Selected domain on top

If you own a lot of domains, it can be somewhat puzzling to figure out which one you're dealing with right now. In this version the selected domain, if any, will always appear at the top of the domain list, regardless of the current sorting:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1739779864/blog/pwhnexvnssky2anq35fk.png" "Selected domain always comes first on the list." "border shadow" >}}

The same applies when filtering the domain list, but only if the selected domain passes the filter.

### Domain page editing

[Domain pages](https://docs.comentario.app/en/kb/domain-page/) have got a separate Edit page, which you can use to change their properties ([#148](https://gitlab.com/comentario/comentario/-/issues/148)).

Apart from making the experience more consistent, it also allows you to modify the page's path (*use with caution!*):

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1739780297/blog/gi6tqavz2y8mhydrq3ov.png" "Edit domain page function." "border shadow" >}}

### Role in SSO payload

[Single Sign-On](https://docs.comentario.app/en/configuration/frontend/domain/authentication/sso/) (SSO) server can now determine which [role](https://docs.comentario.app/en/kb/permissions/roles/) the user gets by including it in its response ([#157](https://gitlab.com/comentario/comentario/-/issues/157)).

### Disable page view stats

If you're not interested in gathering visitor statistics and wish to spare some database space, you can disable page view tracking using the `--no-page-view-stats` [command-line parameter](https://docs.comentario.app/en/configuration/backend/static/) ([#102](https://gitlab.com/comentario/comentario/-/issues/102)).

That will remove those colourful visitor charts from the Dashboard, too:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1739781460/blog/ia9abmstsmdcp8zxsrgz.png" "Page view statistics in Comentario." "border shadow" >}}

### Other changes

* Admin UI: replace spinners on large elements with loaders.
* Admin UI: improve validation, skip focus on the "show password" button.
* Admin UI: improve detail tables, streamline form controls.
* Admin UI: improve and unify user badges.
* Admin UI: refactor toasts, add syntax highlighting to technical error details.
* Admin UI: uniform spinners, fix spinner label alignment.
* Admin UI: allow owner/superuser to edit domain self-user.
* Admin UI: upgrade to Angular 19, bump other dependencies.
* Admin UI: switch to the `application` build system.
* Backend: refactor/unify mail templates.
* Backend: Go 1.24, ci-tools v45, bump deps.
* Backend: fix truncating text (result length, damaged Unicode chars) ([#145](https://gitlab.com/comentario/comentario/-/issues/145)).
* Packaging: flag config files in `/etc` to prevent overwriting them ([#146](https://gitlab.com/comentario/comentario/-/issues/146)).
* Helm: add `comentario.args` parameter.
* Docs: clarify SMTP port/encryption ([#158](https://gitlab.com/comentario/comentario/-/issues/158)).
* Plugin subsystem improvements.
* Demo DB: actualise comment count for domain and pages.
* Demo DB: let user sessions and votes survive reset (up to a week).
* Demo DB: make predefined comments appear the oldest.
* CI: add Helm chart linting.

{{< include-file "/blog/_snippets/_comentario-footer.en.md" >}}
