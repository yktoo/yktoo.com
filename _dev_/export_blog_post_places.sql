select CONCAT(
       /* English name */
       'cat <<EOF >place', lpad(p.id, 4, '0'), '.en.md\n',
       '---\n',
       'title: ', p.name_en, '\n',
       'type: place\n',
       'latitude: ', p.latitude, '\n',
       'longitude: ', p.longitude, '\n',
       '---\n',
       'EOF\n',
       /* Russian name */
       'cat <<EOF >place', lpad(p.id, 4, '0'), '.ru.md\n',
       '---\n',
       'title: ', p.name_ru, '\n',
       'type: place\n',
       'latitude: ', p.latitude, '\n',
       'longitude: ', p.longitude, '\n',
       '---\n',
       'EOF\n',
       /* Dutch name */
       'cat <<EOF >place', lpad(p.id, 4, '0'), '.nl.md\n',
       '---\n',
       'title: ', p.name_nl, '\n',
       'type: place\n',
       'latitude: ', p.latitude, '\n',
       'longitude: ', p.longitude, '\n',
       '---\n',
       'EOF\n') as text
    from (
        select min(id) id, latitude, longitude, min(name_en) name_en, min(name_ru) name_ru, min(name_nl) name_nl
            from yo_blog_post_places
            group by latitude, longitude) p
    order by p.id