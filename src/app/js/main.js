
$( document ).ready(function() {
    $('#carouselExampleControls').carousel({
        interval: 6000,
        wrap: false,
        ride: false
    });
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

    $('.advice-slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: $('.advice-slider-prev-button'),
        nextArrow: $('.advice-slider-next-button')
    });

    $('.projects-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        prevArrow: $('.projects-slider-prev-button'),
        nextArrow: $('.projects-slider-next-button')
    });

});