---
title: Ymuse
subtitle: Easy, functional, and snappy client for Music Player Daemon.
platform: linux
icon: ymuse-icon-64.png
weight: 200
software: ymuse
---

**Ymuse** is an easy, functional, and snappy GTK front-end (client) for [Music Player Daemon](https://www.musicpd.org/) written in Go.

{{< carousel >}}
https://res.cloudinary.com/yktoo/image/upload/blog/jskaqgrbxzjyi7ofxetn.png Ymuse Queue tab.
https://res.cloudinary.com/yktoo/image/upload/blog/zqu4ugqg0bvlh2hvajst.png Ymuse Library tab.
https://res.cloudinary.com/yktoo/image/upload/blog/hsc3lmkxxqaoo98bdoen.png Ymuse Streams tab.
{{< /carousel >}}

## Ymuse features

* Connection to a local or remote MPD server, auto(re)connect function.
* Displaying, sorting, and shuffling the play queue. Track removal.
* Filtering the play queue on a substring.
* Saving the play queue as a playlist (new or existing).
* MPD library browse and search functions.
* Browsing, adding, and renaming playlists.
* Own stream (a.k.a. Internet radio) list, which can be edited.
* Visible queue columns selection.
* Player title setting using Go template syntax.
* Toggling various MPD modes (*random*, *repeat*, *consume*).
* Seeking the current track to an arbitrary location.
* Internationalisation support (bundled languages: Russian, Dutch).
