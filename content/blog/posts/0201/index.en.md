---
type: post
date: "2013-11-08T00:00:00Z"
title: "1.1.1"
series: sound-switcher-indicator
tags: ["Gtk3", "indicator", "PulseAudio", "Python", "Saucy Salamander", "sound", "Sound Switcher Indicator", "Ubuntu", "Ubuntu 13.10", "Unity"]
image: "https://res.cloudinary.com/yktoo/image/upload/blog/r9hxc85zqw5g0103.jpg"
software: sound-switcher-indicator
aliases:
    - /en/blog/post/201
---

The application indicator for Ubuntu called {{< a "/software/sound-switcher-indicator" "Sound Switcher Indicator" >}} (which I {{< a "0178" "blogged" >}} about) has been updated to version **1.1.1**. There's no new functionality in this release, its main purpose is to make the indicator work in Ubuntu 13.10 (Saucy Salamander). It was broken because of a [bug](https://bugs.launchpad.net/glipper/+bug/1203888) in `libdbusmenu`.

<!--more-->

The new version makes use of GTK+ 3 and the trendy GObject Introspection (GIRepository). You can {{< a "/software/sound-switcher-indicator" "install" >}} it, as usual, from my [Launchpad PPA](https://launchpad.net/~yktooo/+archive/ppa/).

And, as usual, a picture just to draw your attention:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/blog/r9hxc85zqw5g0103.jpg" >}}
