/* From the last video...

function TodoService() {
    this.todos = [];
}

TodoService.prototype.getAll = function() {
    return this.todos;
}

*/

class TodoService {

    // when new inst -> new property (this.todos) have been created
    // and we pass type of it (array of Todo inetrfaces)
    // also we can pass todos ad a parameter when create new inst 
    constructor(private todos: Todo[]) {
    }

    getAll() {
        return this.todos;
    }
}

// interfaces didn't compile 
interface Todo {
    name: string;
    state: TodoState;
}

// enums will be compiled
enum TodoState {
    New = 1,
    Active,
    Complete,
    Deleted
}