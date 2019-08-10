---
title: Sound Switcher Indicator
subtitle: Индикатор для выбора входа и выхода звука в Linux.
platform: linux
icon: ssi-icon-64.png
weight: 1
software: sound-switcher-indicator
seeAlso:
    - name: Мой Launchpad PPA
      url: 'https://launchpad.net/~yktooo/+archive/ppa'
---

Я создал это приложение, потому что не нашёл ни одного существующего решения.

Оно отображает значок в области индикаторов в области индикаторов или системном трее (зависит от того, каким десктопом вы пользуетесь). Меню индикатора позволяет переключать текущие порты входного и выходного звукового устройства (в терминах PulseAudio *source* и *sink*, соответственно) в два клика:

{{< imgfig "screenshot.png" "Меню индикатора" >}}

Внешний вид устройств и их портов, отображаемых в меню, можно настроить с помощью соответствующего диалога:

{{< imgfig "prefs-devices.png" "Диалог настроек." >}}

Нравится? В [этом документе (англ.)](https://github.com/yktoo/indicator-sound-switcher/blob/dev/doc/install.md) объясняется, как установить это приложение.

## Установка

Если вы хотите установить индикатор, обратитесь к [соответствующему документу](https://github.com/yktoo/indicator-sound-switcher/blob/dev/doc/install.md). Здесь вы можете загрузить последнюю версию исходного кода программы.

Скачать {{< fl "source tarball" >}} или готовый `.deb`-пакет можно на странице [Launchpad PPA packages](https://launchpad.net/~yktooo/+archive/ppa/+packages).
