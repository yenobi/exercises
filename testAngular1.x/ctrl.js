"use strict";

myApp.controller('appCtrl', listCtrl);

function listCtrl($scope) {
  // whole list of first level items
  $scope.list = [
    {
      text: "Я 'сделал кофе'",
      type: "act"
    },
    {
      text: "Через '2' час(а)",
      type: "time"
    },
  ];

  $scope.hidePhrase = function() {
    var self = this;

    $scope.list.splice($scope.list.indexOf(self.listItem), 1);
  };

  $scope.addPhrase = function() {

    if ($scope.newItem.type === 'act') {
      var newText = "Я '" + $scope.newItem.text + "'";

      $scope.list.push({
        text: newText,
        type: $scope.newItem.type
      });

    } else if ($scope.newItem.type === 'time') {
      var newText = "Через '" + $scope.newItem.text + "' час(а)";

      // double this code
      $scope.list.push({
        text: newText,
        type: $scope.newItem.type
      });

    } else if ($scope.newItem.type === 'group') {
      var newText = "Потом '" + $scope.newItem.text + "'";

      $scope.listGroup = [];
      $scope.listGroup.push({
        text: newText,
        type: $scope.newItem.type
      });

      $scope.addInclude();
    };

    $scope.newItem.text = '';

    $scope.removeFlag();

    // подменяет уже имеющиеся пункты списка
    // $scope.list = $scope.listGroup;
  };

  $scope.addInclude = function() {
    return 'list.html';
  };



  // next two expressions look ugly
  $scope.addFlag = function() {
    var self = this;

    $scope.formFlag = true;
    $scope.addToItem = self.listItem;
  };

  $scope.removeFlag = function() {
    $scope.formFlag = false;
  };
  // end of ctrl
};
