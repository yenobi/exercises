$(function() {
  var bestBrowser = {
    question: "What is the best browser?",
    name: "worstBrowser",
    answer: "Internet Explorer",
    value: "ie"
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
  var html = $('#template').html();
  var li = document.createElement('li');
  li.innerHTML = tmpl(html, bestBrowser);

  ol.append(li);
  form.append(ol);
  form.append(submit);
  container.append(form);

});

/* remain questions
- how to use cycle to fill all the answers
- how to use object for more then 1 question
- then hw 13-14 with localStorage
- generating from localStorage
- checking answers
- modal window with results
*/
