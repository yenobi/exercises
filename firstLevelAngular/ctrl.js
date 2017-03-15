"use strict";

myApp.controller('appCtrl', listCtrl);

function listCtrl($scope) {
  // whole list of first level items
  $scope.list = [
    {
      text: "first test-phrase"
    },
    {
      text: "second test-phrase"
    }
  ];

// can work with such list
// - mb will be moree comfortable, when two more essence
//
  // $scope.list = {
  //   first: {
  //     text: "first"
  //   },
  //   second: {
  //     text: "second"
  //   }
  // };

  $scope.hidePhrase = function() {
    var self = this;

    $scope.list.splice($scope.list.indexOf(self.listItem), 1);
  };

  $scope.addPhrase = function() {
    $scope.list.push({
      text: $scope.newItem.text
    });

    $scope.newItem.text = '';

    $scope.removeFlag();
  };

  // next two expressions look ugly
  $scope.addFlag = function() {
    $scope.formFlag = true;
  };

  $scope.removeFlag = function() {
    $scope.formFlag = false;
  };
};

// little step
// add autofocus to input

// next step
// 1. detect wht plus was clicked
// 2. add newItem.text exactly to the right place of list

// final-step
// add two, then three essence and a tree-render
// essence - сущность (новые массивы)

// - вопрос - могут быть списки не массивами, а объектами?
// ответ: да, только объект объектов (попробую с несколькими
// сущностями)
