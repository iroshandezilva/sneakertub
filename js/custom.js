

$( document ).ready(function() {

    $('.slider-section').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });


    $('.js-tilt').tilt({
        maxTilt:8,
        perspective:    600
    })

});