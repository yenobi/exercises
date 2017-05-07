(function(window, document, undefined) {
'use strict';
    
    var header = document.querySelector('.page-header');
    var toggler = header.querySelector('.page-header__nav-toggler');
    var close = header.querySelector('.main-nav__cross');
    
    toggler.addEventListener('click', toggleMenu);
    close.addEventListener('click', toggleMenu);
    
    function toggleMenu(e) {
      header.classList.toggle('page-header_dropdown'); 
      e.preventDefault();  
    };
    
})(window, document, undefined);