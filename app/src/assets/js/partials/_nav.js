//


jQuery(document).ready(function($) {
  var theButton = $('#js-nav-toggle');
  var theMenu = $('.nav--main');

  theButton.click(function() {
    theMenu.toggleClass('nav--visible');
    theButton.toggleClass('btn--nav-active')
  });
});


// ES6

// let theButton = document.getElementById('js-nav-toggle');
// let theMenu = document.querySelector('.nav--main');

// theButton. = () => {
//   theMenu.classList.toggle('nav--visible');
//   theButton.classList.toggle('btn--nav-active');
// }
