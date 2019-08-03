---
date: "2011-12-16T00:00:00Z"
title: "Google Music Integration into Ubuntu"
tags: ["Google", "Google Music", "Linux", "music", "Ubuntu"]
---

About a month ago I [posted][post:126] about [Google Music](http://music.google.com/) cloud music storage service opening for public (which is still officially available in the US only).

Uploading 130 GB of music to the cloud has completed in about four days, so now I can enjoy the whole collection online from anywhere—although with some shortcomings (which are perhaps to be eliminated once the service goes out of the beta).
{{< imgfig "https://3.bp.blogspot.com/-SIWgCWPXado/TutmMgf6TOI/AAAAAAAAKmo/o7lxADgiPyw/s1600/google-music.png" >}}

<!--more-->

Some of the limitations can be overcome. For example, you get access to mp3 download feature by installing the [Music Plus for Google Music](http://chrome.google.com/webstore/detail/ipfnecmlncaiipncipkgijboddcdmego) Chrome extension. Additionally, you then no longer have to switch to the Google Music tab to pause or skip to the next track.

I personally preferred the [Play/Pause 4 Grooveshark & Google Music](http://chrome.google.com/webstore/detail/ocimhajpehjmepnegklahceceebnened) extension over the previous one, as it adds a tiny play/pause button right onto the toolbar (there are similar extensions for [Previous](http://chrome.google.com/webstore/detail/iklcgmiodfcphjidljmbbblgbicapmhf) and [Next](http://chrome.google.com/webstore/detail/niblnbcmjmbbadnkhjecmfgnlhafkhja) buttons available):
{{< imgfig "https://4.bp.blogspot.com/--dEgGoBh6cs/TutmL6YLg3I/AAAAAAAAKmY/_nr-R2rK5Sw/s1600/chrome-play-button.png" >}}

With all its advantages, Google Music however is still a webpage running in the browser, and it lacks integration with the operating system. I missed keyboard control the most.

A quick googling yielded the **Google Music Frame** application, also known as [Nuvola Player](http://launchpad.net/nuvola-player) by  Jiří Janoušek, which allows for real integration of Google Music into Ubuntu.

Google Music Frame is essentially Google Music page embedded into the program, and it could hardly be the other way—at least not until Google provides an open API for it:
{{< imgfig "https://3.bp.blogspot.com/-IwHHkktbWhY/TutmL0D2fJI/AAAAAAAAKmg/vzeD5haXL2o/s1600/google-music-frame-main-window.png" >}}

The player adds its items to the Launcher button:
{{< imgfig "https://2.bp.blogspot.com/-PgfdtxiSUZU/TutmL8wZV2I/AAAAAAAAKmc/Lb0BZv93-LA/s1600/google-music-frame-launcher.png" >}}

It also integrates with the Ubuntu Sound Menu:
{{< imgfig "https://4.bp.blogspot.com/-ZCD5vXQ8PJI/TutmMQUphNI/AAAAAAAAKmk/8V93xPRNtUk/s1600/google-music-frame-sound-menu.png" >}}

So, in order to install the application:

    sudo apt-add-repository  ppa:nuvola-player-builders/stable
    sudo apt-get update
    sudo apt-get install google-music-frame

Once you're done, Dash will show the **Google Music Frame** item:
{{< imgfig "https://4.bp.blogspot.com/-dFpo6QEpIIU/Tutumulv0mI/AAAAAAAAKnU/icbSAIF5F50/s1600/google-music-frame-dash.png" >}}

The program can also display standard Ubuntu popup notifications on track change, as well as hanle multimedia control keys. The latter can be assigned in usual way with **GNOME Control Center**:
{{< imgfig "https://2.bp.blogspot.com/-R4cUdouYo9c/TutwLDjdAJI/AAAAAAAAKnw/WVwvwvl6pYQ/s1600/gnome-control-center-keyboard.png" >}}
The only thing missing is [MPD][wiki:en:Music_Player_Daemon]'s ability to play Google Music streams. Maybe if the API goes open?..
