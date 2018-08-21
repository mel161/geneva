// Nav
jQuery(document).ready(function() {
  var theButton = $('#js-nav-toggle');
  var theSVG = $('#js-nav-toggle .svg-menu-toggle');
  var theMenu = $('.footer');

  theButton.click(function() {
    theMenu.toggleClass('footer--visible');
    theButton.toggleClass('btn--nav-active');
    theSVG.toggleClass('svg-menu-active')
  });

  var theParentItem = $('.nav__item--parent');

  theParentItem.click(function() {
    theParentItem.toggleClass('nav__item--current');
  })
});
