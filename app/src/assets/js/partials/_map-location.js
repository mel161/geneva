// import groups from './standalone/_location-points.js';
import {
  points as groups
} from '../standalone/_location-points.js';

jQuery(document).ready(function() {
  if ($("div").is(".map--location")) {
    ymaps.ready(init);
    //
    // function init() {
    //   var myMap1 = new ymaps.Map("map", {
    //       center: [56.84, 60.58],
    //       zoom: 15,
    //       controls: []
    //     }),
    //
    //     myPlacemark1 = new ymaps.Placemark([56.839233, 60.579019], {
    //       // Свойства.
    //       hintContent: 'Собственный значок метки'
    //     }, {
    //       // Опции.
    //       // Необходимо указать данный тип макета.
    //       iconLayout: 'default#image',
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
    //       // Необходимо указать данный тип макета.
    //       iconLayout: 'default#image',
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
    //       // Необходимо указать данный тип макета.
    //       iconLayout: 'default#image',
    //       // Своё изображение иконки метки.
    //       iconImageHref: './assets/img/point-other.png',
    //       // Размеры метки.
    //       iconImageSize: [42, 51],
    //       // Смещение левого верхнего угла иконки относительно
    //       // её "ножки" (точки привязки).
    //       iconImageOffset: [-21, -35]
    //     }),
    //     ZoomLayout = ymaps.templateLayoutFactory.createClass("<div class='map__control'>" +
    //       "<div id='zoom-in' class='btn btn--map'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='icon icon--plus'><path fill='#B4B4B4' fill-rule='evenodd' d='M15 9H9v6a1 1 0 0 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 2 0v6h6a1 1 0 0 1 0 2z'/></svg></div><br>" +
    //       "<div id='zoom-out' class='btn btn--map'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='2' class='icon icon--minus'><path fill='#B4B4B4' fill-rule='evenodd' d='M1 0h14a1 1 0 0 1 0 2H1a1 1 0 0 1 0-2z'/></svg></i></div>" +
    //       "</div>", {
    //
    //         // Переопределяем методы макета, чтобы выполнять дополнительные действия
    //         // при построении и очистке макета.
    //         build: function() {
    //           // Вызываем родительский метод build.
    //           ZoomLayout.superclass.build.call(this);
    //
    //           // Привязываем функции-обработчики к контексту и сохраняем ссылки
    //           // на них, чтобы потом отписаться от событий.
    //           this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
    //           this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);
    //
    //           // Начинаем слушать клики на кнопках макета.
    //           $('#zoom-in').bind('click', this.zoomInCallback);
    //           $('#zoom-out').bind('click', this.zoomOutCallback);
    //         },
    //
    //         clear: function() {
    //           // Снимаем обработчики кликов.
    //           $('#zoom-in').unbind('click', this.zoomInCallback);
    //           $('#zoom-out').unbind('click', this.zoomOutCallback);
    //
    //           // Вызываем родительский метод clear.
    //           ZoomLayout.superclass.clear.call(this);
    //         },
    //
    //         zoomIn: function() {
    //           var map = this.getData().control.getMap();
    //           map.setZoom(map.getZoom() + 1, {
    //             checkZoomRange: true
    //           });
    //         },
    //
    //         zoomOut: function() {
    //           var map = this.getData().control.getMap();
    //           map.setZoom(map.getZoom() - 1, {
    //             checkZoomRange: true
    //           });
    //         }
    //       }),
    //     zoomControl = new ymaps.control.RulerControl({
    //       options: {
    //         layout: ZoomLayout,
    //         bottom: '40',
    //         top: 'auto',
    //         right: '0'
    //       }
    //     });
    //
    //   // Добавляем все метки на карту.
    //   myMap1.geoObjects
    //     .add(myPlacemark1)
    //     .add(myPlacemark2)
    //     .add(myPlacemark3);
    //   myMap1.controls.add(zoomControl);
    // }
    //

    function init() {

      // Создание экземпляра карты.
      var myMap = new ymaps.Map('map', {
          center: [56.84, 60.58],
          zoom: 15,
          controls: []
        }),

        // Контейнер для меню.
        menu = $('.nav__list--map');

      for (var i = 0, l = groups.length; i < l; i++) {
        createMenuGroup(groups[i]);
      }

      function createMenuGroup(group) {
        // Пункт меню.
        var menuItem = $('<li class="nav__item nav__item--underline"><a class="nav__link" href="#">' + group.name + '</a></li>'),
          // Коллекция для геообъектов группы.
          collection = new ymaps.GeoObjectCollection(null, {
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
          // Контейнер для подменю.
          submenu = $('<ul class="submenu"/>');

        // Добавляем коллекцию на карту.
        myMap.geoObjects.add(collection);
        // Добавляем подменю.
        menuItem
          // .append(submenu)
          // Добавляем пункт в меню.
          .appendTo(menu)
          // По клику удаляем/добавляем коллекцию на карту и скрываем/отображаем подменю.
          .find('a')
          .bind('click', function(e) {
            e.preventDefault();

            collection.each(function(geoObject) {
              // geoObject.options.set('visible', true)

              // console.log(geoObject.options.get('visible'));
              if (geoObject.options.get('visible') == null || geoObject.options.get('visible') === true) {
                geoObject.options.set('visible', false);
              } else {
                geoObject.options.set('visible', true);
              }
            });
          });
        for (var j = 0, m = group.items.length; j < m; j++) {
          createSubMenu(group.items[j], collection, submenu);
        }
      }

      function createSubMenu(item, collection, submenu) {
        // Пункт подменю.
          // Создаем метку.
        var placemark = new ymaps.Placemark(item.center, {
            // balloonContent: item.name,
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
          });

        // Добавляем метку в коллекцию.
        collection.add(placemark);
      }

      // Добавляем меню в тэг BODY.
      menu.prependTo($('.map .nav'));


      var myPlacemark1 = new ymaps.Placemark([56.839233, 60.579019], {
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



      myMap.geoObjects.add(myPlacemark1);
      myMap.controls.add(zoomControl);

      // Выставляем масштаб карты чтобы были видны все группы.
      myMap.setBounds(myMap.geoObjects.getBounds());

    }

    $('.js-location-toggle').click(function(e) {
      e.preventDefault();
      $('.js-location-toggle.link--dashed .text').toggleClass('text--visible');
      $('.js-location-toggle .icon').toggleClass('icon--arrow-down');
      $('.js-location-toggle').toggleClass('js-location--visible');
      $('.map .nav').toggleClass('nav--visible');
    });
  }
});
