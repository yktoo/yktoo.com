---
type: post
date: "2021-07-01T12:26:28+02:00"
title: "Июльский апдейт: уже не бета, 25%-скидка"
tags:
    - once.to
    - новости
    - Интернет
    - веб
    - Yktoo Solutions
    - софт
    - сокращатель ссылок
    - сокращатель URL
image: "https://res.cloudinary.com/yktoo/image/upload/blog/s3haesxb1fgf3otyk51i.png"
series: once.to
---

Сегодня лучший в мире сокращатель ссылок **[once.to](https://once.to/once)** официально [вышел из бета-теста](https://docs.once.to/en/blog/0013/) и стал полноценным сервисом!

Под катом краткая сводка новостей сервиса за минувший месяц.

<!--more-->

## Сброс статистики ссылки

Иногда хочется всю накопленную статистику стереть и начать считать заново. Например, в следующих случаях:

* Свежесозданную ссылку кликали, чтобы проверить, всё ли работает верно. Особенно актуально это для [ссылок с паролем](https://docs.once.to/ru/kb/password-protected-link/) или хитро настроенных [правил редиректа](https://docs.once.to/ru/kb/smart-link/);
* В настройках ссылки была ошибка, которую позже исправили;
* Вы перенаправили ссылку на другую лендинг-страницу и хотите начать измерять показатели заново.

В **once.to** это [теперь возможно](https://docs.once.to/en/blog/0008/) для любой принадлежащей вам ссылки:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/blog/nvlcpiinrzrsggj4vtzl.png" "Кнопка сброса статистики в свойствах ссылки." "border shadow" >}}

Больше подробностей в [этом посте (англ.)](https://docs.once.to/en/blog/0008/).

## Выбор HTTP-статуса

В отдельных случаях вам может потребоваться переопределить стандартное поведение **once.to** и явно указать статус-код HTTP, возвращаемый посетителю при редиректе на URL назначения.

Вы [можете сделать это](https://docs.once.to/ru/kb/http-status-codes/) в диалоге Свойств ссылки:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/blog/gqzl0zdqstbou44ckfxj.png" "Поле выбора статус-кода HTTP в диалоге Свойств ссылки." "shadow" >}}

Вам доступны для выбора следующие статус-коды:

* `301 Moved Permanently`
* `302 Found`
* `303 See Other`
* `307 Temporary Redirect`
* `308 Permanent Redirect`

Подробнее можно прочитать на [соответствующей странице](https://docs.once.to/ru/kb/http-status-codes/) документации.

## UTM-билдер

Короткие ссылки отныне можно теснее интегрировать с {{< fl "Google Analytics" >}} (или подобным сервисом аналитики) с помощью {{< fl "UTM" >}}-параметров. В диалоге Свойств ссылки появилась вкладка {{< fl "UTM builder" >}}:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/blog/v7rdsbkgi0qrrpd6jskf.png" "UTM-параметры в ссылке once.to." "shadow" >}}

При изменении значений {{< fl "UTM" >}}-параметров поле {{< fl "URL" >}}-адреса назначения будет автоматически обновлено, при этом значения всех прочих {{< fl "URL" >}}-параметров (если они есть), останутся прежними. И наоборот, при редактировании {{< fl "URL" >}} соответствующие поля на вкладке {{< fl "UTM builder" >}} будут автоматически обновляться.

Эта функция доступна всем зарегистрированным пользователям сервиса, включая тех, кто пользуется бесплатным тарифным планом.

Подробнее о нововведении [здесь (англ.)](https://docs.once.to/en/blog/0011/).

## Таймлайн

Сайт документации пополнился [страницей таймлайна](https://once.to/timeline), отображающей основные вехи в развитии **once.to**.

## Скидка в 25% в июле

Ну и, напоследок, в ознаменование официального выхода сервиса в продакшн, мы предлагаем **скидку в 25% на целый год** для всех, кто впервые покупает платный тариф. Для получения скидки используйте код `GOLIVE2021` при оплате.

Акция продлится весь июль и завершится **31** числа, успевайте!
