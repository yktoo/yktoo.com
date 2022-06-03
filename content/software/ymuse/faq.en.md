---
title: FAQ
showHeading: true
---

Frequently Asked Questions about [Ymuse](/software/ymuse).

{{< toc >}}

## How do I pronounce "Ymuse"?

Like *why-muse*.

## Can you add MPRIS support to Ymuse?

It's not needed as there is already the [mpDris2](https://github.com/eonpatapon/mpDris2) project (see next question).

## Can I assign media buttons on my keyboard to control Ymuse?

Not directly. But there's an even better alternative: you can link your {{< abbr "MPD" "Music Player Daemon" >}} instance to your desktop environment using [MPRIS](https://wiki.archlinux.org/title/MPRIS). The easiest way to do that is to install the [mpDris2](https://github.com/eonpatapon/mpDris2) package.

Then MPD will respond to media keys regardless of whether Ymuse is running or not.

In Ubuntu it's as easy as running:

```bash
sudo apt install mpdris2
```

## Ymuse doesn't show album images from my audio files!

That's correct. Ymuse receives album art directly from {{< abbr "MPD" "Music Player Daemon" >}}, which, in turn, [looks for an image file](https://mpd.readthedocs.io/en/latest/protocol.html#the-music-database) in the same directory as your audio file:

> This is currently implemented by searching the directory the file resides in for a file called `cover.png`, `cover.jpg`, `cover.tiff` or `cover.bmp`.

There is a [pending item](https://github.com/yktoo/ymuse/issues/52) on Ymuse backlog for adding such support though.
