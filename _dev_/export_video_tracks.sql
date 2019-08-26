select concat(
        'cat <<EOF >', t.youtube_id, '.en.md\n',
        '---\n',
        'type: videotrack\n',
        'title: "', replace(coalesce(t.name_en, ''), '"', '\\"'), '"\n',
        'youtubeId: "', t.youtube_id, '"\n',
        'videoevents: vevt', lpad(coalesce(t.event_id, 0), 4, '0'), '\n',
        'videoartists: [',
            coalesce(
                (select GROUP_CONCAT(concat('"', name_en, '"') separator ', ')
                    from yo_video_artists a
                    where a.id in (
                        select ta.artist_id
                            from yo_video_tracks_to_artists ta
                            where ta.track_id = t.id)),
                ''),
            ']\n',
        '---\n',
        'EOF\n',
        /* Russian */
        'cat <<EOF >', t.youtube_id, '.ru.md\n',
        '---\n',
        'type: videotrack\n',
        'title: "', replace(coalesce(t.name_ru, ''), '"', '\\"'), '"\n',
        'youtubeId: "', t.youtube_id, '"\n',
        'videoevents: vevt', lpad(coalesce(t.event_id, 0), 4, '0'), '\n',
        'videoartists: [',
            coalesce(
                (select GROUP_CONCAT(concat('"', name_ru, '"') separator ', ')
                     from yo_video_artists a
                     where a.id in (
                         select ta.artist_id
                         from yo_video_tracks_to_artists ta
                         where ta.track_id = t.id)),
                ''),
            ']\n',
        '---\n',
        'EOF\n'
    ) text
    from yo_video_tracks t
