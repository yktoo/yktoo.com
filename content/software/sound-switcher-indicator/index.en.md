---
title: Sound Switcher Indicator
subtitle: Sound input/output selector indicator for Linux.
platform: linux
icon: ssi-icon-64.png
weight: 1
---

I created this app because there was just no sound switcher indicator available.

It shows an icon in the indicator area or the system tray (whatever is available in your desktop environment). Icon's menu allows you to switch the current sound input and output (i.e. *source* and *sink* in PulseAudio's terms, respectively) ports with just two clicks:

{{< imgfig "screenshot.png" "Indicator's menu" >}}

Interested? Read [how to install](https://github.com/yktoo/indicator-sound-switcher/blob/dev/doc/install.md) the indicator.

## Download

If you want to install the indicator, refer to the [installation](https://github.com/yktoo/indicator-sound-switcher/blob/dev/doc/install.md) page. Here you can download the latest source code of the application.

<!-- TODO List downloads and source code -->

To download the source tarball or a compiled binary package (`.deb`), please check the [Launchpad PPA packages](https://launchpad.net/~yktooo/+archive/ppa/+packages) page.







## See Also

* Мой [Launchpad PPA](https://launchpad.net/~yktooo/+archive/ppa).
* <?= $this->render('_list_blog_posts', ['download_category_id'=>'snd_sw_indicator']); ?>
