---
date: "2016-10-30T00:00:00Z"
title: "Fixing whining noise from a DC adapter"
tags: ["DIY", "gadgets", "geek porn", "hardware"]
image: "https://2.bp.blogspot.com/-N4iaQRbUC6M/WBWuYY9ca3I/AAAAAAAAoKI/CxI2CDiqfZ0QxRQfj6EjvF18M4TeAGXhgCPcB/s1600/20161027_140431.picasaweb.jpg"
---

I've stumbled upon a cute and convenient DC adapter the other day, with four USB charging ports (up to **4800 mA** total), a power socket, and a tablet stand. All of that for less than **€ 15**.
{{< imgfig "https://2.bp.blogspot.com/-N4iaQRbUC6M/WBWuYY9ca3I/AAAAAAAAoKI/CxI2CDiqfZ0QxRQfj6EjvF18M4TeAGXhgCPcB/s1600/20161027_140431.picasaweb.jpg" "USB charger with power socket and tablet stand." >}}

A bit later turned out there's a pitfall, too: it produced annoying whining noise. The noise was quiet but clearly audible in silence, especially while the adapter was unloaded.

<!--more-->

As explained in the [internets](http://superuser.com/questions/832480/why-do-some-ac-adapters-and-power-supplies-generate-a-whining-noise-and-what-ca), this problem usually occurs in inexpensive devices, and the noise is produced by the high frequency transformer, which hasn't been assembled or affixed firmly enough. To fix that it's commonly recommended to use {{< wiki "Hot-melt_adhesive" "en" "hot-melt adhesive" >}} against the transformer to "solidify" the coils and the core. I had both a glue gun and sticks so I've decided to try that out.

The screws holding the device's cover had a fancy tri-wing head (just like the logo of [Yktoo Solutions](https://www.yktoo.solutions/)), but I bought a bit set for all imaginable screw heads a long time ago. The device's case wasn't very crowded, with the DC adapter on a separate PCB. To get to the transformer I had to remove an angular heat-sink from the voltage regulator:
{{< imgfig "https://4.bp.blogspot.com/-x4-jOUYWL0M/WBWuYatQOkI/AAAAAAAAoKI/9Em7C1Kg37UTeohL-D_adknWOQk0bxChwCPcB/s1600/20161027_133011.picasaweb.jpg" "Cover and heat-sink are removed." >}}

Here's the culprit:
{{< imgfig "https://3.bp.blogspot.com/-1hpCjcU7CCo/WBWuYVHESSI/AAAAAAAAoKI/2F3027D1zt40AReUgg0zI1BlPwUdjCJngCPcB/s1600/20161027_133021.picasaweb.jpg" "The whining culprit." >}}

The rest is simple. Just grab the glue gun and apply the glue all around the transformer. Shape the glue gob with a metal plate while it's still soft, than keep the plate until the material has solidified:
{{< imgfig "https://1.bp.blogspot.com/-P1sTGUWHPOk/WBWuYRdBOUI/AAAAAAAAoKI/OugJzFLxmi4cZgHPFGM9oxNt4ZMtYnhHgCPcB/s1600/20161027_134835.picasaweb.jpg" "The glue is applied and shaped." >}}

That's about it. Replace the angle heat-sink:
{{< imgfig "https://1.bp.blogspot.com/-KnenH1Ey2LM/WBWuYXkr6HI/AAAAAAAAoKI/NKYsmp4BqoADftBscd5pFZ5xCUyJfweXwCPcB/s1600/20161027_135413.picasaweb.jpg" "Board and heat-sink are fixed." >}}

The outcome was very satisfying. The noise didn't go away completely, but it got significantly quieter, so that, with the cover in place, it's almost inaudible now.
