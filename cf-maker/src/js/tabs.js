(function(window, document, undefined) {
'use strict';
    
    var tab__wrapper = document.querySelector('.js-tab__wrapper');

    var controls = tab__wrapper.querySelectorAll('.js-tabs__list-item');    
    var controlsArray = Array.prototype.slice.call(controls);
    
    var controls__list = tab__wrapper.querySelector('.js-tabs__list');
    
    var content = tab__wrapper.querySelectorAll('.js-tabs__content');
    var contentArray = Array.prototype.slice.call(content);
   
//    to show first one
    showContent();
    
    controls__list.addEventListener('click', toggle_and_show);
    
    function toggle_and_show(e) {
        if(e.target.tagName != 'A') return;
//        hide non-active content
        showContent();
//        toggle active clss
        var last_url = tab__wrapper.querySelector('.js-tabs__list-item_active');
        last_url.classList.toggle('js-tabs__list-item_active');
        
//        add class to new 
        var new_url = e.target;
        new_url.classList.toggle('js-tabs__list-item_active');
        showContent();
    }
    
    function showContent() {
        var active = tab__wrapper.querySelector('.js-tabs__list-item_active');
        
        var index = controlsArray.indexOf(active);
        var active_content = contentArray[index];
        active_content.classList.toggle('js-hidden');
    };
    
    
})(window, document, undefined);
