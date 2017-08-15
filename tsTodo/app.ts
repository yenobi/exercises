//  interfaces, class, enums

// f.e. to define what i expect to return from REST
//  describe data-stucture
// interface Todo {
//     name: string;
//     completed?: boolean;
// }

// //  describe methods 
// interface ITodoService {
//     add(todo: Todo): Todo;
//     delete(todoId: number): void;
//     getAll(): Todo[];
//     getById(todoId: number): Todo;
// }

// var todo: Todo = {
//     name: 'Do something',
//     completed: false
// };


// interfaces for functions (f.e. libs)
interface jQuery {
    (selector: string): HTMLElement;
    version: number;
} 

var $ = <jQuery>function(selector) {
    // find Dom
}

$.version = 1.12;

var element = $('#container');

var $ = <jQuery>function (selector: string) {
    // Find DOM element
}

$.version = 1.18;


interface Todo {
    name: string;
    completed?: boolean;
}

interface jQuery {
    (selector: (string | any)): jQueryElement;
    fn: any;
    version: number;
}

interface jQueryElement {
    data(name: string): any;
    data(name: string, data: any): jQueryElement;
}

// this didn't overwrigth but extend initial interface
interface jQueryElement {
    todo(): Todo;
    todo(todo: Todo): jQueryElement;
}

$.fn.todo = function (todo?: Todo): Todo {

    if (todo) {
        $(this).data('todo', todo)
    } else {
        return $(this).data('todo');
    }

}

var todo = { name: "Pick up drycleaning" };
var container = $('#container');
container.data('todo', todo)
var savedTodo = container.data('todo');

container.todo(todo);

// anonymous types - just to check if var have or no exactly property that i need 
var item: { name: string };

item = { age: 41 }

function totalLength(x: { length: number }, y: { length: number }): number {
    var total: number = x.length + y.length;
    return total;
}
