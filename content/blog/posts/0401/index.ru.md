---
type: post
date: "2019-09-29T20:33:35+02:00"
title: "Обзор mesh-роутера Netgear Orbi Pro SRK60"
tags:
    - гаджеты
    - обзор
    - Wi-Fi
    - анбоксинг
    - Интернет
    - роутер
    - железо
    - Netgear
    - Netgear Orbi
image: "https://1.bp.blogspot.com/-ukNcodfGncM/XZB87QxRB9I/AAAAAAAAyOI/pW_GFRXY7AAswCscTxYTgLH0YpNX9I4bgCKgBGAsYHg/s1600/2019-09-28.jpg"
---

## Предыстория

Я около восьми лет пользовался роутером {{< a "0096#router" "Linksys E4200" >}} и он меня в принципе устраивал — исключительно стабильное устройство. Но любая техника, какая бы она хорошая ни была, постепенно морально устаревает.

Во-первых, после переезда из квартиры в дом, стало очевидно, что три этажа {{< fl "Wi-Fi" >}} нормально не покрывает — в дальних углах дома временами было совсем плохо. Во-вторых, он не поддерживает современные стандарты (например, {{< fl "802.11ac" >}}), из-за чего скорость тоже страдает.

В конце концов я принял решение приобрести {{< fl "mesh" >}}-роутер.

<!--more-->

## Что такое этот ваш mesh?

В обычной конфигурации с несколькими точками доступа устройство-потребитель обычно подключается к той, у которой сигнал сильнее, проходя через все мытарства авторизации, согласования ключа и т.д. Одно переподключение отнимает минимум несколько секунд, в течение которых вы сидите без Интернета.

{{< fl "Mesh" >}}-система также использует несколько беспроводных точек доступа, но создаёт единую бесшовную сеть, при которой клиентское устройство может переключаться между ними практически мгновенно. Устройства видят её как *одну* {{< fl "Wi-Fi" >}}-сеть.

## Выбор mesh-роутера

Одним из главных критериев была возможность самостоятельной настройки системы посредством панели администрирования. Тенденции в современном {{< fl "Wi-Fi" >}}-бизнесе таковы, что практически все производители стремятся {{< a "https://routersecurity.org/MeshRouters.php" "избавить" >}} глупого и наивного пользователя от всяких заморочек типа {{< fl "IP" >}}- и {{< fl "MAC" >}}-адресов и прочих аббревиатур, удаляя все настройки «в облако» и оставляя пользователю лишь пару переключателей. Плюс они требуют создания аккаунта вендора и установки соответствующего мобильного приложения.

Меня подобная навязчивость категорически не устраивала — мне нравится быть в курсе и контролировать, что именно и как в моей локальной сети настроено, и самому управлять устройством, купленным за мои кровные (и немалые!) деньги.

Что оставило в пролёте подавляющее большинство популярных {{< fl "mesh" >}}-систем, таких как {{< fl "Google Wi-Fi" >}}, {{< fl "Eero" >}}, {{< fl "Luma" >}}, {{< fl "Plume" >}} и прочие.

В свете вышеперечисленного я остановил свой выбор на {{< a "https://www.netgear.com/orbi-pro/SRK60.aspx" "Netgear Orbi Pro SRK60" >}}, как одной из наиболее продвинутых и стабильных (по отзывам) систем с *собственным* веб-интерфейсом для администрирования.


## Netgear Orbi Pro SRK60 и SRK60B03

{{< fl "SRK60" >}} является комбинацией роутера (главного устройства) {{< fl "Orbi SRR60" >}} и одного или двух сателлитов {{< fl "SRS60" >}}.

Согласно описанию {{< fl "Netgear" >}}:

* Комплект **роутер + сателлит** ({{< fl "SRK60" >}}) покрывает площадь до **464 м²**,
* Комплекта **роутер + два сателлита** ({{< fl "SRK60B03" >}}) достаточно для покрытия **700 м²**.

Мне первого варианта хватало за глаза, даже с учётом трёх этажей и сада.

## Спецификации SRK60

Спецификации комплекта с {{< a "https://www.netgear.com/images/datasheet/orbi/SRK60.pdf" "сайта" >}} {{< fl "Netgear" >}}:

