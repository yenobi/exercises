'use strict';

(function (window, document, undefined) {
    'use strict';

    var header = document.querySelector('.page-header');
    var toggler = header.querySelector('.main-nav__hamb');
    var nav = header.querySelector('.main-nav');
    var cross = nav.querySelector('.main-nav__cross');

    toggler.addEventListener('click', toggleMenu);
    cross.addEventListener('click', toggleMenu);

    function toggleMenu() {
        header.classList.toggle('page-header_nav-open');
        //        nav.classList.toggle('main-nav_opened'); 
    };
})(window, document, undefined);