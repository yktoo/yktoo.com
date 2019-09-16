---
type: post
date: "2019-09-16T17:06:59+02:00"
title: "New website announcement: abbreviation dictionary afk.best"
tags:
    - Netherlands
    - afk.best
    - web
    - website
    - abbreviations
    - Dutch language
    - announcement
image: afk.best-en.png
---

I've made a simple online service for looking up Dutch abbreviations and their English translations (mostly).

Please meet **{{< a "https://afk.best/en/" "afk.best" >}}**!

<!--more-->

{{< imgfig "afk.best-en.png" "The afk.best website." >}}

You can search abbreviations with or without punctuation, the results will be the same. You can also search the text or the translation.

The lookups are performed on-the-fly, without a page reload.

And if you're curious what the new website's domain name means, you can also find it there: {{< a "https://afk.best/en/#afk." "afk" >}}.

Not all English translations are there yet, it's a work in progress. There's also a completed {{< a "https://afk.best/ru/" "Russian section" >}} available.

## Implementation details

The {{< a "https://afk.best/" "afk.best" >}} website is built using the same {{< a "https://gohugo.io/" "Hugo" >}} engine as the website you're reading this on. The single-page application uses *jQuery* and *Bootstrap*.

The entire source code of the service is {{< a "https://github.com/yktoo/afk.best" "available on GitHub" >}}.

This webapp employs HTML 5 history API, which makes it possible to navigate back and forth through your searches using the <kbd>&larr;</kbd> and <kbd>&rarr;</kbd> browser buttons.