{{< table "table table-striped" >}}
|Характеристика          |Значение                                                      |
|------------------------|--------------------------------------------------------------|
|Суммарная скорость      |3000 Мбит/с (1733 + 866 + 400 Мбит/с)                         |
|Площадь покрытия Wi-Fi  |464 м² (5 000 кв. футов)                                      |
|Канал связи с сателлитом|Выделенный, 4x4 (1,7 Гбит/с)                                  |
|Технология WiFi         |Трёхдиапазонная: 802.11b/g/n 2,4 ГГц + две 802.11a/n/ac 5 ГГц |
|Размеры                 |Два блока по 17,2×8,3×24,6 см                                 |
|Вес                     |Два блока по 930 г                                            |
|Ethernet-порты          |Роутер: 1×WAN, 3×LAN. Сателлит: 4×LAN; 10/100/1000 Мбит/с     |
|Beamforming             |Есть                                                          |
|Приложение              |Есть                                                          |
|Поддержка WPA/PSK2      |Есть                                                          |
|Разделение трафика      |3 независимых Wi-Fi-сети                                      |
{{< /table >}}

На {{< a "https://bit.ly/2nMIMM6" "bol.com" >}} его сейчас можно купить за **€ 369**.

## Комплект поставки

Поставляется роутер в объёмистой кубической картонной коробке.

{{< imgfig "https://1.bp.blogspot.com/-eSS2viLAuOA/XZB87ZGMh9I/AAAAAAAAyOI/0dHtLUFCc700xOQ4NmllhL3reY0iT6jxACKgBGAsYHg/s1600/2019-09-28.jpg" "Netgear Orbi Pro SRK60 в упаковке." >}}

Всё содержимое коробки: роутер, сателлит, два адаптера, два комплекта для крепления на стене или потолке и почему-то лишь один плоский {{< fl "Ethernet" >}}-кабель:

{{< imgfig "https://1.bp.blogspot.com/-1PMHsiM6ZYY/XZB87bXzNqI/AAAAAAAAyOI/hQKnGtrwaBgw71UBBrLxlPNBGVTQDlSUQCKgBGAsYHg/s1600/2019-09-28.jpg" "Комплект поставки Netgear Orbi Pro SRK60." >}}

Братья-близнецы: сателлит серый (слева), роутер синий (справа):

{{< imgfig "https://1.bp.blogspot.com/-7yDQTnyX4as/XZB87SxyokI/AAAAAAAAyOI/whcFP8hAxx8Y40uC4WAL57oSMXJJFgMhQCKgBGAsYHg/s1600/2019-09-28.jpg" "Сателлит SRS60 и роутер SRR60." >}}

Внешне оба девайса совершенно одинаковые, за исключением цвета верхних вставок и портов на задней стенке.

* У **сателлита** (слева) кнопка {{< fl "Sync" >}}, четыре гигабитных {{< fl "Ethernet" >}}-порта, кнопка питания, разъём блока питания и кнопка сброса.
* У **роутера** (справа) всё то же самое, кроме портов: у него один «внешний» порт ({{< fl "WAN" >}}) и три обычных, для локальной сети.

{{< imgfig "https://1.bp.blogspot.com/-WS-Y3_Fpzx4/XZB87YFvOQI/AAAAAAAAyOI/BVQBcRc8nAs5gNLR7w7xgj38ejDjv7QeACKgBGAsYHg/s1600/2019-09-28.jpg" "Органы управления на задней стенке." >}}

Изначально на оба устройства надето по пластиковой ленте и {{< fl "QR" >}}-кодом для активации и дефолтовыми {{< fl "SSID" >}} и паролем от {{< fl "Wi-Fi" >}}-сети.

{{< imgfig "https://1.bp.blogspot.com/-lxIj-Clo9n4/XZB87aq9F3I/AAAAAAAAyOI/mpo7HodMMikBe1LMeNLN4Myu7thsHJdTgCKgBGAsYHg/s1600/2019-09-28.jpg" "QR-коды и данные Wi-Fi." >}}

## Три Wi-Fi-сети + локальная сеть

Одним из преимуществ {{< fl "SRK60" >}} является то, что он создаёт до трёх {{< fl "Wi-Fi" >}}-сетей одновременно:

1. Основная сеть («{{< fl "admin network" >}}»), опционально с авторизацией WPA/PSK2
2. Вторичная сеть («{{< fl "employee network" >}}»), также с авторизацией по выбору
3. Гостевая сеть. Она всегда открытая, но можно установить пароль для логина через веб-страницу (так называемый {{< wiki "captive portal" >}}).

