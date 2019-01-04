$(function() {

    let sr = ScrollReveal({ reset: false });

    let resized = (function() {

        let height = $(window).height();
        let width = $(window).width();
        $('div#header').css('height', height);

        if (width < 1024) {
            $('div#header').removeClass('desktop').addClass('mobile');
            $('div#about').removeClass('desktop').addClass('mobile');
            $('div#contact').removeClass('desktop').addClass('mobile');
        } else {
            $('div#header').addClass('desktop').removeClass('mobile');
            $('div#about').addClass('desktop').removeClass('mobile');
            $('div#contact').addClass('desktop').removeClass('mobile');
        }

    });

    $(window).resize(function() {
        resized();
    });

    resized();

    sr.reveal('div.image, div.socials, div.menu', {
        origin: 'bottom',
        duration: 1000,
        delay: 400,
        distance: '50%',
        mobile: true
    })

    sr.reveal('div.title', {
        origin: 'bottom',
        duration: 1000,
        delay: 600,
        distance: '60%',
        mobile: true
    })

    sr.reveal('div.hr', {
        origin: 'bottom',
        duration: 1000,
        delay: 800,
        distance: '70%',
        mobile: true
    })

    sr.reveal('div.welcome', {
        origin: 'bottom',
        duration: 1000,
        delay: 1000,
        distance: '80%',
        mobile: true
    })

    sr.reveal('div.container h1, div.container p, div.container div.group-icon, div.tech-icons, div.informations div.six', {
        origin: 'bottom',
        duration: 500,
        delay: 200,
        distance: '80%',
        mobile: true
    })

});