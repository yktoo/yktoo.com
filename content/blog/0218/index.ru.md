---
date: "2014-02-08T00:00:00Z"
title: "1.2.1"
group: "Sound Switcher Indicator"
tags: ["Precise Pangolin", "PulseAudio", "Python", "Quantal Quetzal", "Raring Ringtail", "Saucy Salamander", "Sound Switcher Indicator", "Trusty Tahr", "Ubuntu", "Unity", "звук", "индикатор"]
---

После [предыдущего][post:217] релиза [Sound Switcher Indicator][route:/software/indicator-sound-switcher] о нём [написал](http://www.webupd8.org/2014/02/sound-switcher-ubuntu-indicator.html) довольно известный ресурс Web Upd8, и я ~~проснулся знаменитым~~ сразу начал получать багрепорты, фичереквесты, вопросы и предложения.

Так, например, выяснилось, что индикатор используют в предыдущих версиях Убунту (вплоть до 12.04).

## Изменения {#whats-new}

<!--more-->

* При установке создаётся ярлык в папке автозагрузки, так что индикатор запускается автоматически после входа в систему.
* Бэк-порт всех текущих возможностей на GTK+ версии 2 (для этого в репозитории создана отдельная [ветка](https://github.com/yktoo/indicator-sound-switcher/tree/gtk2)), благодаря чему индикатор работает в следующих версиях Убунту:
  * GTK+ версии 2:
      * **12.04** LTS ({{< fl "Precise Pangolin" >}})
      * **12.10** ({{< fl "Quantal Quetzal" >}})
      * **13.04** ({{< fl "Raring Ringtail" >}})
  * GTK+ версии 3:
      * **13.10** ({{< fl "Saucy Salamander" >}})
      * **14.04** LTS ({{< fl "Trusty Tahr" >}}) — протестирован в Trusty Alpha 2.
* Добавлена иконка программы по умолчанию, которая будет отображаться, если используется нестандартная тема оформления. Я сделал её более контрастной, чтобы она была хорошо заметна как в светлых, так и в тёмных темах:
  {{< imgfig "https://1.bp.blogspot.com/-p_jKIQD-wJ4/UvZeMTHsmYI/AAAAAAAAb1g/DYm853qnCjw/s1600/indicator-sound-switcher.png" >}}

## Установка {#installation}

Установить или обновить приложение можно, как обычно, через мой Launchpad PPA согласно [инструкции][route:/software/indicator-sound-switcher].

**Внимание**: поскольку поддержка 13.04 (Raring Ringtail) окончена, Launchpad больше не принимает билдов для неё. Вы можете скачать GTK+2-версию [отсюда](http://ppa.launchpad.net/yktooo/ppa/ubuntu/pool/main/i/indicator-sound-switcher/).