Зайти в административный веб-интерфейс можно лишь из основной {{< fl "Wi-Fi" >}}- либо {{< fl "Ethernet" >}}-сети. Аналогично, устройства в локальной сети (подключенные к {{< fl "Ethernet" >}})-портам видят только устройства, находящиеся в основной {{< fl "Wi-Fi" >}}-сети и наоборот.

Устройства из вторичной и гостевой {{< fl "Wi-Fi" >}}-сетей могут иметь доступ в Интернет, но не могут видеть ни друг друга, ни локальной сети.

## Веб-админка

У веб-интерфейса роутера есть два основных раздела: {{< fl "Basic" >}} (простой) и {{< fl "Advanced" >}} — в нём настроек намного больше.

### Basic

Этот раздел предназначен для «непродвинутых пользователей»: тут можно настроить базовые параметры системы: {{< fl "IP" >}}-адреса, пароли на {{< fl "Wi-Fi" >}} и т.п.

{{< imgfig "https://1.bp.blogspot.com/-q0lEB6F8mYg/XZB8xzNzj_I/AAAAAAAAyOA/KQ6cie_NMxEIzBQlfHYkbsFGRnw_l3ceACKgBGAsYHg/s1600/2019-09-29.png" "Basic ⇒ Home." >}}

{{< spoiler "Посмотреть скриншоты интерфейса Basic" >}}

{{< imgfig "https://1.bp.blogspot.com/-0GmKZ31GdDQ/XZB8xx4JEoI/AAAAAAAAyOA/Z75T-WbDMsEjpfRq8Gu_9Rn7-qy0XqKHwCKgBGAsYHg/s1600/2019-09-29.png" "Basic ⇒ Internet setup." >}}

{{< imgfig "https://1.bp.blogspot.com/-lRRGT-BMo4A/XZB8x396xXI/AAAAAAAAyOA/JSZBJhdpUXo7K1CmsseVXPilytxQXSszwCKgBGAsYHg/s1600/2019-09-29.png" "Basic ⇒ Wireless 1." >}}

{{< imgfig "https://1.bp.blogspot.com/-9y0Z1aeIeFc/XZB8x6MveFI/AAAAAAAAyOA/REN7MZ67vJYMs_coEt9Os0ImuJLeZ5F7ACKgBGAsYHg/s1600/2019-09-29.png" "Basic ⇒ Wireless 2." >}}

{{< imgfig "https://1.bp.blogspot.com/-cQQKDVHxLtw/XZB8x3Whr6I/AAAAAAAAyOA/lxOkGtFnBpM_0GCrygpCblF5DlM8RlffwCKgBGAsYHg/s1600/2019-09-29.png" "Basic ⇒ Attached devices." >}}

{{< imgfig "https://1.bp.blogspot.com/-Z0BvFBAScB8/XZB8xza8wrI/AAAAAAAAyOA/OXn3-ZkGN5o0eUM2lQrP3xaBILPh_pzXgCKgBGAsYHg/s1600/2019-09-29.png" "Basic ⇒ Guest portal settings." >}}

{{< imgfig "https://1.bp.blogspot.com/-T2pq2lwriM8/XZB8xyhklYI/AAAAAAAAyOA/kqri0W0GOakmOTVPIzU-F77ztvoLxfKCACKgBGAsYHg/s1600/2019-09-29.png" "Basic ⇒ Speed test." >}}

{{< imgfig "https://1.bp.blogspot.com/--VZWzLNDTFA/XZB8x2VYKsI/AAAAAAAAyOA/4VavMrUYjhoSIBV_HbxfbNCdzACILgYtwCKgBGAsYHg/s1600/2019-09-29.png" "Basic ⇒ Add satellite." >}}
{{< /spoiler >}}

### Advanced

В этом разделе собрано намного больше настроек, так что остановлюсь на нём поподробнее.

Начальная страница ­— обзор основных параметров роутера:

{{< imgfig "https://1.bp.blogspot.com/-xa1BJTCFkFU/XZB8x_wY-aI/AAAAAAAAyOA/LVV2V9JkfuoUzZC5nDz3nufu3YGtj87VACKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Home." >}}

