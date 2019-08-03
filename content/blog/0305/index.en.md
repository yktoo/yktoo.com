---
date: "2017-01-17T00:00:00Z"
title: "Touchpad toggle script for Ubuntu"
tags: ["GitHub", "touchpad", "Ubuntu", "yktools"]
---

Recently I've been busy learning the esoteric editor called {{< wiki "Vim" "en" "Vim" >}} and figured out my laptop's touchpad is causing nuisance when you're working with the keyboard only—which is the whole point of using *Vim*. At the same time, some programs are nearly unusable without the mouse. In other words, I wanted to be able to switch the touchpad on and off—with the keyboard, of course.

Some laptops have a special key combination for it, but my {{< fl "Dell XPS 13\"" >}} doesn't. Ubuntu also provides a switch in the Control Center, but it's hardly reachable without the mouse:

<!--more-->

{{< imgfig "https://4.bp.blogspot.com/-P81ExjwEw5o/WH3AyBShljI/AAAAAAAApBk/UCuTprQSMVsObxhiX2KYkEfn39Cck0xrwCPcB/s1600/unity-ccenter-mouse.png" "Mouse and touchpad settings." >}}

So I wrote this script, which toggles the touchpad every time you run it. You can assign it to a desired key combination using the same Control Center, for example, I've linked it to <kbd>Fn</kbd>+<kbd>T</kbd>.

The script makes use of the standard X11 utility `xinput`. You can find it in my [yktools](https://github.com/yktoo/yktools) repository under the logical name  `touchpad-toggle`. Once run, it'll display a standard desktop notification about the current state of the touchpad:
{{< imgfig "https://2.bp.blogspot.com/-zuRLsy-tAQc/WH3AyKJwhQI/AAAAAAAApBk/i9gXasZ22jIrLD7MSTZXSWWoRBnMjSJJACPcB/s1600/touchpad-notifications.png" "Touchpad toggle notifications." >}}

The script's source code is [available on GitHub](https://github.com/yktoo/yktools/raw/master/touchpad-toggle). It scans the list of input devices, picks the first one having `touchpad` in its name, and toggles its state.
