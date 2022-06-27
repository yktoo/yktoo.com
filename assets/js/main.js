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
     * Initialise the scroll-to-top button
     */
    const btnScrollToTop = $('#btn-scroll-to-top');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btnScrollToTop.addClass('show');
        } else {
            btnScrollToTop.removeClass('show');
        }
    });

    btnScrollToTop.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '300');
    });

    /**
     * Magnific popup
     */
    $('.image-popup').magnificPopup({
        type: 'image',
        removalDelay: 160, // Delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function () {
                // Hack that adds mfp-anim class to markup
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        closeOnContentClick: true,
        midClick: true,
        fixedContentPos: false,
        fixedBgPos: true
    });

    /**
     * Initialise the audio player.
     */
    (function () {
        const audio = $('audio');
        const tracks = $('a[type="audio/mpeg"]');
        let curTrack;

        // Bind onClick handlers
        tracks.click(click);

        // Set up the audio element, if any
        if (audio.length > 0) {
            audio[0].volume = 1;
            audio.on('ended', next);
        }

        function click(e) {
            e.preventDefault();
            const track = $(this);
            if (track.is('.active')) {
                audio[0].pause();
                track.removeClass('active');
                track.addClass('paused');
            } else {
                play(track);
            }
        }

        function play(track) {
            const audioEl = audio[0];
            const href = track.attr('href');
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
            const track = tracks.get(tracks.index(curTrack)+1);
            if (track) {
                play($(track));
            } else {
                tracks.removeClass('active paused');
                curTrack = undefined;
            }
        }

    })();

    /**
     * Contact form validation.
     */
    $('#contact-submit-button').click(function (e) {
        const contactForm = $('#contact-form');
        if (contactForm[0].checkValidity() === false) {
            // Stop the form from being submitted
            e.preventDefault();
            e.stopPropagation();
        }
        contactForm.addClass('was-validated');
    });

    // Initialise Animate-on-Scroll
    AOS.init();
});

/**
 * Toggle showing of chords on a lyrics page.
 */
function toggleChords(e) {
    e.preventDefault();
    $("#radiolaria-track-lyrics").toggleClass("chords");
    $('#btnChords').toggleClass("active");
}
