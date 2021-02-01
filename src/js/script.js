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
  $('.overlay, #modal').fadeIn();

});

$('.modal__close').on('click', function() {
  $('.overlay, #modal, #thanks').fadeOut();
  $('form')[0].reset();  //сбросить значения интуп при закрытии окна
  // $('#thanks').fadeOut();
});

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
  // messages: {
  //   name: "Пожалуйста введите свое имя",
  //   email: {
  //     required: "We need your email address to contact you",
  //     email: "Your email address must be in the format of name@domain.com"
  //   }
  // }
});

$('input[name=phone]').mask("+7 (999) 999-99-99");

$('form').submit(function(e) {
  if ($('input').val() === "") {
    return false;
  } else {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $(this).find("textarea").val("");
        $('#modal').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');
        $('form').trigger('reset');
    });
    // setTimeout(function(){$('#thanks').fadeOut()},3000)
    //     return false;
  }       
});

$('.btn').mouseover( function(e) {
  e.preventDefault();
  $(this).addClass('btn__hover');
});

$('.btn').mouseout( function(e) {
  e.preventDefault();
  $(this).removeClass('btn__hover');
});


$('.btn').click(function() {
  Swal.fire(
    'Good job!',
    'You clicked the button!',
    'success'
  );
})


 }); 
  




