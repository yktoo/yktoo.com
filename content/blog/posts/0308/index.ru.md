---
date: "2017-02-18T00:00:00Z"
title: "Разработка в Yii/PHP/MySQL с использованием Docker"
tags: ["Docker", "MySQL", "PHP", "Yii2", "веб", "контейнеры", "разработка", "сайт"]
image: "https://3.bp.blogspot.com/-czrNcwMoyQw/WK3et6P_81I/AAAAAAAApVE/gGCNALgayxA6kT3LmaPIiamtMNY48E88QCPcB/s1600/docker.png"
---

Вот уже около года я веду разработку своего веб-сайта (используемый стек технологий: [Yii 2](http://www.yiiframework.com/)/[PHP](http://php.net/)/[MySQL](https://www.mysql.com/)) исключительно с использованием [Docker](https://www.docker.com/). Однажды попробовав, я понял, что {{< fl "Docker" >}} — это лучшее, что могло случиться в сфере разработки. Ну, после {{< fl "Vim" >}}, конечно.

Решил написать краткую статью о своём опыте. Надеюсь, она окажется полезной для тех, кто ещё не пробовал {{< fl "Docker" >}} или испытывает сложности с его настройкой.

<!--more-->

## Вступление {#preface}

Для начала немного азбучных истин. Если ваше веб-приложение простое, а изменять его требуется редко, вносить эти изменения можно прямо в работающую его «боевую» версию (то, что называется {{< fl "Production" >}}). Однако, такой подход неприемлем, если объём изменений велик. Каждую функцию, в том числе неизменённую, необходимо тщательно протестировать перед выпуском в {{< fl "Production" >}}, иначе вы рискуете оказаться с неработающим продуктом.

Очень часто веб-приложения используют базу данных для хранения различной информации. В минувшие годы большое распространение получил стек (набор технологий) под названием {{< wiki "LAMP" "ru" "LAMP" >}} ({{< fl "Linux" >}}, {{< fl "Apache" >}}, {{< fl "MySQL" >}}, {{< fl "PHP" >}}), которым в своё время воспользовался для создания этого сайта и я.

В идеале, конфигурация системы разработчика должна совпадать с конфигурацией «боевой» системы, как минимум в части версий ПО и особенностей его сборки (ключей компиляции и т.п.). Всё это можно, конечно, установить прямо на свой компьютер или {{< fl "Development" >}}-сервер, но могут возникнуть сложности с доступностью требуемых версий софта, а особенно с настройкой и обновлением нужных компонентов, файлов конфигураций и так далее. Например, обновили вы свою Убунту — упс, а {{< fl "PHP 5.x" >}} там больше нет, надо самому компилировать.

## Контейнеры Docker {#docker}

{{< imgfig "https://3.bp.blogspot.com/-czrNcwMoyQw/WK3et6P_81I/AAAAAAAApVE/gGCNALgayxA6kT3LmaPIiamtMNY48E88QCPcB/s1600/docker.png" >}}

Одно из возможных решений данной проблемы — использование виртуальной машины, но и здесь возникают сложности: необходимость тщательной настройки, высокие требования к оперативной памяти, проблемы с производительностью, но самое главное — трудность в воспроизведении желаемой конфигурации, если её нужно повторить на другой машине. Можно, конечно, целиком скопировать весь виртуальный диск, но это долго, дорого и неудобно.

С выходом [Docker](https://www.docker.com/) наконец-то появилась отличная, почти идеальная альтернатива. {{< fl "Docker" >}} позволяет запускать отдельные компоненты, такие как {{< fl "PHP" >}}, {{< fl "Apache HTTP Server" >}} и {{< fl "MySQL" >}}, в стандартизованных легковесных контейнерах, со стопроцентно воспроизводимыми конфигурациями, и соединять эти контейнеры между собой с помощью виртуальных сетей. Не нужно больше устанавливать многочисленные пакеты и компоненты — достаточно установить только сам {{< fl "Docker Engine" >}}. Ну и, разумеется, самое приятное состоит в том, что {{< fl "Docker" >}} — это свободное ПО с открытым исходным кодом.

Конфигурация каждого контейнера описывается в простом текстовом файле, чаще всего называемом `Dockerfile` и состоящем из набора [специальных команд](https://docs.docker.com/engine/reference/builder/). Контейнер строится на основе *образа* ({{< fl "image" >}}); в [репозитории Docker](https://hub.docker.com/) доступно огромное количество готовых образов на все случаи жизни. Поэтому первая команда в `Dockerfile` — это `FROM`, задающая образ, на основе которого будет построен контейнер.

## Конфигурация контейнера для Apache HTTP Server {#container-apache-http}

Итак, перейдём от слов к делу. Как я уже упоминал, данный веб-сайт построен на стеке {{< fl "LAMP" >}} и реализован с использованием {{< fl "PHP" >}}-фреймворка [Yii](http://www.yiiframework.com/). Для запуска веб-приложения я использую два отдельных контейнера:

1. Контейнер `yktoo-app` с {{< fl "Apache HTTP Server" >}} + {{< fl "PHP" >}}.
2. Контейнер `yktoo-db` с {{< fl "MySQL" >}}.

Первый контейнер описывается следующим файлом (чтобы различать файлы для разных контейнеров, назовём его `Dockerfile-app`):

```dockerfile
# Файл Dockerfile-app

# Используем PHP 5.6 с Apache в качестве базового образа
FROM php:5.6-apache

# Подключаем модуль Apache Rewrite
RUN cd /etc/apache2/mods-enabled && \
    ln -s ../mods-available/rewrite.load

# Устанавливаем требуемые разширения PHP
# -- GD
RUN apt-get update && \
    apt-get install -y libfreetype6-dev && \
    docker-php-ext-configure gd --with-freetype-dir=/usr/include/ && \
    docker-php-ext-install -j$(nproc) gd
# -- mysql
RUN docker-php-ext-install -j$(nproc) mysql pdo_mysql

# Копируем конфигурацию сервера HTTP
COPY 000-default.conf /etc/apache2/sites-available/
```

Команда `COPY` в файле выше копирует внутрь контейнера конфигурацию сайта (`000-default.conf`), обслуживаемого сервером; файл выглядит следующим образом:

```apacheconfig
# Файл 000-default.conf

<VirtualHost *:80>
    ServerName localhost
    ServerAdmin wizard@localhost

    DocumentRoot /var/www/html/web
    LogLevel info php5:debug

    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined

    <Directory "/var/www/html/web">
        # Disable .htaccess
        AllowOverride None
    </Directory>

    # Set up rewrites so that all requests go to index.php
    RewriteEngine on
    # if a directory or a file exists, use it directly
    RewriteCond /var/www/html/web%{REQUEST_FILENAME} !-f
    RewriteCond /var/www/html/web%{REQUEST_FILENAME} !-d
    # otherwise forward it to index.php
    RewriteRule . /var/www/html/web/index.php
</VirtualHost>
```

Здесь важным моментом является использование директивы `AllowOverride None`, запрещающей использование файла `.htaccess` из исходного кода сайта. У меня в нём стоит, например, перенаправление пользователя на {{< fl "HTTPS" >}}-адрес (и ещё куча всяких разных редиректов), что для разработки совершенно не требуется.

## Конфигурация контейнера для MySQL {#container-mysql}

В контейнере №2 крутится жизненно важный компонент приложения, сервер баз данных {{< fl "MySQL" >}}. Его `Dockerfile` (назовём его `Dockerfile-db`) имеет следующее содержимое:

```dockerfile
# Файл Dockerfile-db

# Используем MySQL 5.7 в качестве базового образа
FROM mysql:5.7.16

# Копируем скрипты для создания исходной базы данных
COPY init.sql /docker-entrypoint-initdb.d/
COPY database.sql /db/

```

Здесь с помощью команды `COPY` в контейнер помещаются два {{< fl "SQL" >}}-скрипта. Первый производит создание и начальную настройку БД:

```sql
# init.sql

create database yktoo;
use yktoo;
source /db/database.sql;

create user appuser identified by "appuserPasswd";
grant all privileges on yktoo.* to appuser@'%';

```

Он же вызывает и второй скрипт, `database.sql`, представляющий собой просто дамп «боевой» БД со всеми таблицами и их содержимым. Таким образом, я получаю точную копию моего приложения, работающего по адресу [https://yktoo.com/](https://yktoo.com/).

## Запуск контейнеров {#starting-containers}

Мало контейнеры создать, их ещё нужно должным образом запустить, — так, чтобы БД была доступна для {{< fl "HTTP" >}}-сервера. Первое, о чём нужно позаботиться, — это конфигурация базы данных в {{< fl "Yii" >}}:

```php
<?php // Файл config/db.php

return [
    'class'      =>'yii\db\Connection',
    'dsn'        =>'mysql:host=yktoo-db;dbname=yktoo',
    'username'   =>'appuser',
    'password'   =>'appuserPasswd',
    'charset'    =>'utf8',
    'tablePrefix'=>'t_',
];
?>
```

Как нетрудно заметить, тут используются те же название БД (`yktoo`), имя пользователя (`appuser`) и его пароль (`appuserPasswd`), которые заданы в вышеприведённом файле `init.sql`. Но что также важно, это имя хоста `yktoo-db`, которое совпадает с именем контейнера {{< fl "MySQL" >}}. По этому имени его можно «видеть» из контейнера с {{< fl "Apache HTTP Server" >}}, если их соответствующим образом связать при запуске (см. ниже).

Но перед тем как контейнеры запускать, нужно построить соответствующие им образы, используя созданные ранее файлы `Dockerfile-app` и `Dockerfile-db`:

```bash
# build.sh

# Путь к корню вашего проекта
PROJ_ROOT=/path/to/your/yii/app

# Строим образ контейнера приложения
docker build -t yktoo-app-image -f "Dockerfile-app" "$PROJ_ROOT"

# Строим образ контейнера БД
docker build -t yktoo-db-image -f "Dockerfile-db" "$PROJ_ROOT"

```

В результате выполнения этих команд будут созданы два образа: `yktoo-app-image` и `yktoo-db-image`. Теперь можно запускать контейнеры:

```bash
# run.sh

# Путь к корню вашего проекта
PROJ_ROOT=/path/to/your/yii/app

# Сначала стартуем контейнер с БД
docker run -d -e MYSQL_ROOT_PASSWORD=root --name yktoo-db yktoo-db-image

# Теперь контейнер с приложением, связав его с БД-контейнером
docker run -d \
    -p 80:80 \
    -v "$PROJ_ROOT":/var/www/html \
    --name yktoo-app \
    --link yktoo-db \
    yktoo-app-image

```
Опция `-p 80:80` привязывает порт **80** внутри контейнера к порту **80** на хост-машине, после чего приложение становится доступно по адресу `http://localhost/`.

Здесь мы называем контейнер с БД `yktoo-db`, и это очень важно, поскольку именно это имя используется в конфигурационном файле {{< fl "Yii" >}} `config/db.php` выше; кроме того, это же имя передаётся {{< fl "Docker" >}}-у и при запуске контейнера с {{< fl "HTTP" >}}-сервером (опция `--link`).

Второй важный момент — это использование опции `-v`, подмонтирующей дерево исходных кодов вашего проекта прямо в каталог `/var/www/html` {{< fl "Apache" >}}-сервера. Это позволяет вносить изменения в проект и сразу же видеть их в работающем приложении без перезапуска контейнеров. Очень удобно.

## Остановка контейнеров {#stopping-containers}

Чтобы остановить контейнеры, я использую следующий скрипт:

```bash
# stop.sh

set -e

echo "Stopping containers..."
docker stop yktoo-db yktoo-app

echo "Removing containers..."
docker rm yktoo-db yktoo-app

echo "Done."
```

Он останавливает и сразу удаляет контейнеры, так что в следующий раз при запуске `run.sh` вы вновь получите свежую, на 100% идентичную копию окружения, включая базу данных.

Поэтому, если ваша разработка требует внесения изменений в БД, их нужно записать в отдельном SQL-файле (например, `upgrade.sql`), после чего скопировать его внутрь БД-контейнера (добавив команду `COPY upgrade.sql /db/` в `Dockerfile-db`) и вызвать в `init.sql` (добавив `source /db/upgrade.sql;` после строчки с `source /db/database.sql;`).

## Бонус: docker-compose {#docker-compose}

Рулить несколькими контейнерами с помощью вышеприведённых скриптов довольно просто, но можно продвинуться ещё на один шаг в плане удобства. Для управления мультиконтейнерными конфигурациями у {{< fl "Docker" >}} есть специальный инструмент под названием [docker-compose](https://docs.docker.com/compose/). Он позволяет описать все взаимосвязанные сервисы в одном файле, чаще всего называемом `docker-compose.yml`, после чего управлять всей этой связкой с помощью ещё более простых, чем у {{< fl "Docker" >}}, команд.

В {{< fl "Linux" >}} `docker-compose` необходимо [устанавливать](https://docs.docker.com/compose/install/) отдельно, вместе с {{< fl "Docker Engine" >}} он не ставится.

Файл `docker-compose.yml` может выглядеть так:

```yaml
version: "3"
services:
    app:
        build:
            context: .
            dockerfile: ./Dockerfile-app
        container_name: yktoo-app
        ports:
            - "80:80"
        volumes:
            - .:/var/www/html
    db:
        build:
            context: .
            dockerfile: ./Dockerfile-db
        container_name: yktoo-db
        environment:
            MYSQL_ROOT_PASSWORD: "root"
```

В нём пути в `context` и `volumes` должны указывать на (относительный) путь к корню вашего {{< fl "Yii" >}}-проекта. Единожды создав этот файл, можно запускать контейнеры командой:

```bash
docker-compose up
```

При этом консольный вывод обоих контейнеров будет виден прямо в вашей консоли. Останавливаются контейнеры нажатием <kbd>Ctrl</kbd>+<kbd>C</kbd>, или же командой `docker-compose stop` из другой консоли, а удаляются — командой `docker-compose rm`. Всё, как видите, просто и логично.

На этом, пожалуй, всё. Надеюсь, мой опыт кому-нибудь пригодится.