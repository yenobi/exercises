'use strcit';

// question - parametrs for dom is ready - it's for cash?
(function(document, window, domIsReady, undefined) {
  domIsReady(function() {

    var buttonShowPrompt = document.querySelector('button');

    var formWrapper = document.getElementById('prompt-form-container');
    var form = document.forms[0];
    var input = form.elements.text;
    var cancel = form.elements.cancel;
    // console.log(input);

    buttonShowPrompt.addEventListener('click', showPrompt);

    function showPrompt() {
      formWrapper.style.display = 'block';

      // this is addding callback
      form.addEventListener('submit', callback);

      // this is callback with null
      cancel.addEventListener('click', callback);
      document.addEventListener('keypress', callback);
    }

    function callback(e) {
      // add some conditions for keypress
      // now cant type in input
      if (e.type == 'submit') {
        alert(input.value);
      } else if (e.type == 'click' || e.type == 'keypress') {
        alert('null');
        formWrapper.style.display = '';
        console.log('close');
      }
    }
    // (input.value || null)

  });
})(document, window, domIsReady);
