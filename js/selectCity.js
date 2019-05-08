$(document).ready(function () {
    $('.city').click(function () {
        $('.select_city').removeClass('hidden');

        $(document).mouseup(function (e) {
            var container = $(".select_city");
            if (container.has(e.target).length === 0){
                container.addClass('hidden');
            }
        });
    });


    $('.sel_city-item').click(function () {
       let inside = $(this).text();
        //inside.replace(/\s/g, '');
       console.log(inside);
        $('.city').val(inside);
    });
});