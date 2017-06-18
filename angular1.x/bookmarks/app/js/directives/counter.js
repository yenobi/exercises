booky.directive('counter',
    function() {
        return {
            restrict: 'E',
            // require: '^counterInput',
            scope: {
                //  not define to counterInput
                counterInput: '='
            },
            controller: ['$scope', function($scope) {

              }],
              link: function(scope, element, attr) {
                  scope.consoleSmth = function() {
                      console.log('smth');
                  }
              },
            template: `
            <button ng-click="consoleSmth()">consoleSmth</button>
            `
        }
    });

    // <input ng-model="ctrl.counterInput"  type="number" style="max-width: 50px;">
// readonly="readonly"
