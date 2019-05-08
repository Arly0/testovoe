$(document).ready(function(){
    $('.facebook__city').mouseenter(function () {
        let img = $(this).find('img').attr("src");
        let arrString = img.split('.');
        $(this).find('img').attr("src", arrString[0] + "Orange." + arrString[1]);
        // $(this).find('.facebook__text').css({"color": "#ffbc21";});
    });

    $('.facebook__city').mouseleave(function () {
        let img = $(this).find('img').attr("src");
        let arrString = img.split('Orange');
        $(this).find('img').attr("src", arrString[0] + arrString[1]);
    });
});