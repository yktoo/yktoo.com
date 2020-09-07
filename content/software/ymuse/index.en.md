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
https://res.cloudinary.com/yktoo/image/upload/blog/vx7vpdn1lrskop110ts6.png Ymuse Queue tab.
https://res.cloudinary.com/yktoo/image/upload/blog/tyje15w0q4m48tf1d2wz.png Ymuse Library tab.
https://res.cloudinary.com/yktoo/image/upload/blog/xpqgooxdhya2ij0hgfka.png Ymuse Streams tab.
https://res.cloudinary.com/yktoo/image/upload/blog/dshr30b7pq3fecwyagbq.png Ymuse Preferences: General
https://res.cloudinary.com/yktoo/image/upload/blog/fnvebyslgtspx257vij6.png Ymuse Preferences: Interface
https://res.cloudinary.com/yktoo/image/upload/blog/mylbgzpyow24o6lgjcx7.png Ymuse Preferences: Columns
{{< /carousel >}}

## Ymuse features

* Connection to a local or remote MPD server via TCP or Unix domain socket, auto(re)connect function.
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
* Internationalisation support. Bundled languages:
    * Dutch
    * Japanese
    * Russian
    
Here's a short video tour of the application:

{{< youtube "FuO7QWOaS1A" >}}

## Installation

### Ubuntu

If you use Ubuntu, the simplest way to get **Ymuse** installed is downloading it from the Ubuntu Snap Store:

{{< div "embed-responsive mb-3 border rounded" "height: 330px" >}}
<iframe src="https://snapcraft.io/ymuse/embedded?button=black&summary=true"></iframe>
{{< /div >}}

### Snap package

In case your distro provides support for {{< wiki "Snap_(package_manager)" "en" "snaps" >}}, the installation can be done with:

```bash
sudo snap install ymuse
```

### Binary package

There are also binary builds and a source tarball available: see below.

