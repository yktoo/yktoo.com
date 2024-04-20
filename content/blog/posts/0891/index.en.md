---
type: post
date: "2024-04-20T17:50:26+02:00"
title: "3.7.0 Armagh"
tags:
    - Comentario
    - web
    - software
    - development
    - release
    - Go
    - Angular
image: "https://res.cloudinary.com/yktoo/image/upload/v1713628168/blog/b3blrv7cunv6z9fykscg.jpg"
imageCredit: "AI-generated image."
series: comentario
software: comentario
draft: true
---

The new version [Comentario 3.7.0 Armagh](https://gitlab.com/comentario/comentario/-/releases/v3.7.0) is out.

[Comentario](/software/comentario) is a fast and powerful free comment server for web pages, written in Go.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1713628168/blog/b3blrv7cunv6z9fykscg.jpg" "Comentario against the backdrop of the Irish Armagh. AI-generated image." >}}

## What's new

This is the first release modifying the database since [3.0.0](0880), therefore it bundles quite a few changes.

<!--more-->

### Domain-level dynamic configuration

We've extended the concept of a [dynamic configuration](https://docs.comentario.app/en/configuration/backend/dynamic/) (previously applied to the whole system) to domain-level settings. It's main feature is that it's, well, *dynamic*:

* It allows changing the values on-the-fly, with immediate effect.
* It's flexible and doesn't require any database changes when new parameters are introduced, greatly simplifying adding new features.
* Every item has a *default value*, which facilitates configuration management.

The new configuration items are spread over two tabs on the Edit domain page: `General` and `Authentication`:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1713629173/blog/kor2lb4sxxvbekcekntp.png" "The General tab in Edit domain." "border shadow" >}}

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1713629278/blog/elyblqaumpaxa7f5fjjn.png" "The Authentication tab in Edit domain." "border shadow" >}}

Most of them may sound familiar, and rightly so: they originate from the same-named global (instance) settings, which serve as defaults when adding a new domain:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1713629474/blog/amogxh5dveu5cjybqtif.png" "Dynamic instance configuration." "border shadow" >}}

Items marked with an asterisk (`*`) on the screenshot above are those providing defaults for new domains.

### Support for named, unregistered commenters

What was previously known as simply "Anonymous" is now called *Commenting without registration* (see the Authentication tab above). The main difference is that unregistered users, should they be allowed to write comments, don't have to stay anonymous anymore (but can if they choose to). There is a new `Your name` field in the Sign in dialog they can fill in before choosing to comment without registration:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1713629947/blog/lmxtlnlpcq46vqgvxmp5.png" "Log in dialog with the commenter name field." >}}

### Email notifications about comment approvals and rejections

Every user has got a new setting (configured independently for each domain) for enabling comment status notifications:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1713630437/blog/drd6w5lioqx3xasgvqiu.png" "Comment status notifications commenter setting." >}}

When it's on (the default), you'll receive an email every time your comment gets approved or rejected by a moderator.

### Comment metadata improvements

Edited and deleted comments display the metadata more clearly now, indicating who did that, and when:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1713630930/blog/vmhzpzmstrsbh0kc1quk.png" "New comment metadata display." >}}

**Tip:** hovering with your mouse over the time spec (such as "just now") will display the exact time in a tooltip.

### Failed login tracking

When a user (or someone trying to impersonate them) fails to provide the correct password, this will be recorded. And once the failed login attempt counter exceeds the [configured value](https://docs.comentario.app/en/configuration/backend/dynamic/auth.login.local.maxattempts/), that user will be locked out of Comentario. The superuser can see the related properties:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1713631362/blog/jhsz0dfvepbnqwmdjc69.png" "New properties related to authentication." "border shadow" >}}

The failed login counter will reset to zero on a first successful login.

As you can see on the screenshot above, Comentario now also registers the moment of the last login change, which will allow to enforce regular password change in the future.

### User session list

The superuser is now also able to see all sessions by a user, and to expire them forcefully:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1713631917/blog/q4kxokyszndbwwmxzbfb.png" "User session list." "border shadow" >}}

### Blocked popup handling

When you try to login via SSO or a social provider (such as Facebook or Google), Comentario will try open a popup window allowing to do that. As it turns out, Safari and Firefox now seem to impede that by default; we've added an in-page popup that explains what happened and how it can be resolved:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1713632115/blog/xmgz4evckqorvdmjvjai.png" "Popup blocked message." >}}

### Other changes

* Support IPv6 addresses ([#69](https://gitlab.com/comentario/comentario/-/issues/69)), more robust user IP handling ([#76](https://gitlab.com/comentario/comentario/-/issues/76))
* Embed: add [auto-non-interactive-sso](https://docs.comentario.app/en/configuration/embedding/comments-tag/auto-non-interactive-sso/) attribute of `<comentario-comments>` tag ([#81](https://gitlab.com/comentario/comentario/-/issues/81))
* Embed: optimise Comentario startup by getting rid of separate config API call
* Fix unmasked IP registered with pageview ([#77](https://gitlab.com/comentario/comentario/-/issues/77))

## Live Demo

You can see the new version, as well as its Administrative UI (login with email `admin@admin` and password `admin`), on the demo website:

{{< button "https://demo.comentario.app/" "Comments Live Demo" "btn-primary mb-3" >}}
{{< button "https://edge.comentario.app/" "Administrative UI Demo" "btn-primary mb-3" >}}

## Installation

If you're interested in trying out Comentario, you can start with these documentation pages:

* [Getting started](https://docs.comentario.app/en/getting-started/).
* [Installation](https://docs.comentario.app/en/installation/).
* [Migration](https://docs.comentario.app/en/installation/migration/) (from Commento, Disqus, Wordpress).
