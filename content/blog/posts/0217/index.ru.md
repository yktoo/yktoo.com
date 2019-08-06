---
date: "2014-02-02T00:00:00Z"
title: "1.2.0"
series: "Sound Switcher Indicator"
tags: ["PulseAudio", "Python", "Saucy Salamander", "Sound Switcher Indicator", "Ubuntu", "Unity", "звук", "индикатор"]
image: "https://3.bp.blogspot.com/-AcxuT-Iu-fQ/Uu4Qsv-K3qI/AAAAAAAAb1E/sXZ4SsxuFBc/s1600/Screenshot.png"
---

Наконец-то дошли руки выпустить обновление моего [Sound Switcher Indicator][route:/software/indicator-sound-switcher] — версия 1.2.0 позволяет выбирать не только входное/выходное устройство, а ещё и конкретный порт в нём:
{{< imgfig "https://3.bp.blogspot.com/-AcxuT-Iu-fQ/Uu4Qsv-K3qI/AAAAAAAAb1E/sXZ4SsxuFBc/s1600/Screenshot.png" >}}

<!--more-->

Эти не столь уж кардинальные внешние изменения потребовали почти полного редизайна приложения, что, надеюсь, пошло ему на пользу. Мне наконец-то удалось решить проблемы с {{< wiki "Состояние_гонки" "ru" "гонками" >}} в потоках, перенеся обработку событий PulseAudio в GUI-поток и избавившись от сомнительного `Gdk.threads_init()`.

Основная реализация была написана во время долгого перелёта в [Египет]({{< relref "0209" >}}), в течение которого я очень страдал от отсутствия Интернета и, соответственно, возможности гуглить. Но финальная часть потребовала [консультации](http://stackoverflow.com/questions/20844540/handle-a-signal-in-another-thread-in-python) на StackOverflow и отняла много времени.

Установить или обновить приложение можно, как обычно, через мой Launchpad PPA согласно [инструкции][route:/software/indicator-sound-switcher].