---
type: post
date: "2024-07-30T14:28:26+02:00"
title: "3.9.0 Crossgar"
tags:
    - Comentario
    - веб
    - софт
    - разработка
    - релиз
    - Go
    - Angular
    - Commento++
image: "https://res.cloudinary.com/yktoo/image/upload/v1722343200/blog/lmvroqjhgrgvsrcprvwy.jpg"
imageCredit: "Изображение: кибермозг."
series: comentario
software: comentario
---

Увидела свет новая версия [Comentario **3.9.0 Crossgar**](https://gitlab.com/comentario/comentario/-/releases/v3.9.0).

[Comentario](/software/comentario) — это быстрый и мощный свободный сервер комментариев для веб-страниц, написанный на {{< fl "Go" >}}.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1722343200/blog/lmvroqjhgrgvsrcprvwy.jpg" "Киберизображение." >}}

## Что нового

Сегодня в программе: поддержка логина через {{< fl "OIDC" >}}, тёмная тема оформления, миграция с {{< fl "Commento++" >}} и многое другое!

<!--more-->

### Поддержка OIDC

Добавлена поддержка стандартных [OIDC-провайдеров](https://docs.comentario.app/en/configuration/idps/oidc/). {{< fl "OIDC" >}} — это сокращение от [OpenID Connect](https://openid.net/developers/how-connect-works/), открытый протокол аутентификации, поддерживаемый множеством компаний и программных продуктов.

В их числе, например, {{< fl "LinkedIn" >}}, который теперь можно легко [добавить](https://docs.comentario.app/en/configuration/idps/linkedin/) в качестве внешнего провайдера аутентификации.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1722345304/blog/ecwylpv1aoj8bnxx8h0i.png" "Настройка логина в Comentario через LinkedIn." "border shadow" >}}

В [документации](https://docs.comentario.app/) подробно разъясняется, как можно сконфигурировать [логин через LinkedIn](https://docs.comentario.app/en/configuration/idps/linkedin/), а также через любого другого [стандартного OIDC-провайдера](https://docs.comentario.app/en/configuration/idps/oidc/).

### Тёмная тема

{{< fl "Comentario" >}} получил поддержку тёмной темы оформления, благодаря чему комментарии теперь можно нормально встраивать в соответствующие веб-сайты.

Желаемая тема оформления задаётся при помощи [атрибута `theme`](https://docs.comentario.app/en/configuration/embedding/comments-tag/theme/) тега `<comentario-comments>`. Её даже можно менять на лету, примером чего является [демо-сайт Comentario](https://demo.comentario.app/):

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1722346861/blog/ep6lf7msn4hrx6vzvegg.gif" "Переключение между светлой и тёмной темами в Comentario." "border shadow" >}}

### Миграция с Commento++

{{< fl "Commento++" >}} (он же [Commentoplusplus](https://github.com/souramoo/commentoplusplus)) — это ещё один форк {{< fl "Commento" >}}, и он, подобно предшественнику, больше не обновляется.

Начиная с данной версии, {{< fl "Comentario" >}} автоматически [сконвертирует](https://docs.comentario.app/en/installation/migration/commento/#commento-1) базу данных из формата {{< fl "Commento++" >}}, если его подключить к существующей БД. Не забудьте предварительно сделать резервную копию.

### Favicons и манифесты

В данном релизе добавлена целая пачка иконок всех размеров, а также файлов `manifest`, необходимых для правильного отображения {{< fl "Comentario" >}} во всех популярных браузерах и операционных системах. Правильность всего этого хозяйства удостоверена при помощи [RealFaviconGenerator](https://realfavicongenerator.net/favicon_checker?protocol=http&site=comentario.app):

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1722347831/blog/a66ivwylletqedoslqri.png" "Результаты анализа метаданных Comentario." "border shadow" >}}

### Образы Docker

Начиная с данного релиза немного изменяется назначение версий [Docker-имиджам](https://docs.comentario.app/en/installation/docker-image/):

* `latest` теперь всегда будет указывать на **последний стабильный релиз**; раньше он указывал на последний `dev`-билд.
* `edge` будет указывать на **последнюю нестабильную версию** (из ветки `dev` — то, что раньше называлось `latest`).

Такой подход совместим с тем, как обычно маркируются имиджи (например, на {{< fl "Docker Hub" >}}: `latest` — это как правило самая современная стабильная версия.

Помимо этого, сейчас также создаются {{< fl "Docker" >}}-образы, базирующиеся на {{< fl "Ubuntu" >}}. Бинарники в них слинкованы динамически (в противоположность статическим, помещаемым в имиджи на основе {{< fl "Alpine" >}}). Эти образы получили суффикс `-ubuntu` к версии, включая `latest-ubuntu` и `edge-ubuntu` для вышеупомянутых билдов.


### Прочие изменения

* Внешние пользователи сначала ищутся по их {{< fl "federated ID" >}}, и только после этого по емэйлу ([#99](https://gitlab.com/comentario/comentario/-/issues/99))
* {{< fl "SSO" >}}: в пейлоад добавлено поле `link` ([#98](https://gitlab.com/comentario/comentario/-/issues/98))
* Фронтенд: добавлен `robots.txt`
* Добавлена публикация {{< fl "Comentario Helm chart" >}} в {{< fl "chart" >}}-репозиторий GitLab
* Фронтенд: обновлены зависимости ({{< fl "Angular" >}} 18, {{< fl "ESLint" >}} 9 и др.)
* Добавлен перевод на вьетнамский язык
* Исправлено: куки для {{< fl "XSRF" >}} и языка устанавливаются только по необходимости ([#103](https://gitlab.com/comentario/comentario/-/issues/103))
* Исправлено: создание {{< fl "XSRF" >}}-ключа
* Исправлено: получение заголовка страницы с {{< fl "query" >}}-параметром в {{< fl "URL" >}} ([#106](https://gitlab.com/comentario/comentario/-/issues/106))
* Исправлено: удваивание статистики просмотров ([#108](https://gitlab.com/comentario/comentario/-/issues/108))
* Исправлено: встраиваемая часть: удаление обработчика сообщений {{< fl "non-interactive SSO" >}} ([#96](https://gitlab.com/comentario/comentario/-/issues/96))
* Исправлено: встраиваемая часть: удалён фон ([#105](https://gitlab.com/comentario/comentario/-/issues/105))

## Демо-версия

Увидеть новую версию в действии, а также её административный интерфейс (логин с емэйлом `admin@admin` и паролем `admin`), можно на демо-сайте:

{{< button "https://demo.comentario.app/" "Демо-сайт комментариев" "btn-primary mb-3" >}}
{{< button "https://edge.comentario.app/" "Демо админки Comentario" "btn-primary mb-3" >}}

## Установка

Если вы хотите установить {{< fl "Comentario" >}}, вот ссылки на документацию:

* [Getting started](https://docs.comentario.app/en/getting-started/).
* [Installation](https://docs.comentario.app/en/installation/).
* [Migration](https://docs.comentario.app/en/installation/migration/) (поддерживается импорт из [Commento(++)](https://docs.comentario.app/en/installation/migration/commento/), [Disqus](https://docs.comentario.app/en/installation/migration/disqus/), [Wordpress](https://docs.comentario.app/en/installation/migration/wordpress/)).
