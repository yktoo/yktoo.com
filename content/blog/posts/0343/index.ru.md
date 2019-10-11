---
type: post
date: "2019-01-13T00:00:00Z"
title: "2.2.0"
series: "Sound Switcher Indicator"
tags: ["Sound Switcher Indicator", "Ubuntu"]
image: "https://2.bp.blogspot.com/-BibUCaj-gGQ/XDs5PF-gjFI/AAAAAAAAue4/mIDfV0Llkf8llKjrvFcQm5I9cgQOF47AACKgBGAs/s1600/menu.png"
software: sound-switcher-indicator
aliases:
    - /ru/blog/post/343
---

Пришло время исполнять {{< a "0342" "обещанное" >}}, так что представляю на ваш суд версию {{< a "/software/sound-switcher-indicator" "Sound Switcher Indicator" >}} **2.2.0**.

## Что нового

Основных отличий от предыдущей версии здесь два:

<!--more-->

* Добавлена поддержка виртуальных устройств ([#48](https://github.com/yktoo/indicator-sound-switcher/issues/48)): сетевых входов ({{< fl "sources" >}}) и выходов ({{< fl "sinks" >}}). Теперь в меню индикатора также отображаются входы-выходы с сетевых серверов {{< fl "PulseAudio" >}}.
* Наконец-то добавлен визуальный интерфейс для управления настройками индикатора. Он позволяет наглядно изменять всё то, что хранится в файле настроек программы (`$HOME/.config/indicator-sound-switcher.json`). Добавлен соответствующий пункт в меню:

{{< imgfig "https://2.bp.blogspot.com/-BibUCaj-gGQ/XDs5PF-gjFI/AAAAAAAAue4/mIDfV0Llkf8llKjrvFcQm5I9cgQOF47AACKgBGAs/s1600/menu.png" "Меню Sound Switcher Indicator." >}}

## Диалог настроек

В диалоге настроек две вкладки:

* **Общие настройки** позволяют полностью скрыть секцию входов и/или выходов:

{{< imgfig "https://4.bp.blogspot.com/-14n8z6QVISg/XDcOV5WS7PI/AAAAAAAAueQ/-dUR3l-nF7YqQn5YBofHMdyIfRojWQn9QCKgBGAs/s1600/prefs-general.png" "Общие настройки Sound Switcher Indicator." >}}
* **Настройки устройств** — здесь можно поменять параметры отображения каждого устройства, а также любого из его портов:

{{< imgfig "https://2.bp.blogspot.com/-4kUpg4FKu9E/XDcOV2foTuI/AAAAAAAAueQ/WgnSa9cW0jw8ewbPQMlnzpngIxOS_KNYACKgBGAs/s1600/prefs-devices.png" "Настройки устройств." >}}
* Кнопка **Обновить** ({{< fl "Refresh" >}}) в правом верхнем углу обновляет списки устройств и портов без необходимости открывать диалог заново.

Все настройки применяются сразу же, после небольшой задержки. Русская локализация присутствует «из коробки».

Ещё изменения:

* Немного поменялся формат файла конфигурации: отныне настройки порта могут быть только объектом (ранее также можно было использовать строку или `false`), так что может потребоваться обновить конфигурацию — благо с новым диалогом это очень просто.
* Исправлен давний баг с неправильным порядком пунктов меню ([#55](https://github.com/yktoo/indicator-sound-switcher/issues/55)). На самом деле проблема в библиотеке GTK+, а я просто придумал, как её обойти.

## Поддержка Ubuntu

В моём {{< fl "PPA" >}} публикуются пакеты для {{< fl "Ubuntu 18.04 Bionic" >}} и {{< fl "18.10 Cosmic" >}} ([описание процедуры установки](https://github.com/yktoo/indicator-sound-switcher/blob/master/doc/install.md)). Багрепорты принимаются по [обычному адресу](https://github.com/yktoo/indicator-sound-switcher/issues/).
