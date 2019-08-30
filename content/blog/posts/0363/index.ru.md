---
type: post
date: "2019-08-29T14:04:32+02:00"
title: "Как узнать данные любой машины по её номеру"
tags:
    - Нидерланды
    - RDW
    - авто
    - Интернет
    - OVI
image: "https://lh3.googleusercontent.com/KWkM5HjDU8F5ZtEjILZcSxxnyW_p3NyhU7Q35uvzGwjmwAO9_HofoimFL-ho63LbIGtgOSqTiZCtvFzzwX5sZ34DXAwqV9kDuL_GiruZ4XrN-J2XtWsRA4WK664xmz5CI2zHHfGqDq2YUMyaLLfh_kf_RvFK2_niYXs4L9xKZSHWmQGXHTcWh7QlxHsNlGOfJFuks6xllBNpArTFQaa2_8pzpA261_ZYDry059mgqRLqHRcGFfBDGI3DlM83OB4v0JXfGeVd9ITAIXrDCoq4L5mthoG4pApRrOOnz0lNy8IIjT6AHEikQTW1uo5X6v_4eLpX3pp58HasHWG_BpdzMA_fnR_OrCB0rFfNS3_gUAalStc8Eat0V81c6VF4-fcIzJMmM8Age9koXUQGJYsMBm5_gmluQWl5tARhZqxkBU8qJGIOkBDqqOtgcEBfyZwUy2kW_mBLcJocBSHuYVKvYr37Vubb9q_a8Ro633sPgwRByFF69K1CTw2CvAcjjh1QquiGDG9IJdqbjfLiS1KhAdeZj3Qjbz9wr98EkO5X35wEjiOPrfvmcLuUXCsTbEX3HKJ-ble3WENNjyyrIM45KSYPlPRpe0EVPir6Xth0OrBPt8EgD3MDFzvHRnEsaMqIWskMlx2oXV1qatI2cR0b5OZbqg1VcvMX=w1502-h847-no"
---

В Нидерландах есть сервис, с помощью которого можно легко и к тому же бесплатно получить данные практически по любому зарегистрированному в стране транспортному средству, зная его номер.

Называется этот сервис {{< a "https://ovi.rdw.nl/" "OVI" >}} ({{< fl "Online Voertuig Informatie" >}}, «онлайн-информация о транспортном средстве») и предоставляется он государственной службой {{< a "https://www.rdw.nl/" "RDW" >}} ({{< fl "Rijksdienst voor het Wegverkeer" >}}, Государственная дорожная служба). Она ответственна за дороги, а также контролирует состояние транспортных средств, включая периодический техосмотр ({{< a "https://www.rdw.nl/particulier/voertuigen/auto/apk" "APK" >}}).

<!--more-->

Для сведения, в Голландии номер всегда закреплён *за конкретной машиной* (скутером, мотоциклом и т.д.) и не меняется при смене владельца. Благодаря этому появляется возможность отследить полную её историю.

## Например

Возьмём для примера мою {{< a "0028" "лизинговую Тойоту" >}}, фото двенадцатилетней давности:
{{< imgfig "https://3.bp.blogspot.com/-HoibkPanFp0/T420BAgqzqI/AAAAAAAAO_s/eyuRJT6NOl0/s1600/imgp1525.picasaweb.jpg" "Toyota Prius 2009 и я перед ней." >}}

Вбиваем номер `16HDK2` в поле {{< fl "Kenteken" >}} на {{< a "https://ovi.rdw.nl/" "странице OVI" >}} и немедленно получаем следующую информацию:
{{< imgfig "ovi-kentekencheck-16hdk2.png" "Данные «Тойоты» по номерному знаку." >}}

Легко можно проверить, что это действительно {{< fl "Toyota Prius" >}}, цвет серый ({{< fl "Kleur: grijs" >}}), была она зарегистрирована на меня 16 ноября 2017 года в 15:20 ({{< fl "Datum tenaamstelling" >}} в разделе {{< fl "Vervaldata en historie" >}}), и за свою долгую историю была во владении одного владельца-юрлица (которым был я) и после меня ещё двух частников (строчка {{< fl "Aantal eigenaren privé / zakelijk" >}}).

На вкладке {{< fl "Fiscaal" >}} у большинства машин можно увидеть изначальную цену «по каталогу» ({{< fl "Catalogusprijs" >}}) — в моём случае **€ 31 915**.

Сервис, разумеется, предоставляет лишь обезличенную информацию. Также по нему можно проверить, не скручивали ли счётчик километража — {{< fl "RDW" >}} фиксирует показания при каждой продаже (секция {{< fl "Tellerstanden" >}}). 


## Ещё пример

Или вот доисторическое ископаемое, замеченное где-то в окрестных лесах:

{{< imgfig "https://lh3.googleusercontent.com/KWkM5HjDU8F5ZtEjILZcSxxnyW_p3NyhU7Q35uvzGwjmwAO9_HofoimFL-ho63LbIGtgOSqTiZCtvFzzwX5sZ34DXAwqV9kDuL_GiruZ4XrN-J2XtWsRA4WK664xmz5CI2zHHfGqDq2YUMyaLLfh_kf_RvFK2_niYXs4L9xKZSHWmQGXHTcWh7QlxHsNlGOfJFuks6xllBNpArTFQaa2_8pzpA261_ZYDry059mgqRLqHRcGFfBDGI3DlM83OB4v0JXfGeVd9ITAIXrDCoq4L5mthoG4pApRrOOnz0lNy8IIjT6AHEikQTW1uo5X6v_4eLpX3pp58HasHWG_BpdzMA_fnR_OrCB0rFfNS3_gUAalStc8Eat0V81c6VF4-fcIzJMmM8Age9koXUQGJYsMBm5_gmluQWl5tARhZqxkBU8qJGIOkBDqqOtgcEBfyZwUy2kW_mBLcJocBSHuYVKvYr37Vubb9q_a8Ro633sPgwRByFF69K1CTw2CvAcjjh1QquiGDG9IJdqbjfLiS1KhAdeZj3Qjbz9wr98EkO5X35wEjiOPrfvmcLuUXCsTbEX3HKJ-ble3WENNjyyrIM45KSYPlPRpe0EVPir6Xth0OrBPt8EgD3MDFzvHRnEsaMqIWskMlx2oXV1qatI2cR0b5OZbqg1VcvMX=w1502-h847-no" "Раритет: Austin 3000 MK II." >}}

Вбиваем и получаем:

{{< imgfig "ovi-kentekencheck-de6304.png" "Данные «Остина» по номеру." >}}

Красный «Остин», единственный владелец, **1963** года производства, но в Нидерланды попал лишь в 1990-м. Цена по каталогу, к сожалению, неизвестна.

## Использование сервиса

По {{< a "https://ovi.rdw.nl/colofon.aspx" "правилам RDW" >}} эту службу разрешается использовать лишь частным лицам и в небольших объёмах.

Для бизнес-клиентов есть отдельный, {{< a "https://www.rdw.nl/zakelijk/branches/bedrijven/gegevens-bij-de-rdw-raadplegen/grote-hoeveelheden-voertuiggegevens-raadplegen" "платный" >}} сервис в двух вариантах:

* Через браузер (**€ 0,15** за запрос), либо
* XML API (**€ 510** за подключение, потом **€ 0,06** за запрос).

Сервис, насколько я могу судить, довольно успешный: им пользуется множество автодилеров, сайтов объявлений по продаже машин и т.п.