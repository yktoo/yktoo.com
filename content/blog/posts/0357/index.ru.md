---
type: post
date: "2019-08-23T17:19:01+02:00"
title: "Код веб-сайта yktoo.com открыт"
description: |-
    Исходный код **yktoo.com версии 3.0** стал достаточно стабильным, чтобы его не стыдно было выложить во всеобщий доступ. Я планировал сделать это с самого начала.

    Теперь весь код стал доступен на GitHub.
tags:
    - сайт
    - Интернет
    - софт
    - GitHub
    - блог
    - Hugo
    - опенсорс
image: website-logo.png
---

> Когда ты честен, тебе нечего бояться, ведь тебе нечего скрывать. Будучи честным, ты будешь поступать правильно, и поэтому у тебя не будет чувства вины.
> <footer class="blockquote-footer">Зиг Зиглар</footer>

Исходный код **yktoo.com версии 3.0** стал достаточно стабильным, чтобы его не стыдно было выложить во всеобщий доступ. Я планировал сделать это с самого начала, ещё приступая к разработке статической версии.

Сегодня код был опубликован {{< a "https://github.com/yktoo/yktoo.com" "на GitHub" >}}: его можно просматривать, билдить, форкать, о проблемах можно сообщать в {{< a "https://github.com/yktoo/yktoo.com/issues" "багтрекер" >}} и т.д.

Исходный код и весь сопутствующий контент распространяется на условиях лицензии {{< a "https://creativecommons.org/licenses/by-sa/4.0/deed.ru" "Creative Commons Attribution-ShareAlike 4.0" >}} license.

{{< button "https://creativecommons.org/licenses/by-sa/4.0/deed.ru" "<i class='fab fa-creative-commons'></i><i class='fab fa-creative-commons-by'></i><i class='fab fa-creative-commons-sa bycon'></i>Лицензия CC-BY-SA 4.0" >}}
{{< button "https://github.com/yktoo/yktoo.com" "<i class='fab fa-github bycon'></i>Код на GitHub" >}}

Так что если вам любопытно, как тут всё устроено — ловите шанс!


## Нужен лишь Hugo

Хотите верьте, хотите — нет, но построить этот сайт из исходного кода проще некуда. Нужно лишь {{< a "https://gohugo.io/getting-started/installing/" "установить Hugo" >}}, после чего запустить `hugo` в корне проекта:

{{< imgfig "hugo-screencast.gif" "Проще не бывает!" >}}

Либо можно сказать `hugo server` и поднять тем самым локальный веб-сервер с полностью работоспособным сайтом.

Хороших выходных!