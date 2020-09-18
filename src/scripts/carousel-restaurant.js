$(document).ready(function(){
    $('.carousel').carousel();

    setInterval(function(){
        $('.carousel').carousel('next');
    }, 3500);
});


$('.carousel.carousel-slider').carousel({fullWidth: true});