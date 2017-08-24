module myToDo {
    'use strict';

    export class TodoItem {
        constructor(
            public text: string,
            public done: boolean,
            public index: number,
        ) { }
    }
}