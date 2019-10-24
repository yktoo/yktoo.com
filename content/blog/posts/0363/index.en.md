---
type: post
date: "2019-08-29T14:04:32+02:00"
title: "Querying any vehicle's data by its number plate"
tags:
    - Netherlands
    - RDW
    - car
    - Internet
    - OVI
image: "https://lh3.googleusercontent.com/KWkM5HjDU8F5ZtEjILZcSxxnyW_p3NyhU7Q35uvzGwjmwAO9_HofoimFL-ho63LbIGtgOSqTiZCtvFzzwX5sZ34DXAwqV9kDuL_GiruZ4XrN-J2XtWsRA4WK664xmz5CI2zHHfGqDq2YUMyaLLfh_kf_RvFK2_niYXs4L9xKZSHWmQGXHTcWh7QlxHsNlGOfJFuks6xllBNpArTFQaa2_8pzpA261_ZYDry059mgqRLqHRcGFfBDGI3DlM83OB4v0JXfGeVd9ITAIXrDCoq4L5mthoG4pApRrOOnz0lNy8IIjT6AHEikQTW1uo5X6v_4eLpX3pp58HasHWG_BpdzMA_fnR_OrCB0rFfNS3_gUAalStc8Eat0V81c6VF4-fcIzJMmM8Age9koXUQGJYsMBm5_gmluQWl5tARhZqxkBU8qJGIOkBDqqOtgcEBfyZwUy2kW_mBLcJocBSHuYVKvYr37Vubb9q_a8Ro633sPgwRByFF69K1CTw2CvAcjjh1QquiGDG9IJdqbjfLiS1KhAdeZj3Qjbz9wr98EkO5X35wEjiOPrfvmcLuUXCsTbEX3HKJ-ble3WENNjyyrIM45KSYPlPRpe0EVPir6Xth0OrBPt8EgD3MDFzvHRnEsaMqIWskMlx2oXV1qatI2cR0b5OZbqg1VcvMX=w1502-h847-no"
---

The Netherlands has a public service that provides information about nearly any vehicle registered in the country, given its number plate.

The service is called {{< a "https://ovi.rdw.nl/" "OVI" >}} ({{< fl "Online Voertuig Informatie" >}} or "Online Vehicle Information") and is being run by the State Traffic Service {{< a "https://www.rdw.nl/" "RDW" >}} ({{< fl "Rijksdienst voor het Wegverkeer" >}}), whose responsibility encompasses road infrastructure as well as vehicle certification, including mandatory periodic checkups ({{< a "https://www.rdw.nl/particulier/voertuigen/auto/apk" "APK" >}}).

<!--more-->

Just for your information, in Holland a number plate is always associated with a *specific vehicle* (car, motorbike, scooter etc.) and never gets replaced when it changes hands. Which makes it possible to build a complete track record for that vehicle.

## Example

So let's take my first {{< a "0028" "leased Toyota" "ru" >}} from this twelve-year-old photo as an example:

{{< imgfig "https://3.bp.blogspot.com/-HoibkPanFp0/T420BAgqzqI/AAAAAAAAO_s/eyuRJT6NOl0/s1600/imgp1525.picasaweb.jpg" "Toyota Prius 2009 with me posing." >}}

Type in `16HDK2` in the {{< fl "Kenteken" >}} field at the {{< a "https://ovi.rdw.nl/" "OVI page" >}} and you'll get the following:

{{< imgfig "ovi-kentekencheck-16hdk2.png" "The Toyota's registration data." >}}

One can easily verify it's indeed a {{< fl "Toyota Prius" >}}, grey ({{< fl "Kleur: grijs" >}}), first put on my name on November 16, 2017 at 15:20 ({{< fl "Datum tenaamstelling" >}} in the {{< fl "Vervaldata en historie" >}} section), and has had one business (me) and two private owners throughout its twelve year history (the {{< fl "Aantal eigenaren privé / zakelijk" >}} line).

On the {{< fl "Fiscaal" >}} tab you can see the original ("catalogue", {{< fl "Catalogusprijs" >}}) price for most cars, which was **€ 31,915** in my case.

Obviously, the provided information includes no personal data.

Another thing that might prove useful is the mileage reading classification (*logical* or *illogical*). {{< fl "RDW" >}} records the value at each vehicle's sale (the {{< fl "Tellerstanden" >}} section). 


## Another example

Here's another one, a piece of history spotted somewhere in the nearby woods:

{{< imgfig "https://lh3.googleusercontent.com/KWkM5HjDU8F5ZtEjILZcSxxnyW_p3NyhU7Q35uvzGwjmwAO9_HofoimFL-ho63LbIGtgOSqTiZCtvFzzwX5sZ34DXAwqV9kDuL_GiruZ4XrN-J2XtWsRA4WK664xmz5CI2zHHfGqDq2YUMyaLLfh_kf_RvFK2_niYXs4L9xKZSHWmQGXHTcWh7QlxHsNlGOfJFuks6xllBNpArTFQaa2_8pzpA261_ZYDry059mgqRLqHRcGFfBDGI3DlM83OB4v0JXfGeVd9ITAIXrDCoq4L5mthoG4pApRrOOnz0lNy8IIjT6AHEikQTW1uo5X6v_4eLpX3pp58HasHWG_BpdzMA_fnR_OrCB0rFfNS3_gUAalStc8Eat0V81c6VF4-fcIzJMmM8Age9koXUQGJYsMBm5_gmluQWl5tARhZqxkBU8qJGIOkBDqqOtgcEBfyZwUy2kW_mBLcJocBSHuYVKvYr37Vubb9q_a8Ro633sPgwRByFF69K1CTw2CvAcjjh1QquiGDG9IJdqbjfLiS1KhAdeZj3Qjbz9wr98EkO5X35wEjiOPrfvmcLuUXCsTbEX3HKJ-ble3WENNjyyrIM45KSYPlPRpe0EVPir6Xth0OrBPt8EgD3MDFzvHRnEsaMqIWskMlx2oXV1qatI2cR0b5OZbqg1VcvMX=w1502-h847-no" "Austin 3000 MK II." >}}

The results of the query:

{{< imgfig "ovi-kentekencheck-de6304.png" "The Austin's data." >}}

This red **Austin 3000 MK II** only had a single owner, was made in **1963** but entered Holland in 1990. The catalogue price is unspecified, which is a pity.

## The use of service

According to {{< a "https://ovi.rdw.nl/colofon.aspx" "RDW's terms" >}}, this service may only be used for private purposes and at moderate rates.

There's also a separate {{< a "https://www.rdw.nl/zakelijk/branches/bedrijven/gegevens-bij-de-rdw-raadplegen/grote-hoeveelheden-voertuiggegevens-raadplegen" "paid version" >}} for business customers, which comes in two flavours:

* Browser-based (**€ 0,15** per query), or
* XML API (**€ 510** to subscribe, afterwards **€ 0,06** per query).

This one is in demand for as far as I can see since it's being used on numerous car dealer websites, online classified advertising etc.