document.addEventListener('DOMContentLoaded', function () {
    var simple = document.querySelector('.js_slider');

    lory(simple, {
        infinite: 1
    });
});
;document.addEventListener('DOMContentLoaded', function() {
  var menuIcon = document.querySelector('.menu-icon');
  var headerNav = document.querySelector('.header-nav');

  menuIcon.addEventListener('click', function() {
    headerNav.classList.toggle('shown');
  });
});
