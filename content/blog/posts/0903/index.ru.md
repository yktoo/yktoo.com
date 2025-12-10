---
type: post
date: "2025-12-09T11:30:44+01:00"
title: "3.15.0 Iveagh"
tags:
    - Comentario
    - веб
    - софт
    - разработка
    - релиз
    - Go
    - Angular
image: "https://res.cloudinary.com/yktoo/image/upload/v1765275803/blog/uorjo9mfrrfc4n4boder.jpg"
imageCredit: "Изображение: кибермозг."
series: comentario
software: comentario
---

Аккурат к Рождеству выпущен **Comentario** [**3.15.0 Iveagh**](https://gitlab.com/comentario/comentario/-/releases/v3.15.0)!

[Comentario](/software/comentario) — это быстрый и мощный свободный сервер комментариев для веб-страниц, написанный на {{< fl "Go" >}}.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1765275803/blog/uorjo9mfrrfc4n4boder.jpg" "Изображение: кибермозг." >}}

> <i class="fas fa-info-circle"></i> Вы можете подписаться на новости {{< fl "Comentario" >}} в [соответствующем блоге](/series/comentario) или через {{< rss-permalink "/series/comentario" "RSS" >}}.

## Что нового

<!--more-->


### Управление конфигурацией

Релиз *Iveagh* содержит значительные изменения в управлении конфигурацией сервера, некоторые из которых ломают совместимость с предыдущими версиями.

#### Поддержка конфигурационного файла YAML

Самое главное и долгожданное — это поддержка хранения статической конфигурации сервера в файле. Вместо того чтобы указывать каждый необходимый параметр через командную строку или переменные среды, теперь вы описать всю конфигурацию в виде {{< fl "YAML" >}}-файла, а затем сослаться на него при помощи опции командной строки `-c` или переменной окружения `$CONFIG_FILE`.

Проще всего созать такой {{< fl "YAML" >}}-файл, попросив {{< fl "Comentario" >}} записать текущую конфигурацию с помощью следующей команды:

```bash
comentario --config-write-to=/path/to/file.yaml
```

Затем вы можете изменить его содержимое по вкусу.

#### Группы опций

Некоторые параметры были сгруппированы и/или переименованы; ниже представлен обзор наиболее важных из них.

{{< table "table table-striped" >}}

| Было                   | Стало                        | Эквивалент в виде переменной  |
|------------------------|------------------------------|-------------------------------|
| `-v`                   | `--log.level=info`           | `$LOG_LEVEL=info`             |
| `-vv`                  | `--log.level=debug`          | `$LOG_LEVEL=debug`            |
| `--no-color`           | `--log.no-color`             | `$LOG_NO_COLOR`               |
| `--log-full-ips`       | `--log.full-ips`             | `$LOG_FULL_IPS`               |
| `--db-debug`           | `--db.debug`                 |                               |
| `--db-idle-conns`      | `--db.max-idle-conns`        | `$DB_MAX_IDLE_CONNS`          |
| `--no-page-view-stats` | `--stats.disable-page-views` | `$STATS_DISABLE_PAGE_VIEWS`   |
| `--stats-max-days`     | `--stats.max-days`           | `$STATS_MAX_DAYS`             |
| `--no-live-update`     | `--lu.disable`               | `$NO_LIVE_UPDATE`             |
| `--ws-max-clients`     | `--lu.max-clients`           | `$WS_MAX_CLIENTS`             |

{{< /table >}}

Более подробную информацию см. на соответствующей [странице документации](https://docs.comentario.app/en/configuration/backend/static/).

#### Значения по умолчанию для динамической конфигурации

Перенос конфигурации в {{< fl "YAML" >}}-файл теперь также позволяет переопределять значения по умолчанию для элементов *динамической конфигурации* сервера ghb помощb ключа `dynamicConfigDefaults` ([!23](https://gitlab.com/comentario/comentario/-/merge_requests/23)). Вот пример:

```yaml
dynamicConfigDefaults:
  domain:
    defaults:
      comments:
        deletion:
          moderator: false
          author: false
        text:
          maxLength: 512
  integrations:
    useGravatar: false
```

Точное название [параметра](https://docs.comentario.app/en/configuration/backend/dynamic/) можно увидеть в его заголовке в документации.

#### Переопределение и псевдонимы домена

Оба встраиваемых тега {{< fl "Comentario" >}} ([`<comentario-comments>`](https://docs.comentario.app/en/configuration/embedding/comments-tag/) и [`<comentario-count>`](https://docs.comentario.app/en/configuration/embedding/count-tag/)) теперь поддерживают новый атрибут [`domain-id`](https://docs.comentario.app/en/configuration/embedding/comments-tag/domain-id/). Это еще одна долгожданная функция ([#109](https://gitlab.com/comentario/comentario/-/issues/109), [#204](https://gitlab.com/comentario/comentario/-/issues/204)), которая позволяет владельцам веб-сайтов встраивать комментарии (или отображать их количество), предназначенные для другого домена.

Для предотвращения «угона» комментариев (когда злоумышленник указывает на ваш домен на своем веб-сайте) добавлен механизм верификации домена-источника ({{< fl "origin" >}}). Отныне каждый домен может явно перечислить источники, которым разрешено запрашивать комментарии, используя параметр [Allowed origins](https://docs.comentario.app/en/configuration/backend/dynamic/domain.defaults.embed.origins.allowed/). По умолчанию он включает только сам домен, но вы можете добавить, например, зеркало вашего веб-сайта.

Помимо прочего, это также позволяет встраивать комментарии на страницу, хранящуюся как локальный файл `.html`. Более подробную информацию и возможные сценарии использования этого функционала можно найти в [документации](https://docs.comentario.app/en/configuration/backend/dynamic/domain.defaults.embed.origins.allowed/).

### Черновики комментариев

При написании коммента во встроенном {{< fl "Comentario" >}} его текст теперь будет сохранен в качестве черновика для этой страницы — до момента отправки, чтобы пользователь мог вернуться к его редактированию или отправить его как ответ на другой комментарий ([#169](https://gitlab.com/comentario/comentario/-/issues/169)).

### Аватары

Изображения аватаров теперь могут быть экспортированы и импортированы в формате {{< fl "Comentario V3" >}} ([#188](https://gitlab.com/comentario/comentario/-/issues/188)). Кроме того, реализована фоновая загрузка аватаров ([#185](https://gitlab.com/comentario/comentario/-/issues/185), отменяет [!22](https://gitlab.com/comentario/comentario/-/merge_requests/22)).

### SQLite3

Поддержка локальной, файловой базы данных {{< fl "SQLite3" >}} теперь распространена и на динамически слинкованный бинарник {{< fl "Comentario" >}}; ранее её могли использовать только версии со статической линковкой.

Кроме того, поддержка транзакций для {{< fl "SQLite3" >}} была полностью удалена вследствие его неспособности обрабатывать одновременные транзакции записи.

### Другие изменения

* Встраиваемая часть: виджет подсчета комментариев: несуществующий путь теперь отображается как «0 комментариев» ([#202](https://gitlab.com/comentario/comentario/-/issues/202))
* Встраиваемая часть: исправлено отображение пользователей с пустым именем ([#183](https://gitlab.com/comentario/comentario/-/issues/183))
* Админка: рефакторинг списковых представлений: фильтрация, сортировка, пагинация
* Админка: наведение порядка в ссылках навигации/футера
* Бэкенд: добавлен параметр командной строки `--max-import-file-size` ([#186](https://gitlab.com/comentario/comentario/-/issues/186))
* Бэкенд: экспорт домена: сортировка комментариев, страниц по {{< fl "ID" >}}
* Бэкенд: исправлена ошибка `Concurrent map writes error in embed_i18n.go` ([#198](https://gitlab.com/comentario/comentario/-/issues/198))
* Бэкенд: исправлена {{< fl "stale" >}}-транзакция в `PageService.insertPageView()`
* Бэкенд: из {{< fl "API" >}} удалены дженерик-эндпойнты
* Бэкенд: улучшения логов
* Бэкенд: рефакторинг конфигурации; встраивание миграций/шаблонов
* Бэкенд: рефакторинг обработки ошибок
* Бэкенд: обработчик {{< fl "XSRF" >}}: исправлено потенциальное разыменование nil
* {{< fl "Helm" >}}: использование {{< fl "ConfigMap" >}} вместо переменных среды
* Документация: добавлены ссылки на {{< fl "Cloudron" >}}, {{< fl "Railway" >}} ([#63](https://gitlab.com/comentario/comentario/-/issues/63))
* Документация: добавлена страница с примерами {{< fl "OIDC" >}} + конфигурация {{< fl "Discord" >}} ([#180](https://gitlab.com/comentario/comentario/-/issues/180))
* Документация: форматирование опций командной строки в виде списка определений
* Документация: добавлено упоминание о необходимости упорядочивания ключей языка ([!25](https://gitlab.com/comentario/comentario/-/merge_requests/25))
* Документация: удалено устаревшее предупреждение {{< fl "SQLite3" >}} ([#201](https://gitlab.com/comentario/comentario/-/issues/201))
* Документация: обновлены ссылки на Angular
* Добавлен перевод на корейский
* Обновления подсистемы плагинов
* {{< fl "CI" >}}: сборка статического исполняемого файла с CGO_ENABLED=1 ([#201](https://gitlab.com/comentario/comentario/-/issues/201))
* Код: миграция на {{< fl "Go" >}} 1.25.5, {{< fl "Angular" >}} 21, обновление зависимостей
* Код: перенос сборки на {{< fl "Yarn Berry" >}}
* БД: добавление отсутствующих первичных ключей в `cm_domains_idps`, `cm_domains_extensions` ([#179](https://gitlab.com/comentario/comentario/-/issues/179))
* {{< fl "Docker" >}}: исправлено значение статического пути по умолчанию

{{< include-file "/blog/_snippets/_comentario-footer.ru.md" >}}
