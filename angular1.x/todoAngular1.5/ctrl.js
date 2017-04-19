"use strict";
// initialization of ctrl
myToDo.controller('listCtrl', listCtrl);

// describe what ctrl can do
function listCtrl($scope) {
  $scope.todoList = [
    {
      text: "learn angular basics",
      done: false
    },
    {
      text: "do mu first todo-list",
      done: false
    }
  ];

  $scope.addTodo = function() {
    $scope.todoList.push({
      text: $scope.todoText,
      done: false
    });

    // just cleaning
    $scope.todoText = '';
  };

  $scope.removeCompleted = function() {
    $scope.todoList = $scope.todoList.filter(function(todos) {
      return !todos.done;
    });
  };
};
