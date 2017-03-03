$(function() {

// if receive json - JSON.parse();

var myTest = {
  bestBrowser: {
    question: "What is the best browser?",
    name: "bestBrowser",
    answers: {
      "ie": "Internet Explorer",
      "chrome": "Chrome",
      "safari": "Safari"
    }
  },
  worstBrowser: {
    question: "What is the worst browser?",
    name: "worstBrowser",
    answers: {
      "ie": "Internet Explorer",
      "chrome": "Chrome",
      "safari": "Safari"
    }
  }
};

  // creating and adding all the controlls
  var container = $('#container');
  var heading = document.createElement('h1');
  heading.innerHTML = 'My Dynamic Test';
  container.append(heading);
  var form = document.createElement('form');
  var ol = document.createElement('ol');
  var submit = document.createElement('input');
  submit.type = 'submit';
  submit.value = 'Check the results';

  // creating and adding question

  for (var key in myTest) {
    var html = $('#template').html();
    var li = document.createElement('li');
    li.innerHTML = tmpl(html, myTest[key]);
    ol.append(li);
  }

  form.append(ol);
  form.append(submit);
  container.append(form);

});

/* remain questions

task: check the answers
solution: from on learn.js

- then hw 13-14 with localStorage
- generating from localStorage

- modal window with results
*/
