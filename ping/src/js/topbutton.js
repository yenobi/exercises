'use strict';

(function(window, document, undefined){
        $(window).scroll(function(){
                if($(this).scrollTop() > 450) {

                        $('.to-top').addClass('to-top-show');
                };

                if($(this).scrollTop() < 450) {
                        $('.to-top').removeClass('to-top-show');
                };

                $('.to-top').click(function(){
                       $('body').scrollTop(0);
                });
        });
})(window, document, undefined);
