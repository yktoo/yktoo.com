---
type: post
date: "2019-10-10T15:35:51+02:00"
title: "Безбумажность, или Вам не нужно распечатывать этот PDF"
tags:
    - Ubuntu
    - Linux
    - полезные советы
    - софт
    - PDF
image: "https://1.bp.blogspot.com/-vgNEZhAFYIQ/XZ83SpPbj3I/AAAAAAAAylo/cI3jqDFFntckOursM9-wzxWRXCyLs72wwCKgBGAsYHg/s1600/2019-10-10_xournal.png"
---

В рамках всеобщей экологической истерии внесу и свои пять копеек во имя будущего своих и чужих внуков.

Не знаю как в России, но в Нидерландах взаимодействие с организациями часто выливается в заполнение и подписание документов, которые впоследствии отсылаются по электронной почте или загружаются на веб-сайт.

Или ещё пример: какая-нибудь очередная {{< a "0257" "Почта России" >}} заставляет вас заполнить бланк в 117 экземплярах. Не поддавайтесь на провокации и не заполняйте их вручную!

<!--more-->

## Найди спасение в Xournal

Пользователям Линукса доступно волшебное приложение {{< a "http://xournal.sourceforge.net/" "Xournal" >}}. С тех пор, как я о нём узнал, я документы больше практически не распечатываю.

В {{< fl "Ubuntu" >}} программа {{< fl "Xournal" >}} присутствует в официальных репозиториях и устанавливается либо с помощью стандартного {{< fl "Ubuntu Software" >}}, либо командой:

```bash
sudo apt install xournal
```

Для эстетов также доступна {{< a "https://snapcraft.io/xournalpp" "snap-сборка" >}}.

## Использование Xournal

Интерфейс {{< fl "Xournal" >}} настолько интуитивен, что здесь, по-моему, любой школьник разберётся с первого взгляда.

Программу можно использовать в качестве блокнота для рисования и заметок, но для меня наибольшая её ценность в возможности помещать аннотации поверх любого {{< fl "PDF" >}}-документа — просто откройте {{< fl "PDF" >}} и вперёд:

{{< imgfig "https://1.bp.blogspot.com/-vgNEZhAFYIQ/XZ83SpPbj3I/AAAAAAAAylo/cI3jqDFFntckOursM9-wzxWRXCyLs72wwCKgBGAsYHg/s1600/2019-10-10_xournal.png" "Xournal: проще способа для аннотирования PDF не существует." >}}

Файл на скриншоте выше — это **666**-страничный доклад {{< fl "WEF" >}} из {{< a "0419" "моего поста" >}}, с которым {{< fl "Xournal" >}} справляется просто на ура.

С его помощью можно рисовать, добавлять текст или изображения — например, вы можете единожды сканировать свою подпись и впоследствии вставлять во все документы, где это требуется.

Файл аннотаций можно сохранить в проект с расширением `.xoj`, в нём также сохранится и ссылка на исходный {{< fl "PDF" >}} (не его содержимое).

Финальный *аннотированный* результат можно получить в виде нового {{< fl "PDF" >}} с помощью пункта меню **File ⇒ Export to PDF**. Его же можете и распечатать в требуемых 117 экземплярах.