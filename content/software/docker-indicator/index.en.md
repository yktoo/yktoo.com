---
title: Docker Indicator
subtitle: Application indicator for controlling Docker containers.
platform: linux
icon: docker-indicator-icon-64.png
weight: 2
software: docker-indicator
seeAlso:
    - name: My Launchpad PPA
      url: 'https://launchpad.net/~yktooo/+archive/ppa'
---

An application indicator for Linux with the following functionality:

* The menu displays a live list of available containers (both running and stopped). The list is updated automatically thanks to Docker daemon event subscription.
* A container can be started or stopped by selecting the corresponding menu item.
* Whenever a container is started or stopped (not necessarily via the indicator), a desktop notification is shown.

Here's a screenshot:

{{< imgfig "screenshot.png" "Indicator's menu." >}}

Interested? Read [how to install](https://github.com/yktoo/indicator-docker/blob/master/INSTALL) the indicator.

## Installation

If you want to install the indicator, refer to the [installation](https://github.com/yktoo/indicator-docker/blob/master/INSTALL) page. Here you can download the latest source code of the application.

To download the source tarball or a compiled binary package (`.deb`), please check the [Launchpad PPA packages](https://launchpad.net/~yktooo/+archive/ppa/+packages) page.
