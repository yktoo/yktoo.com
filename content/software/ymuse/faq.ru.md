---
title: FAQ
software: ymuse
menu:
    ymuse:
        weight: 10
---

Часто задаваемые вопросы про [Ymuse](/software/ymuse).

{{< toc >}}

## Как произносится «Ymuse»?

Как «уай-мьюз».

## Вы можете добавить в Ymuse поддержку MPRIS?

Делать этого не требуется, так как уже есть проект [mpDris2](https://github.com/eonpatapon/mpDris2) (см. следующий вопрос).

## Как привязать медиаклавиши на клавиатуре к Ymuse?

Это нельзя сделать напрямую, но есть намного более удобная альтернатива: вы можете связать свой {{< abbr "MPD" "Music Player Daemon" >}} с окружением рабочего стола при помощи протокола [MPRIS](https://wiki.archlinux.org/title/MPRIS). Проще всего это сделать, установив пакет [mpDris2](https://github.com/eonpatapon/mpDris2).
После этого {{< fl "MPD" >}} будет управляться медиаклавишами независимо от того, запущен {{< fl "Ymuse" >}} или нет.

В {{< fl "Ubuntu" >}} установить его можно командой:

```bash
sudo apt install mpdris2
```
