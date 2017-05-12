"use strict";

(function (window, document, undefined) {

  // let tmpl = `<h2>${question}</h2> \n
  //             <div class="wrapper"> \n
  //               <label>
  //               <input type="radio" name="${name}" value="${key}"> ${answer} \n
  //               </label> \n
  //             </div> `;

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

  // делаем джсон и сохраняем локально
  var testString = JSON.stringify(testMy);
  localStorage.setItem('test', testString);

  // достаем и делаем объект
  var myTest = JSON.parse(localStorage.getItem('test'));

  // creating and adding all the controlls
  var container = document.getElementById('container');
  var heading = document.createElement('h1');
  heading.innerHTML = 'My Dynamic Test';
  container.append(heading);
  var form = document.createElement('form');
  var ol = document.createElement('ol');
  var submit = document.createElement('button');
  submit.innerHTML = 'Check the results';
})(window, document, undefined);