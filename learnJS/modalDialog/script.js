'use strcit';

// question - parametrs for dom is ready - it's for cash?
(function(document, window, domIsReady, undefined) {
  domIsReady(function() {

    var buttonShowPrompt = document.querySelector('button');

    var formWrapper = document.getElementById('prompt-form-container');
    var form = document.forms[0];
    var input = form.elements.text;
    var cancel = form.elements.cancel;

    buttonShowPrompt.addEventListener('click', showPrompt);

    function showPrompt() {
      formWrapper.style.display = 'block';
      input.focus();

      // how to combine callback ? and delegate parts of event?
      
      // this is addding callback
      form.addEventListener('submit', callback);

      // this is callback with null
      cancel.addEventListener('click', callback);
      document.addEventListener('keypress', callback);
    }

    function callback(e) {
      if (e.type == 'click' || e.type == 'keypress' && e.keyCode == 27) {
        alert('null');
        formWrapper.style.display = '';
      } else if (input !== document.activeElement && input.value == '') {
        e.preventDefault();
        return;
      } else if (e.type == 'submit') {
        alert(input.value);
      }
    }
  });
})(document, window, domIsReady);
