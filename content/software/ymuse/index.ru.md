---
title: Ymuse
subtitle: Простой, функциональный и быстрый клиент для Music Player Daemon.
platform: linux
icon: ymuse-icon-64.png
weight: 200
software: ymuse
---

**Ymuse** — это простое в использовании, но в то же время богатое функционалом и быстрое приложение-клиент для [Music Player Daemon](https://www.musicpd.org/), написанное на {{< fl "Go" >}} и использующее графическую библиотеку {{< fl "GTK" >}}.

{{< carousel >}}
https://res.cloudinary.com/yktoo/image/upload/blog/jskaqgrbxzjyi7ofxetn.png Ymuse: вкладка «Очередь».
https://res.cloudinary.com/yktoo/image/upload/blog/zqu4ugqg0bvlh2hvajst.png Ymuse: вкладка «Библиотека».
https://res.cloudinary.com/yktoo/image/upload/blog/hsc3lmkxxqaoo98bdoen.png Ymuse: вкладка «Потоки».
https://res.cloudinary.com/yktoo/image/upload/blog/cz9iyrysulxcedc39vk1.png Настройки Ymuse: Общие
https://res.cloudinary.com/yktoo/image/upload/blog/suwte24ctnjjwacrpqfp.png Настройки Ymuse: Интерфейс
https://res.cloudinary.com/yktoo/image/upload/blog/ien1ncgsfdlg0nsfin4t.png Настройки Ymuse: Столбцы
{{< /carousel >}}

## Возможности Ymuse

* Подключение к локальному или сетевому серверу {{< fl "MPD" >}} по {{< fl "TCP" >}} или {{< fl "Unix" >}}-сокету, автоматическое восстановление подключения.
* Отображение очереди воспроизведения, сортировка по любому свойству, перемешивание, удаление треков из очереди.
* Фильтрация очереди по подстроке.
* Сохранение очереди в виде плейлиста (существующего или нового).
* Просмотр и поиск по библиотеке {{< fl "MPD" >}}.
* Просмотр списка плейлистов, удаление и переименование плейлиста.
* Собственный список потоков (Интернет-радиостанций) с возможностью добавления, удаления и редактирования элементов.
* Настройка отображаемых столбцов в списке воспроизведения.
* Настройка отображаемого текста в плеере (используется синтаксис {{< fl "Go template" >}}).
* Переключение режимов {{< fl "MPD" >}} ({{< fl "random" >}}, {{< fl "repeat" >}} и {{< fl "consume" >}}).
* Перемотка трека в произвольное место.
* Поддержка локализации. Доступные языки:
    * нидерландский
    * русский
    * японский

Вот короткое видео, демонстрирующее основные возможности приложения (*англ.*):

{{< youtube "FuO7QWOaS1A" >}}

## Установка

### Ubuntu

Если у вас {{< fl "Ubuntu" >}}, то {{< fl "Ymuse" >}} проще всего установить прямо из {{< fl "Ubuntu Snap Store" >}}:

{{< div "embed-responsive mb-3 border rounded" "height: 330px" >}}
<iframe src="https://snapcraft.io/ymuse/embedded?button=black&summary=true"></iframe>
{{< /div >}}

### Snap-пакет

Если ваш дистрибутив поддерживает {{< wiki "Snappy_(система_управления_пакетами)" "ru" "snap-пакеты" >}}, то установить приложение можно командой:

```bash
sudo snap install ymuse
```

### Бинарная сборка

Также для {{< fl "Ymuse" >}} доступны для загрузки бинарные пакеты и архив с исходным кодом, перечисленные ниже.
