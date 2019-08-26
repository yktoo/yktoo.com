---
type: post
date: "2019-08-26T16:38:04+02:00"
title: "Google: quick and paranoid"
tags:
    - Netherlands
    - Google
    - website
    - GitHub
image: "google-alert.png"
---

There are sometimes things in the software world world that I, being a developer, still fail to understand.

One of such things happened when I've {{< a "0357" "made" >}} the {{< a "https://github.com/yktoo/yktoo.com" "yktoo.com repository" >}} public on GitHub.

<!--more-->

**One minute later**, and I mean it, just a minute after that event I received an alert from Google on my email:

{{< imgfig "google-alert.png" "Google alert regarding the publicly available API key." >}}

Google's apprehensions were wrong since the key was never secret anyway. It's always been visible to anyone in the source code of the {{< a "/blog/map" "Map page" >}}, but that never drew the bot's attention.

But it's beyond my understanding how it managed to discover the fact a repository was switched from being *private* to *public* in a matter of seconds. Does GitHub notify Google of such events?