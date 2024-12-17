---
type: post
date: "2024-12-17T08:14:00+01:00"
title: "3.12.0 Faughanvale"
tags:
    - Comentario
    - веб
    - софт
    - разработка
    - релиз
    - Go
    - Angular
image: "https://res.cloudinary.com/yktoo/image/upload/v1734419396/blog/kqigwjqnoevsxot5wipu.jpg"
imageCredit: "Изображение: кибермозг."
series: comentario
software: comentario
---

Вот, снова Рождество на подходе — отметим же его новым релизом [**Comentario 3.12.0 Faughanvale**](https://gitlab.com/comentario/comentario/-/releases/v3.12.0)!

[Comentario](/software/comentario) — это быстрый и мощный свободный сервер комментариев для веб-страниц, написанный на {{< fl "Go" >}}.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1734419396/blog/kqigwjqnoevsxot5wipu.jpg" "Изображение: кибермозг." >}}

> <i class="fas fa-info-circle"></i> Вы можете подписаться на новости {{< fl "Comentario" >}} в [соответствующем блоге](/series/comentario) или через {{< rss-permalink "/series/comentario" "RSS" >}}.

## Что нового

<!--more-->

### Многоязычность для комментаторов

Встраиваемая часть {{< fl "Comentario" >}} поддерживает многоязычность уже с версии [3.6.0](0889). В новом релизе эта поддержка распространена на отправляемые системой емэйлы (и, в перспективе, на другие элементы — [#139](https://gitlab.com/comentario/comentario/-/issues/139)).

Пользователь может выбрать предпочитаемый язык интерфейса на странице Профиля, а изначальное его значение определяется языком браузера в момент регистрации.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1734441302/blog/blcvup5ha4bgawlubrlx.png" "Настройка языка пользователя в Профиле." "border shadow" >}}

### Смена емэйл-адреса

В новой версии администратор может [разрешить](https://docs.comentario.app/en/configuration/backend/dynamic/auth.emailupdate.enabled/) пользователям запускать процесс изменения емэйл-адреса в параметрах Динамической конфигурации ([#134](https://gitlab.com/comentario/comentario/-/issues/134)).

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1734445093/blog/pzmz1nufmhu84hxbkf6i.png" "Параметр изменения емэйла." "border shadow" >}}

Если он активирован, то любой пользователь может запросить смену своего емэйла, кликнув по кнопке <i class="fas fa-pencil btn btn-outline-secondary disabled" title="Pencil"></i> рядом с полем адреса на странице Профиля.

* Если у него есть привилегия [суперпользователя](https://docs.comentario.app/en/kb/permissions/superuser/), то после этого он попадёт на страницу редактирования собственного пользователя.
* Для остальных, обычных пользователей откроется страница с формой смены емэйла, позволяющая ввести необходимый адрес, а также пароль для подтверждения операции:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1734445332/blog/dxshocnydms55zps9ob4.png" "Страница смены емэйла." "border shadow" >}}

После этого, если отправка емэйлов через {{< fl "SMTP" >}} настроена корректно, пользователю придёт запрос-подтверждение на новый адрес. Если {{< fl "SMTP" >}} не настроен, емэйл-адрес будет изменён сразу, без дополнительного подтверждения.

### Настройка максимальной длины комментария

Ещё один [новый параметр динамической конфигурации](https://docs.comentario.app/en/configuration/backend/dynamic/domain.defaults.comments.text.maxlength/) позволяет владельцу домена установить лимит на длину текста комментария ([#142](https://gitlab.com/comentario/comentario/-/issues/142)). По умолчанию он равен **4096** (как и было до этого), а диапазон допустимых значений простирается от **140** до **1 МиБ** (**1 048 576**) символов.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1734449373/blog/lisqxcwlrcjobhyl0gli.png" "Параметр максимальной длины коммента." "border shadow" >}}

Его исходное значение берётся при этом из соответствующего [глобального динамического параметра](https://docs.comentario.app/en/configuration/backend/dynamic/domain.defaults.comments.text.maxlength/).

### Поддержка платформ

Новая версия официально поддерживает {{< fl "PostgreSQL **17**" >}}, вышедший в сентябре {{< year 2024 "этого" >}} года, — что тестируется в процессе автоматизированной сборки ([#135](https://gitlab.com/comentario/comentario/-/issues/135)).

Также теперь собираются и публикуются [Docker-образы](https://gitlab.com/comentario/comentario/container_registry/3786677) для архитектуры {{< fl "ARM64" >}}.

### Прочие изменения

* Шрифты теперь отдаются самим сервером {{< fl "Comentario" >}}
* Админка: валидация числовых параметров в динамической конфигурации
* Админка: спиннеры при загрузке модуля
* Админка: исправлено сохранение Профиля для федеративных пользователей
* Админка: Профиль: поле выбора языка
* Админка: исправлен сброс параметра динамической конфигурации в значение по умолчанию
* Бэкенд: исправлено голосование за коммент ([#141](https://gitlab.com/comentario/comentario/-/issues/141))
* Бэкенд: {{< fl "OAuth" >}}: исправлены проверки при возврате на сайт по завершении аутентификации
* Бэкенд: {{< fl "OAuth" >}}: в отсутствие `Name` берётся `NickName` ([#64](https://gitlab.com/comentario/comentario/-/issues/64))
* Бэкенд: исправлена маскировка {{< fl "IP" >}}-адреса
* Локализация: добавлены отсутствующие строки (французский, вьетнамский), корректура (французский)
* Локализация: перевод на испанский за авторством {{< fl "Briant Fabela" >}}
* Локализация: обновлены переводы на китайский
* Локализация: обновлён перевод на бразильский португальский ([@savioribeiro](https://gitlab.com/savioribeiro))
* Шаблоны емэйлов: убрано двойное восклицание
* Документация: {{< fl "Angular" >}}: обновлён пример применения `ngx-comentario`
* Документация: Редактор комментов: исправлена комбинация клавиш для зачёркнутого текста 
* Документация: обновлена картинка с элементами встроенного {{< fl "Comentario" >}}
* Усовершенствования в подсистеме плагинов
* {{< fl "CI" >}}: исправлен билд для {{< fl "ARM64" >}} (теперь он помечается как {{< fl "v8.0" >}})
* {{< fl "CI" >}}: принудительная динамическая линковка и указание {{< fl "gcc" >}}-компилятора для {{< fl "ARM" >}}-сборок ([#136](https://gitlab.com/comentario/comentario/-/issues/136))

### Улучшения демо-сайта

[Демонстрационный сайт](https://demo.comentario.app/) теперь также доступен на [испанском](https://demo.comentario.app/es/), [французском](https://demo.comentario.app/fr/) и [бразильском португальском](https://demo.comentario.app/pt-br/).

{{< include-file "/blog/_snippets/_comentario-footer.ru.md" >}}
