$(document).ready(function(){
    
    if ($(window).scrollTop()) {
        $('.menu-container').addClass('bg-menu');
    } else {
        $('.menu-container').removeClass('bg-menu');
    }

    $(window).scroll(function(e) {
        if ($(window).scrollTop() > 50) {
            $('.menu-container').addClass('bg-menu');
        } else {
            $('.menu-container').removeClass('bg-menu');
        }
    })
})