'use strict';

var form = document.forms;

var select = form[0][0];

var option = new Option('Классика', 'Classic', true, true);
select.appendChild(option);


// solution of first task
//
// for (var i = 0; i < select.length; i++) {
//   if (select[i].hasAttribute('selected')) {
//     console.log(select[i]);
//     console.log(select[i].value);
//   }
// }
var container = document.getElementById('container');
var input = document.querySelector('input');

input.addEventListener('focus', showPlaceholder);

function showPlaceholder(e) {
  var tip = input.getAttribute('placeholder');
  var tipWrapper = document.createElement('div');
  tipWrapper.id = 'tip';
  tipWrapper.style.position = 'absolute';
  tipWrapper.style.top = '50px';
  tipWrapper.innerHTML = tip;
  tipWrapper.classList.add('for-placeholder');
  container.appendChild(tipWrapper);

  input.placeholder = "";
}

input.addEventListener('blur', hidePlaceholder);

function hidePlaceholder() {
  var tip = document.getElementById('tip');
  tip.style.display = 'none';

  if (input.value == "") {
    input.placeholder = "E-mail";
  }
}
