/*
document.addEventListener("DOMContentLoaded", function(event) { 
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);

  document.addEventListener('keypress', (event) =>{
    console.log(event.code)
  });

  document.addEventListener('keydown', function (e) {
    if(e.keyCode === 27) {
      console.log('Esc pressed')
      switchModal();
    }
  }); 

// All good up here

  modal.addEventListener('mouseup', function(event) {
    var menu = document.querySelector('.modal__dialog');
    var menu2 = document.querySelector('.modal__form');
    var menu3 = document.querySelector('.modal__policy')
    if((event.target != menu && event.target.parentNode != menu) && (event.target != menu2 && event.target.parentNode != menu2) && (event.target != menu3 && event.target.parentNode != menu3)) {
      switchModal();
    }
  });
 
});
*/

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal'),
      closeBtn = $('.modal__close');
  /* console.log(modal);
  console.log(modalBtn);
  console.log(closeBtn); */

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  var top_show = 200; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 1000; // Задержка прокрутки
  $(window).scroll(function () { // При прокрутке попадаем в эту функцию
    /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
    if ($(this).scrollTop() > top_show) $('#top').fadeIn();
    else $('#top').fadeOut();
  });
  $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
    /* Плавная прокрутка наверх */
    $('body, html').animate({
      scrollTop: 0
    }, delay);
  });

   //initialize swiper when document ready
   var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10);
  bullets.css('left', prev.width() + 10);

  new WOW().init();

  // Валидация формы

  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: {
        required: true,
        minlength: 16
      },
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Должно быть больше 2-х символов"
      },
      userPhone: {
        required: "Телефон обязателен",
        minlength: "Неверная длина телефона"
      },
      userEmail: {
        required: "Email обязателен",
        email: "Формат email должен содержать name@domain.com"
      }
    }
  });

  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: {
        required: true,
        minlength: 16
      },
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Должно быть больше 2-х символов"
      },
      userPhone: {
        required: "Телефон обязателен",
        minlength: "Неверная длина телефона"
      },
    }
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: {
        required: true,
        minlength: 16
      },
      userQuestion: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Должно быть больше 2-х символов"
      },
      userPhone: {
        required: "Телефон обязателен",
        minlength: "Неверная длина телефона"
      },
      userQuestion: {
        required: "Вопрос обязателен",
        minlength: "Длина вопроса должна быть не менее 5 символов"
      }
    }
  });

  //Маска для телефона
  $('[type=tel]').mask('+7(000)000-00-00', {placeholder: "+7(___)___-__-__"});

});