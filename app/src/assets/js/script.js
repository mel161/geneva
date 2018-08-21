import 'jquery';
import 'jquery-validation/dist/jquery.validate.js';
import 'jquery-validation/dist/additional-methods.js';
import 'jquery-validation/dist/localization/messages_ru.js';
import 'jquery-modal';
import Tinyfade from './vendor/tinyfade.min.js';
import MoveTo from 'moveto/dist/moveTo.min.js';
import 'vanilla-masker/build/vanilla-masker.min.js';

// Navigation Script
import './partials/_nav.min.js'
//
// Form Script
import './partials/_form.min.js'
//

// Map Location
import './partials/_map-location.min.js'
//

// Map Contacts
import './partials/_map-contacts.min.js'
//

jQuery(document).ready(function() {
  // Scrolling Sticky Header
  var rafTimer;
  window.onscroll = function(event) {
    cancelAnimationFrame(rafTimer);
    rafTimer = requestAnimationFrame(toggleHeaderFloating);
  };

  var heroHeight = (document.body.classList.contains('home')) ? $(".header--hero").height() : 0
  function toggleHeaderFloating() {
    if (window.scrollY > heroHeight) {
      document.body.classList.add('sticky');
    } else {
      document.body.classList.remove('sticky');
    }
  }

  // ScrollTo
  const moveTo = new MoveTo();
  const triggers = document.getElementsByClassName('js-moveto');

  for (var item of triggers) {
    moveTo.registerTrigger(item);
  }

  // Slider
  if (document.body.classList.contains('home')) {
    let tf = new Tinyfade(
      ".tinyfade", // Element
      5000, // Interval in milliseconds (-1 for manual mode, default = 5000)
      1500 // Animation duration (default = 1000)
    );
  }
});
