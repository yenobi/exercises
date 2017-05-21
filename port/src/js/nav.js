(function(window, document, undefined) {
    'use strict';
    
    let header = document.querySelector('.page-header');
    let toggler = header.querySelector('.main-nav__toggler');
    let nav = header.querySelector('.main-nav');
    let cross = nav.querySelector('.main-nav__cross');
    
    toggler.addEventListener('click', toggleMenu);
    cross.addEventListener('click', toggleMenu);
    
    function toggleMenu() {
        nav.classList.toggle('main-nav_opened'); 
        
    };
    
})(window, document, undefined);