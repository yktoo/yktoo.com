---
type: post
date: "{{ .Date }}"
title: "{{ replace .Name "-" " " | title }}_POST_NAME_HERE"
tags:
    - {{ cond (eq .Site.Language.Lang "ru") "Нидерланды" "Netherlands" }}
image: "IMAGE_HERE"
#series:
---

...TEXT...

<!--more-->

...MORE...TEXT...