select concat(
    # English file
    'cat <<EOF > ', lpad(t.id, 3, '0'), '.en.md\n',
    '---\n',
    'title: "', t.name_en, '"\n',
    'type: musicTracks\n',
    'musicAlbum: ', (select name_en from yktoo.yo_music_albums a where a.id = t.album_id), '\n',
    'author: ', t.author, '\n',
    'trackNumber: ', t.track_number, '\n',
    'length: ', coalesce(t.length, 0), '\n',
    'isInstrumental: ', (case when t.is_instrumental = 0 then 'false' else 'true' end), '\n',
    'mediaFileUrl: ', coalesce(t.media_file_url, ''), '\n',
    '---\n\n',
    case when t.is_instrumental = 0 then trim(t.lyrics) else '*(instrumental)*' end, '\n',
    'EOF\n\n',
    # Russian file
    'cat <<EOF > ', lpad(t.id, 3, '0'), '.ru.md\n',
    '---\n',
    'title: "', t.name_ru, '"\n',
    'type: musicTracks\n',
    'musicAlbum: ', (select name_ru from yktoo.yo_music_albums a where a.id = t.album_id), '\n',
    'author: ', t.author, '\n',
    'trackNumber: ', t.track_number, '\n',
    'length: ', coalesce(t.length, 0), '\n',
    'isInstrumental: ', (case when t.is_instrumental = 0 then 'false' else 'true' end), '\n',
    'mediaFileUrl: ', coalesce(t.media_file_url, ''), '\n',
    '---\n\n',
    case when t.is_instrumental = 0 then trim(t.lyrics) else '*(инструментальная композиция)*' end, '\n',
    'EOF\n\n'
) text
    from yktoo.yo_music_tracks t
    order by t.id