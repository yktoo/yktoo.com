---
type: post
date: "2014-05-24T00:00:00Z"
title: "Где ступала моя нога"
tags: ["блог", "веб", "сайт"]
image: "https://4.bp.blogspot.com/-W1Lp43kTwAM/U4De_mpvaZI/AAAAAAAAdck/zuKIwPEzFjI/s1600/yktoo-blog-map.picasaweb.png"
aliases:
    - /ru/blog/post/220
---

Некоторое время назад я запустил на сайте новый подраздел {{< a "/blog/map" "Карта блога" >}}, который отображает на карте все места, о которых я когда-либо писал. Если кликнуть на маркере, появляется список постов:

{{< imgfig "https://4.bp.blogspot.com/-W1Lp43kTwAM/U4De_mpvaZI/AAAAAAAAdck/zuKIwPEzFjI/s1600/yktoo-blog-map.picasaweb.png" >}}

<!--more-->

Аналогичная функциональность была добавлена и в посты — в конце поста появился специальный раздел (отображается только в режиме просмотра полного текста поста):

{{< imgfig "https://1.bp.blogspot.com/-cLTwMASyJ_k/U4DhAGtwFJI/AAAAAAAAdc8/UnKSRfEIY0I/s1600/yktoo-post-places.picasaweb.png" >}}

Для тех, кому интересны технические подробности, могу сообщить, что используется [Yii](http://www.yiiframework.com/)-расширение [EGMap](http://www.yiiframework.com/extension/egmap/). В нём также активирован кластерер, объединяющий близко расположенные точки при мелком масштабе.
