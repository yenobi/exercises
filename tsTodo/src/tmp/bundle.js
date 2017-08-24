"use strict";
System.register("app", ["angular"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var angular, todos;
    return {
        setters: [
            function (angular_1) {
                angular = angular_1;
            }
        ],
        execute: function () {
            // should it be module ?
            (function (todos) {
                var myToDo = angular.module('myToDo', []);
            })(todos || (todos = {}));
        }
    };
});
var myToDo;
(function (myToDo) {
    'use strict';
    var TodoItem = (function () {
        function TodoItem(text, done, index) {
            this.text = text;
            this.done = done;
            this.index = index;
        }
        return TodoItem;
    }());
    myToDo.TodoItem = TodoItem;
})(myToDo || (myToDo = {}));
var str1 = 'hello';
var str2 = 'world';
console.log(str1 + str2);
//# sourceMappingURL=bundle.js.map