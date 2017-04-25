(function (window, document, undefined) {
    'use strict';
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 450) {
            $('.to-top').addClass('to-top-show');
        } ;

        if($(this).scrollTop() < 450) {
            $('.to-top').removeClass('to-top-show');
        } ;
    });

    $('.to-top').click(function () {
        $('body').animate({
            scrollTop: 0
        }, 1000);
    });
     
})(window, document, undefined);
