booky.component('awsCounter', {
    bindings: {
    // oneWay: '<'
    },
    controller: ['$scope', function($scope) {
        this.addItem = function() {
            console.log('add');
            console.log($scope.counter);
        }

        this.rmvItem = function() {
            console.log('rmv')
        }
    }],
    template: `
    <button ng-click="$ctrl.addItem()">add</button>
    <input ng-model="counter"  type="number" style="max-width: 50px;">
    <button ng-click="$ctrl.rmvItem()">rmv</button>
    `
});
