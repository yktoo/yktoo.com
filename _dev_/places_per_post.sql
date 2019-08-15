select
    concat('posts/', lpad(blog_post_id, 4, '0'), '/index.*.md') as path,
    concat(
        'places:\n',
        group_concat(concat('    - place', lpad( (select min(id) from yo_blog_post_places q where q.latitude=p.latitude and q.longitude=p.longitude) , 4, '0')) separator '\n'),
        '\n') as places
from yo_blog_post_places p
group by blog_post_id
