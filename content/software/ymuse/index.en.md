---
title: Ymuse
subtitle: Easy, functional, and snappy client for Music Player Daemon.
platform: linux
icon: ymuse-icon-64.png
weight: 200
software: ymuse
seeAlso:
    - name: Ymuse on Snapcraft
      url: https://snapcraft.io/ymuse
    - name: Ymuse in AUR
      url: https://aur.archlinux.org/packages/ymuse
    - name: Ymuse-bin in AUR
      url: https://aur.archlinux.org/packages/ymuse-bin
    - name: Ymuse Flathub repository
      url: https://github.com/flathub/com.yktoo.ymuse
---

**Ymuse** is an easy, functional, and snappy GTK front-end (client) for [Music Player Daemon](https://www.musicpd.org/) written in Go.

{{< carousel >}}
https://res.cloudinary.com/yktoo/image/upload/blog/e6ecokfftenpwlwswon1.png Ymuse main window (Queue tab).
https://res.cloudinary.com/yktoo/image/upload/blog/cwcmqjichatv2yklt2fu.png Ymuse main window: light theme.
https://res.cloudinary.com/yktoo/image/upload/blog/wjiqs1dyzbrvppslficd.png Ymuse main window: dark theme.
https://res.cloudinary.com/yktoo/image/upload/blog/wqud8spomcmuduvgar9d.png Ymuse Library tab.
https://res.cloudinary.com/yktoo/image/upload/blog/pnwj9nlucfuobw0vcv0l.png Ymuse Streams tab.
https://res.cloudinary.com/yktoo/image/upload/blog/tgvhoi8k04gsgod6jvsa.png Ymuse Preferences: General
https://res.cloudinary.com/yktoo/image/upload/blog/lgnnkthbnj5hk4uu5pwm.png Ymuse Preferences: Interface
https://res.cloudinary.com/yktoo/image/upload/blog/m4q41rd2klmfrcdft7nx.png Ymuse Preferences: Automation
https://res.cloudinary.com/yktoo/image/upload/blog/vile5cveex5bd4vefg6e.png Ymuse Preferences: Player
https://res.cloudinary.com/yktoo/image/upload/blog/vrqyquxgoncgxygly6kk.png Ymuse Preferences: Columns
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
* Light and dark desktop theme support.
* Internationalisation support. Bundled languages:
    * Dutch
    * Japanese
    * Russian
    
Here's a short video tour of the application:

{{< youtube "h0g2gk5DM8s" >}}

## Installation

### Ubuntu

If you use Ubuntu, the simplest way to get **Ymuse** installed is downloading it from the Ubuntu Snap Store:

{{< div "embed-responsive mb-3 border rounded shadow" "height: 330px" >}}
<iframe src="https://snapcraft.io/ymuse/embedded?button=black&summary=true"></iframe>
{{< /div >}}

### Snap package

In case your distro provides support for {{< wiki "Snap_(package_manager)" "en" "snaps" >}}, the installation can be done with:

```bash
sudo snap install ymuse
```

### Arch Linux

If you have a [pacman wrapper](https://wiki.archlinux.org/index.php/AUR_helpers#Pacman_wrappers) installed, you can use that to install the `ymuse` or the `ymuse-bin` package.

For instance, if you are using [yay](https://github.com/Jguer/yay), simply run:

```bash
yay -S ymuse
# Or use a bin build to avoid downloading Go toolchain
yay -S ymuse-bin
```

In case you're not using a helper, refer to [this article](https://wiki.archlinux.org/index.php/Arch_User_Repository#Installing_and_upgrading_packages) on how to manually build and install the package.

### Binary package

There are also binary builds (`.deb`, `.rpm`) and a source tarball available: see below.
