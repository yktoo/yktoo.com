---
type: post
date: "2014-11-30T00:00:00Z"
title: "Замена жёсткого диска на SSD в iMac 2010"
tags:
    - Apple
    - iMac
    - Samsung
    - Samsung 840 EVO
    - SSD
    - Trusty Tahr
    - Ubuntu
    - гаджеты
    - гик-порно
    - железо
    - очумелые ручки
    - ремонт
    - сделай сам
image: "https://res.cloudinary.com/yktoo/image/upload/blog/kong7rdm7e450507.jpg"
---

Спустя ровно четыре безоблачных года жёсткий диск в моём [iMac 27"](0120) сказал «Disk I/O error», что в переводе означает примерно «мир вашему дому».

В то же время я уже довольно давно вынашивал планы заменить его на SSD-диск ({{< fl "Solid-State Drive" >}}, {{< wiki "Твердотельный_накопитель" "ru" "твердотельный накопитель" >}}). Они намного быстрее и совершенно бесшумны, поскольку не содержат движущихся частей.

<!--more-->

Объёма хотелось не меньше, чем было, а именно одного терабайта. Поэтому выбор оказался невелик — **Samsung SSD 840 EVO 1TB**:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/blog/kong7rdm7e450507.jpg" >}}

Благо, цены на такие SSD уже упали до разумных величин.

Мне повезло в том, что мой iMac — предыдущего поколения ({{< fl "iMax mid 2010" >}}), в нём переднее защитное стекло держится на магнитных защёлках, в отличие от всех последующих моделей, где оно намертво приклеено и отделяется только с помощью термофена.

## 1. Снятие защитного стекла

Внимательно изучив соответствующую [видеоинструкцию](http://www.youtube.com/watch?v=F8Li_bPDAow) от компании OWC на YouTube, я приступил к разборке.

У меня не было специализированных вакуумных креплений, вместо них я использовал обычные держатели телефона для автомобиля с присоской для ветрового стекла. Важные пункты:

1. Снимать стекло нужно, потянув за присоски, закреплённые в левом и правом верхних углах.
2. Тянуть нужно осторожно и в то же время одновременно, не допуская перекоса стекла по диагонали.
3. **Ни в коем случае** не прикасаться к внутренней поверхности стекла или поверхности дисплейной матрицы! Стереть отпечатки пальцев с них, судя по сообщениям на форумах, почти невозможно. А ещё лучше делать это в тонких хлопковых перчатках.
4. Снятое стекло лучше убрать куда-нибудь в сторону, подальше от людей и животных. Также неплохо накрыть его тканью от пыли.

И вот корпус без защитного стекла:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/blog/wvmp7r4qm5h23389.jpg" >}}

## 2. Снятие дисплейной матрицы

Сама матрица закреплена восемью винтами типа {{< wiki "Torx" "ru" "Torx" >}} T10 — вам потребуется соответствующая отвёртка.

Ещё раз советую внимательно изучить вышеупомянутое [видео](http://www.youtube.com/watch?v=F8Li_bPDAow), где демонстрируется какие шлейфы и коннекторы нужно отключать, и как именно. Сняв матрицу, уберите её тоже подальше от торговых путей, шаловливых пальцев и пыли.

iMac без дисплея:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/blog/v5jty8np50vd1877.jpg" >}}

В самом центре мы видим виновника торжества — безвременно почивший **Seagate Barracuda 7200.12**:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/blog/lrugy90clov00820.jpg" >}}

## 3. Извлечение жёсткого диска

Смахнув скупую слезу и прочитав короткую отходную молитву, вывинчиваем два верхних винта и вынимаем покойника. Cнизу он вставлен в направляющие, поэтому из них его просто нужно вынуть. Не забудьте отключить шлейфы данных и питания, а также ещё один — термоинтерфейс, о котором ниже.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/blog/i8p9emve10os2463.jpg" >}}

## 4. Подготовка кронштейна для крепления SSD

Самсунговский SSD намного меньше стоявшего там прежде монстра. Но нам не потребуются никакие переходники или дополнительные детали, чтобы закрепить его — достаточно просверлить два отверстия ⌀ 3 мм на оригинальной верхней скобе:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/blog/w2airpr85u2l1366.jpg" >}}

## 5. Закрепление SSD в корпусе

Поскольку в SSD нет никаких движущихся частей, а сам он почти ничего не весит, двух винтов более чем достаточно для надёжного крепления:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/blog/2qh7flr1iwl00063.jpg" >}}

После этого скоба привинчивается оригинальными винтами на исходное место, и к SSD подключаются шлейфы данных и питания.

## 6. Разбираемся с термодатчиком

Во всей этой незамысловатой хирургической операции замены есть один нюанс, постоянно обсуждаемый на форумах.

Сигейтовские накопители Barracuda снабжены термодатчиком, подключенным к iMac отдельным кабелем через специальный разъём. При этом в самсунговских, да и большинстве других SSD этот разъём отсутствует.

Если его оставить неподключенным, система начинает думать, что диск раскалился до невероятных температур, так что встроенный в корпус вентилятор постоянно работает на максимальных оборотах. Народ предлагает множество решений, например, существуют успокаивающие кулер утилиты (только под Mac OS), некоторые также пытаются воспроизвести схему термодатчика.

Я же последовал другому, тоже попавшемуся где-то, совету — просто закоротил соответствующие контакты:

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/blog/bdp35753gnzw0532.jpg" >}}

По результатам нескольких месяцев эксплуатации никаких негативных последствий этого варварского решения мной не замечено. Кулер ведёт себя смирно, система вроде тоже не жалуется.

## 7. Ставим дисплей на место

Воспроизводим шаг №2 в обратном порядке, подключив обратно все коннекторы и закрепив дисплейную матрицу восемью винтами. Если всё сделано правильно, компьютер включится и спросит, как ему теперь жить дальше.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/blog/bim5m90lifwv0987.jpg" >}}

## Вместо эпилога

Далее всё как всегда. Мне сначала потребовалось вновь установить Mac OS X с оригинального DVD, после этого диск переразбивается и в дополнительный раздел устанавливается Ubuntu (версия 14.04 Trusty Tahr встала без каких-либо проблем).

Я регулярно делаю резервные копии, поэтому смерть персонажа не застигла меня врасплох; кроме того, мне посчастливилось спасти оставшееся крохи в его последние минуты (среди которых был, кстати, [пост про Хаутен](0221)). После этого признаков жизни пациент больше не подавал — погоняв любопытства ради [ddrescue](http://www.gnu.org/software/ddrescue/) на протяжении нескольких часов, мне не удалось прочитать ни байта.

С той поры уж минуло четыре месяца — всё работает как часы. Производительность SSD просто фантастическая, так что все приложения стартуют моментально:

~~~
$ hdparm -Tt /dev/hda
Timing cached reads:   3794 MB in  2.00 seconds = 1898.71 MB/sec
Timing buffered disk reads: 678 MB in  3.01 seconds = 225.43 MB/sec

$ dd if=tempfile of=/dev/null bs=1M count=1024
349+1 records in
349+1 records out
366772224 bytes (367 MB) copied, 1.31371 s, 279 MB/s
~~~

Это, конечно, меньше обещанных 540 МБ/с (сказывается 3-гигабитный SATA III, установленный в моём аймаке), но мне хватает.

Продолжение: [как правильно настроить Ubuntu](0233) для работы с SSD, там есть некоторые нюансы.

## См. также

* [Лечим скорость чтения Samsung SSD 840 EVO в Linux](0255)
