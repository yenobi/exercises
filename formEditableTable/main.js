var table = document.getElementById('bagua-table');

table.onclick = function(e) {
  var target = e.target;
  if(target.tagName != 'TD') return;

  var tableRow = target.parentElement;

  var content = target.innerHTML;
  var classTd = target.className;
  // var textarea = document.createElement('textarea');
  var textarea = document.createElement('input');
  textarea.type = 'textarea';
  // текстара возвращает текст вместо тегов (заменяет их утф)
  // инпут возвращает правильные теги, а не текст,
  // но его не видно при редактировании
  // и инпут однострочный
  // textarea.innerHTML = content;
  textarea.innerHTML = content;
  textarea.style.width = target.clientWidth + 'px';
  textarea.style.height = target.clientHeight + 'px';

  target.replaceWith(textarea);
  var textareaCoords = getCoords(textarea);

  var buttonCancel = document.createElement('button');
  buttonCancel.innerHTML = 'cancel';
  buttonCancel.style.top = textareaCoords.top + textarea.clientHeight + 'px';;
  buttonCancel.style.left = textareaCoords.left + 'px';
  textarea.after(buttonCancel);

  var buttonOk = document.createElement('button');
  buttonOk.innerHTML = 'ok';
  buttonOk.style.top = buttonCancel.style.top;
  buttonOk.style.left = buttonCancel.style.left + buttonCancel.clientWidth + 'px';
  textarea.after(buttonOk);

  var buttonParent = buttonOk.parentElement;
  var tdNew = document.createElement('td');

  buttonOk.onclick = function() {
    tdNew.innerHTML = textarea.innerHTML;
    reverseAll();
  }

  buttonCancel.onclick = function() {
    tdNew.innerHTML = content;
    reverseAll();
  }

  function reverseAll() {
    tdNew.classList.add(classTd);
    textarea.replaceWith(tdNew);
    buttonParent.removeChild(buttonOk);
    buttonParent.removeChild(buttonCancel);
  }
}

function getCoords(elem) { // кроме IE8-
  var box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };

}
