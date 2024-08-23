---
type: post
date: "2024-08-23T09:56:23+02:00"
title: "2.3.10.1"
tags:
    - Sound Switcher Indicator
    - Ubuntu
    - Bionic Beaver
    - Focal Fossa
    - Jammy Jellyfish
    - Noble Numbat
    - Oracular Oriole
    - Linux
    - software
    - sound
    - indicator
image: "https://res.cloudinary.com/yktoo/image/upload/blog/tz9luieerecw7gkumsoi.png"
series: sound-switcher-indicator
software: sound-switcher-indicator
---

The version **2.3.10.1** of the [Sound Switcher Indicator](/software/sound-switcher-indicator) is released — closely following **2.3.10**.

<!--more-->

## What's new

The version **2.3.10** adds no new functionality, but contains a couple of important fixes to the Indicator:

* Fix: inputs/outputs missing after a device profile change ([#132](https://github.com/yktoo/indicator-sound-switcher/issues/132)).
* Fix: when installed from snap, autostart [stops working](https://github.com/yktoo/indicator-sound-switcher/pull/127) after two upgrades ([#128](https://github.com/yktoo/indicator-sound-switcher/issues/128)).

The hotfix release **2.3.10.1** mainly addresses the [Indicator snap package](https://snapcraft.io/indicator-sound-switcher) broken with the previous release: apparently I've been too eager to upgrade to a newer Python ([#134](https://github.com/yktoo/indicator-sound-switcher/issues/134), [#135](https://github.com/yktoo/indicator-sound-switcher/issues/135)) and snap base (migrating a snap base is a nightmare on itself).

## Ubuntu support in the PPA

My [PPA](https://launchpad.net/~yktooo/+archive/ubuntu/ppa) provides packages for Ubuntu **24.10 Oracular Oriole**, **24.04 Noble Numbat**, **22.04 Jammy Jellyfish**, **20.04 Focal Fossa**, and **18.04 Bionic Beaver**. Bug reports are welcome at the [usual address](https://github.com/yktoo/indicator-sound-switcher/issues/).

## Installation

To install or update the application, please follow the steps described in the [Installation section](/software/sound-switcher-indicator/installation).
