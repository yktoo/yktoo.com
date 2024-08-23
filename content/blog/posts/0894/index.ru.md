---
type: post
date: "2024-08-23T09:56:23+02:00"
title: "2.3.10.1"
tags:
    - Sound Switcher Indicator
    - Ubuntu
    - Bionic Beaver
    - Focal Fossa
    - Impish Indri
    - Jammy Jellyfish
    - Linux
    - софт
    - звук
    - индикатор
image: "https://res.cloudinary.com/yktoo/image/upload/blog/tz9luieerecw7gkumsoi.png"
series: sound-switcher-indicator
software: sound-switcher-indicator
---

Вышла версия **2.3.10.1** [Sound Switcher Indicator](/software/sound-switcher-indicator) — прямо следом за **2.3.10**.

<!--more-->

## Что нового

В версии **2.3.10** нет нового функционала, зато присутствует пара крайне полезных багфиксов:

* Исправлена ошибка, из-за которой после переключения профиля звуковой карты некоторые входные/выходные порты могли отсутствовать в меню ([#132](https://github.com/yktoo/indicator-sound-switcher/issues/132)).
* Исправлен автозапуск при установке из {{< fl "snap" >}}-пакета, который [переставал работать](https://github.com/yktoo/indicator-sound-switcher/pull/127) после второго обновления ([#128](https://github.com/yktoo/indicator-sound-switcher/issues/128)).

Хотфикс-релиз **2.3.10.1** в основном посвящён исправлению поломанного в предыдущем релизе [snap-пакета индикатора](https://snapcraft.io/indicator-sound-switcher): я слишком поторопился обновить используемый {{< fl "Python" >}} ([#134](https://github.com/yktoo/indicator-sound-switcher/issues/134), [#135](https://github.com/yktoo/indicator-sound-switcher/issues/135)) и базовый {{< fl "snap" >}} (миграция снэпа с одной базы на другую — это вообще кошмар программиста).

## Поддержка Ubuntu в PPA

В моём [PPA](https://launchpad.net/~yktooo/+archive/ubuntu/ppa) публикуются пакеты для {{< fl "24.10 Oracular Oriole" >}}, {{< fl "24.04 Noble Numbat" >}}, {{< fl "22.04 Jammy Jellyfish" >}}, {{< fl "20.04 Focal Fossa" >}} и {{< fl "18.04 Bionic Beaver" >}}. Багрепорты принимаются по [обычному адресу](https://github.com/yktoo/indicator-sound-switcher/issues/).

## Установка

Чтобы установить или обновить приложение, следуйте описанию на [соответствующей странице](/software/sound-switcher-indicator/installation).
