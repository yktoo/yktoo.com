---
type: post
date: "2013-11-08T00:00:00Z"
title: "1.1.1"
series: sound-switcher-indicator
tags: ["Gtk3", "PulseAudio", "Python", "Saucy Salamander", "Sound Switcher Indicator", "Ubuntu", "Ubuntu 13.10", "Unity", "звук", "индикатор"]
image: "https://res.cloudinary.com/yktoo/image/upload/blog/r9hxc85zqw5g0103.jpg"
software: sound-switcher-indicator
aliases:
    - /ru/blog/post/201
---

Приложение-индикатор для Убунту по имени {{< a "/software/sound-switcher-indicator" "Sound Switcher Indicator" >}} (об истории появления коего на свет я {{< a "0178" "писал" >}}) обновился до версии **1.1.1**. Функциональности в этом релизе не добавлено никакой, но предыдущая версия отказывалась запускаться в Ubuntu 13.10 (Saucy Salamander) из-за [бага](https://bugs.launchpad.net/glipper/+bug/1203888) в `libdbusmenu`.

<!--more-->

Новая версия построена на GTK+ 3 и новомодном GObject Introspection (GIRepository). {{< a "/software/sound-switcher-indicator" "Установить" >}} можно, как обычно, из моего [Launchpad PPA](https://launchpad.net/~yktooo/+archive/ppa/).

Ну, и по традиции — картинка для привлечения внимания:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/blog/r9hxc85zqw5g0103.jpg" >}}