С помощью интерактивного {{< fl "Setup wizard" >}} можно настроить роутер, отвечая на вопросы. 

{{< imgfig "https://1.bp.blogspot.com/-vcR6azU7vQc/XZB8x8LGl_I/AAAAAAAAyOA/qys4IKYzhbAhQeClWLWdLCGyPvOWYZ1TQCKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Setup wizard." >}}

#### Раздел Setup

Настройка Интернета, {{< fl "WAN" >}}, {{< fl "Wi-Fi" >}} и локальной сети.

{{< imgfig "https://1.bp.blogspot.com/-AO4Z0btb8ug/XZB8x7XCTeI/AAAAAAAAyOA/8OtAqIcTKUQQyEhNd1YgG9Zni2YBNY0nQCKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Setup ⇒ Internet setup." >}}

Набор настроек {{< fl "Wi-Fi" >}} аналогичен соответствующему из {{< fl "Basic" >}}. Здесь можно включить/выключить обе {{< fl "Wi-Fi" >}}-сети (гостевая сеть настраивается на отдельной странице), задать параметры авторизации и используемые каналы.

{{< imgfig "https://1.bp.blogspot.com/-Xyk_wFgl6KE/XZB8x5sf3RI/AAAAAAAAyOA/XBua8IyeXHoeDWmeMFyhQ3sW13EC-QhlACKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Setup ⇒ Wireless 1." >}}

Настройки гостевого портала. Его также можно выключить, настроить пароль для {{< fl "captive portal" >}} и длительность одного сеанса, также можно выбрать картинку и текст, показываемые при аутентификации на {{< fl "captive portal" >}}: 

{{< imgfig "https://1.bp.blogspot.com/-HiwtMQBYeeM/XZB8x5X_c2I/AAAAAAAAyOA/gOSy1FPRvvAsPOy6GVaZhjmbFKnsa12dwCKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Setup ⇒ Guest portal settings." >}}

Настройки {{< fl "WAN" >}}. Помимо прочего, здесь можно активировать {{< fl "NAT" >}}.

{{< imgfig "https://1.bp.blogspot.com/-kyqOuIb54Pw/XZB8x8sif7I/AAAAAAAAyOA/SBZ-nqsGWk4GAIDl8C3GZqPn3JMPjILYgCKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Setup ⇒ WAN setup." >}}

Настройки локальной {{< fl "Ethernet" >}}-сети. Здесь настраивается {{< fl "DHCP" >}}-сервер, можно зарезервировать {{< fl "IP" >}}-адрес за конкретным устройством.

{{< imgfig "https://1.bp.blogspot.com/--gHif0ZHSNY/XZB8x3a0n6I/AAAAAAAAyOA/39m0fH8MxK40U5MQU3444tdfwt60I5w-gCKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Setup ⇒ LAN setup." >}}

Задание сетевого имени роутера:

{{< imgfig "https://1.bp.blogspot.com/-yRFqIMfP8Nw/XZB8x1G8NSI/AAAAAAAAyOA/9iUUk4WfyrMN-2Jw4HFcQ3h8m43Q7SvegCKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Setup ⇒ Device name." >}}

#### Раздел Security

В разделе {{< fl "Security" >}} много всего интересного. Здесь можно включать/выключать доступ в Интернет отдельным устройствам, а можно почувствовать себя Роскомнадзором и заблокировать ~~Телеграм~~ нежелательные сайты.

Страница контроля доступа. Здесь можно для каждого устройства (на основе его {{< fl "MAC" >}}-адреса) задать, получит ли оно доступ в Интернет. Также можно выбрать режим по умолчанию для новых устройств — разрешить или блокировать, и связать понятное имя с конкретным девайсом.

{{< imgfig "https://1.bp.blogspot.com/-DnS7pHdFAe8/XZB8x2jQXEI/AAAAAAAAyOA/O3JtU286iy8NFDtkdru8Qra6nAohcEitgCKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Security ⇒ Access control." >}}

Тут хочу отметить, что у меня с блокированием по умолчанию как-то не сложилось. В моей конфигурации давно уже одобренные устройства почему-то регулярно перепрыгивали в {{< fl "Blocked" >}}, причём без какой-либо системы. Я уверен на 99%, что это глюк в софте роутера — явно где-то в управлении списками там что-то идёт наперекосяк. Я открыл тикет у техподдержки {{< fl "Netgear" >}}, но они пожаловались, что не могут воспроизвести проблему (при этом у меня она самопроизвольно «воспроизводилась» по пять раз в день) и попросили прислать им полностью конфигурацию устройства — со всеми паролями, ключами {{< fl "VPN" >}} и прочим.

