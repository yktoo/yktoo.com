---
type: post
date: "2024-03-16T11:13:02+01:00"
title: "3.6.0"
tags:
    - Comentario
    - веб
    - софт
    - разработка
    - релиз
    - Go
    - Angular
image: "https://res.cloudinary.com/yktoo/image/upload/v1710609306/blog/wunuxiikkodzefwfw0wr.jpg"
imageCredit: "Изображение: кибермозг."
series: comentario
software: comentario
---

Пока суть да дело — версия [Comentario 3.6.0](https://gitlab.com/comentario/comentario/-/releases/v3.6.0) подоспела.

[Comentario](/software/comentario) — это быстрый и мощный свободный сервер комментариев для веб-страниц, написанный на {{< fl "Go" >}}.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1710609306/blog/wunuxiikkodzefwfw0wr.jpg" >}}

## Что нового

<!--more-->

### Мультиязычность (i18n)

В этой версии впервые появилась поддержка [мультиязычности (i18n, internationalisation)](https://docs.comentario.app/en/contributing/i18n/backend/) для встраиваемых комментов и емэйл-уведомлений ([#71](https://gitlab.com/comentario/comentario/-/issues/71)).

{{< fl "Comentario" >}} способен самостоятельно определить язык текущей страницы по значению атрибута `<html lang="…">`, но его можно также задать и явно при помощи [атрибута lang](https://docs.comentario.app/en/configuration/embedding/comments-tag/lang/) тега с комментами.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1710611199/blog/euxxgmfxbtamxqnqocgb.png" "Опции тега с комментами." "border shadow" >}}

Все три поддерживаемые на данный момент языка можно видеть на демо-сайте {{< fl "Comentario" >}}: [английский](https://demo.comentario.app/), [голландский](https://demo.comentario.app/nl/), [русский](https://demo.comentario.app/ru/).

### Замена юридических документов

Добавлена возможность переопределить адреса стандартных юридических документов: *Условий предоставления услуг* ({{< fl "Terms of Service" >}}) и *Политики приватности* ({{< fl "Privacy Policy" >}}) ([#56](https://gitlab.com/comentario/comentario/-/issues/56)). Ссылки на них указываются, например, в диалоге регистрации пользователя.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1710611986/blog/vuzjcmvb5czuxja1cmfa.png" "Диалог регистрации." >}}

Их {{< fl "URL" >}} можно задать опциями [командной строки](https://docs.comentario.app/en/configuration/backend/static/) либо как [параметры](https://docs.comentario.app/en/installation/helm-chart/parameters/) {{< fl "Helm chart" >}}; по умолчанию они указывают на [собственные документы](https://docs.comentario.app/en/legal/) из документации сервера.

### Прочие изменения

* [Документация по Helm chart](https://docs.comentario.app/en/installation/helm-chart/) была существенно расширена, также были добавлены новые параметры.
* Встраиваемая часть: если [Live update](https://docs.comentario.app/en/kb/live-update/) отключен глобально, он также будет автоматически деактивирован и на всех страницах с комментариями.
* Скрипт миграции {{< fl "PostgreSQL" >}} был поправлен (благодарность {{< fl "Ahmad Abu Hantash" >}}) для случаев, когда емэйл пользователя повторяется. Ранее подобная ситуация приводила к потере комментариев в процессе миграции.

## Демо-версия

Увидеть новую версию в действии, а также её административный интерфейс (логин с емэйлом `admin@admin` и паролем `admin`), можно на демо-сайте:

{{< button "https://demo.comentario.app/" "Демо-сайт комментариев" "btn-primary mb-3" >}}
{{< button "https://edge.comentario.app/" "Демо админки Comentario" "btn-primary mb-3" >}}

## Установка

Если вы хотите установить {{< fl "Comentario" >}}, вот ссылки на документацию:

* [Getting started](https://docs.comentario.app/en/getting-started/).
* [Installation](https://docs.comentario.app/en/installation/).
* [Migration](https://docs.comentario.app/en/installation/migration/).
