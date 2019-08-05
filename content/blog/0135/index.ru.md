---
date: "2011-12-16T00:00:00Z"
title: "Интеграция Google Music с Убунту"
tags: ["Google", "Google Music", "Linux", "Ubuntu", "музыка"]
image: "https://3.bp.blogspot.com/-SIWgCWPXado/TutmMgf6TOI/AAAAAAAAKmo/o7lxADgiPyw/s1600/google-music.png"
---

Месяц назад я [рассказывал]({{< relref "/blog/0126" >}}) об открытии облачного сервиса для хранения музыки [Google Music](http://music.google.com/) (сервис по-прежнему формально доступен только для обитателей США, что едва ли вызывает у меня угрызения совести).

Моя эпопея с загрузкой 130 ГБ музыки в облако успешно завершилась примерно за четыре дня, и теперь вся моя коллекция доступна мне везде, где есть интернет — с некоторыми ограничениями (которые, возможно, будут устранены, когда сервис выйдет из стадии беты).
{{< imgfig "https://3.bp.blogspot.com/-SIWgCWPXado/TutmMgf6TOI/AAAAAAAAKmo/o7lxADgiPyw/s1600/google-music.png" >}}

<!--more-->

Эти ограничения, впрочем, можно обойти. Например, возможность загружать mp3-файлы из облака появляется при установке расширения Chrome [Music Plus for Google Music](http://chrome.google.com/webstore/detail/ipfnecmlncaiipncipkgijboddcdmego). Оно же устраняет необходимость переходить на вкладку Google Music, чтобы приостановить воспроизведение или перейти на следующий/предыдущий трек.

Но мне больше понравилось расширение [Play/Pause 4 Grooveshark & Google Music](http://chrome.google.com/webstore/detail/ocimhajpehjmepnegklahceceebnened), которое просто добавляет кнопку воспроизведения/паузы прямо на панель инструментов (имеются аналогичные расширения для кнопок [«Назад»](http://chrome.google.com/webstore/detail/iklcgmiodfcphjidljmbbblgbicapmhf) и [«Вперёд»](http://chrome.google.com/webstore/detail/niblnbcmjmbbadnkhjecmfgnlhafkhja)):
{{< imgfig "https://4.bp.blogspot.com/--dEgGoBh6cs/TutmL6YLg3I/AAAAAAAAKmY/_nr-R2rK5Sw/s1600/chrome-play-button.png" >}}

Однако при всех своих удобствах, Google Music по-прежнему остаётся страницей, работающей в браузере, и интеграция с системой как таковая отсутствует: мне в первую очередь не хватало возможности управлять плеером с помощью клавиатуры.

Поиски в интернетах вывели на приложение **Google Music Frame**, он же [Nuvola Player](http://launchpad.net/nuvola-player) (автор Jiří Janoušek), позволяющее «внедрить» Google Music в Убунту.

Google Music Frame по сути представляет собой просто страницу Google Music, встроенную в приложение — иное решение вряд ли будет возможно до тех пор, пока Google не предоставит полноценного API для этого сервиса:
{{< imgfig "https://3.bp.blogspot.com/-IwHHkktbWhY/TutmL0D2fJI/AAAAAAAAKmg/vzeD5haXL2o/s1600/google-music-frame-main-window.png" >}}

Плеер добавляет свои пункты в кнопку Панели запуска:
{{< imgfig "https://2.bp.blogspot.com/-PgfdtxiSUZU/TutmL8wZV2I/AAAAAAAAKmc/Lb0BZv93-LA/s1600/google-music-frame-launcher.png" >}}

А также интегрирует сервис в Ubuntu Sound Menu:
{{< imgfig "https://4.bp.blogspot.com/-ZCD5vXQ8PJI/TutmMQUphNI/AAAAAAAAKmk/8V93xPRNtUk/s1600/google-music-frame-sound-menu.png" >}}

Итак, чтобы установить приложение:

    sudo apt-add-repository  ppa:nuvola-player-builders/stable
    sudo apt-get update
    sudo apt-get install google-music-frame

После установки в Dash появляется приложение **Google Music Frame**:
{{< imgfig "https://4.bp.blogspot.com/-dFpo6QEpIIU/Tutumulv0mI/AAAAAAAAKnU/icbSAIF5F50/s1600/google-music-frame-dash.png" >}}

Приложение может выводить стандартные уведомления Убунту при смене трека, а также реагировать на нажатия клавиш управления вопроизведения. Последними можно назначить любые комбинации клавиш на клавиатуре с помощью стандартного **Центра управления GNOME**:
{{< imgfig "https://2.bp.blogspot.com/-R4cUdouYo9c/TutwLDjdAJI/AAAAAAAAKnw/WVwvwvl6pYQ/s1600/gnome-control-center-keyboard.png" >}}

Для полного счастья не хватает только, чтобы облачную музыку мог воспроизводить {{< wiki "Music_Player_Daemon" "ru" "MPD" >}}. С приходом API, может быть, дождёмся?