Я ответил: «Нет, спасибо» и перевёл роутер в режим «разрешено по умолчанию». В принципе, это небольшая проблема, все {{< fl "Wi-Fi" >}}-сети всё равно запаролены, а за появлением новых устройств в сети надёжно следит {{< fl "Fingbox" >}}.

Настройки блокировщика сайтов:

{{< imgfig "https://1.bp.blogspot.com/-STFKR2fHJfM/XZB8x1HZPQI/AAAAAAAAyOA/1xXEILbwpGUyaBiIlYGETQWTGvS2oSOoACKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Security ⇒ Block sites." >}}

Помимо доменов, можно также блокировать {{< fl "TCP/UDP" >}}-трафик к конкретным адресам и портам:

{{< imgfig "https://1.bp.blogspot.com/-HzUmbXVYsMo/XZB8x-Q_BoI/AAAAAAAAyOA/eKVle4edGGcJH9UHaF50wVW3pvP4HcO9gCKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Security ⇒ Block services." >}}

Планировщик блокировки:

{{< imgfig "https://1.bp.blogspot.com/-l9cWpOb4rfI/XZB8x4USNII/AAAAAAAAyOA/K1Zt13qLjB8d4kcVLDyicw0QbYU3MghugCKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Security ⇒ Schedule." >}}

Настройки уведомлений по {{< fl "email" >}}:

{{< imgfig "https://1.bp.blogspot.com/-k-mF7rUaXLw/XZB8x5CSddI/AAAAAAAAyOA/_D6J2uUuHJ4ISoV7VRFl2MNZ4TRa6FOyACKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Security ⇒ E-mail." >}}

#### Раздел Administration

Настройки администрирования. Обзор:

{{< imgfig "https://1.bp.blogspot.com/-n3TY_WzeEcE/XZB8xzHt6qI/AAAAAAAAyOA/G1BwsNchpWEzLy_F62hh1Zqi0KBX8DJ5QCKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Administration ⇒ Router status." >}}

Протокол доступа к админке и различным службам роутера:

{{< imgfig "https://1.bp.blogspot.com/--Y0GKKjKNEI/XZB8x7rnc9I/AAAAAAAAyOA/JawPcXQpwygNrIdfFymnkDGlf0uLw0VfACKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Administration ⇒ Logs." >}}

Очень полезная страница со всеми подключенными к роутеру устройствами. Среди прочего, здесь можно увидеть статус сателлита, а также к какой именно сети какое устройство подключилось:

{{< imgfig "https://1.bp.blogspot.com/-_A_LBh2auS8/XZB8x-kA_BI/AAAAAAAAyOA/AGmkG8mJihMoW5hnryQ65FWTyfcYxYm7gCKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Administration ⇒ Attached devices." >}}

Резервное копирование и восстановление многочисленных настроек системы:

{{< imgfig "https://1.bp.blogspot.com/-EAgyQfZp_OE/XZB8x5jUOyI/AAAAAAAAyOA/_o0MdItYDbUotjmoAGUMMAnJChvyKnrhQCKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Administration ⇒ Backup settings." >}}

Пароль на вход в админку:

{{< imgfig "https://1.bp.blogspot.com/-rmSa9T_TDdA/XZB8xxWUbOI/AAAAAAAAyOA/2OEs5RFQfUMYDH1ve6XSUU5Ki86u4IK_wCKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Administration ⇒ Set password." >}}

Настройки синхронизации времени по {{< fl "NTP" >}}:

{{< imgfig "https://1.bp.blogspot.com/-b6ZQtSXXgig/XZB8x82_JPI/AAAAAAAAyOA/JuSG3w9q93MAQs-vZTac2VO5b7By6KboQCKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Administration ⇒ NTP settings." >}}

Обновление прошивки роутера и сателлита. Прошивка скачивается автоматически, как только заходишь на страницу. Запускается обновление либо автоматически, либо вручную:

{{< imgfig "https://1.bp.blogspot.com/-r_0fjp6psT0/XZB8x1kXfQI/AAAAAAAAyOA/paKQTRtbRzwX7cY4wIwyLTI-bcP7x1LUwCKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Administration ⇒ Online update." >}}

