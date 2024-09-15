---
type: post
date: "2024-03-16T11:13:02+01:00"
title: "3.6.0"
tags:
    - Comentario
    - web
    - software
    - development
    - release
    - Go
    - Angular
image: "https://res.cloudinary.com/yktoo/image/upload/v1710609306/blog/wunuxiikkodzefwfw0wr.jpg"
imageCredit: "AI-generated image."
series: comentario
software: comentario
---

The new version [Comentario 3.6.0](https://gitlab.com/comentario/comentario/-/releases/v3.6.0) is out.

[Comentario](/software/comentario) is a fast and powerful free comment server for web pages, written in Go.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1710609306/blog/wunuxiikkodzefwfw0wr.jpg" >}}

## What's new

<!--more-->

### I18n

This version introduces [i18n (internationalisation) support](https://docs.comentario.app/en/contributing/i18n/backend/) for the embedded Comentario and email notifications ([#71](https://gitlab.com/comentario/comentario/-/issues/71)).

Comentario is capable of deriving the page language from its `<html lang="…">` value. This can be overridden using the [lang attribute](https://docs.comentario.app/en/configuration/embedding/comments-tag/lang/) on the comments tag.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1710611199/blog/euxxgmfxbtamxqnqocgb.png" "Comments tag options." "border shadow" >}}

The Comentario demo website now showcases all three available languages: [English](https://demo.comentario.app/), [Dutch](https://demo.comentario.app/nl/), and [Russian](https://demo.comentario.app/ru/).

---

💡 **Interested in contributing your own translation?** [Read the how-to](https://docs.comentario.app/en/contributing/i18n/backend/) and submit one!

---

### Custom Terms of Service and Privacy Policy

We've also added the ability to override the standard Terms of Service and Privacy Policy documents referenced, for example, in the Sign Up dialog ([#56](https://gitlab.com/comentario/comentario/-/issues/56)).

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1710611986/blog/vuzjcmvb5czuxja1cmfa.png" "Sign Up dialog." >}}

Their URLs can be provided on the [command line](https://docs.comentario.app/en/configuration/backend/static/) or as Helm chart [parameters](https://docs.comentario.app/en/installation/helm-chart/parameters/), and will otherwise default to [those](https://docs.comentario.app/en/legal/) pointing to Comentario documentation.

### Other changes

* Helm chart: added new values and much more [thorough documentation](https://docs.comentario.app/en/installation/helm-chart/).
* Embed: live updates will now automatically be turned off on every page in case [Live update](https://docs.comentario.app/en/kb/live-update/) is disabled globally.
* PostgreSQL migration script has been fixed (thanks Ahmad Abu Hantash!) for cases when user email is repeated, which previously led to comments lost during migration.

{{< include-file "/blog/_snippets/_comentario-footer.en.md" >}}
