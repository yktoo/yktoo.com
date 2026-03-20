---
type: post
date: "2026-03-20T12:17:07+01:00"
title: "3.17.0 Knockloughrim"
tags:
    - Comentario
    - веб
    - софт
    - разработка
    - релиз
    - Go
    - Angular
image: "https://res.cloudinary.com/yktoo/image/upload/v1774005386/blog/oha6clzytsy2mzvjultz.jpg"
imageCredit: "Изображение: кибермозг."
series: comentario
software: comentario
---

Вышел **Comentario** [**3.17.0 Knockloughrim**](https://gitlab.com/comentario/comentario/-/releases/v3.17.0).

[Comentario](/software/comentario) — это быстрый и мощный свободный сервер комментариев для веб-страниц, написанный на {{< fl "Go" >}}.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1774005386/blog/oha6clzytsy2mzvjultz.jpg" "Изображение: кибермозг." >}}

> <i class="fas fa-info-circle"></i> Вы можете подписаться на новости {{< fl "Comentario" >}} в [соответствующем блоге](/series/comentario) или через {{< rss-permalink "/series/comentario" "RSS" >}}.

## Что нового

<!--more-->

### Переопределение имени модератора

Теперь владельцы доменов могут разрешить модераторам менять имя, под которым они оставляют комментарии ([#222](https://gitlab.com/comentario/comentario/-/issues/222)). Например, при ответе на комментарии пользователей можно использовать название своего отдела (или любое другое имя).

Сначала эту функцию необходимо включить в [настройках по умолчанию](https://docs.comentario.app/en/configuration/backend/dynamic/domain.defaults.comments.customname.moderator/) или настройках конкретного домена. После её активации пользователи с правами модератора (включая владельцев и [суперпользователей](https://docs.comentario.app/en/kb/permissions/superuser/)) увидят в своих настройках новое поле *Переопределённое имя*:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1774025351/blog/qnyc4iri0l3mfl9g4nos.png" "Переопределённое имя в настройках пользователя." "border shadow" >}}

Такое имя задаётся для конкретного [домена](https://docs.comentario.app/en/kb/domain/) и влияет на все комментарии, создаваемые или редактируемые модератором на этом домене.

Также его можно поменять в свойствах пользователя домена через {{< fl "Admin UI" >}}:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1774025916/blog/cj8mvmfehoepefb9rnav.png" "Переопределённое имя в свойствах пользователя домена." "border shadow" >}}

### Поддержка PostgreSQL

В этом релизе добавлена поддержка {{< fl "PostgreSQL 18" >}} ([#224](https://gitlab.com/comentario/comentario/-/issues/224)). На самом деле, тут не потребовалось никаких дополнительных усилий, за исключением добавления отдельного набора тестов для этой БД.

Кроме того, исправлена ситуация, когда для хранения данных {{< fl "Comentario" >}} используется схема базы данных, отличная от `public` ([#225](https://gitlab.com/comentario/comentario/-/issues/225)). Теперь поиск объектов будет осуществляться в корректном порядке, заданном в `search_path`.

### Прочие изменения

* Бэкенд: исправлена утечка ресурсов в `DecompressGzip()`
* Бэкенд: применён {{< fl "Go" >}} 1.26, обновлены зависимости
* Добавлен перевод на португальский ([@pt.cesar.monteiro](https://gitlab.com/pt.cesar.monteiro))
* Добавлен перевод на украинский ([@kleindberg](https://gitlab.com/kleindberg))
* {{< fl "CI" >}}: использована более новая версия деплой-образа

{{< include-file "/blog/_snippets/_comentario-footer.ru.md" >}}