#### Раздел Advanced setup

В {{< fl "Advanced setup" >}} собраны самые хардкорные настройки: режим работы (роутер/точка доступа), {{< fl "VPN" >}}, {{< fl "UPnP" >}} и т.д.

{{< spoiler "Посмотреть скриншоты интерфейса Advanced setup" >}}

{{< imgfig "https://1.bp.blogspot.com/-3DMR8B2M26U/XZB8x2Osi8I/AAAAAAAAyOA/lGDXXcRmlTMxkLY8XB1_28OGzSZOfxsBwCKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Advanced setup ⇒ Advanced wireless settings." >}}

{{< imgfig "https://1.bp.blogspot.com/-NBcswOaEdz8/XZB8xxmuURI/AAAAAAAAyOA/cuYZzvrahd03crGmBQldV8VgkA3Z56vQwCKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Advanced setup ⇒ Router/AP mode." >}}

{{< imgfig "https://1.bp.blogspot.com/-j5OP4TSiqx8/XZB8x6RmQRI/AAAAAAAAyOA/XsQZq6UV5ys8hQK10oAn9nRmDU3aGwvPACKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Advanced setup ⇒ Port forwarding/triggering." >}}

{{< imgfig "https://1.bp.blogspot.com/-B0vmWe23Db8/XZB8xyuGk9I/AAAAAAAAyOA/NcHDp70tljET16XIg-jydizo0_JLHfs3gCKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Advanced setup ⇒ Dynamic DNS." >}}

{{< imgfig "https://1.bp.blogspot.com/-EtqCt3s7t-A/XZB8x5yJrGI/AAAAAAAAyOA/TNPkoJvOZLkvr8gxWhtdvJXqAcoFUuVQgCKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Advanced setup ⇒ VPN service." >}}

{{< imgfig "https://1.bp.blogspot.com/-Q7iwQ_EH3Ew/XZB8x4ciyYI/AAAAAAAAyOA/JIoGZloYiIkIW3er_Ysua0L0SsQQrLJrgCKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Advanced setup ⇒ Static routes." >}}

{{< imgfig "https://1.bp.blogspot.com/-ulUdm5_PJHQ/XZB8x6ySHfI/AAAAAAAAyOA/VzLSFDMLc3svNwT-_abLbqtvnsLTe7TCACKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Advanced setup ⇒ Remote management." >}}

{{< imgfig "https://1.bp.blogspot.com/-zf4HqdKg9c4/XZB8x15tk9I/AAAAAAAAyOA/Ar-zRS9tMHkDJeOaYqGFXesgTLDWFfKUACKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Advanced setup ⇒ UPnp." >}}

{{< imgfig "https://1.bp.blogspot.com/-BinZRv3vw10/XZB8x64P0-I/AAAAAAAAyOA/4p8BrCCl_awEiiZIpMdVBZ0lWb39wBwBwCKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Advanced setup ⇒ IPv6." >}}

{{< imgfig "https://1.bp.blogspot.com/-nkR9yiwPN_Y/XZB8x-9AZHI/AAAAAAAAyOA/yNW9xJmx650I6ZQRKXqo0Eb2ueKLIQV4QCKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Advanced setup ⇒ Traffic meter." >}}

{{< imgfig "https://1.bp.blogspot.com/-Z41UNtoUnbk/XZB8x1vT_1I/AAAAAAAAyOA/iE9N57Q1oyUa4avZWdQULZCRgMEjC85ZgCKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Advanced setup ⇒ VLAN/Bridge settings." >}}

{{< imgfig "https://1.bp.blogspot.com/-eV8Y0l1TCCA/XZB8x-WD-VI/AAAAAAAAyOA/cSt5JpNFpaIFUm-gEyB0GHiWj6kgSpszgCKgBGAsYHg/s1600/2019-09-29.png" "Advanced ⇒ Advanced setup ⇒ Sync button." >}}
{{< /spoiler >}}

### Режим отладки

В роутере есть скрытая страница отладочных настроек — её можно увидеть, перейдя по адресу `http://<адрес роутера>/debug.htm`.

