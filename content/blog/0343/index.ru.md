---
date: "2019-01-13T00:00:00Z"
title: "2.2.0"
group: "Sound Switcher Indicator"
tags: ["Sound Switcher Indicator", "Ubuntu"]
---

Пришло время исполнять [обещанное][post:342], так что представляю на ваш суд версию [Sound Switcher Indicator][route:/software/indicator-sound-switcher] **2.2.0**.

## Что нового {#whats-new}

Основных отличий от предыдущей версии здесь два:

<!--more-->

* Добавлена поддержка виртуальных устройств ([#48](https://github.com/yktoo/indicator-sound-switcher/issues/48)): сетевых входов (//sources//) и выходов (//sinks//). Теперь в меню индикатора также отображаются входы-выходы с сетевых серверов //PulseAudio//.
* Наконец-то добавлен визуальный интерфейс для управления настройками индикатора. Он позволяет наглядно изменять всё то, что хранится в файле настроек программы (`$HOME/.config/indicator-sound-switcher.json`). Добавлен соответствующий пункт в меню:

![](img:2.bp.blogspot.com/-BibUCaj-gGQ/XDs5PF-gjFI/AAAAAAAAue4/mIDfV0Llkf8llKjrvFcQm5I9cgQOF47AACKgBGAs/s1600/menu.png "Меню Sound Switcher Indicator.")

## Диалог настроек {#prefs-dialog}

В диалоге настроек две вкладки:

* **Общие настройки** позволяют полностью скрыть секцию входов и/или выходов:
![](img:4.bp.blogspot.com/-14n8z6QVISg/XDcOV5WS7PI/AAAAAAAAueQ/-dUR3l-nF7YqQn5YBofHMdyIfRojWQn9QCKgBGAs/s1600/prefs-general.png:a "Общие настройки Sound Switcher Indicator.")
* **Настройки устройств** — здесь можно поменять параметры отображения каждого устройства, а также любого из его портов:
![](img:2.bp.blogspot.com/-4kUpg4FKu9E/XDcOV2foTuI/AAAAAAAAueQ/WgnSa9cW0jw8ewbPQMlnzpngIxOS_KNYACKgBGAs/s1600/prefs-devices.png:a "Настройки устройств.")
* Кнопка **Обновить** (//Refresh//) в правом верхнем углу обновляет списки устройств и портов без необходимости открывать диалог заново.

Все настройки применяются сразу же, после небольшой задержки. Русская локализация присутствует «из коробки».

Ещё изменения:

* Немного поменялся формат файла конфигурации: отныне настройки порта могут быть только объектом (ранее также можно было использовать строку или `false`), так что может потребоваться обновить конфигурацию — благо с новым диалогом это очень просто.
* Исправлен давний баг с неправильным порядком пунктов меню ([#55](https://github.com/yktoo/indicator-sound-switcher/issues/55)). На самом деле проблема в библиотеке GTK+, а я просто придумал, как её обойти.

## Поддержка Ubuntu {#ubuntu-support}

В моём //PPA// публикуются пакеты для //Ubuntu 18.04 Bionic// и //18.10 Cosmic// ([описание процедуры установки](https://github.com/yktoo/indicator-sound-switcher/blob/master/doc/install.md)). Багрепорты принимаются по [обычному адресу](https://github.com/yktoo/indicator-sound-switcher/issues/).
