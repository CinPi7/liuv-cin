$(document).ready(function(){
    $('.carousel').carousel();

    setInterval(function(){
        $('.carousel').carousel('next');
    }, 1800);
});
$('.carousel.carousel-slider').carousel({fullWidth: false});