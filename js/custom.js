

$( document ).ready(function() {

    $('.slider-section').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });


    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);

});