{{< imgfig "https://1.bp.blogspot.com/-XwayfiBxoLw/XZB8x0WdgkI/AAAAAAAAyOA/DMfV2zgiRXgzkgsgwrl-uPV7s60oj17-ACKgBGAsYHg/s1600/2019-09-29.png" "Интерфейс для отладки." >}}

## Скорость Wi-Fi

Перейдём к практике. Одной из главных причин для замены роутера было улучшение работы беспроводной сети.

**Кстати:** нужно упомянуть, что у меня сателлит связан с роутером *кабелем*, а не радиоканалом ({{< fl "backhaul" >}}).

В плане скорости претензий к {{< fl "Netgear Orbi" >}} совершенно никаких. Я замеря́л скорость мобильным телефоном с помощью {{< a "https://fast.com/" "fast.com" >}} и приложения {{< a "https://www.speedtest.net/" "speedtest.net" >}}. Также, помимо {{< fl "Wi-Fi" >}}, из любопытства замерил скорость мобильной сети ({{< fl "LTE/4G+" >}}).

Результаты следующие (скорость в **Мбит/с**):

{{< table "table table-striped" >}}
|Расположение устройства            |Скорость по fast.com|Скорость по speedtest.net|
|-----------------------------------|--------------------|-------------------------|
|Wi-Fi у роутера                    | ⇓ 590 — ⇑ 400      | ⇓ 306 — ⇑ 394           |
|Wi-Fi у сателлита                  | ⇓ 570 — ⇑ 420      | ⇓ 263 — ⇑ 457           |
|Wi-Fi вдали от роутера и сателлита | ⇓ 280 — ⇑ 280      | ⇓ 279 — ⇑ 200           |
|LTE/4G+                            | ⇓ 190 — ⇑ 11       | ⇓ 157 — ⇑ 10            |
{{< /table >}}

{{< spoiler "Скриншоты измерения скорости" >}}

{{< imgfig "https://1.bp.blogspot.com/-WYe0BeCeePk/XZD-C08JuQI/AAAAAAAAyPs/prv3G9YX8ngOYmo5HPEhrG2CthZ_Yu9AwCKgBGAsYHg/s1600/2019-09-29.png" "Скорость Wi-Fi у роутера — fast.com." >}}

{{< imgfig "https://1.bp.blogspot.com/-gDlPbJD2XzQ/XZD-CyK1LzI/AAAAAAAAyPs/gOFUNzJ0GjYXCTn34EvkIpnxm_ycWTZjQCKgBGAsYHg/s1600/2019-09-29.png" "Скорость Wi-Fi у сателлита — fast.com." >}}

{{< imgfig "https://1.bp.blogspot.com/-EtTbPEfNRN4/XZD-C7c6FeI/AAAAAAAAyPs/zoH7cNCDo3AKH3j89cCjDqntk1jizw4lQCKgBGAsYHg/s1600/2019-09-29.png" "Скорость Wi-Fi вдали от роутера и сателлита — fast.com." >}}

{{< imgfig "https://1.bp.blogspot.com/-oR0UA5LAUuE/XZD-C8MpMrI/AAAAAAAAyPs/8sn4Woyok5Y-15IQytEZHz530agueyNpgCKgBGAsYHg/s1600/2019-09-29.png" "Скорость LTE — fast.com." >}}

{{< imgfig "https://1.bp.blogspot.com/-cllsMCT5a-I/XZD-CyHjL4I/AAAAAAAAyPs/5XJ49TWMW_wIscrgwskBlzHcHwIklFcHQCKgBGAsYHg/s1600/2019-09-29.png" "Скорость Wi-Fi у роутера — speedtest.net." >}}

{{< imgfig "https://1.bp.blogspot.com/-fSAixcsFOmQ/XZD-CzgLWjI/AAAAAAAAyPs/v9yK1rAQ7I4trHtZWbTG8_RsTfzcjmJ_wCKgBGAsYHg/s1600/2019-09-29.png" "Скорость Wi-Fi у сателлита — speedtest.net." >}}

{{< imgfig "https://1.bp.blogspot.com/-60JZH18c9SA/XZD-C3I58vI/AAAAAAAAyPs/oMdBF64a5fINXslZcAGM_MPErjLKjxEJACKgBGAsYHg/s1600/2019-09-29.png" "Скорость Wi-Fi вдали от роутера и сателлита — speedtest.net." >}}

