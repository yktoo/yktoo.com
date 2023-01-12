---
title: FAQ
menu: ymuse
weight: 10
---

Veelgestelde vragen over [Ymuse](/software/ymuse).

{{< toc >}}

## Hoe spreek ik "Ymuse" uit?

Als *waj-mjoez*.

## Kun je ondersteuning van MPRIS toevoegen aan Ymuse?

Dat is niet nodig, want er is al het project [mpDris2](https://github.com/eonpatapon/mpDris2) (zie volgende vraag).

## Kan ik mediaknoppen op mijn toetsenbord toewijzen om Ymuse te bedienen?

Niet direct. Maar er is een nog beter alternatief: je kunt je {{< abbr "MPD" "Music Player Daemon" >}}-instantie koppelen aan jouw desktop environment met behulp van [MPRIS](https://wiki.archlinux.org/title/MPRIS). De eenvoudigste manier om dat te doen is door het pakket [mpDris2](https://github.com/eonpatapon/mpDris2) te installeren.

Dan gaat MPD reageren op de mediatoetsen, ongeacht of Ymuse draait of niet.

In Ubuntu kun je het makkelijk doen met:

```bash
sudo apt install mpdris2
```

## Waarom kan ik geen tracks slepen in de wachtrij?

Deze functie is [gepland](https://github.com/yktoo/ymuse/issues/34) maar nog niet geïmplementeerd. Hiervoor is een onderzoek nodig naar de werking van drag-n-drop in GTK, dus het is een kwestie van mijn vrije tijd.
