'use strict';

// need to animate toggleClass - how? 
// Transition didnt work

(function(window, document, undefined) {

        $('a.active').click( function() {
                $('.header-nav').toggleClass('header-popup');
          } );

})(window, document, undefined);

// can i delete this event depend on media queries? 