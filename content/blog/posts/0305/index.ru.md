---
date: "2017-01-17T00:00:00Z"
title: "Скрипт включения/выключения тачпада в Убунту"
tags: ["GitHub", "Ubuntu", "yktools", "тачпад"]
image: "https://4.bp.blogspot.com/-P81ExjwEw5o/WH3AyBShljI/AAAAAAAApBk/UCuTprQSMVsObxhiX2KYkEfn39Cck0xrwCPcB/s1600/unity-ccenter-mouse.png"
---

Занялся тут на досуге изучением джедайского редактора {{< wiki "Vim" "ru" "Vim" >}} и обнаружил, что при плотном использовании лишь клавиатуры (в чём, собственно, и состоит весь смысл {{< fl "Vim" >}}) сильно мешается тачпад в моём ноутбуке. В то же время, без него довольно неудобно в остальных программах, — иными словами, нужно иметь возможность его часто включать и выключать, причём с клавиатуры.

В некоторых ноутбуках для этого есть специальная комбинация клавиш, но не в моём {{< fl "Dell XPS 13\"" >}}. В панели настроек Убунту также есть соответствующий переключатель, но до него добираться без мыши ужасно долго и неудобно:

<!--more-->

{{< imgfig "https://4.bp.blogspot.com/-P81ExjwEw5o/WH3AyBShljI/AAAAAAAApBk/UCuTprQSMVsObxhiX2KYkEfn39Cck0xrwCPcB/s1600/unity-ccenter-mouse.png" "Настройки мыши и тачпада." >}}

Поэтому я, недолго думая, написал скрипт для включения/выключения тачпада, который можно повесить на любую кнопку средствами той же панели настроек, — я, например, назначил на <kbd>Fn</kbd>+<kbd>T</kbd>.

Скрипт использует стандартную утилиту X11 `xinput`, он добавлен в мой репозиторий [yktools](https://github.com/yktoo/yktools) и называется вполне предсказуемо `touchpad-toggle`. При вызове он выводит стандартное уведомление о текущем состоянии тачпада:
{{< imgfig "https://2.bp.blogspot.com/-zuRLsy-tAQc/WH3AyKJwhQI/AAAAAAAApBk/i9gXasZ22jIrLD7MSTZXSWWoRBnMjSJJACPcB/s1600/touchpad-notifications.png" "Уведомления о включении/выключении." >}}

Исходный код скрипта [доступен на GitHub](https://github.com/yktoo/yktools/raw/master/touchpad-toggle). В списке устройств ввода он находит первое, у которого есть в названии слово `touchpad`, и переключает его состояние на противоположное.