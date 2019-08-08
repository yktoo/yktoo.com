---
title: Docker Indicator
subtitle: Индикатор для управления контейнерами Docker.
platform: linux
icon: docker-indicator-icon-64.png
weight: 2
software: docker-indicator
seeAlso:
    - name: My Launchpad PPA
      url: 'https://launchpad.net/~yktooo/+archive/ppa'
---

Приложение-индикатор для Linux, обладающее следующим функционалом:

* Меню отображает список контейнеров — как активных, так и остановленных. Список предоставляется демоном Docker и обновляется автоматически.
* По клику на пункте меню соответствующий контейнер останавливается или запускается.
* Также при остановке и запуске любого контейнера — причём необязательно посредством индикатора — выводится всплывающее уведомление.

Вот как это выглядит:

{{< imgfig "screenshot.png" "Меню индикатора." >}}

Нравится? В [Этом документе (англ.)](https://github.com/yktoo/indicator-docker/blob/master/INSTALL) объясняется, как его установить.

## Скачать

Если вы хотите установить индикатор, обратитесь к [соответствующему документу](https://github.com/yktoo/indicator-docker/blob/master/INSTALL). Здесь вы можете загрузить последнюю версию исходного кода программы.

<!-- TODO List downloads and source code -->

Скачать {{< fl "source tarball" >}} или готовый `.deb`-пакет можно на странице [Launchpad PPA packages](https://launchpad.net/~yktooo/+archive/ppa/+packages).
