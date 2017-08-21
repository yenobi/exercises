/* From the last video...

function TodoService() {
    this.todos = [];
}

TodoService.prototype.getAll = function() {
    return this.todos;
}

*/

class TodoService {
    //  static property
    //  attached to the scope of todoService 
    // (same in all instances) 

    //  something like lobal vars, should be avoid if i can
    static lastId: number = 0;

    // static method 
    // help to centralize common parts (little) of same logic 
    static getNextId() {
        return TodoService.lastId += 1;
    }

    add(todo: Todo) {
        var newId = TodoService.getNextId();
    }

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

//  this to describe todo with calssical getter/setter
// with extended methods of setter (validation of state)
class SmartTodo {

    _state: TodoState;

    name: string;

    get state() {
        return this._state;
    }

    set state(newState) {

        if (newState == TodoState.Complete) {

            var canBeCompleted =
                this.state == TodoState.Active
                || this.state == TodoState.Deleted;

            if (!canBeCompleted) {
                throw "Todo must be Active or Deleted in order to be marked Completed"
            }
        }

        this._state = newState;
    }

    constructor(name: string) {
        this.name = name;
    }
}

var todo = new SmartTodo("Pick up drycleaning");

todo.state = TodoState.Complete;

todo.state;

// basic class (can't init itself)
class TodoStateChanger {

    constructor(private newState: TodoState) {
    }

    canChangeState(todo: Todo): boolean {
        return !!todo;
    }

    changeState(todo: Todo): Todo {
        if (this.canChangeState(todo)) {
            todo.state = this.newState;
        }

        return todo;
    }

}

// class that extends basic class due to our purposes
class CompleteTodoStateChanger extends TodoStateChanger {

    constructor() {
        super(TodoState.Complete);
    }

    canChangeState(todo: Todo): boolean {
        return super.canChangeState(todo) && (
            todo.state == TodoState.Active
            || todo.state == TodoState.Deleted
        )
    }

}