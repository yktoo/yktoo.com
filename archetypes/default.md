---
type: post
date: "{{ .Date }}"
title: "{{ replace .Name "-" " " | title }}_POST_NAME_HERE"
tags:
    - {{ cond (eq .Site.Language.Lang "ru") "Нидерланды" "Netherlands" }}
#image: ""
#series:
draft: true
---

...TEXT...

<!--more-->

...MORE...TEXT...