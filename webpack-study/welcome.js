'use strict';

module.exports = function(msg) {
    alert(`Welcome ${msg}`);
    
    if(NODE_ENV == 'dev') {
        console.log(msg);
    }
};
