$(document).ready(function () {

    // $('.slider-section').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     infinite:false,
    //     dots: true
    //     // asNavFor: '.slider-nav'
    // });


    $('.slider-section.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        mouseDrag: false,
        animateOut: 'fadeOut',
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
            },
            600: {
            },
            1200: {
                dots: true,
            }
        }
    })

    $('.packages-img-slider.owl-carousel').owlCarousel({
        loop: true,
        // margin: 10,
        nav: false,
        items: 1,
        animateOut: 'fadeOut',
        dotas: true,
         autoplay: true,
        autoplay: true,
        autoplayHoverPause: true,
    })

    $('.packages-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        animateOut: 'fadeOut',
        dotas: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })

    //
    // $('.packages-slider').slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     fade: false,
    //     dots: true,
    //     infinite:true,
    //     // asNavFor: '.slider-nav'
    //
    // });
    //
    // $('.testimonial-slider').slick({
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     fade: false,
    //     dots: false,
    //     infinite:true,
    //
    //     // asNavFor: '.slider-nav'
    //
    // });
    //
    // $('.packages-img-slider').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     fade: false,
    //     dots: false,
    //     infinite:true,
    //
    //     // asNavFor: '.slider-nav'
    //
    // });

        (function(){
            var burger = document.querySelector('.burger-container'),
                header = document.querySelector('.header');

            burger.onclick = function() {
                header.classList.toggle('menu-opened');
            }
        }());

    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);

});