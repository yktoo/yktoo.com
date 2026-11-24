---
type: post
date: "2026-11-24T16:27:26+01:00"
title: "3.20.0 Newferry"
tags:
    - Comentario
    - веб
    - софт
    - разработка
    - релиз
    - Go
    - Angular
image: "https://res.cloudinary.com/yktoo/image/upload/v1795525849/rtppqnhigpb6ulurqi9j.jpg"
imageCredit: "Изображение: кибермозг."
series: comentario
software: comentario
---

Вышел **Comentario** [**3.20.0 Newferry**](https://gitlab.com/comentario/comentario/-/releases/v3.20.0), а с ним защита от спама и подбора паролей при помощи капчи, кастомизация внешнего вида инстанса и улучшения в логах.

[Comentario](/software/comentario) — это быстрый и мощный свободный сервер комментариев для веб-страниц, написанный на {{< fl "Go" >}}.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1795525849/rtppqnhigpb6ulurqi9j.jpg" "Изображение: кибермозг." >}}

> <i class="fas fa-info-circle"></i> Вы можете подписаться на новости {{< fl "Comentario" >}} в [соответствующем блоге](/series/comentario) или через {{< rss-permalink "/series/comentario" "RSS" >}}.

## Что нового

### Несовместимость

Для начала — небольшое несовместимое изменение в написании одного параметра.

<!--more-->

Параметр `--log.no-color` (`$LOG_NO_COLOR`, `log.noColor`) переименован в `--log.no-colour` (`$LOG_NO_COLOUR`, `log.noColour`) для единообразия с остальными параметрами. Соответствующее значение {{< fl "Helm" >}} теперь называется `comentario.log.noColour` (поэтому у {{< fl "Helm" >}}-чарта теперь версия 2.0.0).

### Капча

Главное изменение в этом релизе — это поддержка {{< fl "CAPTCHA" >}} ([!42](https://gitlab.com/comentario/comentario/-/merge_requests/42), [#149](https://gitlab.com/comentario/comentario/-/issues/149)), надобность в которой уже давно очевидна. Капча заставляет посетителя доказать, что он не бездушная машина, прежде чем сделать что-то. {{< fl "Comentario" >}} предлагает на выбор пять вариантов:

* Алгоритмический [Proof of work](https://docs.comentario.app/en/configuration/frontend/domain/extensions/proof-of-work/) («доказательство работы»), встроенный прямо в {{< fl "Comentario" >}};
* [Cloudflare Turnstile](https://docs.comentario.app/en/configuration/frontend/domain/extensions/turnstile/);
* [hCaptcha](https://docs.comentario.app/en/configuration/frontend/domain/extensions/hcaptcha/);
* {{< fl "Google reCAPTCHA" >}} [v2](https://docs.comentario.app/en/configuration/frontend/domain/extensions/recaptcha2/) и [v3](https://docs.comentario.app/en/configuration/frontend/domain/extensions/recaptcha3/).

Капчи реализованы в виде [расширений домена](https://docs.comentario.app/en/configuration/frontend/domain/extensions/), наряду с уже существующими проверками на спам и токсичность. На домене одновременно может быть активна только одна капча. По умолчанию, если активировать любой из доступных провайдеров, она защищает комментирование без регистрации и регистрацию комментаторов.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1795535283/ut58wkkrdo1jfwzdpf1k.png" "Google reCAPTCHA v2 во встроенном Comentario (для разнообразия — на испанском)." "border shadow" >}}

#### Proof of work

Встроенная капча на основе «доказательства работы» — самый простой и в то же время самый «приватный» вариант: ей не нужен {{< fl "API" >}}-ключ, она ничего не передаёт сторонним сервисам, не устанавливает куки и работает даже на серверах без доступа к Интернету. Посетителю не придётся выискивать светофоры на картинках: при отправке его браузер незаметно решает — в фоне — небольшую вычислительную задачу, что обычно занимает меньше секунды.

{{< fl "Proof of work" >}} не отличает людей от ботов: оно лишь заставляет бота тратить на каждое действие процессорное время, что удорожает массовую рассылку спама. Сложность задачи настраивается, так что во время атаки её можно повысить.

#### Вход и админка

Админка получила [собственную капчу](https://docs.comentario.app/en/configuration/backend/dynamic/auth.captcha.provider/), защищающую страницы регистрации и сброса пароля.

Вход в систему тоже защищён, но адаптивно: капча требуется только после [определённого количества неудачных попыток входа](https://docs.comentario.app/en/configuration/backend/dynamic/auth.captcha.login.afterfailures/) подряд (по умолчанию трёх) — как в админке, так и в виджете комментариев. Если капча не настроена, используется {{< fl "Proof of work" >}}, работающая без какой-либо настройки. В результате подбор паролей становится дорогим задолго до блокировки учётной записи, что, в свою очередь, позволяет ослабить лимит блокировки, чтобы никто не мог заблокировать пользователя, просто вводя неверные пароли.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1795535283/poq1vfi22hpr5tp9bcaz.png" "Cloudflare Turnstile, вызванный после нескольких неудачных попыток входа." "border shadow" >}}

### Метки экземпляров

Если у вас несколько экземпляров {{< fl "Comentario" >}} (например, продакшн, тестовый и локальный), их можно легко перепутать. Новые [параметры](https://docs.comentario.app/en/configuration/backend/static/) `--instance.label` и `--instance.colour` позволяют их различать: *лейбл* отображается под логотипом и в заголовке страницы, а *цвет* меняет оттенок боковой панели и футера, и добавляет полоску к иконке сайта:

```bash
comentario --instance.label=demo --instance.colour=green
```

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1795535676/y4gelakpx9cbaf4pda8k.png" "Так теперь раскрашена [демо-админка](https://edge.comentario.app/) Comentario." "border shadow" >}}

Кроме того, у каждой страницы админки теперь есть собственный заголовок ({{< fl "title" >}}), так что ориентироваться во вкладках и истории браузера стало проще.

### Меньше шума в логах

Раньше {{< fl "Comentario" >}} писал в логи массу вещей, которые на самом деле проблемой не являлись. Ошибки клиента (ответы `4xx`), рутинные ошибки аутентификации, отсутствующие записи в базе данных, ошибки, вызванные пользователем, и [события WebSocket](https://docs.comentario.app/en/kb/live-update/) теперь выводятся на более низких уровнях. Отсутствующие переводы по умолчанию тоже больше не журналируются; чтобы получить их список при запуске, нужно использовать опцию `--log.missing-i18n`.

### Безопасность

* Версия {{< fl "Comentario" >}} раскрывается только суперпользователям и владельцам доменов.
* Загрузка аватаров с частных адресов заблокирована. Если вам нужно загружать аватары из внутренней сети, используйте новый параметр `--private-avatars`.
* Конфигурация расширений домена больше не передаётся тем, кто не является его владельцем.

### Прочие изменения

* Бэкенд: исправлена потеря сайтов и аватаров при импорте из {{< fl "Commento" >}} ([#236](https://gitlab.com/comentario/comentario/-/issues/236))
* Бэкенд: {{< fl "goroutines" >}} {{< fl "WebSocket" >}}-клиентов больше не зависают при остановке сервера; исправлена паника при повторном удалении клиента
* Админка: исправлено состояние гонки при обработке ссылки на комментарий для модератора и при перенаправлении после входа ([#235](https://gitlab.com/comentario/comentario/-/issues/235))
* Документация: обновлена страница [Migration from Commento](https://docs.comentario.app/en/installation/migration/commento/)
* [Демо-сервер](https://demo.comentario.app/) теперь использует капчу с {{< fl "proof-of-work" >}}
* Локализация: добавлены и исправлены переводы
* Обновление инструментария и зависимостей ({{< fl "Go" >}} 1.27.3, {{< fl "Yarn" >}} 4.18.1).

{{< include-file "/blog/_snippets/_comentario-footer.ru.md" >}}
