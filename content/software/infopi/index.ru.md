---
title: InfoPi
subtitle: Информационный киоск на базе Raspberry Pi.
platform: linux
icon: infopi-icon-64.png
weight: 4
software: infopi
---

**InfoPi** — это одностраничное веб-приложение, отображающее различные данные, такие как прогноз погоды и расписание поездов, обновляемые в реальном времени.

Бэкенд (веб-сервер) написан на [Python 3](https://docs.python.org/3/). Фронтенд построен на базе [AngularJS 1.x](https://angularjs.org/) и [Twitter Bootstrap 3.x](http://getbootstrap.com/).

Моя реализация заточена специально под:

* Raspberry Pi с установленной [Raspbian Jessie](https://www.raspberrypi.org/downloads/raspbian/).
* Full-HD-монитор (1920&times;1080 пиксел) в портретной ориентации.

Выглядит это следующим образом:

{{< imgfig "screenshot.png" "Скриншот InfoPi" >}}

## Как построить

Если вы хотите сделать себе аналогичный экземпляр InfoPi, следуйте шагам, описанным в [README на GitHub](https://github.com/yktoo/infopi/blob/master/README.md) (*англ.*).