{{< imgfig "https://1.bp.blogspot.com/-MTNs4EtuMCo/XZD-C45qsEI/AAAAAAAAyPs/kUExwUb11AwKrVBiIO7DslraDVUZbuXjwCKgBGAsYHg/s1600/2019-09-29.png" "Скорость LTE — speedtest.net." >}}
{{< /spoiler >}}

Нельзя не отметить существенную разницу в показаниях двух сервисов. Лично у меня ощущение, что {{< fl "fast.com" >}} ближе к истине, поскольку он выдаёт более стабильные результаты.

Рядом с одним из двух устройств скорость получения около **500 Мбит/с**, отправки **400 Мбит/с** — что очень близко к пропускной способности {{< a "0337" "моего Интернет-канала" >}}.

На равном удалении от обеих точек скорость составляет примерно **280 Мбит/с**. По-моему, весьма неплохо.

## Выводы

По результатам девяти месяцев ежедневного использования могу заключить, что {{< fl "Netgear Orbi Pro SRK60" >}} работает очень стабильно и надёжно.

Есть лишь пара негативных моментов:

* В самом начале у меня несколько раз наблюдалось зависание роутера при переключении настроек с помощью веб-интерфейса, после чего его приходилось перегружать отключением питания. Впрочем, последние месяцы никаких проблем я с этим не испытывал.
* Вышеупомянутая заморочка с активным контролем доступа в режиме «блокировка по умолчанию», с которой техподдержка помочь мне не смогла (точне, захотела слишком многого).

Очень удобно наличие трёх изолированных друг от друга {{< fl "Wi-Fi" >}}-сетей:

* В основной сети у меня находятся все домашние устройства: телефоны, компьютеры, {{< a "0243" "смарт-ТВ" >}} и т.д.
* Вторичная сеть используется для всяких {{< fl "IoT" >}}-устройств — например, детекторов дыма {{< a "0265" "Nest Protect" >}} и инвертора {{< a "0387" "Growatt" >}}. Нечего им в моей домашней сети делать.
* Гостевая сеть — само собой, для гостей.

С гостевой сетью, правда, можно было бы сделать чуть лучше. На неё нельзя поставить {{< fl "WPA" >}}-защиту, она всегда открыта, а пароль, что устанавливается в админке, вводится уже после подключения в {{< fl "captive portal" >}}. Из-за этого у меня в сети постоянно появлялись «левые» устройства — телефоны прохожих, настроенные цепляться за певую попавшуюся открытую сеть. Мне пришлось сделать сеть скрытой, так что подключиться к ней можно, лишь зная её {{< fl "SSID" >}}.

**P.S.** вдогонку: в версии прошивки **2.4.0.114** появилась новая возможность: опциональной установка полосы пропускания для каждой из сетей. Например, можно дать основной сети 80%, а двум остальным по 10%.

### Плюсы

* Отсутствие привязки к облаку или мобильному приложению
* Настройка всех аспектов с помощью веб-интерфейса
* Стабильная работа обоих компонентов
* Очень хорошее покрытие {{< fl "Wi-Fi" >}} и безупречная работа {{< fl "mesh" >}}-механизма
* Большое количество опций и настроек
* Три изолированных {{< fl "Wi-Fi" >}}-сети
* Гигабитные {{< fl "Ethernet" >}}-порты (3 шт. на роутере, 4 шт. на сателлите)
* Возможность сохранить и восстановить настройки роутера из файла
* Встроенный {{< fl "OpenVPN" >}}-сервер с очень простой настройкой
* Поддержка {{< fl "Dynamic DNS" >}} ({{< fl "no-ip.com" >}})
* Один бесплатный хост на {{< fl "no-ip.com" >}} для динамического {{< fl "DNS" >}}
* Настройка полосы пропускания каждой из сетей (с версии прошивки 2.4.0.114)


### Минусы

* Довольно высокая цена
* Глюк с контролем доступа в режиме «блокировка по умолчанию»
* Гостевая сеть всегда открыта
* Долгое время загрузки (~3 мин)
* Отсутствие {{< fl "USB" >}}-портов для подключения внешних накопителей для работы в качестве {{< fl "NAS" >}}

## Где купить

Рекомендуемая цена комплекта составляет **€ 426** (я его в своё время за столько и приобрёл), но сейчас его {{< a "https://bit.ly/2nMIMM6" "можно купить за € 369" >}} на {{< fl "bol.com" >}}.