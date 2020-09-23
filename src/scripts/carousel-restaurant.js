$(document).ready(function(){
    $('.carousel').carousel();

    setInterval(function(){
        $('.carousel').carousel('next');
    }, 6500);
});


$('.carousel.carousel-slider').carousel({
    fullWidth: true, 
    indicators: true
});