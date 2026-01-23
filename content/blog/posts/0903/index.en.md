---
type: post
date: "2025-12-09T11:30:44+01:00"
title: "3.15.0 Iveagh"
tags:
    - Comentario
    - web
    - software
    - development
    - release
    - Go
    - Angular
image: "https://res.cloudinary.com/yktoo/image/upload/v1765275803/blog/uorjo9mfrrfc4n4boder.jpg"
imageCredit: "AI-generated image."
series: comentario
software: comentario
---

Just in time for Christmas, **Comentario** [**3.15.0 Iveagh**](https://gitlab.com/comentario/comentario/-/releases/v3.15.0) is released!

[Comentario](/software/comentario) is a fast and powerful free comment server for web pages, written in Go.

{{< imgfig "https://res.cloudinary.com/yktoo/image/upload/v1765275803/blog/uorjo9mfrrfc4n4boder.jpg" "AI-generated image." >}}

> <i class="fas fa-info-circle"></i> You can follow relevant news in the [Comentario blog](/series/comentario) or via {{< rss-permalink "/series/comentario" "RSS" >}}.

## What's new

<!--more-->

### Configuration management

The release *Iveagh* brings significant changes related to server configuration management, some of which are **breaking**.

#### YAML config file support

The first and foremost is a long-awaited support for storing [static server configuration](https://docs.comentario.app/en/configuration/backend/static/) in a file. Instead of specifying every needed option via command line or environment variables, you can now write a complete YAML file, then refer to it using the `-c` CLI option or `$CONFIG_FILE` environment variable.

The easiest way to get started with a YAML-based config is allowing Comentario to write out its current settings using the following command:

```bash
comentario --config-write-to=/path/to/file.yaml
```

Then you can modify all settings to your taste.

#### Option groups

Some options were grouped and/or renamed, below is an overview of the most important ones.

{{< table "table table-striped" >}}

| Old option             | New option                   | Environment variable equivalent |
|------------------------|------------------------------|---------------------------------|
| `-v`                   | `--log.level=info`           | `$LOG_LEVEL=info`               |
| `-vv`                  | `--log.level=debug`          | `$LOG_LEVEL=debug`              |
| `--no-color`           | `--log.no-color`             | `$LOG_NO_COLOR`                 |
| `--log-full-ips`       | `--log.full-ips`             | `$LOG_FULL_IPS`                 |
| `--db-debug`           | `--db.debug`                 |                                 |
| `--db-idle-conns`      | `--db.max-idle-conns`        | `$DB_MAX_IDLE_CONNS`            |
| `--no-page-view-stats` | `--stats.disable-page-views` | `$STATS_DISABLE_PAGE_VIEWS`     |
| `--stats-max-days`     | `--stats.max-days`           | `$STATS_MAX_DAYS`               |
| `--no-live-update`     | `--lu.disable`               | `$NO_LIVE_UPDATE`               |
| `--ws-max-clients`     | `--lu.max-clients`           | `$WS_MAX_CLIENTS`               |

{{< /table >}}

See the [Static configuration](https://docs.comentario.app/en/configuration/backend/static/) docpage for more detailed information.

#### Dynamic configuration defaults

Storing configuration in a YAML file now also allows for overriding default values for [dynamic configuration](https://docs.comentario.app/en/configuration/backend/dynamic/) items using the `dynamicConfigDefaults` key ([!23](https://gitlab.com/comentario/comentario/-/merge_requests/23)). Here's an example:

```yaml
dynamicConfigDefaults:
  domain:
    defaults:
      comments:
        deletion:
          moderator: false
          author: false
        text:
          maxLength: 512
  integrations:
    useGravatar: false
```

The exact name of the [parameter](https://docs.comentario.app/en/configuration/backend/dynamic/) can be seen in its heading.

### Domain overriding and aliasing

Both Comentario embeddable tags ([`<comentario-comments>`](https://docs.comentario.app/en/configuration/embedding/comments-tag/) and [`<comentario-count>`](https://docs.comentario.app/en/configuration/embedding/count-tag/)) now support a new attribute: [`domain-id`](https://docs.comentario.app/en/configuration/embedding/comments-tag/domain-id/). This is another long-awaited feature ([#109](https://gitlab.com/comentario/comentario/-/issues/109), [#204](https://gitlab.com/comentario/comentario/-/issues/204)), which allows website owners to embed comments (or display counts) intended for a different domain.

To safeguard against "comment hijacking" (when a malicious actor points to your domain on their website) we introduced the so-called origin enforcement mechanism. Each domain can now list [origins](https://developer.mozilla.org/en-US/docs/Glossary/Origin) that are permitted to request comments using the [Allowed origins](https://docs.comentario.app/en/configuration/backend/dynamic/domain.defaults.embed.origins.allowed/) parameter. By default, it only includes the domain itself, but you can extend it with additional domains (such as your website mirror).

Among other things, it also makes it possible to embed comments in a page stored as a local `.html` file. You can find more details about these features and related use cases in the [documentation](https://docs.comentario.app/en/configuration/backend/dynamic/domain.defaults.embed.origins.allowed/).

### Comment drafts

In embedded Comentario, whenever a user drafts a comment, its text will be saved for that page so that they can return to editing it, or submit as a reply to another comment ([#169](https://gitlab.com/comentario/comentario/-/issues/169)).

### Avatars

Avatar images can now be exported and imported using Comentario V3 export format ([#188](https://gitlab.com/comentario/comentario/-/issues/188)). Furthermore, background avatar fetching has been implemented ([#185](https://gitlab.com/comentario/comentario/-/issues/185), obsoletes [!22](https://gitlab.com/comentario/comentario/-/merge_requests/22)).

### SQLite3

Support for local, file-based SQLite3 database is now extended to dynamically-linked Comentario executable; previously, only statically-linked versions could use it.

At the same time, all transaction support has been dropped for SQLite3 due to its inability to handle simultaneous write transactions.

### Other changes

* Embed: comment count widget: translate nonexistent path into 0 comments ([#202](https://gitlab.com/comentario/comentario/-/issues/202))
* Embed: fix rendering users with empty name ([#183](https://gitlab.com/comentario/comentario/-/issues/183))
* Admin UI: refactor list views: filtering, sorting, pagination
* Admin UI: sidebar: fix screenreader class ("Domain" was visible)
* Admin UI: tidy up nav/footer links
* Backend: add `--max-import-file-size` CLI parameter ([#186](https://gitlab.com/comentario/comentario/-/issues/186))
* Backend: domain export: sort comments, pages by ID
* Backend: fix "Concurrent map writes error in embed_i18n.go" ([#198](https://gitlab.com/comentario/comentario/-/issues/198))
* Backend: fix stale transaction in `PageService.insertPageView()`
* Backend: get rid of "generic error" endpoints
* Backend: logging improvements
* Backend: refactor config; embed migrations/templates
* Backend: refactor error handling
* Backend: XSRF handler: fix potential nil deref
* Helm: use ConfigMap instead of env. vars
* Docs: add Cloudron, Railway links ([#63)](https://gitlab.com/comentario/comentario/-/issues/))
* Docs: add OIDC examples page + Discord config ([#180](https://gitlab.com/comentario/comentario/-/issues/180))
* Docs: format CLI options as definition list
* Docs: i18n: mention the need for language key ordering ([!25](https://gitlab.com/comentario/comentario/-/merge_requests/25))
* Docs: remove obsolete SQLite3 warning ([#201](https://gitlab.com/comentario/comentario/-/issues/201))
* Docs: update links to Angular
* I18n: add Korean translation
* Plugin subsystem updates
* CI: build static executable with `CGO_ENABLED=1` ([#201](https://gitlab.com/comentario/comentario/-/issues/201))
* Code: migrate to Go 1.25.5, Angular 21, bump deps
* Code: migrate build to Yarn Berry
* DB: add missing primary keys on `cm_domains_idps`, `cm_domains_extensions` ([#179](https://gitlab.com/comentario/comentario/-/issues/179))
* Docker: fix default static path value

{{< include-file "/blog/_snippets/_comentario-footer.en.md" >}}
