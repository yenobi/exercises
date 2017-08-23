describe('todo list app', function() {
  it('should check initial todo-items and content', function() {
    browser.get('http://127.0.0.1:8080/');

    var todoList = element.all(by.repeater('todos in todoList'));
    expect(todoList.count()).toEqual(2);

    expect(todoList.get(0).getText()).toEqual('1 done task');
    expect(todoList.get(1).getText()).toEqual('2 undone task');
  });

  it('should add new todo-item', function() {
    // to start every new test from blank initial state
    browser.get('http://127.0.0.1:8080/');

    element(by.css('.new-task__input')).sendKeys('new todo');
    element(by.css('.new-task__btn')).click();

    var todoList = element.all(by.repeater('todos in todoList'));
    expect(todoList.count()).toEqual(3);
  });

  // somewhy didn't work in app - after refactor add this test
  // it('should remove done task', function () {
  //   browser.get('http://127.0.0.1:8080/');
  //
  //   element(by.css('.'))
  // });

  it('should change order of todo-items by index', function () {
    browser.get('http://127.0.0.1:8080/');

    element(by.css('.index-filter__btn')).click();
    var todoList = element.all(by.repeater('todos in todoList'));
    expect(todoList.get(0).getText()).toEqual('2 undone task');
  });

  it('should change order of todo-items by alphabet', function () {
    browser.get('http://127.0.0.1:8080/');

    element(by.css('.name-filter__btn')).click();
    element(by.css('.name-filter__btn')).click();
    var todoList = element.all(by.repeater('todos in todoList'));
    expect(todoList.get(0).getText()).toEqual('2 undone task');

  });

  it('should make done task undone and check all the undones', function () {
    browser.get('http://127.0.0.1:8080/');

    element(by.css('.task__custom-checkbox')).click();

    var uncompletedAmount = element.all(by.css('.done-false'));
    expect(uncompletedAmount.count()).toEqual(2);

  });

  it('should make undone task done and check all dones', function() {
    browser.get('http://127.0.0.1:8080/');

    element(by.css('[data-id="1"] ~ .task__custom-checkbox')).click();

    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
  });
});