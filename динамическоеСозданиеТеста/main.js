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
  // content is not a dom-element - it's a string, but why
  var content = tmpl(html, bestBrowser);

  ol.append(content);
  form.append(ol);
  form.append(submit);
  container.append(form);

});
