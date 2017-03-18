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
    },
    {
      text: "third test-phrase"
    }
  ];

  $scope.hidePhrase = function() {
    var self = this;

    $scope.list.splice($scope.list.indexOf(self.listItem), 1);
  };

  $scope.addPhrase = function() {
    // $scope.addToItem - this is object with phrase
    // if ($scope.list.indexOf($scope.addToItem)) {
    //   // true if > 0
    //   // если элемент - первого порядка
    // };

    // работает, но след уровень создается сразу для всех пунктов первого
    // $scope.listSecond.push({
    //   text: $scope.newItem.text
    // });

    // это для одноурвнего дерева, чтобы вставлять именно там, где хочешь
    $scope.list.splice(($scope.list.indexOf($scope.addToItem) + 1), 0, {
      text: $scope.newItem.text
    });

    $scope.newItem.text = '';

    $scope.removeFlag();
    // $scope.secondLevelFlag = true;
    $scope.addInclude();
  };

  // next two expressions look ugly
  $scope.addFlag = function() {
    var self = this;

    $scope.formFlag = true;
    $scope.addToItem = self.listItem;

    console.log(self.$parent.list);
    // $scope.addToIndex = $scope.list.indexOf(self.listItem);
  };

  $scope.removeFlag = function() {
    $scope.formFlag = false;
  };


// for second level
$scope.listSecond = [
    {
      text: "test-1"
    },
    {
      text: "test-2"
    }
  ];

  $scope.addInclude = function() {
    if ($scope.list.length > 3) {
      return 'list.html';
    }
  };


  // end of ctrl
};

// little step
// add autofocus to input

// next step - realized with splice and index to $scope
// 1. detect wht plus was clicked
// 2. add newItem.text exactly to the right place of list

// final-step
// add two, then three essence and a tree-render
// essence - сущность (новые массивы)

// - вопрос - могут быть списки не массивами, а объектами?
// ответ: да, только объект объектов (попробую с несколькими
// сущностями)


// подсписки - это скорей всего модули со своим контроллером,
// пока отложить, чтобы здесь не сломать все и попробовать на туду-листе
// 1. подключить модуль
// 2. прокинуть туда хтмл
//  - можно ли клонировать имеющийся модуль?
// 3. отрендерить с новым массивом
// 4. применить на этом проекте

// can work with such list (exchange for array)
// - mb will be moree comfortable, when two more essence
//
  // $scope.list = {
  //   first: {
  //     text: "first test-phrase"
  //   },
  //   second: {
  //     text: "second test-phrase"
  //   }
  // };
