
$( document ).ready(function() {
    $('#carouselExampleControls').carousel({
        interval: 6000,
        wrap: false,
        ride: false
    });
    $('#mobileCarousel').carousel({
        interval: 6000,
        wrap: false,
        ride: false
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
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
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

});