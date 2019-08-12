(function () {
    var audio = $('audio');
    var tracks = $('a[type="audio/mpeg"]');
    var curTrack;

    // Bind onClick handlers
    tracks.click(click);

    // Set up the audio element
    audio[0].volume = 1;
    audio.on('ended', next);

    function click(e) {
        e.preventDefault();
        var track = $(this);
        if (track.is('.active')) {
            audio[0].pause();
            track.removeClass('active');
            track.addClass('paused');
        } else {
            play(track);
        }
    }

    function play(track) {
        var audioEl = audio[0];
        var href = track.attr('href');
        if (!curTrack || href !== curTrack.attr('href')) {
            curTrack = track;
            audioEl.src = href;
            audioEl.load();
        }
        audioEl.play();
        tracks.removeClass('active paused');
        track.addClass('active');
    }

    function next() {
        var track = tracks.get(tracks.index(curTrack)+1);
        if (track) {
            play($(track));
        } else {
            tracks.removeClass('active paused');
            curTrack = undefined;
        }
    }

})();

function toggleChords(e) {
    e.preventDefault();
    $("#radiolaria-track-lyrics").toggleClass("chords");
    $('#btnChords').toggleClass("active");
}
