'use strict';

// initilization of ctrl? named 1-st parametr

myApp.controller("friendListCtrl", function($scope) {

// can receive this with JSON
  $scope.company = [
    {
      name: "John",
      surname: "Dou",
    },
    {
      name: "Ash",
      surname: "Sparrow",
    },
    {
      name: "Sherlock",
      surname: "Holms",
    }
  ];

  $scope.addFriend = function(friend) {
    $scope.company.push(friend);
    // how to clear inputs?

    // inputs change friend in list - why?
  };

  $scope.deleteFriend = function() {
    var self = this;

    var index = $scope.company.indexOf(self.friend);
    $scope.company.splice(index, 1);
  };

});
