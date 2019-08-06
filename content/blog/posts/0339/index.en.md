---
date: "2018-07-02T00:00:00Z"
title: "Slow connection to MySQL in Docker"
tags: ["containers", "development", "Docker", "Linux", "MySQL"]
image: "https://3.bp.blogspot.com/-KfGkUuzJYBQ/WzpDheKD1ZI/AAAAAAAAsqo/H970WSIWmPgOu7qEpqPfUHUDIljzALuigCKgBGAs/s1600/mysql.png"
---

My current project makes use of the **MySQL** database, which runs in a **Docker** container.

At a certain moment connecting to the database became excruciatingly slow, taking tens of seconds to establish a single connection. After that everything would work as expected.

The application opens a connection some hundred times, so the startup time had become really unacceptable.

I've spent a lot of time hunting that down, and then even more time looking for a solution as I failed to find any on StackOverflow. But finally I've solved this.

<!--more-->
<!--{{< imgfig "https://3.bp.blogspot.com/-KfGkUuzJYBQ/WzpDheKD1ZI/AAAAAAAAsqo/H970WSIWmPgOu7qEpqPfUHUDIljzALuigCKgBGAs/s1600/mysql.png" >}}-->

The culprit was, as I initially thought, the DNS lookup: the database was trying to determine the name of the host that is connecting to it, and the DNS was slow. But in my use case it was a pretty useless operation.

First I tried to pass the `--dns=127.0.0.1` to Docker, but it wouldn't improve the situation.

What did help was MySQL's flag `--skip-name-resolve`: the issue disappeared and making a connection takes milliseconds now.

A container can be started with something like:

```
docker run -e MYSQL_ROOT_PASSWORD=secret mysql:5.7.16 --skip-name-resolve
```

I hope it helps someone struggling with the same issue.