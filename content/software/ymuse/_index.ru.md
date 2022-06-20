---
title: Ymuse
subtitle: Простой, функциональный и быстрый клиент для Music Player Daemon.
layout: product
icon: ymuse-icon-64.png
weight: 20
software: ymuse
active: true
githubUrl: https://github.com/yktoo/ymuse
licenses:
    - apache2
seeAlso:
    - name: Часто задаваемые вопросы про Ymuse
      url: /software/ymuse/faq
    - name: Ymuse в Snapcraft
      url: https://snapcraft.io/ymuse
    - name: Ymuse в AUR
      url: https://aur.archlinux.org/packages/ymuse
    - name: Ymuse-bin в AUR
      url: https://aur.archlinux.org/packages/ymuse-bin
    - name: Flathub-репозиторий Ymuse
      url: https://github.com/flathub/com.yktoo.ymuse
---

**Ymuse** — это простое в использовании, но в то же время богатое функционалом и быстрое приложение-клиент для [Music Player Daemon](https://www.musicpd.org/), написанное на {{< fl "Go" >}} и использующее графическую библиотеку {{< fl "GTK" >}}.

{{< carousel >}}
https://res.cloudinary.com/yktoo/image/upload/blog/e6ecokfftenpwlwswon1.png Главное окно Ymuse (вкладка «Очередь»).
https://res.cloudinary.com/yktoo/image/upload/blog/cwcmqjichatv2yklt2fu.png Главное окно Ymuse: светлая тема.
https://res.cloudinary.com/yktoo/image/upload/blog/wjiqs1dyzbrvppslficd.png Главное окно Ymuse: тёмная тема.
https://res.cloudinary.com/yktoo/image/upload/blog/wqud8spomcmuduvgar9d.png Ymuse: вкладка «Библиотека».
https://res.cloudinary.com/yktoo/image/upload/blog/pnwj9nlucfuobw0vcv0l.png Ymuse: вкладка «Потоки».
https://res.cloudinary.com/yktoo/image/upload/blog/tgvhoi8k04gsgod6jvsa.png Настройки Ymuse: Общие
https://res.cloudinary.com/yktoo/image/upload/blog/lgnnkthbnj5hk4uu5pwm.png Настройки Ymuse: Интерфейс
https://res.cloudinary.com/yktoo/image/upload/blog/m4q41rd2klmfrcdft7nx.png Настройки Ymuse: Автоматизация
https://res.cloudinary.com/yktoo/image/upload/blog/vile5cveex5bd4vefg6e.png Настройки Ymuse: Плейер
https://res.cloudinary.com/yktoo/image/upload/blog/vrqyquxgoncgxygly6kk.png Настройки Ymuse: Столбцы
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
* Поддержка как светлой, так и тёмной тем оформления.
* Поддержка локализации. Доступные языки:
    * нидерландский
    * русский
    * японский

Загляните на страницу [FAQ](faq), если у вас возник вопрос, или вы хотите отправить предложение или отчёт об ошибке.

Вот короткое видео, демонстрирующее основные возможности приложения (*англ.*):

{{< youtube "h0g2gk5DM8s" >}}

## Установка

### Ubuntu

Если у вас {{< fl "Ubuntu" >}}, то {{< fl "Ymuse" >}} проще всего установить прямо из {{< fl "Ubuntu Snap Store" >}}:

{{< div "embed-responsive mb-3 border rounded shadow" "height: 330px" >}}
<iframe src="https://snapcraft.io/ymuse/embedded?button=black&summary=true"></iframe>
{{< /div >}}

### Snap-пакет

Если ваш дистрибутив поддерживает {{< wiki "Snappy_(система_управления_пакетами)" "ru" "snap-пакеты" >}}, то установить приложение можно командой:

```bash
sudo snap install ymuse
```

### Flatpak

Если у вас [установлен](https://flatpak.org/setup/) `flatpak`, программа устанавливается из [Flathub](https://flathub.org/apps/details/com.yktoo.ymuse) командой:

```bash
flatpak install com.yktoo.ymuse
```

### Arch Linux

Если у вас [pacman wrapper](https://wiki.archlinux.org/index.php/AUR_helpers#Pacman_wrappers), то используйте его, чтобы установить пакет `ymuse` или `ymuse-bin`.

Например, при наличии [yay](https://github.com/Jguer/yay) установка выглядит следующим образом:

```bash
yay -S ymuse
# Можно также установить bin-версию, сэкономив время на загрузке Go toolchain
yay -S ymuse-bin
```

Если вы не используете хелпер, в [этой статье](https://wiki.archlinux.org/index.php/Arch_User_Repository#Installing_and_upgrading_packages) *(англ.)* описывается, как самому собрать и установить пакет из исходников.

### Бинарная сборка

Также для {{< fl "Ymuse" >}} доступны для загрузки бинарные пакеты (`.deb`, `.rpm`) и архив с исходным кодом, перечисленные ниже.