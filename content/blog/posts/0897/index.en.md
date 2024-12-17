---
type: post
date: "2024-12-17T08:14:00+01:00"
title: "3.12.0 Faughanvale"
tags:
    - Comentario
    - web
    - software
    - development
    - release
    - Go
    - Angular
image: "https://res.cloudinary.com/yktoo/image/upload/v1734419396/blog/kqigwjqnoevsxot5wipu.jpg"
imageCredit: "AI-generated image."
series: comentario
software: comentario
---

It’s almost Christmas again, and **Comentario** is decking the halls with the fresh [**3.12.0 Faughanvale**](https://gitlab.com/comentario/comentario/-/releases/v3.12.0) release!

[Comentario](/software/comentario) is a fast and powerful free comment server for web pages, written in Go.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1734419396/blog/kqigwjqnoevsxot5wipu.jpg" "AI-generated image." >}}

> <i class="fas fa-info-circle"></i> You can follow relevant news in the [Comentario blog](/series/comentario) or via {{< rss-permalink "/series/comentario" "RSS" >}}.

## What's new

<!--more-->

### Multilingual support for commenters

The embedded Comentario supports multiple languages since version [3.6.0](0889). The new release extends this support to emails and, potentially, other interface elements ([#139](https://gitlab.com/comentario/comentario/-/issues/139)).

The user can specify their desired language in the Profile. Its initial value is defined by the language reported by the browser during registration.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1734441302/blog/blcvup5ha4bgawlubrlx.png" "User language in the Profile." "border shadow" >}}

---

💡 **Interested in contributing your own translation?** [Read the how-to](https://docs.comentario.app/en/contributing/i18n/backend/) and submit one!

---

### Email address update

In the new version the system administrator can enable a [user-initiated email address change](https://docs.comentario.app/en/configuration/backend/dynamic/auth.emailupdate.enabled/) in the Dynamic configuration ([#134](https://gitlab.com/comentario/comentario/-/issues/134)).

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1734445093/blog/pzmz1nufmhu84hxbkf6i.png" "Email update setting." "border shadow" >}}

When it's enabled, any user can initiate an email address change in their profile by clicking on the <i class="fas fa-pencil btn btn-outline-secondary disabled" title="Pencil"></i> button located next to the Email field in their Profile.

* If the user has the [superuser](https://docs.comentario.app/en/kb/permissions/superuser/) privilege, clicking it will bring them to the `Edit user` page.
* For regular users, this button will navigate to the dedicated `Update email` page, allowing the user to start a process of changing email and requiring their password for verification:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1734445332/blog/dxshocnydms55zps9ob4.png" "Update email page." "border shadow" >}}

Then, if the SMTP mailer is properly configured, the user will receive an email at the new address, asking them to complete the change. If no working SMTP is available, the email is changed right away, without a confirmation.

### Max. comment length setting

Another [new dynamic configuration parameter](https://docs.comentario.app/en/configuration/backend/dynamic/domain.defaults.comments.text.maxlength/) allows  a domain owner to set the limit on comment text's length ([#142](https://gitlab.com/comentario/comentario/-/issues/142)). Its default value is **4096** (the same as before), but it can be set as low as **140** or as high as **1 MiB** (**1,048,576**) characters.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1734449373/blog/lisqxcwlrcjobhyl0gli.png" "Max. comment text length setting." "border shadow" >}}

Its default value is taken from the corresponding [instance dynamic setting](https://docs.comentario.app/en/configuration/backend/dynamic/domain.defaults.comments.text.maxlength/).

### Platform support

The new version officially supports PostgreSQL **17** (released in September {{< year 2024 "this year" >}}), which is being tested against in the CI pipeline ([#135](https://gitlab.com/comentario/comentario/-/issues/135)).

We also now build and upload [Docker images](https://gitlab.com/comentario/comentario/container_registry/3786677) for the ARM64 architecture.

### Other changes

* Serve fonts locally
* Admin UI: numeric param validation in dynamic config
* Admin UI: show spinners on module load
* Admin UI: fix saving Profile for federated user
* Admin UI: Profile: user language picker, refactor password change fields
* Admin UI: fix reverting dynamic config item
* Backend: fix comment vote update ([#141](https://gitlab.com/comentario/comentario/-/issues/141))
* Backend: OAuth: fix callback checks
* Backend: OAuth: fall back to `NickName` if no `Name` provided ([#64](https://gitlab.com/comentario/comentario/-/issues/64))
* Backend: fix user signup IP not masked
* I18n: translate missing entries (French, Vietnamese), fix typos (French)
* I18n: add Spanish translation by Briant Fabela
* I18n: update Chinese translations
* I18n: update Brazilian Portuguese by [@savioribeiro](https://gitlab.com/savioribeiro)
* Email templates: fix double exclamation
* Docs: Angular: update `ngx-comentario` example
* Docs: Comment editor: fix strikeout shortcut
* Docs: update embedded Comentario graphic
* Plugin subsystem improvements
* CI: fix ARM64 build (versioned as v8.0 now)
* CI: force dynamic linking and use correct gcc for ARM builds ([#136](https://gitlab.com/comentario/comentario/-/issues/136))

### Demo website improvements

The [Live Demo website](https://demo.comentario.app/) now includes [Spanish](https://demo.comentario.app/es/), [French](https://demo.comentario.app/fr/), and [Brazilian Portuguese](https://demo.comentario.app/pt-br/) pages.

{{< include-file "/blog/_snippets/_comentario-footer.en.md" >}}
