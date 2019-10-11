---
title: InfoPi
subtitle: Information server application for Raspberry Pi.
platform: linux
icon: infopi-icon-64.png
weight: 4
software: infopi
---

**InfoPi** is a single-page web application that displays various live data, like weather forecast and train departure times.

The back-end (web server) part is using [Python 3](https://docs.python.org/3/). The front-end is written on [AngularJS 1.x](https://angularjs.org/) and [Twitter Bootstrap 3.x](http://getbootstrap.com/).

My own implementation is specifically crafted for:

* RaspberryPi running [Raspbian Jessie](https://www.raspberrypi.org/downloads/raspbian/).
* Full HD monitor (1920&times;1080 pixels) in the portrait orientation.

This is how the information page looks like:

{{< imgfig "screenshot.png" "Screenshot of the application" >}}

## Getting started

If you also want an own instance of InfoPi, check the [README on GitHub](https://github.com/yktoo/infopi/blob/master/README.md).
