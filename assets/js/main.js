$(document).ready(function () {

    /**
     * Init the cookie consent.
     */
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#089664",
                "text": "#fff"
            },
            "button": {
                "background": "#fc0"
            }
        },
        "content": {
            "message": cookieMessage,
            "dismiss": cookieDismiss,
            "link":    cookieLink,
            "href":    cookieInfoUrl
        },
        "position": "bottom"
    });

    /**
     * Initialise the audio player.
     */
    (function () {
        var audio = $('audio');
        var tracks = $('a[type="audio/mpeg"]');
        var curTrack;

        // Bind onClick handlers
        tracks.click(click);

        // Set up the audio element, if any
        if (audio.length > 0) {
            audio[0].volume = 1;
            audio.on('ended', next);
        }

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

});

/**
 * Toggle showing of chords on a lyrics page.
 */
function toggleChords(e) {
    e.preventDefault();
    $("#radiolaria-track-lyrics").toggleClass("chords");
    $('#btnChords').toggleClass("active");
}
