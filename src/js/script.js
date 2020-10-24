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

$('ul.project__tabs').on('click', 'li:not(.project__tab_active)', function() {
  $(this)
    .addClass('project__tab_active').siblings().removeClass('project__tab_active')
    .closest('div.project__view').find('div.project__content').removeClass('project__content_active').eq($(this).index()).addClass('project__content_active');
});
//modal 

$('.button').on('click', function() {
  $('.overlay, .modal').fadeIn();
});

$('.modal__close').on('click', function() {
  $('.overlay, .modal').fadeOut();
});

$('.modal__form').validate({
  rules: {
    name: "required",
    phone: "required",
    text: {
      required: true,
      minlength: 20
    },
    email: {
      required: true,
      email: true
    },
  }
  // messages: {
  //   name: "Пожалуйста введите свое имя",
  //   email: {
  //     required: "We need your email address to contact you",
  //     email: "Your email address must be in the format of name@domain.com"
  //   }
  // }
});

$('input[name=phone]').mask("+7 (999) 999-99-99");
});



