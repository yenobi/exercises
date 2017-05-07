(function(window, document, undefined) {
'use strict';
    
    var wrapper = document.querySelector('.js-study-plan');
    
    var more = Array.prototype.slice.call(wrapper.querySelectorAll('.js-study-plan__more'));
    
    more.forEach(function(item) {
        item.addEventListener('click', showPlan);
    });
    
    function showPlan(e) {
        var parent = e.target.parentElement;
        var hidden = parent.querySelector('.study-plan__hidden');
        hidden.classList.toggle('js-study-plan__hidden');
        
      e.preventDefault();  
    };
})(window, document, undefined);
