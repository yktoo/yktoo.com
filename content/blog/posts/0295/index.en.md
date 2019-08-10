---
date: "2016-11-04T00:00:00Z"
title: "2.1.1"
series: "Sound Switcher Indicator"
tags: ["indicator", "PulseAudio", "Python", "Python 3", "sound", "Sound Switcher Indicator", "Ubuntu", "Unity", "Yakkety Yak"]
software: sound-switcher-indicator
---

[Sound Switcher Indicator]({{< relref "/software/sound-switcher-indicator" >}}) is getting more and more intricate and advanced thanks to the never-ending stream of ideas from the users. The majority of changes in the version **2.1.1** pertain to the configuration file (`$HOME/.config/indicator-sound-switcher.json`).

## What's new

<!--more-->

* Originally built for **Ubuntu 16.10 Yakkety Yak** (but builds for other versions supported by Canonical are available, too).
* Port configuration in the JSON file can now also be an object (previously either string or `false`), which allows to configure:
    * Port's display name.
    * The preferred sound card profile for the port ([#26](https://github.com/yktoo/indicator-sound-switcher/issues/26)).
    * Port availability ([#39](https://github.com/yktoo/indicator-sound-switcher/issues/39)).
* Added Dutch translation.
* Localisation files, if they are available, are compiled as a part of the setup process. This allows for installation directly from the source tree ([#35](https://github.com/yktoo/indicator-sound-switcher/issues/35)).

You can find more details and a configuration example in the [README](https://github.com/yktoo/indicator-sound-switcher/blob/master/README.md).
