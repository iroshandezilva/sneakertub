

$( document ).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 150) {
            $('.navbar').addClass("sticky-top-nav");
        } else {
            $('.navbar').removeClass("sticky-top-nav");
        }
    });


    (function(){
        var burger = document.querySelector('.burger-container'),
            header = document.querySelector('.header');

        burger.onclick = function() {
            header.classList.toggle('menu-opened');
        }
    }());

});