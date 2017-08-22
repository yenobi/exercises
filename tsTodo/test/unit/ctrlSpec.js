describe('todo app', function() {
    beforeEach(module('myToDo'));

    describe('listCtrl', function() {
        var scope, ctrl;
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('listCtrl', { $scope: scope });
        }));
        it('test if scope.todoList is defined', function () {
            expect(scope.todoList).toBeDefined();
        });
        it('should create scope.todoList entry count', function () {
            expect(scope.todoList.length).toEqual(2);
        });
    });
});