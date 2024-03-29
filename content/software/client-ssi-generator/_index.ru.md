---
title: Client SSI Generator
subtitle: Инструмент для применения SSI-шаблонов.
layout: product
icon: client-ssi-generator-icon-64.png
software: client-ssi-generator
weight: 120
menu: client-ssi-generator
active: false
codeRepoType: github
codeRepoPath: yktoo/clssigen
licenses:
    - gpl3
---

**Client SSI Generator** является вспомогательным средством для web-дизайнеров и разработчиков web-страниц и служит для имитации работы SSI-сервера на стороне клиента. Он может использоваться в тех случаях, когда сервис SSI отсутствует на HTTP-сервере или заблокирован, и недоступны сервисы более высокого уровня — такие, как CGI, ASP или PHP.

Если вдруг кто не знает, механизм SSI (Server Side Includes) очень полезен и удобен для создания целостного оформления web-сайтов: это достигается созданием шаблонов, которые автоматически встраиваются сервером в HTML-страницы. Вот как раз в случае, когда такого сервера нет (сервер не поддерживает SSI или же вообще сервер в процессе доставки HTML-контента клиенту отсутствует — например, в файлах справки `.chm`), данная программа частично его заменяет, создавая SSI-контент на рабочем месте дизайнера. Всё же это проще, чем вручную перелопачивать сотни страниц, если потребовалось, например, изменить основное меню сайта.

## Скриншоты

{{< carousel >}}
    screenshot-main.png                Главное окно программы.
    screenshot-project-options-dlg.png Диалог опций проекта.
    screenshot-settings-dlg.png        Диалог настроек программы.
{{< /carousel >}}

## Системные требования

Для работы программы необходимо около 2 МБ места на диске и 8 МБ установленной оперативной памяти (желательно больше для эффективного кэширования файлов).

Операционная система: Windows 95/98/ME/NT/2000/XP.
