// import {$,jQuery} from 'jquery';
// // export for others scripts to use
// window.$ = $;
// window.jQuery = jQuery;
// import {validate, validator} from 'jquery-validation'
// import 'jquery-validation/dist/additional-methods.js'
import Tinyfade from './vendor/tinyfade.min.js'
import PhotoSwipe from './vendor/photoswipe.min.js'
import PhotoSwipeUI_Default from './vendor/photoswipe-ui-default.min.js'
import MoveTo from 'moveto'
import VMasker from 'vanilla-masker'

function validateForms() {
  $('.form').each(function() {
    $(this).validate({
      errorClass: 'input__error',
      errorElement: 'span',
      messages: {
        phone: {
          checkMask: "Неверный формат номера"
        }
      },
      highlight: function(element, errorClass, validClass) {
        $(element).parent().removeClass('input--valid').addClass('input--error');
      },
      unhighlight: function(element, errorClass, validClass) {
        $(element).parent().removeClass('input--error').addClass('input--valid');
      }
    });
  });
}

jQuery.validator.addMethod("checkMask", function(value, element) {
  return /\+\d{1}\(\d{3}\)\d{3}-\d{2}-\d{2}/g.test(value);
});

jQuery.validator.setDefaults({
  debug: true
});

jQuery.extend(jQuery.validator.messages, {
  required: "Поле должно быть заполнено."
});

$(function() {
  $('input').focus(function() {
    $(this).parents('.form__block').addClass('focused');
  });

  $('input').blur(function() {
    var inputValue = $(this).val();
    if (inputValue == "") {
      $(this).removeClass('filled');
      $(this).parents('.form__block').removeClass('focused');
    } else {
      $(this).addClass('filled');
    }
  });

  validateForms();

  if (document.body.classList.contains('home')) {
    let tf = new Tinyfade(
      ".tinyfade", // Element
      5000, // Interval in milliseconds (-1 for manual mode, default = 5000)
      1500 // Animation duration (default = 1000)
    );

    var rafTimer;
    window.onscroll = function(event) {
      cancelAnimationFrame(rafTimer);
      rafTimer = requestAnimationFrame(toggleHeaderFloating);
    };

    var heroHeight = $(".header--hero").height();

    function toggleHeaderFloating() {
      if (window.scrollY > heroHeight) {
        document.body.classList.add('sticky');
      } else {
        document.body.classList.remove('sticky');
      }
    }
  }

  const moveTo = new MoveTo()
  const triggers = document.getElementsByClassName('js-moveto');

  for (var item of triggers) {
    moveTo.registerTrigger(item);
  }

  $('.input__field--phone').mask("+7(999)999-99-99");


  // $('.section__inner').each(function() {
  //   var $pic = $(this),
  //     getItems = function() {
  //       var items = [];
  //       $pic.find('a').each(function() {
  //         var $href = $(this).attr('href'),
  //           $size = $(this).data('size').split('x'),
  //           $width = $size[0],
  //           $height = $size[1];
  //
  //         var item = {
  //           src: $href,
  //           w: $width,
  //           h: $height
  //         }
  //
  //         items.push(item);
  //       });
  //       return items;
  //     }
  //
  //   var items = getItems();
  //
  //   var $pswp = $('.pswp')[0];
  //   $pic.on('click', 'a.card', function(event) {
  //     event.preventDefault();
  //
  //     var $index = $(this).index();
  //     var options = {
  //       index: $index,
  //       bgOpacity: 0.7,
  //       showHideOpacity: true
  //     }
  //
  //     // Initialize PhotoSwipe
  //     var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
  //     lightBox.init();
  //   });
  // });

  // ymaps.ready(init);
  //
  // function init() {
  //   var myMap = new ymaps.Map("map", {
  //       center: [56.84, 60.58],
  //       zoom: 15
  //     }),
  //
  //     myPlacemark1 = new ymaps.Placemark([56.839233, 60.579019], {
  //       // Свойства.
  //       hintContent: 'Собственный значок метки'
  //     }, {
  //       // Опции.
  //       // Своё изображение иконки метки.
  //       iconImageHref: './assets/img/point-home.png',
  //       // Размеры метки.
  //       iconImageSize: [68, 79],
  //       // Смещение левого верхнего угла иконки относительно
  //       // её "ножки" (точки привязки).
  //       iconImageOffset: [-34, -59]
  //     }),
  //
  //     myPlacemark2 = new ymaps.Placemark([56.832474, 60.573592], {
  //       // Свойства.
  //       hintContent: 'Собственный значок метки'
  //     }, {
  //       // Опции.
  //       // Своё изображение иконки метки.
  //       iconImageHref: './assets/img/point-other.png',
  //       // Размеры метки.
  //       iconImageSize: [42, 51],
  //       // Смещение левого верхнего угла иконки относительно
  //       // её "ножки" (точки привязки).
  //       iconImageOffset: [-21, -35]
  //     }),
  //
  //     myPlacemark3 = new ymaps.Placemark([56.839660, 60.575438], {
  //       // Свойства.
  //       hintContent: 'Собственный значок метки'
  //     }, {
  //       // Опции.
  //       // Своё изображение иконки метки.
  //       iconImageHref: './assets/img/point-other.png',
  //       // Размеры метки.
  //       iconImageSize: [42, 51],
  //       // Смещение левого верхнего угла иконки относительно
  //       // её "ножки" (точки привязки).
  //       iconImageOffset: [-21, -35]
  //     });
  //
  //   // Добавляем все метки на карту.
  //   myMap.geoObjects
  //     .add(myPlacemark1)
  //     .add(myPlacemark2)
  //     .add(myPlacemark3);
  // }


  jQuery(document).ready(function($) {
    var theButton = $('#js-nav-toggle');
    var theMenu = $('.nav--main');

    theButton.click(function() {
      theMenu.toggleClass('nav--visible');
      theButton.toggleClass('btn--nav-active')
    });
  });
});
