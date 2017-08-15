//  interfaces, class, enums
var $ = function (selector) {
    // find Dom
};
$.version = 1.12;
var element = $('#container');
var $ = function (selector) {
    // Find DOM element
};
$.version = 1.18;
$.fn.todo = function (todo) {
    if (todo) {
        $(this).data('todo', todo);
    }
    else {
        return $(this).data('todo');
    }
};
var todo = { name: "Pick up drycleaning" };
var container = $('#container');
container.data('todo', todo);
var savedTodo = container.data('todo');
container.todo(todo);
// anonymous types - just to check if var have or no exactly property that i need 
var item;
item = { age: 41 };
function totalLength(x, y) {
    var total = x.length + y.length;
    return total;
}
