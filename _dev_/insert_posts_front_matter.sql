select concat(
    'sed -i \'1s/^/---\\n',
    'date: "', date, '"\\n',
    'title: "', replace(replace(title, '/', '\\/'), '\'', '\'"\'"\''), '"\\n',
    case
        when group_title is not null
            then concat('group: "', replace(replace(group_title, '/', '\\/'), '\'', '\'"\'"\''), '"\\n')
        else ''
        end,
    'tags: [', replace(replace(tags, '/', '\\/'), '\'', '\'"\'"\''), ']\\n',
    '---\\n\\n/\' ',
    id, '/index.', lang, '.md') text
  from (
      select lpad(p.id, 4, 0) id,
          case
              when t.lang = 'en'
                  then p.name_en
              when t.lang = 'ru'
                  then p.name_ru
              when t.lang = 'nl'
                  then p.name_nl
              end title,
          case
              when t.lang = 'en'
                  then g.name_en
              when t.lang = 'ru'
                  then g.name_ru
              when t.lang = 'nl'
                  then g.name_nl
              end group_title,
          DATE_FORMAT(p.pub_date, '%Y-%m-%dT%TZ') date,
          t.lang,
          t.tags
      from yktoo.yo_blog_posts p
      left outer join
          (select GROUP_CONCAT(concat('"', tag, '"') separator ', ') tags, lang, blog_post_id
              from yktoo.yo_blog_post_tags
              group by blog_post_id, lang) t
            on t.blog_post_id = p.id
      left outer join yktoo.yo_blog_post_groups g on g.id = p.group_id
      where p.id != 286
  ) q