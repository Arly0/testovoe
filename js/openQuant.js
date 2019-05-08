$(document).ready(function () {
    $('.quantity').click(function () {
        $('.buy__quant').removeClass('hidden');

        $(document).mouseup(function (e) {
            var container = $(".buy__quant");
            if (container.has(e.target).length === 0){
                container.addClass('hidden');
            }
        });
    });

    $('.minus').click(function () {
       let value = $(this).parent().find('.quantity-num').text();
       value--;
       if(value < 0){
           return false;
       }
       else {
           $(this).parent().find('.quantity-num').text(value);

           // присваивание числа в инпут
           let cl = $(this).parent().parent().attr("class").split(' ')[0];
           let str;
           switch (cl) {


               case ('buy__quant-num') :{
                   str = $('input.quantity').val();
                   let del = str.split('-');
                   str = value + " номера -" + del[1] + "-" + del[2];
                   console.log('shit');
                   $('input.quantity').val(str);
                   break;
               }


               case ('buy__quant-old') :{
                   str = $('input.quantity').val();
                   let del = str.split('-');
                   str = del[0] + "- " +  value + " дорослих -" + del[2];
                   console.log('piss');
                   $('input.quantity').val(str);
                   break;
               }

               case ('buy__quant-young') :{
                   str = $('input.quantity').val();
                   let del = str.split('-');
                   str = del[0] + "-" + del[1] + "- " + value + " дітей";
                   console.log('off');
                   $('input.quantity').val(str);
                   break;
               }


           }

       }
    });

    $('.plus').click(function () {
        let value = $(this).parent().find('.quantity-num').text();
        value++;
        if(value > 10){
            return false;
        }
        else {
            $(this).parent().find('.quantity-num').text(value);

            let cl = $(this).parent().parent().attr("class").split(' ')[0];
            let str;
            switch (cl) {


                case ('buy__quant-num') :{
                    str = $('input.quantity').val();
                    let del = str.split('-');
                    str = value + " номера -" + del[1] + "-" + del[2];
                    console.log('shit');
                    $('input.quantity').val(str);
                    break;
                }


                case ('buy__quant-old') :{
                    str = $('input.quantity').val();
                    let del = str.split('-');
                    str = del[0] + "- " +  value + " дорослих -" + del[2];
                    console.log('piss');
                    $('input.quantity').val(str);
                    break;
                }

                case ('buy__quant-young') :{
                    str = $('input.quantity').val();
                    let del = str.split('-');
                    str = del[0] + "-" + del[1] + "- " + value + " дітей";
                    console.log('off');
                    $('input.quantity').val(str);
                    break;
                }


            }
        }
    });
});