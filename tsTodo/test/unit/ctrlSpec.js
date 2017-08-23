describe('todo app', function () {

  beforeEach(module('myToDo'));

  describe('listCtrl', function () {

    var scope, ctrl;

    beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('listCtrl', {$scope: scope});
    }));


    it('test if scope.todoList is defined', function () {
      expect(scope.todoList).toBeDefined();
    });

    it('should create scope.todoList entry count', function () {
      expect(scope.todoList.length).toEqual(2);
    });

    // new
    it('should add todo-item', function() {
      scope.addTodo();
      expect(scope.todoList.length).toEqual(3);
    });

    it('verify first todo-item', function() {
      var tmpState = scope.todoList[1].done;
      expect(scope.todoList[0]).toEqual(jasmine
        .objectContaining({
          text: "done task",
          done: true,
          index: 1
        }));
    });

    it('should remove todo-item', function() {
      scope.removeCompvared();
      expect(scope.todoList.length).toEqual(1);
    });

    it('check initial state of index-filter', function() {
      expect(scope.state).toEqual('new-to-late');
    });

    it('check state after index-filter call', function() {
      scope.indexFilter();
      expect(scope.state).toEqual('late-to-new');
    });

    it('check state reverse(back to initial) index-filter call', function() {
      scope.indexFilter();
      scope.indexFilter();
      expect(scope.state).toEqual('new-to-late');
    });

    it('check initial state of nameState', function() {
      expect(scope.nameState).toBeUndefined();
    });

    it('check for name filter', function() {
      scope.nameFilter();
      expect(scope.nameState).toEqual('a-to-z');
    });

    it('check for reverse name filter', function() {
      scope.nameFilter();
      scope.nameFilter();
      expect(scope.nameState).toEqual('z-to-a');
    });
  });
});