$(function() {

  // Инициализация слайдера

  $('.jcarousel').jcarousel({
      // Базовые настройки скрипта пишутся здесь

  });

  
  // Пагинация слайдера

  $('.jcarousel-pagination')
  // Триггер класса active

  .on('jcarouselpagination:active', 'a', function() {
      $(this).addClass('active');
  })
  .on('jcarouselpagination:inactive', 'a', function() {
      $(this).removeClass('active');
  })
  // Инициализация пагинации

  .jcarouselPagination({
      item: function(page) {
          return '<a href="#' + page + '">' + page + '</a>';
      }
  });

  // Автопрокрутка слайдера

  $('.jcarousel').jcarouselAutoscroll({
      interval: 3000,
      target: '+=1',
      autostart: true
  });

});

