---
title: Sound Switcher Indicator
subtitle: Индикатор для выбора входа и выхода звука в Linux.
platform: linux
icon: ssi-icon-64.png
weight: 100
software: sound-switcher-indicator
aliases:
    - /ru/software/indicator-sound-switcher
seeAlso:
    - name: Мой Launchpad PPA
      url: 'https://launchpad.net/~yktooo/+archive/ppa'
---

Я создал это приложение, потому что не нашёл ни одного существующего решения.

Оно отображает значок в области индикаторов или системном трее (зависит от того, каким десктопом вы пользуетесь). Меню индикатора позволяет переключать текущие порты входного и выходного звукового устройства (в терминах {{< fl "PulseAudio" >}} — {{< fl "source" >}} и {{< fl "sink" >}}, соответственно) в два клика:

{{< imgfig "screenshot.png" "Меню индикатора" >}}

Внешний вид устройств и их портов, отображаемых в меню, можно настроить с помощью соответствующего диалога:

{{< imgfig "prefs-devices.png" "Диалог настроек." >}}

> Разработка {{< fl "Sound Switcher Indicator" >}} ведётся при помощи [бесплатной лицензии JetBrains](/blog/posts/0359).
>
> {{< button "https://www.jetbrains.com/?from=SoundSwitcherIndicator" "![JetBrains logo](jetbrains.png)" >}}

## Установка

На этой странице вы можете загрузить последние версии бинарного `.deb`-пакета или исходного кода программы. Скачать другие версии можно на странице [Launchpad PPA packages](https://launchpad.net/~yktooo/+archive/ppa/+packages).

[Установить](https://github.com/yktoo/indicator-sound-switcher/blob/dev/doc/install.md) {{< fl "Sound Switcher Indicator" >}} можно одним из способов, описанных ниже.

### Установка из PPA (рекомендуемый способ)

Если у вас {{< fl "Ubuntu" >}} или один из производных от него дистрибутивов, лучше использовать стандартный метод установки пакетов: персональный архив ({{< fl "Private Package Archive" >}}, {{< fl "PPA" >}}). В этом случае приложение будет в будущем обновляться автоматически.

Чтобы установить индикатор из [моего PPA](https://launchpad.net/~yktooo/+archive/ubuntu/ppa), выполните следующие команды в Терминале:

```bash
sudo apt-add-repository ppa:yktooo/ppa
sudo apt-get update
sudo apt-get install indicator-sound-switcher
```

### Установка snap-пакета

Если у вас {{< fl "Ubuntu" >}}, то {{< fl "Sound Switcher Indicator" >}} проще всего установить прямо из {{< fl "Ubuntu Snap Store" >}}:

{{< div "embed-responsive mb-3 border rounded" "height: 330px" >}}
<iframe src="https://snapcraft.io/indicator-sound-switcher/embedded?button=black&summary=true"></iframe>
{{< /div >}}

В других дистрибутивах, поддерживающих {{< wiki "Snappy_(система_управления_пакетами)" "ru" "snap-пакеты" >}}, установить приложение можно командой:

```bash
sudo snap install indicator-sound-switcher
```

{{< spoiler "Примечание на тему автозапуска индикатора" >}}
Из-за ограничений, накладываемых форматом {{< fl "snap" >}}, приложение невозможно зарегистрировать для автозапуска для всех пользователей (как это делает {{< fl "deb" >}}-пакет). Поэтому первый раз *приложение нужно запустить вручную* — впоследствии оно будет запускаться автоматически при входе в систему.
{{< /spoiler >}}

### Установка скомпилированного пакета

Если установка из {{< fl "PPA" >}} или {{< fl "snap" >}}-пакета невозможна или нежелательна, вы можете скачать бинарный `.deb`-пакет вручную.

1. Загрузите последнюю версию `.deb`-пакета, кликнув по кнопке загрузки ниже, либо перейдите в раздел [Packages](https://launchpad.net/~yktooo/+archive/ubuntu/ppa/+packages) на {{< fl "Launchpad" >}}, выберите нужную версию индикатора (кликните по ней, чтобы развернуть список файлов) и скачайте `.deb` оттуда.
2. Установите загруженный пакет с помощью {{< fl "Software Center" >}} или выполнив следующую команду в Терминале:
```bash
sudo dpkg -i /путь/к/скачанному/indicator-sound-switcher_*_all.deb
```

### Установка из исходного кода

Чтобы установить приложение из исходного кода (так называемого {{< fl "source tarball" >}}):

1. Загрузите последнюю версию (`indicator-sound-switcher-*.tar.gz`), кликнув по кнопке загрузки ниже, либо перейдите в раздел [Packages](https://launchpad.net/~yktooo/+archive/ubuntu/ppa/+packages) на {{< fl "Launchpad" >}}, выберите нужную версию индикатора (кликните по ней, чтобы развернуть список файлов) и скачайте `.tar.gz` оттуда.
2. Распакуйте архив с исходным кодом: `tar xf indicator-sound-switcher-*.tar.gz`
3. Перейдите (`cd`) в каталог `indicator-sound-switcher-*`
4. Выполните команду `sudo python3 setup.py install`
