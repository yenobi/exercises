(function(window, document, undefined) {

  let testMy = {
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
        let keys = Object.keys(answers);
        let name = item.name;

        return `
        ${keys.map((key) => {
          return `<label>
          <input type="radio" name="${name}" value="${key}"> ${answers[key]}
          </label>`;
        }).join('')}
        `;
      }



      return `<h2>${item.question}</h2>
              <div class="wrapper">
                ${renderAnswers(item.answers)}
              </div> `;
    };

  // делаем джсон и сохраняем локально
  let testString = JSON.stringify(testMy);
  localStorage.setItem('test', testString);

  // достаем и делаем объект
  let myTest = JSON.parse(localStorage.getItem('test'));
  let myTestKeys = Object.keys(myTest);

  // creating and adding all the controlls
  const container = document.getElementById('container');
  let heading = document.createElement('h1');
  heading.innerHTML = 'My Dynamic Test';
  container.append(heading);

  let form = document.createElement('form');
  let ol = document.createElement('ol');
  let submit = document.createElement('button');
  submit.innerHTML = 'Check the results';

  let markup = myTestKeys.map((e) => {
    return renderQuestion(myTest[e]);
  }).join('');

  form.innerHTML = markup;
  form.append(submit);
  container.append(form);

  submit.addEventListener('click', validate);

  function validate(e) {
    console.log('start validation');

    let inputsBest = document.forms[0].elements.bestBrowser;
    let parentBest = inputsBest[0].parentElement.parentElement;

    let inputsWorst = document.forms[0].elements.worstBrowser;
    let parentWorst = inputsWorst[0].parentElement.parentElement;

    // should change validation value for thoose from myTest-object
    // how?

    if (inputsBest.value !== 'chrome') {
      if (!parentBest.lastElementChild.classList.contains('error')) {
        // need to exit and don't create error twice
        // can rebuild condition for one ?
        createError(parentBest);
      };
    } else if (parentBest.lastElementChild.classList.contains('error')){
      // if answer was changed for correct
      parentBest.lastElementChild.style.display = 'none';
    };

    if (inputsWorst.value !== 'ie') {
      if (!parentWorst.lastElementChild.classList.contains('error')) {
        createError(parentWorst);
      };
    } else if (parentWorst.lastElementChild.classList.contains('error')){
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
    let error = document.createElement('div');
    error.style.color = 'red';
    error.innerHTML = 'This answer is incorect!';
    error.style.display = 'block';
    error.classList.add('error');
    parent.append(error);
  };

  function createModalGreetings() {
    let modalWrapper = document.createElement('div');
    modalWrapper.id = 'modalWrapper';
    modalWrapper.style.display = 'block'

    let greetings = document.createElement('div');
    greetings.id = 'greetings';
    greetings.innerHTML = '<h2>Сongratulations!</h2>';

    let button = document.createElement('button');
    button.innerHTML = 'Thanks!';
    greetings.append(button);
    button.addEventListener('click', hideGreetings);

    modalWrapper.append(greetings);

    let body = document.querySelector('body');
    body.append(modalWrapper);
  };

  function hideGreetings() {
    let modalWrapper = document.getElementById('modalWrapper');
    modalWrapper.style.display = 'none';
    let form = document.forms[0];
    form.submit();
  };
})(window, document, undefined);
