---
title: Sound Switcher Indicator
subtitle: Sound input/output selector indicator for Linux.
platform: linux
icon: ssi-icon-64.png
weight: 1
software: sound-switcher-indicator
seeAlso:
    - name: My Launchpad PPA
      url: 'https://launchpad.net/~yktooo/+archive/ppa'
---

I created this app because there was just no sound switcher indicator available.

It shows an icon in the indicator area or the system tray (whatever is available in your desktop environment). Icon's menu allows you to switch the current sound input and output (i.e. *source* and *sink* in PulseAudio's terms, respectively) ports with just two clicks:

{{< imgfig "screenshot.png" "Indicator's menu." >}}

You can configure various aspects of ports and devices displayed by the menu using the Preferences dialog:

{{< imgfig "prefs-devices.png" "Preferences dialog." >}}

Interested? Read [how to install](https://github.com/yktoo/indicator-sound-switcher/blob/dev/doc/install.md) the indicator.

> Sound Switcher Indicator is being developed with a {{< a "/blog/posts/0359" "free JetBrains License" >}}.
>
> {{< button "https://www.jetbrains.com/?from=SoundSwitcherIndicator" "![](jetbrains.png)" >}}

## Installation

If you want to install the indicator, refer to the [installation](https://github.com/yktoo/indicator-sound-switcher/blob/dev/doc/install.md) page. Here you can download the latest source code of the application.

To download the source tarball or a compiled binary package (`.deb`), please check the [Launchpad PPA packages](https://launchpad.net/~yktooo/+archive/ppa/+packages) page.
