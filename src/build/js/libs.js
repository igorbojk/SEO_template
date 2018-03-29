
$( document ).ready(function() {
    $('#carouselExampleControls').carousel({
        interval: 6000
    })
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });
});