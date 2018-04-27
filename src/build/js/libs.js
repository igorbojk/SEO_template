
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


    $('.club-house-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: false,
        arrows: true,
        prevArrow: $('.club-house-slider-container .carousel-control-prev'),
        nextArrow: $('.club-house-slider-container .carousel-control-next')
    });

    if($('.full-screen').length){
        $('.full-screen').attr('href', $('.slide img')[0].src);
    }

    $('.club-house-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){

        $('.full-screen').attr('href', slick.$slides[nextSlide].children[0].currentSrc);

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

    $('.event1-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: false,
        arrows: true,
        prevArrow: $('.event1-slider-prev'),
        nextArrow: $('.event1-slider-next')
    });

    $('.event2-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: false,
        arrows: true,
        prevArrow: $('.event2-slider-prev'),
        nextArrow: $('.event2-slider-next')
    });

    $('.event3-slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: false,
        arrows: true,
        prevArrow: $('.event3-slider-prev'),
        nextArrow: $('.event3-slider-next')
    });



    $('.advice-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){

        var counter = 2;

        if (window.innerWidth < 993) {
            counter = 1;
        }

        if (window.innerWidth < 577) {
            counter = 0;
        }

        if(nextSlide > counter) {
            $('.advice-slider-prev-button').removeClass('d-none');
        }else {
            $('.advice-slider-prev-button').addClass('d-none');
        }
        if(nextSlide < (slick.slideCount - counter )) {
            $('.advice-slider-next-button').removeClass('d-none');
        }else {
            $('.advice-slider-next-button').addClass('d-none');
        }
    });

    $('.advice-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: false,
        initialSlide: 2,
        centerMode: true,
        draggable: false,
        prevArrow: $('.advice-slider-prev-button'),
        nextArrow: $('.advice-slider-next-button'),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 0
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

    window.onscroll=function(){
        window.scrollTo(0, 0);
    };

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