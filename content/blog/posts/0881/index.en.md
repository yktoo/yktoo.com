---
type: post
date: "2023-12-09T10:12:17+01:00"
title: "3.1.0"
tags:
    - Comentario
    - web
    - software
    - development
    - release
    - Go
    - Angular
    - Christmas
image: "https://res.cloudinary.com/yktoo/image/upload/v1702113479/blog/bjjqfyprqw9ddphehlto.jpg"
imageCredit: "AI-generated image."
series: comentario
software: comentario
---

In the run-up to Christmas, an exciting new version [Comentario 3.1.0](https://gitlab.com/comentario/comentario/-/releases/v3.1.0) has been released!

[Comentario](/software/comentario) is a fast and powerful free comment server for web pages, written in Go.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1702113479/blog/bjjqfyprqw9ddphehlto.jpg" "AI-generated image." >}}

## What's new

There's been a number of changes in this release, but the most noteworthy ones are as follows.

<!--more-->

### Gravatar support

[Gravatar](https://gravatar.com/) has become a de facto standard for low-maintenance user profiles. You register on the service once, add an avatar image, and it will automatically appear in every service that supports it.

This release adds Comentario to that list, too.

User were already able to upload a custom avatar in their profile, now there's also the *Download from Gravatar* button:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1702114302/blog/hu6hupxcavxgzjzvnjns.png" "Gravatar button in user profile." "border shadow" >}}

However, if Gravatar is enabled in the [service Configuration](https://docs.comentario.app/en/configuration/backend/dynamic/domain.defaults.usegravatar/), it will also be downloaded automatically upon registration, and updated whenever the user logs in.

This setting will also enable automatic avatar fetching for users imported from [Commento](https://docs.comentario.app/en/installation/migration/commento/) or [WordPress](https://docs.comentario.app/en/installation/migration/wordpress/) (but not [Disqus](https://docs.comentario.app/en/installation/migration/disqus/), because its export lacks user email information).

### Import from WordPress

Following up on the subject of import, the **3.1.0** release also adds support for [importing comments and commenters from WordPress](https://docs.comentario.app/en/installation/migration/wordpress/). WordPress is arguably one of the most popular website engines, and now Comentario is able to load its RSS (a.k.a. WXR) data dump.

The Domain Import screen has also been slightly redesigned.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1702114874/blog/aif8rayuavj4zfon2xg0.png" "Domain Import page, with WordPress import selected." "border shadow" >}}

Moreover, Comentario now supports direct import from `.gz` and `.zip` archives, as well as uncompressed files. It can also handle `.zip` archives containing folders.

### Markdown improvements

We've switched the Markdown parser engine from (seemingly discontinued) [Blackfriday](https://github.com/russross/blackfriday) to the fast, flexible, standard-compliant [goldmark](https://github.com/yuin/goldmark) parser.

Among other things, this change enables for a better control over the used Markdown features.

That allowed for enabling *hard line breaks*, meaning a line break in the comment text will now render as such in HTML, too:

```markdown
First line
Second line
```

Will be rendered as two lines, and not as one:

> First line\
> Second line

Also, HTML sanitizing has been largely improved: it will now only contain a vary basic set of enabled HTML tags.

### The Comment Deletion dilemma

Historically, any deleted comment in Comentario was only marked as such, and its text removed, but it would still be visible in the comments list. The main reason for that was preserving any replies to that comment.

Commento, the predecessor to Comentario, had a special `data-hide-deleted` tag attribute to completely hide removed comments on a page, but that seemed largely inconsistent: such things must be configured either globally, or at least on a domain level.

In the **3.1.0** version there are several new options that control how deleted comments are handled.

#### Configuration setting

The [Show deleted comments](https://docs.comentario.app/en/configuration/backend/dynamic/domain.defaults.comments.showdeleted/) setting controls whether deleted comments are shown in the comments list. Its default state is `On`, which is compatible with the previous behavior.

If it's set to `Off`, deleted comments will be hidden in the comment tree immediately, as well as all its child comments.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1702118404/blog/ju5y5lxojeyizzihug8s.png" "The Show deleted comments switch." "border shadow" >}}

This switch doesn't affect comment display in the Administration UI, though, since it has a separate filter button for hiding deleted comments.

#### Purge comments operation

The *Domain Operations* page has got a new *Purge Comments* button that will permanently delete all comments marked as deleted, as well as any replies to those comments.

There's also an option to delete all comments by now deleted users:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1702118843/blog/copztohrgilop2yruvya.png" "Purge comments confirmation dialog." >}}

#### Removal options when deleting/banning user

When the user is about to delete their profile, there are new options that control their "legacy" in the service:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1702119126/blog/gnud07gz4tx6qpwqfswu.png" "Delete Account confirmation dialog." >}}

The user can opt to mark all their comments as deleted, or to remove them permanently (with replies).

Exactly the same options are also available in the Administration UI when banning or deleting a user.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1702119396/blog/gew4mlu0kfqnyioju2ll.png" "Ban User confirmation dialog." >}}


### Visual attribute editor

The *Domain Properties* page has now a special *Options* button that reveals a visual editor helping you configure the HTML snippet used to render comments:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1702119836/blog/gke9noynvyvrq4psgyil.png" "HTML snippet option editor." "border shadow" >}}

### Maximum nesting level

An attentive reader will have noticed a new setting on the above screenshot: the *Maximum visual nesting level*. It affects the way nested comments are rendered and defaults to **10**. It doesn't limit the *actual comment nesting level*, only how they are displayed.

Here's an example of a comment tree with the maximum level set to **2**:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1702120460/blog/wgsazk7o35ycykr8s4ec.png" "Comment tree with max. two levels." "border shadow" >}}

### … And More

Other changes include:

* User avatar display on the User Properties page (Admin UI).
* Commenter signup dialog now enforces strong passwords.
* Fixed image rendering in comments so that it's never wider that the comment itself.
* Fixed statistics display so that it doesn't take deleted comments into account.
* Numerous other bugfixes.

See [CHANGELOG](https://gitlab.com/comentario/comentario/-/blob/master/CHANGELOG.md) for a complete list of changes.

## Live Demo

You can see the new version, as well as its Administrative UI (login with email `admin@admin` and password `admin`), on the demo website:

{{< button "https://demo.comentario.app/" "Comments Live Demo" "btn-primary mb-3" >}}
{{< button "https://edge.comentario.app/" "Administrative UI Demo" "btn-primary mb-3" >}}

## Installation

If you're interested in trying out the new version, you can start with these documentation pages:

* [Getting started](https://docs.comentario.app/en/getting-started/).
* [Installation](https://docs.comentario.app/en/installation/).
* [Migration](https://docs.comentario.app/en/installation/migration/).

---

**There's more to come — stay tuned and Merry Christmas everyone!**
