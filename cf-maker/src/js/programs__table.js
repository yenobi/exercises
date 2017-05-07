(function(window, document, undefined) {
'use strict';
    
    var table = document.querySelector('.js-table-wrapper');
    
    var more = table.querySelector('.js-programs__table-more');
    
    more.addEventListener('click', showTable);

    function showTable(e) {
        var hidden = Array.prototype.slice.call(table.querySelectorAll('.programs__table-hidden'));
        hidden.forEach(function(item) {
            item.classList.toggle('js-programs__table-hidden');
        })

        e.preventDefault();  
    };
    
})(window, document, undefined);