'use strict';

var form = document.forms.calculator;
var input = document.querySelector('input');
var percent = 0.12;

var moneyBefore = document.getElementById('money-before');
var moneyAfter = document.getElementById('money-after');

var columnBefore = document.getElementById('height-before');
var columnAfter = document.getElementById('height-after');

input.onkeypress = function(e) {
  var e = e || event;

  if (e.ctrlKey || e.altKey || e.metaKey) return;

  var chr = getChar(e);

  if (chr == null) return;

  if (chr < '0' || chr > '9') {
    return false;
  }
}

var before = input.value;
input.oninput = function() {
  before = input.value;
  moneyBefore.innerHTML = before;
  columnBefore.style.height = before + 'px';
}

form.onchange = function() {
  // changes select
  var select = form.elements.months;

  for (var i = 0; i < select.options.length; i++) {
    var option = select.options[i];
    if(option.selected) {
      var term = option.value;
    }
  };

  var capitalization = form.elements.capitalization;

  before = parseInt(before);

  if (capitalization.checked) {
    // a and b to be shure Math.pow works correct
    var a = (1 + percent);
    var b = term/12;
    var compPercent = Math.pow(a, b);
    var after = before*compPercent;
  } else {
    var after = before*(1 + (term/12)*percent);
  }

  after = Math.ceil(after);
  moneyAfter.innerHTML = after;
  columnAfter.style.height = after + 'px';
};


// to get symbol from keypress
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

// troubles
// 
// - dont work onload
//   - try to add 'DOMContentLoad', but then didnt work main function;
//
// - refresh of function and columns does not happen immediately;
//
// - dont know if complicated Percent calculates corrcet
