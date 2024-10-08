---
type: post
date: "2023-10-09T09:41:58+02:00"
title: "3.0.0-rc2"
tags:
    - Comentario
    - web
    - software
    - development
    - pre-release
    - Go
    - Angular
image: "https://res.cloudinary.com/yktoo/image/upload/v1680875488/blog/aymiialjtcr6gxvtlh7d.png"
series: comentario
software: comentario
---

Two weeks [on](0877), the second pre-release version [Comentario 3.0.0-rc2](https://gitlab.com/comentario/comentario/-/releases/v3.0.0-rc2) is now available.

[Comentario](/software/comentario) is a fast and powerful free comment server for web pages, written in Go.

## What's new

<!--more-->

Apart from fixing annoying bugs, the only notable change in this version is the arrival of binary `.deb` and `.rpm` packages.

They allow for a [local Comentario install](https://edge.docs.comentario.app/en/installation/binary-package/) on your server or VM. The server will be run as a `systemd` service.

### Service config

The Comentario service settings come from the following two files:

* `/etc/comentario/comentario.conf` — the [static configuration](https://edge.docs.comentario.app/en/configuration/backend/static/);
* `/etc/comentario/secrets.yaml` — the [secrets](https://edge.docs.comentario.app/en/configuration/backend/secrets/).

In order to apply changed settings the service needs to be restarted:

```bash
sudo systemctl restart comentario.service
```

{{< include-file "/blog/_snippets/_comentario-footer.en.md" >}}
