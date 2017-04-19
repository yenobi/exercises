(function() {

  var container = document.getElementById('container');
  container.addEventListener('click', checkedBox);

  function checkedBox(e) {
    var target = e.target;

    if (target.tagName === 'LABEL') {
      var child = target.children[0];
      child.classList.toggle('checked');
      checkInput();
    } else if(target.tagName === 'SPAN' ) {
      target.classList.toggle('checked');
      checkInput();
    }

    function checkInput() {
      if (target.tagName === 'LABEL') {
        var input = target.children[0].children[0];
        checkAncheckInput();

      } else if(target.tagName === 'SPAN') {
          var input = target.children[0];
          checkAncheckInput();
        }

        function checkAncheckInput() {
          if (input.hasAttribute('checked')) {
            input.removeAttribute('checked');
          } else {
            input.setAttribute('checked', '');
            }
        }
      };
    };
  })();
