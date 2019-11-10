---
title: Sound Switcher Indicator
subtitle: Sound input/output selector indicator for Linux.
platform: linux
icon: ssi-icon-64.png
weight: 1
software: sound-switcher-indicator
aliases:
    - /en/software/indicator-sound-switcher
seeAlso:
    - name: My Launchpad PPA
      url: 'https://launchpad.net/~yktooo/+archive/ppa'
---

I created this app because there was just no sound switcher indicator available.

It shows an icon in the indicator area or the system tray (whatever is available in your desktop environment). Icon's menu allows you to switch the current sound input and output (i.e. *source* and *sink* in PulseAudio's terms, respectively) ports with just two clicks:

{{< imgfig "screenshot.png" "Indicator's menu." >}}

You can configure various aspects of ports and devices displayed by the menu using the Preferences dialog:

{{< imgfig "prefs-devices.png" "Preferences dialog." >}}

> Sound Switcher Indicator is being developed with a {{< a "/blog/posts/0359" "free JetBrains License" >}}.
>
> {{< button "https://www.jetbrains.com/?from=SoundSwitcherIndicator" "![JetBrains logo](jetbrains.png)" >}}

## Installation

On this page you can download the latest binaries and the source code of the application. To download other versions, please check the {{< a "https://launchpad.net/~yktooo/+archive/ppa/+packages" "Launchpad PPA packages" >}} page.

There are the following three ways to get the indicator {{< a "https://github.com/yktoo/indicator-sound-switcher/blob/dev/doc/install.md" "installed" >}}:

### Installation from the PPA (recommended)

If you're on Ubuntu or one of its derivatives, it's always advisable to use the standard package distribution mechanism (Private Package Archive, PPA). This way you'll automatically get updated indicator versions in the future.

In order to install the application from {{< a "https://launchpad.net/~yktooo/+archive/ubuntu/ppa" "my PPA" >}}:

```bash
sudo apt-add-repository ppa:yktooo/ppa
sudo apt-get update
sudo apt-get install indicator-sound-switcher
```

### Installation using a binary package

If you don't want or can't install from the PPA, you can download and install the `.deb` binary package manually.

1. Download the latest `.deb` package using the download button below, or go to the {{< a "https://launchpad.net/~yktooo/+archive/ubuntu/ppa/+packages" "Packages" >}} Launchpad page, choose the right indicator version there (click to expand it) and download a `.deb` from there.
2. Install the downloaded package using the Software Center or with the command:
```bash
sudo dpkg -i /path/to/downloaded/indicator-sound-switcher_*_all.deb
```

### Installation from the source tarball

In order to install the application from the source tarball:

1. Download the latest tarball (`indicator-sound-switcher-*.tar.gz`) using the download button below, or go to the {{< a "https://launchpad.net/~yktooo/+archive/ubuntu/ppa/+packages" "Packages" >}} Launchpad page, choose the right indicator version there (click to expand it) and download a `.tar.gz` from there.
2. Decompress the archive: `tar xf indicator-sound-switcher-*.tar.gz`
3. `cd` to the `indicator-sound-switcher-*` dir
4. Run `sudo python3 setup.py install`
