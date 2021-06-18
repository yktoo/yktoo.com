---
type: post
date: "2021-06-01T12:22:43+02:00"
title: "Июньский апдейт"
tags:
    - once.to
    - новости
    - Интернет
    - веб
    - Yktoo Solutions
    - софт
    - сокращатель ссылок
    - сокращатель URL
    - смарт-ссылка
    - A/B-тестирование
image: "https://res.cloudinary.com/yktoo/image/upload/blog/dnje6ta72j4uylznevci.png"
series: once.to
---

Всех с началом календарного лета, а также Днём защиты детей!

Миновало ровно два месяца с момента выхода лучшего в мире сокращателя ссылок [once.to](https://once.to/once) в люди — то есть, в статус [публичной беты](0772).

Мы, конечно же, не сидели, сложа руки — за эти два месяца мы выкатили несколько крутых фич.

<!--more-->

## «Умные» ссылки и редактор правил

Начну с самого главного.

Вчера мы [запустили](https://docs.once.to/en/blog/0007/) уникальный функционал — редактор правил, позволяющий создавать так называемые смарт-ссылки («умные» ссылки). Любую ссылку можно снабдить набором правил, которые будут изменять адрес назначения в зависимости от выбранных критериев: языка посетителя, его страны, браузера, операционной системы и т.д.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/blog/dnje6ta72j4uylznevci.png" "Пример правил смарт-ссылки в редакторе." "shadow" >}}

Более того, в каждое правило можно привнести элемент случайности, указав, с какой *вероятностью* оно должно браться на рассмотрение. Благодаря этому можно легко настроить {{< wiki "A/B-тестирование" >}} какой-либо посадочной страницы.

Подробнее о смарт-ссылках и правилах вы можете прочитать в [документации сервиса](https://docs.once.to/ru/kb/smart-link/).

## Запароленные ссылки

Второе по важности улучшение не столь инновационно, но, тем не менее, полезно: [ссылки с паролем](https://docs.once.to/ru/kb/password-protected-link/).

Для любой короткой ссылки можно теперь задать пароль, который потребуется ввести посетителю для того, чтобы перейти на адрес назначения. Страница ввода пароля поддерживает автоопределение языка, что вы можете протестировать по ссылке [1e.to/password-protected](https://1e.to/password-protected) (пароль `secret`).

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/blog/mduwaru8avauqnlfvyhj.png" "Страница ввода пароля для перехода по ссылке." "border shadow" >}}

## Улучшения производительности

Наш и без того [самый быстрый в мире](https://once.to/fast) сервис стал ещё эффективнее: проведена работа по оптимизации записи статистики посещений, благодаря чему **once.to** может легко обрабатывать сотни редиректов в секунду (и масштабироваться до тысяч и десятков тысяч). Мы хотим уверенно смотреть в будущее!

## Игнорирование ботов в статистике

К свойствам ссылки добавлена настройка, позволяющая игнорировать ботов и пауков при учёте статистики.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/blog/snieln1oyt1yrsjs9zdh.png" "Опция игнорирования ботов." "border" >}}

Эта настройка включена по умолчанию.

## Адаптация к небольшим экранам

Многие страницы оптимизированы для отображения на экранах телефонов и планшетов. Например, [страница с метриками](https://docs.once.to/en/blog/0005/):

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/blog/e21hj88fbrqayxfrige4.png" "Дашборд once.to на небольшом экране." "border shadow" >}}

## Прочее

Из остального:

* Завершена интеграция с [платёжным провайдером Stripe](https://docs.once.to/en/blog/0003/).
* На главной странице добавлена ссылка на [обзоры Trustpilot](https://www.trustpilot.com/review/once.to).
* Расширена документация, особенно раздел [База знаний](https://docs.once.to/ru/kb/).

Оставайтесь с нами! И берегите детей.