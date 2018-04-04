
$( document ).ready(function() {

    $('.priorities-image-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        asNavFor: '.annotation-slider',
        prevArrow: $('.carousel-control-prev'),
        nextArrow: $('.carousel-control-next')
    });

    $('.annotation-slider').slick({
        infinite: false,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        asNavFor: '.priorities-image-slider',
        prevArrow: $('.carousel-control-prev'),
        nextArrow: $('.carousel-control-next')
    });

    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

    $('.clubs-life-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: false,
        arrows: true,
        prevArrow: $('.clubs-life-slider-prev'),
        nextArrow: $('.clubs-life-slider-next')
    });

    $('.advice-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        centerMode: true,
        prevArrow: $('.advice-slider-prev-button'),
        nextArrow: $('.advice-slider-next-button'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.projects-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: $('.projects-slider-prev-button'),
        nextArrow: $('.projects-slider-next-button'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });

    window.onscroll=function(){window.scrollTo(0, 0);};

    setTimeout(function() {
        $('.preloader').addClass('loaded');
    }, 300);

    setTimeout(function() {
        $('.preloader').addClass('change-bg');
    }, 1300);

    setTimeout(function() {
        $('.header-animated-text').removeClass('active');
        $('.head-banner .action-buttons').addClass('fadeIn');
        $('.head-banner .video').addClass('fadeIn');
    }, 1700);

    setTimeout(function() {
        $('.preloader').addClass('fadeOut');
    }, 1750);

    setTimeout(function() {
        $('.preloader').addClass('display-none');
        window.onscroll=function(){};
    }, 2200);

    $('.slide-down').click(function () {
        $('html').animate({
            scrollTop: $('.video').offset().top - 48
        }, 700);
    });

});