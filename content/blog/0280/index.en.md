---
date: "2016-06-12T00:00:00Z"
title: "Ambient backlighting for Samsung LED TV"
tags: ["DIY", "gadgets", "geek porn", "hardware", "IKEA", "light", "Samsung", "TV"]
---

Being quite happy with my [75 inch whopper][post:243] {{< fl "Samsung UE75HU7500" >}}, the only thing I wanted to do about it was giving it ambient backlighting. When watching TV in complete darkness your eyes get quickly tired because of the stark contrast between the bright screen and its dark surroundings. Even though this device features an ambient light sensor, which is used to automatically adjust the screen brightness, the contrast is still all too harsh.

<!--more-->

And when the wall behind the TV is lit, the boundary between the picture and the darkness is blurred, and that's definitely a relief for the eyes.
![](img:1.bp.blogspot.com/-hm2T5wQ66dc/V1g3T1ndPfI/AAAAAAAAmZ8/0mfL1uF2lSwELRekEY7GEOmCXvWL5M5ywCKgB/s1600/20160606_213812.picasaweb.jpg:a "The final result.")

More details and geek porn are under the cut.

## The backlighting {#backlighting}

I purchased three [IKEA Dioder](http://www.ikea.com/us/en/catalog/products/20119418/) sets, *warm white*, each consisting of a 12 volt driver, four LED strips 25 cm (10") each, and connection cables.
![](img:2.bp.blogspot.com/-t-Y6MbOhNX4/V1vfNanLsmI/AAAAAAAAmbA/_MHqWkIShy48f2xsS7Ia7bh2UtRJvCNBQCKgB/s1600/ikea-dioder.jpg:a "IKEA Dioder.")

The strips can be affixed on a surface in two ways: with sticky foam pads or with special metal braces. I've decided to go with the latter option, and involve the TV's back-cover mounting screws for that. The screw heads are some 2-4 mm (depending on the side) under the surface of the cover, so I made appropriate washers from an aluminium tube (inside diameter 4 mm):
![](img:4.bp.blogspot.com/-tPdY3XFy0K0/V1WlYlt8UEI/AAAAAAAAmZA/I_KYNrjYO5seHGfXcptoskC8T0B30SnPQCKgB/s1600/20160527_155446.picasaweb.jpg:a "Washers for the braces.")

Obviously, you'll also need somewhat longer screws, as they need to go through the brace and the washer and securely reach the socket:
![](img:3.bp.blogspot.com/-fjervnH1r9c/V1WlYqrdbyI/AAAAAAAAmZA/9XdgV9T7uNI6khcxdohjhGP8Arh9-A6fwCKgB/s1600/20160527_155534.picasaweb.jpg:a "An affixed brace.")

My initial design included **6 segments** of two strips each: two at the top, two at the bottom, one at each side, which adds up to exactly 12 strips (3 sets × 4 pcs). Therefore I had to make five connection cables. The latter are made from the short ones provided with the set, so what you need to do is to replace the wire with a longer one:
![](img:3.bp.blogspot.com/-VfD37EIco58/V1WlYvxR9MI/AAAAAAAAmZA/a5ls6ygPAqY9dg0knY29b5Yz4dORAszhgCKgB/s1600/20160527_171526.picasaweb.jpg:a "Connection cables.")

The sides of the back-cover are slanting, but the screws are perpendicular to the screen, thus the side strips are mounted at an angle to the cover.

Once the strips are securely fixed, it's a good idea to test it with an external **12 V** DC adapter (it must provide at least **1 A**). It's no rocket surgery, so I got it right the first time:
![](img:3.bp.blogspot.com/-NziOWLFbr_A/V1WlYuEuHaI/AAAAAAAAmZA/8dSyhnQLax4-ISFalidiIlZc-fmcaORtgCKgB/s1600/20160527_171950.picasaweb.jpg:a "Testing the LEDs with an external DC adapter.")

## Powering it up {#powering}

The main challenge that kept me from implementing this originated from the wish that the backlighting automatically goes on and off with the TV set. I've even bought a [solid-state relay][wiki:en:Solid-state_relay] from eBay, which I planned to use to switch the main power of the DC adapter. The control terminals would then be driven from the TV's USB (the SSR's control voltage can range 3 to 20 volts, so the 5 volts from the USB would suit perfectly).

But at a later moment I've got a crazy idea to power the strips directly from the TV's power supply. **12 volts** is a very common voltage with electronics, so I've decided to peek in the whopper's internals.

Below is ~~hardcore~~ geek porn!

To remove the back-cover, one needs to unscrew 10 screws along its edges plus another one next to the component input. Quite expectedly, it isn't very crowded inside the device:
![](img:1.bp.blogspot.com/-KYaivvFAKZg/V1WlYkDMTRI/AAAAAAAAmZA/xEB_yGHxg4k0pytOegCbWDCpA7_IDApCQCKgB/s1600/20160527_122606.picasaweb.jpg:a "The device's electronics.")

**On the left** is the CPU/video processing board and a small solitary fan above it. It's not clear what it's supposed to cool, I guess it simply makes sure the air inside is circulating.
![](img:2.bp.blogspot.com/-DA1ViJiGO70/V1WlYmwjM6I/AAAAAAAAmZA/mtSL-rg-IzwFTls7ydFoLCVz4GV3X3C4QCKgB/s1600/20160527_122654.picasaweb.jpg:a "CPU and video processing card.")

**In the middle** is a controller board for the backlight and the LCD panel.
![](img:1.bp.blogspot.com/-ssCO2yDlBLw/V1WlYtE2oaI/AAAAAAAAmZA/hJxD0yoJG_ApISmDTt1DzjyWU3jRma6sQCKgB/s1600/20160527_122704.picasaweb.jpg:a "Panel controller board.")

**On the right** is a power supply for the above. This one is awe-striking. The whole board is very thin to make the TV as flat as possible, it's hardly more than an inch thick:
![](img:2.bp.blogspot.com/-qWI7ObH5iOo/V1WlYk6R8oI/AAAAAAAAmZA/1Lj5sxG8XVYs7znYxTFH1qH8CUq0reXHACKgB/s1600/20160527_130847.picasaweb.jpg:a "Power supply board.")

The boards seem to be small, but keep in mind the TV is almost two by one metre. So the last board, for example, is about the size of an A3 sheet.

The bottom view of the power supply:
![](img:1.bp.blogspot.com/-DR2Hu_ZQXNY/V1WlYhF3iEI/AAAAAAAAmZA/Lhfy8AQdPfEjFyA-gQAa1tUSwRFEXSk0gCKgB/s1600/20160527_130907.picasaweb.jpg:a "Power supply, bottom view.")

After a careful examination of the board I've found a power source output marked as 13 V, in fact it provided some **12.7 volts**. That is perfect for the LED strips I have. It's quite difficult to state the current that you may draw from it, but judging by the six (!) wire leads connecting it to the backlight controller, it's pretty mighty. Also if you consider the power required by the panel backlight, I'd say it should be capable of supplying some 10-12 amperes.

And my home-brew backlighting would be content with only 800 mA (as one set of four strips draws some 240 mA).

So I've decided to take this risk and connect the LED cable to the output marked *13V*:
![](img:3.bp.blogspot.com/-Tl9Klq37WhM/V1WlYtn1uAI/AAAAAAAAmZA/YbE1DiDhjyI6FY8CoYieJCZ0_Vl3W7EzACKgB/s1600/20160527_131736.picasaweb.jpg:a "The backlighting cable soldered to the board.")

The cable leaves the TV via a slit intended for the foot (which is not used as the TV is hanging on the wall):
![](img:4.bp.blogspot.com/-CLLS6Zf8qRU/V1WlYqbluoI/AAAAAAAAmZA/MUlOKTKZSWoskfE6rtwhjSrO8OfbqjhJQCKgB/s1600/20160527_132351.picasaweb.jpg:a "The backlighting cable.")

In close-up:
![](img:3.bp.blogspot.com/-lTlpGj0aoiA/V1WlYtQOGLI/AAAAAAAAmZA/di4KagjXt7oHL7ARaBahhyVW08nXdkbxQCKgB/s1600/20160527_132358.picasaweb.jpg:a "The backlighting cable.")

All I needed to do was plugging it into the strip (I used a cable from the set), and we're on:
![](img:4.bp.blogspot.com/-jGsY6Vuz15k/V1WlYsk6OdI/AAAAAAAAmZA/YVxj14jgmb0x7gKfa_DCQwGUtIneMK7CwCKgB/s1600/20160527_231028.picasaweb.jpg:a "Operational backlighting.")

But then I didn't like the "gaps" at the top and the bottom; moreover, I thought, we can add a bit *more* light. So I ended up buying another "Dioder" of four strips. I inserted one in the middle at the top, replacing the wire; another one, likewise, at the bottom; and also one at each side.

You've already seen the result on the first photo.

Surprisingly enough, it all operates exactly as intended. The backlighting goes on the same instant as you switch the TV on, and goes out in about five seconds after you press the power button on the remote.

## See also {#see-also}

* **4K UHD TV Samsung UE75HU7500: a complete review**:
    1. [Specifications and unboxing][post:243]
    2. [Connect and control][post:244]
    3. [Accessories][post:245]
    4. [Smart Hub and applications][post:246]
    5. [AV format support][post:247]
    6. [Location, conclusions][post:248]
