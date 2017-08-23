"use strict";
myToDo.controller('listCtrl', listCtrl);

function listCtrl($scope) {
  $scope.todoList = [
    {
      text: "done task",
      done: true,
      index: 1
    },
    {
      text: "undone task",
      done: false,
      index: 2
    }
  ];

  $scope.$watch(
      function() {
          return $scope.todoList.length;
      },
      function(newValue, oldValue) {
        if ( newValue !== oldValue ) {
         console.log($scope.todoList);
        }
      }
);

  $scope.addTodo = function() {
    $scope.todoList.push({
      text: $scope.todoText,
      done: false,
      index: $scope.todoList.length +1
    });

    $scope.todoText = '';
  };

  $scope.removeCompvared = function() {
    $scope.todoList = $scope.todoList.filter(function(todos) {
      return !todos.done;
    });
  };

  $scope.state = 'new-to-late';

  $scope.indexFilter = function() {

        if ($scope.state === 'new-to-late') {
            $scope.state = 'late-to-new';
            return $scope.todoList.sort( function(a, b) {
                return b.index- a.index;
            } );
        } else if ($scope.state === 'late-to-new') {
            $scope.state = 'new-to-late';

            return $scope.todoList.sort( function(a, b) {
                return a.index - b.index;
            } );
        }
  };

  $scope.nameState = undefined;

  $scope.nameFilter = function() {

      if ( $scope.nameState === undefined || $scope.nameState === 'z-to-a') {
          $scope.nameState = 'a-to-z';

          return $scope.todoList.sort( function(a, b) {
              return a.text.charAt(0) > b.text.charAt(0);
          } );
      } else if ($scope.nameState === 'a-to-z') {
          $scope.nameState = 'z-to-a';

          return $scope.todoList.sort( function(a, b) {
              return b.text.charAt(0) > a.text.charAt(0);
          } );
      };

  };
};
