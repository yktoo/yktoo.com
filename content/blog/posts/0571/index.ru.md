---
type: post
date: "2020-01-23T17:51:55+01:00"
title: "Очумелые ручки: включение ноутбука без открытия крышки"
tags:
    - очумелые ручки
    - сделай сам
    - железо
    - гаджеты
    - ноутбук
image: "https://res.cloudinary.com/yktoo/image/upload/blog/do5e6yvsyl0shba3emy2.jpg"
---

Я пользуюсь дома ноутбуком в качестве стационарного устройства: к нему подключены внешний {{< fl "4K" >}}-монитор, клавиатура, мышь и прочая периферия на постоянной основе.

Выглядит это следующим образом:

<!--more-->

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/blog/do5e6yvsyl0shba3emy2.jpg" "Моё рабочее место." >}}

Удобно это также тем, что, когда нужно, ноутбук отключается от пары кабелей и забирается с собой.

## Дилемма включения

И всё здесь, в общем-то, здорово, но была одна проблема: у моего {{< fl "Dell XPS 13" >}}, как и у многих других моделей ноутбуков, кнопка включения находится под крышкой.

Плюс здесь в том, что это исключает случайное включение устройства. Ну, а минус — чтобы его включить, нужно:

1. Выдвинуть ноутбук из-под подставки монитора;
2. Открыть крышку;
3. Нажать кнопку питания;
4. Закрыть крышку;
5. Задвинуть ноутбук под подставку.

И так каждый раз. Что характерно, выключить его можно программно, а вот включить…

## Поиск решения

Я перечитал кучу форумов, где многие искали решения точно такой же проблемы, перепробовал несколько вариантов.

Есть, например, {{< wiki "Wake-on-LAN" >}} — но при его использовании нужно ещё какое-то устройство, способное послать ноутбуку «волшебный пакет». Слишком мудрёно.

Также в настройках {{< fl "BIOS" >}} есть вариант пробуждения от {{< fl "USB" >}}-устройства, но тогда нужно постоянно держать {{< fl "USB" >}}-порты включенными, что при автономном использовании будет садить батарею. Тоже не подходит.

## Решение

В конце концов я нашёл почти идеальное, хотя и несколько своеобразное, решение, которым и делюсь.

В настройках {{< fl "BIOS" >}} ноутбука есть опция «Включать при подаче питания» ({{< fl "Wake on AC" >}}). Если её активировать, то он станет включаться при включении адаптера питания в розетку или при подключении штеккера адаптера к ноутбуку:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/blog/qcdogrn0h2eamp6rcsve.jpg" "Настройки BIOS Dell XPS 13 9343." >}}

Бинго! Но выдёргивать вилку питания или, тем более, штеккер адаптера каждый раз муторно и чревато разболтанными разъёмами.

В стационарном режиме ноутбук у меня работает от резервного блока питания, купленного на АлиЭкспрессе, который не особенно жалко. Я взял в руки паяльник и кусачки и врезал в *низковольтный* кабель выключатель от какой-то икеевской лампы:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/blog/rnthrctwxyyaklq4k4nu.jpg" "Выключатель на шнуре питания ноутбука." >}}

Собственно, это всё! Теперь для включения ноутбука достаточно щёлкнуть выключателем туда-обратно — работает это просто железно.
