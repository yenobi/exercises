"use strict";

(function (window, document, undefined) {

  var testMy = {
    bestBrowser: {
      question: "What is the best browser?",
      name: "bestBrowser",
      answers: {
        "ie": "Internet Explorer",
        "chrome": "Chrome",
        "safari": "Safari"
      },
      solution: 'chrome'
    },
    worstBrowser: {
      question: "What is the worst browser?",
      name: "worstBrowser",
      answers: {
        "ie": "Internet Explorer",
        "chrome": "Chrome",
        "safari": "Safari"
      },
      solution: 'ie'
    }
  };

  function renderQuestion(item) {

    function renderAnswers(answers) {
      var keys = Object.keys(answers);
      var name = item.name;

      return "\n        " + keys.map(function (key) {
        return "<label>\n          <input type=\"radio\" name=\"" + name + "\" value=\"" + key + "\"> " + answers[key] + "\n          </label>";
      }).join('') + "\n        ";
    }

    return "<h2>" + item.question + "</h2>\n              <div class=\"wrapper\">\n                " + renderAnswers(item.answers) + "\n              </div> ";
  };

  // делаем джсон и сохраняем локально
  var testString = JSON.stringify(testMy);
  localStorage.setItem('test', testString);

  // достаем и делаем объект
  var myTest = JSON.parse(localStorage.getItem('test'));
  var myTestKeys = Object.keys(myTest);

  // creating and adding all the controlls
  var container = document.getElementById('container');
  var heading = document.createElement('h1');
  heading.innerHTML = 'My Dynamic Test';
  container.append(heading);

  var form = document.createElement('form');
  var ol = document.createElement('ol');
  var submit = document.createElement('button');
  submit.innerHTML = 'Check the results';

  var markup = myTestKeys.map(function (e) {
    return renderQuestion(myTest[e]);
  }).join('');

  form.innerHTML = markup;
  form.append(submit);
  container.append(form);

  submit.addEventListener('click', validate);

  function validate(e) {
    console.log('start validation');

    var inputsBest = document.forms[0].elements.bestBrowser;
    var parentBest = inputsBest[0].parentElement.parentElement;

    var inputsWorst = document.forms[0].elements.worstBrowser;
    var parentWorst = inputsWorst[0].parentElement.parentElement;

    // should change validation value for thoose from myTest-object
    // how?

    if (inputsBest.value !== 'chrome') {
      if (!parentBest.lastElementChild.classList.contains('error')) {
        // need to exit and don't create error twice
        // can rebuild condition for one ?
        createError(parentBest);
      };
    } else if (parentBest.lastElementChild.classList.contains('error')) {
      // if answer was changed for correct
      parentBest.lastElementChild.style.display = 'none';
    };

    if (inputsWorst.value !== 'ie') {
      if (!parentWorst.lastElementChild.classList.contains('error')) {
        createError(parentWorst);
      };
    } else if (parentWorst.lastElementChild.classList.contains('error')) {
      parentWorst.lastElementChild.style.display = 'none';
    };

    e.preventDefault();

    if (document.querySelector('.error').style.display === 'block') {
      console.log('an error!');
      return;
    } else {
      createModalGreetings();
    };
  };

  function createError(parent) {
    var error = document.createElement('div');
    error.style.color = 'red';
    error.innerHTML = 'This answer is incorect!';
    error.style.display = 'block';
    error.classList.add('error');
    parent.append(error);
  };

  function createModalGreetings() {
    var modalWrapper = document.createElement('div');
    modalWrapper.id = 'modalWrapper';
    modalWrapper.style.display = 'block';

    var greetings = document.createElement('div');
    greetings.id = 'greetings';
    greetings.innerHTML = '<h2>Сongratulations!</h2>';

    var button = document.createElement('button');
    button.innerHTML = 'Thanks!';
    greetings.append(button);
    button.addEventListener('click', hideGreetings);

    modalWrapper.append(greetings);

    var body = document.querySelector('body');
    body.append(modalWrapper);
  };

  function hideGreetings() {
    var modalWrapper = document.getElementById('modalWrapper');
    modalWrapper.style.display = 'none';
    var form = document.forms[0];
    form.submit();
  };
})(window, document, undefined);