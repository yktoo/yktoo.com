---
type: post
date: "2025-02-17T08:31:55+01:00"
title: "3.13.0 Garvagh"
tags:
    - Comentario
    - веб
    - софт
    - разработка
    - релиз
    - Go
    - Angular
image: "https://res.cloudinary.com/yktoo/image/upload/v1739777430/blog/zbfzyzr8ysfsbefeehhw.jpg"
imageCredit: "Изображение: кибермозг."
series: comentario
software: comentario
---

Вышла новая версия **Comentario** [**3.13.0 Garvagh**](https://gitlab.com/comentario/comentario/-/releases/v3.13.0).

[Comentario](/software/comentario) — это быстрый и мощный свободный сервер комментариев для веб-страниц, написанный на {{< fl "Go" >}}.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1739777430/blog/zbfzyzr8ysfsbefeehhw.jpg" "Изображение: кибермозг." >}}

> <i class="fas fa-info-circle"></i> Вы можете подписаться на новости {{< fl "Comentario" >}} в [соответствующем блоге](/series/comentario) или через {{< rss-permalink "/series/comentario" "RSS" >}}.

## Что нового

<!--more-->

### RSS-лента комментариев

Начиная с этой версии пользователи могут подписываться на [RSS-ленты](https://docs.comentario.app/en/kb/rss/) для комментариев, оставленных на определённой странице или на всём домене, с возможностью дополнительной фильтрации по автору или пользователю, которому дан ответ.

Встроенный {{< fl "Comentario" >}} теперь содержит ссылку `RSS` под текстовым полем `Добавить комментарий`, которая открывает всплывающее окно `RSS-лента комментариев`.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1739778394/blog/wqfuxz2zuaebapwuzjdi.png" "Окно «RSS-лента комментариев» в Comentario." >}}

Переключение флажков будет соответствующим образом обновлять отображаемый {{< fl "URL" >}} {{< fl "RSS" >}}-канала. Чтобы иметь возможность фильтровать комментарии по ответам, вам необходимо сначала войти в систему.

В админке соответствующий {{< fl "URL" >}} {{< fl "RSS" >}}-ленты можно увидеть в свойствах домена и страницы домена — здесь доступна также опция фильтрации по автору:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1739787973/blog/ri7xfk3rqonvjdll8xpb.png" "RSS-лента комментариев в свойствах страницы домена." "border shadow" >}}

Вышеперечисленные возможности включены по умолчанию, но их можно отключить и скрыть соответствующие элементы интерфейса при помощи параметра динамической конфигурации [Enable comment RSS feeds](https://docs.comentario.app/en/configuration/backend/dynamic/domain.defaults.comments.rss.enabled/) — отдельно для каждого домена.

### Виджет количества комментов

Эта возможность ([#147](https://gitlab.com/comentario/comentario/-/issues/147)) была запрошена уже давно, но до этого релиза была доступна только через {{< fl "API" >}}-вызов.

Теперь наряду с [компонентом комментариев](https://docs.comentario.app/en/configuration/embedding/comments-tag/) (`<comentario-comments>`) имеется еще один веб-компонент, который можно вставить с помощью [тега `<comentario-count>`](https://docs.comentario.app/en/configuration/embedding/count-tag/).

Владельцы сайтов могут использовать его для отображения количества комментариев на определенной странице, например, в записи блога. Вы можете увидеть его в действии в переключателе языков на [демо-сайте Comentario](https://demo.comentario.app/):

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1739779153/blog/m9ksszngwgqrmhpatbh9.png" "Виджет количества комментов в языковом меню." "border shadow" >}}

### Приветственное сообщение в Дашборде

Пользователи, только что зарегистрировавшие учетную запись, теперь увидят небольшое пояснение, что делать дальше, на панели Дашборда — вместо пустого экрана:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1739779533/blog/fws9oeknqibz8ieda9je.png" "Приветственное сообщение в Дашборде." "border shadow" >}}

Надеюсь, это поможет хоть немного упростить процесс обучения.

### Выбранный домен всегда вверху

Если у вас много доменов, понять, с каким из них вы имеете дело в данный момент, может быть непросто. В этой версии выбранный домен, если таковой имеется, всегда будет отображаться первым в списке, независимо от текущей сортировки:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1739779864/blog/pwhnexvnssky2anq35fk.png" "Выбранный домен всегда стоит на первом месте в списке." "border shadow" >}}

То же касается и фильтрации списка доменов, но только если выбранный домен проходит фильтр.

### Редактирование страниц домена

[Страницы домена](https://docs.comentario.app/en/kb/domain-page/) получили отдельную страницу редактирования, с помощью которой вы можете изменять их свойства ([#148](https://gitlab.com/comentario/comentario/-/issues/148)). Благодаря этому интерфейс становится более последовательным; кроме того, таким образом можно отредактировать путь страницы (*использовать с осторожностью!*):

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1739780297/blog/gi6tqavz2y8mhydrq3ov.png" "Редактирование страницы домена." "border shadow" >}}

### Назначение роли SSO-сервером

Сервер [Single Sign-On](https://docs.comentario.app/en/configuration/frontend/domain/authentication/sso/) ({{< fl "SSO" >}}) теперь может определять, какую [роль](https://docs.comentario.app/en/kb/permissions/roles/) получает пользователь. Делается это при помощи поля `role` в ответе, возвращаемом сервером ([#157](https://gitlab.com/comentario/comentario/-/issues/157)).

### Отключение статистики просмотров

Если вам неинтересна статистика просмотров страниц, вы можете сэкономить место в базе данных, отключив её сбор при помощи ключа [командной строки](https://docs.comentario.app/en/configuration/backend/static/) `--no-page-view-stats` ([#102](https://gitlab.com/comentario/comentario/-/issues/102)).

При этом из Дашборда также пропадут вот эти красивые, разноцветные диаграммы:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1739781460/blog/ia9abmstsmdcp8zxsrgz.png" "Статистика просмотров страниц в Comentario." "border shadow" >}}

### Прочие изменения

* Админка: на крупных элементах спиннеры заменены на анимированные лоадеры.
* Админка: улучшения валидации, пропуск кнопки показа на поле ввода пароля.
* Админка: улучшения таблиц свойств.
* Админка: улучшения и унификация бейджей пользователей.
* Админка: рефакторинг тост-уведомлений, добавлена подсветка синтаксиса в технические подробности ошибки.
* Админка: унификация спиннеров, исправление выравнивания текста под спиннером.
* Админка: владельцы доменов и суперпользователи могут редактировать собственного пользователя домена.
* Админка: обновлено на {{< fl "Angular 19" >}}, также обновлены прочие зависимости.
* Админка: переход на систему сборки `application`.
* Бэкенд: рефакторинг и унификация емэйл-шаблонов.
* Бэкенд: {{< fl "Go 1.24" >}}, {{< fl "ci-tools v45" >}}, обновлены прочие зависимости.
* Бэкенд: исправлено усечение текста (неверная длина и повреждённые символы Юникода) ([#145](https://gitlab.com/comentario/comentario/-/issues/145)).
* Пакеты: файлы конфигурации в `/etc` помечены как таковые, что предотвратит их перезаписывание ([#146](https://gitlab.com/comentario/comentario/-/issues/146)).
* {{< fl "Helm" >}}: добавлен параметр `comentario.args`.
* Документация: разъяснены параметры порта и шифрования {{< fl "SMTP" >}}-сервера ([#158](https://gitlab.com/comentario/comentario/-/issues/158)).
* Усовершенствования в подсистеме плагинов.
* Демо-сайт: актуализация количества комментов для домена и страниц.
* Демо-сайт: пользовательские сессии и голоса за комменты сохраняются после сброса (в течение недели).
* Демо-сайт: стандартные комменты теперь добавляются последними в хронологическом порядке.
* {{< fl "CI" >}}: добавлена проверка {{< fl "Helm" >}}-чарта.

{{< include-file "/blog/_snippets/_comentario-footer.ru.md" >}}
