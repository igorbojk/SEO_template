
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
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });

});