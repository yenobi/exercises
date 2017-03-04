"use strict";

var mouse = document.getElementById('mouse');

mouse.addEventListener('focus', watchKeyDown);

function watchKeyDown() {
  mouse.addEventListener('keydown', moveMouse);

  function moveMouse(e) {
    var mouseStyle = getComputedStyle(mouse);

    if (e.keyCode === 38) {
      // up
      var up = parseInt(mouseStyle.marginTop);
      mouse.style.marginTop = up - 150 + 'px';

    } else if (e.keyCode === 40) {
      // down
      var down = parseInt(mouseStyle.marginTop);
      mouse.style.marginTop = down + 150 + 'px';
    } else if (e.keyCode === 37) {
      // left
      var right = parseInt(mouseStyle.marginLeft);
      mouse.style.marginLeft = right - 110 + 'px';

    } else if (e.keyCode === 39) {
      // right
      var left = parseInt(mouseStyle.marginLeft);
      mouse.style.marginLeft = left + 110 + 'px';

    }
  }
}
