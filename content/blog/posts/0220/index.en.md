---
type: post
date: "2014-05-24T00:00:00Z"
title: "Where my foot has trod"
tags: ["blog", "web", "website"]
image: "https://4.bp.blogspot.com/-W1Lp43kTwAM/U4De_mpvaZI/AAAAAAAAdck/zuKIwPEzFjI/s1600/yktoo-blog-map.picasaweb.png"
aliases:
    - /en/blog/post/220
---

A while ago I've added a new section to my website, [Blog Map][route:/blog/map], which shows all places I ever blogged about. You can view related posts by clicking a place marker:
{{< imgfig "https://4.bp.blogspot.com/-W1Lp43kTwAM/U4De_mpvaZI/AAAAAAAAdck/zuKIwPEzFjI/s1600/yktoo-blog-map.picasaweb.png" >}}

<!--more-->

A reverse functionality has also been added to blog posts. At the end of every text you can see a new section, which is only visible in the single-post view mode:
{{< imgfig "https://1.bp.blogspot.com/-cLTwMASyJ_k/U4DhAGtwFJI/AAAAAAAAdc8/UnKSRfEIY0I/s1600/yktoo-post-places.picasaweb.png" >}}

For the nerdy ones I have to say that I'm making use of the [Yii](http://www.yiiframework.com/) extension called [EGMap](http://www.yiiframework.com/extension/egmap/). It also provides a clusterer, which merges adjacent points into one spot at smaller scales.
