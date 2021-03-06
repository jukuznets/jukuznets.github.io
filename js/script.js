$(function() {
    $('.mobile-menu-icon').click(function() {
        $('body').toggleClass('mobile-menu_shown');
    });

    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        speed: 500,
        slidesPerView: 1,
        centeredSlides: true,

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    $(window).scroll(function(){
        var startHeight = $('.portfolio').offset().top - window.innerHeight,
            finishHeight = $('footer').offset().top - window.innerHeight,
            currentScroll = $(this).scrollTop(),
            $button = $('.up-button');

        if (currentScroll > startHeight && currentScroll < finishHeight) {
            $button.fadeIn();
        } else {
            $button.fadeOut();
        }
    });

    var wrapper = document.querySelector('.text-wrap');
    var text = document.querySelector('.header-text');

    var textCont = text.textContent;
    text.style.display = 'none';

    for (var i = 0; i < textCont.length; i++) {
      (function(i) {
        setTimeout(function() {
          var texts = document.createTextNode(textCont[i])
          var span = document.createElement('span');
          span.appendChild(texts);

          span.classList.add('wave');
          wrapper.appendChild(span);

        }, 75 * i);
      }(i));
    }
});
