$(document).ready(function(){
    $(window).scroll(function () {
        let top = $(this).scrollTop(),
            el  = $('.border-arrow');
        if(top >= 500)
        {
            el.removeClass('hidden');
        }
        else
        {
            el.addClass('hidden');
        }
    });

    $('.border-arrow').mouseenter(function(){
        $(this).css({"background-color": "#3F3F3F"});
        $('.arrow-to-up').attr("src", "img/arrowWhite.svg");
        $('.arrow-to-up').css({"opacity": "1"});
    });
    $('.border-arrow').mouseleave(function(){
        $(this).css({"background": "none"});
        $('.arrow-to-up').attr("src", "img/arrow.svg");
        $('.arrow-to-up').css({"opacity": "0.2"});
    });
});

