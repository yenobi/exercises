booky.directive('totalItems', function () {
    return {
        restrict: 'E',
        scope: {
                tablets: '=tablets'
        },
        controller: ['$scope', function($scope) {
            $scope.consoleAmount = function(tablets) {
                // refer to isolated local scope, that have connection to global scope
                console.log(tablets.length);
            }
          }],
        template: `
        <p>total tablets: {{tablets.length}}</p>
        <button ng-click="consoleAmount(tablets)">console tablets amount</button>
        `
    };
});

// <p>total phones: {{ctrl.phones.length}}</p>

// link-property - links ctrl
//   link: function(scope, iElement, iAttrs, ctrl) {
//     //   executed when linked
// },



// messing up with scopes
// scope: {
//     nameOfPropertyInDir: 'nameOfPropertyInGlobalScope'
// }
// <dir nameOfPropertyInDir="nameOfPropertyInCtrl"></dir>







// function (scope, element, attrs) {
//     var phones = self.phones;
//     var tablets = self.tablets;
//
//     // if (ctrl.setFile() == 'tabletsList.html') {
//     //     console.log(tablets.length);
//     // } esle {
//     //     console.log(phones.length);
//     // }
// }
