$(document).ready(function(){
  $('.vimeo__slaider').slick({
      speed: 900,
      infinite: true,
      adaptiveHeight: false,
      autoplay: true,
      dots: true,
      dotsClass: 'slick-dots',
      arrows: false,
      slidesToShow: 1
      // responsive: [
      //     {
      //         breakpoint: 767,
      //         settings: {
      //             autoplay: true,
      //             dots: false,
      //             arrows: false
      //         }
      //     }
      // ]
  });

  //ищем ul, кликаем на li, добавляем класс активности, а у остальных табов убираем. ищем родителя __view находим у него контент, удаляем класс активности и выбираем элемент с индексом как у This и добавляем класс

  $('ul.project__tabs').on('click', 'li:not(.project__tab_active)', function() {
    $(this)
      .addClass('project__tab_active').siblings().removeClass('project__tab_active')
      .closest('div.project__view').find('div.project__content').removeClass('project__content_active').eq($(this).index()).addClass('project__content_active');
  });
  //modal 

  $('.button').on('click', function() {
    $('.overlay, #modal').fadeIn();

  });

  $('.modal__close').on('click', function() {
    $('.overlay, #modal, #thanks').fadeOut();
    $('form')[0].reset();  //сбросить значения интуп при закрытии окна
    // $('#thanks').fadeOut();
  });

  //валидация формы в модальном окне

  $('.modal__form').validate({
    rules: {
      name: "required",
      phone: "required",
      text: {
        required: true,
        minlength: 10
      },
      email: {
        required: true,
        email: true
      },
    }
  });

  $('input[name=phone]').mask("+7 (999) 999-99-99"); //маска номера

  $('form').submit(function(e) {
    if ($('input').val() === "") {
      return false; //если инпут пустой, то отправка не происходит 
    } else {
      e.preventDefault(); //отменяем перезагрузку
      $.ajax({  //отправляем данные на сервер с помощью php mailer
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize() //собирает данные с формы и возвращает строку
      }).done(function() {   //отправка успешна
          $(this).find("input").val("");   
          $(this).find("textarea").val("");
          $('#modal').fadeOut();
          $('.overlay, #thanks').fadeIn('slow');
          $('form').trigger('reset'); //очищение формы
      });
      // setTimeout(function(){$('#thanks').fadeOut()},3000)
          return false;
    }       
  });


  $('.btn').click(function() {
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    );
  });


}); 
  




