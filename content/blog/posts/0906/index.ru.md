---
type: post
date: "2026-08-14T16:33:21+02:00"
title: "3.18.0 Loughguile"
tags:
    - Comentario
    - веб
    - софт
    - разработка
    - релиз
    - Go
    - Angular
image: "https://res.cloudinary.com/yktoo/image/upload/v1786771782/z7yyhxnao0gllrbev8vz.jpg"
imageCredit: "Изображение: кибермозг."
series: comentario
software: comentario
---

Вышел **Comentario** [**3.18.0 Loughguile**](https://gitlab.com/comentario/comentario/-/releases/v3.18.0).

[Comentario](/software/comentario) — это быстрый и мощный свободный сервер комментариев для веб-страниц, написанный на {{< fl "Go" >}}.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1786771782/z7yyhxnao0gllrbev8vz.jpg" "Изображение: кибермозг." >}}

> <i class="fas fa-info-circle"></i> Вы можете подписаться на новости {{< fl "Comentario" >}} в [соответствующем блоге](/series/comentario) или через {{< rss-permalink "/series/comentario" "RSS" >}}.

## Несовместимость

В этой версии есть мелкое обратно-несовместимое изменение: ключ `xsrfSecret` больше не распознаётся в [файле секретов](https://docs.comentario.app/en/configuration/backend/secrets/). Функционально его заменил [`serverSigningKey`](https://docs.comentario.app/en/configuration/backend/secrets/#server-signing-key), который теперь используется для создания цифровой подписи сервера; {{< fl "XSRF" >}}-защита больше не нуждается в токенах.

<!--more-->

Если его значение не задано (что вероятнее всего), {{< fl "Comentario" >}} будет генерировать случайный ключ подписи при каждом перезапуске.

## Что нового

### Улучшения доступности

Существенно улучшена доступность ({{< fl "accessibility" >}}) встраиваемых комментариев ([#221](https://gitlab.com/comentario/comentario/-/issues/221)). Хотя люди без ограничений это навряд ли *увидят*, внутренняя структура виджета была пересмотрена и переработана: подробности можно найти в [тикете](https://gitlab.com/comentario/comentario/-/issues/221).

### Спойлеры в комментариях

Авторы комментариев теперь могут убрать часть текста под спойлер ([#112](https://gitlab.com/comentario/comentario/-/issues/112)), используя {{< fl "markdown" >}}-префикс `>!`:

```
Did you know…
>! Snape kills Dumbledore
```

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1786774583/l8lihfcdk0mqmoabc7f1.png" "Комментарий со спойлером." "border shadow" >}}

Скрытый текст отображается только после того, как читатель нажмёт на соответствующую кнопку. На панели инструментов появилась новая кнопка для вставки спойлеров, а всю эту функциональность можно отключить при помощи динамического параметра конфигурации [`domain.defaults.markdown.spoilers.enabled`](https://docs.comentario.app/en/configuration/backend/dynamic/domain.defaults.markdown.spoilers.enabled/).

### Вход через Apple

Теперь {{< fl "Comentario" >}} полноценно поддерживает [{{< fl "Sign in with Apple" >}}](https://docs.comentario.app/en/configuration/idps/apple/) в качестве провайдера идентификации ([#231](https://gitlab.com/comentario/comentario/-/issues/231), [#5](https://gitlab.com/comentario/comentario/-/issues/5), реализация {{< fl "Tim Oliver" >}}).

Подключение фичи потребует некоторых телодвижений: нужна платная подписка на {{< fl "Apple Developer Program" >}}, {{< fl "Services ID" >}}, ваш {{< fl "Team ID" >}} и приватный ключ. Кроме того, {{< fl "Apple" >}} всенепременно хочет {{< fl "HTTPS" >}}-колбэк, так что сервер должен работать через {{< fl "TLS" >}} (что в любом случае разумно).

После настройки секретов и перезапуска сервера аутентификацию через {{< fl "Apple" >}} можно включить для конкретного [домена](https://docs.comentario.app/en/kb/domain/), как и любого другого федеративного провайдера, и комментаторы увидят кнопку {{< fl "Apple" >}} в диалоге входа.

### Перенастройка виджета «на лету»

Встраиваемый виджет комментариев теперь реагирует на изменение атрибутов элемента `<comentario-comments>` в любое время ([#140](https://gitlab.com/comentario/comentario/-/issues/140)), а не считывает их лишь однократно при инициализации.

Это полезно прежде всего для одностраничных приложений: для смены идентификатора страницы, языка или количества уровней вложенности больше не нужно уничтожать виджет и создавать его заново.

### Топ доменов в Дашборде

В Дашборде появился раздел *Top performing domains* ([#167](https://gitlab.com/comentario/comentario/-/issues/167)), показывающий владельцу сервера, какие домены самые активные в плане просмотров и комментариев.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1786774946/ikiuzn9twwzkanptftxz.png" "Top performing domains." "border shadow" >}}

### Пользователи домена

Пользователей домена теперь можно удалять ([#165](https://gitlab.com/comentario/comentario/-/issues/165)); раньше это было возможно только для пользователя целиком.

### Секреты из переменных окружения

До сих пор [секреты](https://docs.comentario.app/en/configuration/backend/secrets/) — такие как учётные данные БД, пароли {{< fl "SMTP" >}}, ключи провайдеров идентификации — нужно было целиком помещать в один {{< fl "YAML" >}}-файл. Начиная с этой версии они могут также поступать из переменных окружения: например, `COMENTARIO_POSTGRES_USERNAME` ([#220](https://gitlab.com/comentario/comentario/-/issues/220)).

У каждой такой переменной есть ещё соответствующий вариант с суффиксом `_FILE` (`COMENTARIO_POSTGRES_USERNAME_FILE`), указывающий на файл со значением, что заметно удобнее для подключения секретов {{< fl "Kubernetes" >}}. Переменные окружения имеют приоритет над файлом секретов.

### Прочие изменения

* Новый динамический параметр конфигурации [Require a name for unregistered commenters](https://docs.comentario.app/en/configuration/backend/dynamic/domain.defaults.login.unregistered.requirename/) ([#232](https://gitlab.com/comentario/comentario/-/issues/232))
* Отображение статистики комментариев при отключённом сборе просмотров страниц; счётчики просмотров при этом также не будут изменяться
* Встраиваемая часть: исправлен баг, из-за которого черновик комментария после его отправки не удалялся ([#223](https://gitlab.com/comentario/comentario/-/issues/223))
* Бэкенд: исправлена отписка от емэйлов о новых комментариях
* Бэкенд: `gorilla/csrf` заменён на `http.CrossOriginProtection` ([CVE-2025-47909](https://nvd.nist.gov/vuln/detail/CVE-2025-47909))
* `systemd`: перезапуск {{< fl "Comentario" >}} после аварийного завершения ([#189](https://gitlab.com/comentario/comentario/-/issues/189), [@scottlaird](https://gitlab.com/scottlaird))
* Админка: выполнена миграция на {{< fl "Angular" >}} 22 и новую систему сборки, а также на {{< fl "signal forms" >}}
* Локализация: добавлен перевод на польский (pl) ([@MrBoombastic](https://gitlab.com/MrBoombastic))
* Локализация: исправлены сообщения на португальском ({{< fl "cosvaldo" >}})
* Код: юнит-тесты переведены с {{< fl "Karma" >}} на {{< fl "Vitest" >}}, добавлены новые тесты
* Обновление инструментария и зависимостей ({{< fl "Go" >}} 1.26.5, {{< fl "Ubuntu" >}} 26.04, {{< fl "Angular" >}} 22)

{{< include-file "/blog/_snippets/_comentario-footer.ru.md" >}}
