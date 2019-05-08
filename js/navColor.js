$(document).ready(function(){
   $('.black').mouseenter(function () {
       $(this).attr("src", "img/arrowOrange.svg");
   });

   $('.white').mouseenter(function () {
       $(this).attr("src", "img/arrowOrange.svg");
   });

    $('.black').mouseleave(function () {
        $(this).attr("src", "img/nav.svg");
    });

    $('.white').mouseleave(function () {
        $(this).attr("src", "img/arrowWhite.svg");
    });
});