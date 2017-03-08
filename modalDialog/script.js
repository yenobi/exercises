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


      cancel.addEventListener('click', callback);
      formWrapper.addEventListener('keydown', callback2);

      // esc or cancel
      // event on formWrapper for esc ?
      // event on cancel for form ?
    }

// this didnt work too - why? 
    function callback2(e) {
      if(e.keyCode == 27) {
        formWrapper.style.display = 'none';

      }
    }

    // how find out the type of event ?
    function callback(e) {
      // don't work event on click
      if (e.type == 'submit') {
        alert(input.value);
      } else if (e.type == 'click') {
        alrt('null');
        formWrapper.style.display = 'none';
      }
      // if e.type click || input.value == ""
    }
    // (input.value || null)



  });
})(document, window, domIsReady);
