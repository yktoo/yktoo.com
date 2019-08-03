---
date: "2019-01-13T00:00:00Z"
title: "2.2.0"
group: "Sound Switcher Indicator"
tags: ["indicator", "sound", "Sound Switcher Indicator", "Ubuntu"]
---

It's time to fulfil my [promise][post:342], so please meet [Sound Switcher Indicator][route:/software/indicator-sound-switcher] version **2.2.0**.

## What's new {#whats-new}

There are the following two major differences with the previous release:

<!--more-->

* Support for virtual devices ([#48](https://github.com/yktoo/indicator-sound-switcher/issues/48)) has been added: network *sources* and *sinks* from other PulseAudio servers are now also displayed in the indicator menu and can be switched to.
* A *Preferences* dialog has finally arrived. These days you can easily adjust the looks of the menu using a GUI (which was previously only possible by editing `$HOME/.config/indicator-sound-switcher.json`). A corresponding menu item has been planted:

{{< imgfig "https://2.bp.blogspot.com/-BibUCaj-gGQ/XDs5PF-gjFI/AAAAAAAAue4/mIDfV0Llkf8llKjrvFcQm5I9cgQOF47AACKgBGAs/s1600/menu.png" "Sound Switcher Indicator's menu." >}}

## Preferences dialog {#prefs-dialog}

The dialog features two tabs:

* The **General** tab allows to hide all inputs and/or outputs at once:
{{< imgfig "https://4.bp.blogspot.com/-14n8z6QVISg/XDcOV5WS7PI/AAAAAAAAueQ/-dUR3l-nF7YqQn5YBofHMdyIfRojWQn9QCKgBGAs/s1600/prefs-general.png" "Sound Switcher Indicator: general preferences." >}}
* The **Devices** tab configures device and port display:
{{< imgfig "https://2.bp.blogspot.com/-4kUpg4FKu9E/XDcOV2foTuI/AAAAAAAAueQ/WgnSa9cW0jw8ewbPQMlnzpngIxOS_KNYACKgBGAs/s1600/prefs-devices.png" "Device preferences." >}}
* The **Refresh** button at top right reloads all devices and their ports so you don't need to reopen the dialog after device removal or addition.

All settings are applied on-the-fly after a short delay.

Other changes:

* A minor (yet breaking) change to the configuration file format. From now on the port configuration can only be an object (previously it was possible to use a string or `false`). This means you might need to update your config, which is a breeze with the new dialog.
* A long-outstanding bug with misplaced device items ([#55](https://github.com/yktoo/indicator-sound-switcher/issues/55)) has been fixed. Actually, the real issue is with GTK+ but I managed to work around it.

## Ubuntu support {#ubuntu-support}

My PPA provides packages for Ubuntu **18.04 Bionic** and **18.10 Cosmic** (read [how to install](https://github.com/yktoo/indicator-sound-switcher/blob/master/doc/install.md)). Bug reports are welcome at the [usual address](https://github.com/yktoo/indicator-sound-switcher/issues/).
