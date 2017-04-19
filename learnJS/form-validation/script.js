'use strict';

(function(document, window, domIsReady, undefined) {
  domIsReady(function() {

    var form = document.forms[0];

    var from = form.elements.from;
    var password = form.elements.password;
    var password2 = form.elements.password2;
    var select = form.elements.to;
    var message = form.elements.message;

    form.addEventListener('submit', validate);

    function validate(e) {

      if (from.value == '') {
        createError(from);
      };

      if (password.value == '' || password.value !== password2.value) {
        createError(password);
      };

      if (message.value == '') {
        createError(message);
      };

      if (select.value == '0') {
        createError(select);
      }

      e.preventDefault();
    };

    function createError(field) {
      var error = document.createElement('div');
      error.classList.add('error');

      if (field == password) {
        error.innerHTML = 'Passwords did not match or the field is empty!';
      } else {
        error.innerHTML = 'The field is empty!';
      }
      field.parentElement.appendChild(error);
    }
  });
})(document, window, domIsReady);
