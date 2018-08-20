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
  } else {
    var rafTimer;
    window.onscroll = function(event) {
      cancelAnimationFrame(rafTimer);
      rafTimer = requestAnimationFrame(toggleHeaderFloating);
    };

    var heroHeight = 0;

    function toggleHeaderFloating() {
      if (window.scrollY > heroHeight) {
        document.body.classList.add('sticky');
      } else {
        document.body.classList.remove('sticky');
      }
    }
  }

  // if ($('.video-container')) {
  //   $('.video-container').find('iframe').width($('.video-container').outerWidth() + 16).height($('.video-container').outerHeight() + 16)
  // }

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


  if ($("div").is(".map--location")) {
    ymaps.ready(init1);

    function init1() {
      var myMap1 = new ymaps.Map("map", {
          center: [56.84, 60.58],
          zoom: 15,
          controls: []
        }),

        myPlacemark1 = new ymaps.Placemark([56.839233, 60.579019], {
          // Свойства.
          hintContent: 'Собственный значок метки'
        }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: './assets/img/point-home.png',
          // Размеры метки.
          iconImageSize: [68, 79],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-34, -59]
        }),

        myPlacemark2 = new ymaps.Placemark([56.832474, 60.573592], {
          // Свойства.
          hintContent: 'Собственный значок метки'
        }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: './assets/img/point-other.png',
          // Размеры метки.
          iconImageSize: [42, 51],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-21, -35]
        }),

        myPlacemark3 = new ymaps.Placemark([56.839660, 60.575438], {
          // Свойства.
          hintContent: 'Собственный значок метки'
        }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: './assets/img/point-other.png',
          // Размеры метки.
          iconImageSize: [42, 51],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-21, -35]
        }),
        ZoomLayout = ymaps.templateLayoutFactory.createClass("<div class='map__control'>" +
          "<div id='zoom-in' class='btn btn--map'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='icon icon--plus'><path fill='#B4B4B4' fill-rule='evenodd' d='M15 9H9v6a1 1 0 0 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 2 0v6h6a1 1 0 0 1 0 2z'/></svg></div><br>" +
          "<div id='zoom-out' class='btn btn--map'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='2' class='icon icon--minus'><path fill='#B4B4B4' fill-rule='evenodd' d='M1 0h14a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2z'/></svg></i></div>" +
          "</div>", {

            // Переопределяем методы макета, чтобы выполнять дополнительные действия
            // при построении и очистке макета.
            build: function() {
              // Вызываем родительский метод build.
              ZoomLayout.superclass.build.call(this);

              // Привязываем функции-обработчики к контексту и сохраняем ссылки
              // на них, чтобы потом отписаться от событий.
              this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
              this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);

              // Начинаем слушать клики на кнопках макета.
              $('#zoom-in').bind('click', this.zoomInCallback);
              $('#zoom-out').bind('click', this.zoomOutCallback);
            },

            clear: function() {
              // Снимаем обработчики кликов.
              $('#zoom-in').unbind('click', this.zoomInCallback);
              $('#zoom-out').unbind('click', this.zoomOutCallback);

              // Вызываем родительский метод clear.
              ZoomLayout.superclass.clear.call(this);
            },

            zoomIn: function() {
              var map = this.getData().control.getMap();
              map.setZoom(map.getZoom() + 1, {
                checkZoomRange: true
              });
            },

            zoomOut: function() {
              var map = this.getData().control.getMap();
              map.setZoom(map.getZoom() - 1, {
                checkZoomRange: true
              });
            }
          }),
        zoomControl = new ymaps.control.RulerControl({
          options: {
            layout: ZoomLayout,
            bottom: '40',
            top: 'auto',
            right: '0'
          }
        });

      // Добавляем все метки на карту.
      myMap1.geoObjects
        .add(myPlacemark1)
        .add(myPlacemark2)
        .add(myPlacemark3);
      myMap1.controls.add(zoomControl);
    }

    $('.js-location-toggle').click(function(e) {
      e.preventDefault();
      $('.js-location-toggle.link--dashed .text').toggleClass('text--visible');
      $('.js-location-toggle .icon').toggleClass('icon--arrow-down');
      $('.js-location-toggle').toggleClass('js-location--visible');
      $('.map .nav').toggleClass('nav--visible');
    });
  }

  if ($("div").is(".map__container--map")) {
    ymaps.ready(init2);

    function init2() {
      var myMap2 = new ymaps.Map('map', {
          center: [56.84, 60.58],
          zoom: 12,
          controls: []
        }),

        myPlacemark = new ymaps.Placemark([56.832474, 60.573592], {
        }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: './assets/img/point-other.png',
          // Размеры метки.
          iconImageSize: [42, 51],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-21, -35]
        }),

        // Создадим пользовательский макет ползунка масштаба.
        ZoomLayout = ymaps.templateLayoutFactory.createClass("<div class='map__control'>" +
          "<div id='zoom-in' class='btn btn--map'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='icon icon--plus'><path fill='#B4B4B4' fill-rule='evenodd' d='M15 9H9v6a1 1 0 0 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 2 0v6h6a1 1 0 0 1 0 2z'/></svg></div><br>" +
          "<div id='zoom-out' class='btn btn--map'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='2' class='icon icon--minus'><path fill='#B4B4B4' fill-rule='evenodd' d='M1 0h14a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2z'/></svg></i></div>" +
          "</div>", {

            // Переопределяем методы макета, чтобы выполнять дополнительные действия
            // при построении и очистке макета.
            build: function() {
              // Вызываем родительский метод build.
              ZoomLayout.superclass.build.call(this);

              // Привязываем функции-обработчики к контексту и сохраняем ссылки
              // на них, чтобы потом отписаться от событий.
              this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
              this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);

              // Начинаем слушать клики на кнопках макета.
              $('#zoom-in').bind('click', this.zoomInCallback);
              $('#zoom-out').bind('click', this.zoomOutCallback);
            },

            clear: function() {
              // Снимаем обработчики кликов.
              $('#zoom-in').unbind('click', this.zoomInCallback);
              $('#zoom-out').unbind('click', this.zoomOutCallback);

              // Вызываем родительский метод clear.
              ZoomLayout.superclass.clear.call(this);
            },

            zoomIn: function() {
              var map = this.getData().control.getMap();
              map.setZoom(map.getZoom() + 1, {
                checkZoomRange: true
              });
            },

            zoomOut: function() {
              var map = this.getData().control.getMap();
              map.setZoom(map.getZoom() - 1, {
                checkZoomRange: true
              });
            }
          }),
        zoomControl = new ymaps.control.RulerControl({
          options: {
            layout: ZoomLayout,
            bottom: '40',
            top: 'auto',
            right: '0'
          }
        });

      myMap2.controls.add(zoomControl);
      myMap2.geoObjects.add(myPlacemark)
    }

    $('.link--dashed').click(function(e) {
      e.preventDefault();
      $('.map__container--map').toggleClass('map__container--visible');
    });
    $('.map__close').click(function(e) {
      e.preventDefault();
      $('.map__container--map').toggleClass('map__container--visible');
    });
  }


  jQuery(document).ready(function($) {
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
});
