'use strict';

// var form = document.forms;
//
// var select = form[0][0];
//
// var option = new Option('Классика', 'Classic', true, true);
// select.appendChild(option);

// solution of first task
//
// for (var i = 0; i < select.length; i++) {
//   if (select[i].hasAttribute('selected')) {
//     console.log(select[i]);
//     console.log(select[i].value);
//   }
// }

// solution of second task
//
// var container = document.getElementById('container');
// var input = document.querySelector('input');
//
// input.addEventListener('focus', showPlaceholder);
//
// function showPlaceholder(e) {
//   var tip = input.getAttribute('placeholder');
//   var tipWrapper = document.createElement('div');
//   tipWrapper.id = 'tip';
//   tipWrapper.style.position = 'absolute';
//   tipWrapper.style.top = '50px';
//   tipWrapper.innerHTML = tip;
//   tipWrapper.classList.add('for-placeholder');
//   container.appendChild(tipWrapper);
//
//   input.placeholder = "";
// }
//
// input.addEventListener('blur', hidePlaceholder);
//
// function hidePlaceholder() {
//   var tip = document.getElementById('tip');
//   tip.style.display = 'none';
//
//   if (input.value == "") {
//     input.placeholder = "E-mail";
//   }
// }

// solution of fourth task
// var div = document.querySelector('.field');
//
// var container = document.getElementById('container');
//
// document.addEventListener('keydown', convertDiv);
//
// function convertDiv(e) {
//   // smth in right way to reuse, but not exactly
//   // if(!div) {
//   //   var div = document.querySelector('.field');
//   // }
//
//   if(e.shiftKey && e.keyCode === 49) {
//     // console.log('begin edit');
//     container.removeChild(div);
//
//     var textarea = document.createElement('textarea');
//     textarea.classList.add('field');
//     textarea.setAttribute('autofocus', '');
//     container.appendChild(textarea);
//
//     var textarea = document.querySelector('textarea');
//     textarea.addEventListener('keydown', convertReverse);
//   }
//
//   function convertReverse(event){
//
//     if (event.shiftKey && event.keyCode === 83) {
//       // console.log('save and log out');
//       if (textarea.value) {
//         var content = textarea.value;
//         container.removeChild(textarea);
//
//         createEmptyDiv();
//
//       } else {
//         createEmptyDiv();
//       }
//
//     } else if(event.keyCode === 27) {
//       // console.log('log out without save');
//       container.removeChild(textarea);
//
//       createEmptyDiv();
//     }
//
//     function createEmptyDiv() {
//       var div = document.createElement('div');
//       div.innerHTML = content || "";
//       div.classList.add('field');
//       container.appendChild(div);
//     }
//   }
// }
// can't reuse second time - why?

var input = document.getElementById('caps-exp');

input.addEventListener('focus', capsAnalyze);

function capsAnalyze() {
  var caps = 'disable';

  input.onkeypress = function(e) {
    var chr = getChar(e);
    // console.log(chr);
    // console.log(String.fromCharCode(e.keyCode));
    console.log(e.which);
    console.log(e.keyCode);
  }
}

// кросс-браузерная функция получения утф-знака
// по нажатой клавиши
function getChar(event) {
    if (event.which == null) {
      if (event.keyCode < 32) return null;
      return String.fromCharCode(event.keyCode) // IE
    }

    if (event.which != 0 && event.charCode != 0) {
      if (event.which < 32) return null;
      return String.fromCharCode(event.which) // остальные
    }

    return null; // специальная клавиша
  }
