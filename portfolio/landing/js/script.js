$(function() {
    // всплывающее окно с видео
    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: function(url) {
                        var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                        if (!m || !m[1]) return null;
                        return m[1];
                    },
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                },
            }
        }
    });

    // развернуть ответы в FAQ
    $('.faq-item .question a').click(function() {
        $('.answer').slideUp(400);
        $('.faq-item').removeClass('expanded');

        $(this).closest('.faq-item').toggleClass('expanded');
        $(this).closest('.faq-item').find('.answer').slideToggle(400);
    });

    // карусель
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        speed: 500,
        slidesPerView: 3,
        centeredSlides: true,

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints: {
            500: {
                slidesPerView: 1,
                centeredSlides: false,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 'auto',
                centeredSlides: true,
                spaceBetween: 80
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            1200: {
                slidesPerView: 2
            },
            1366: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            1420: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }

    });

    // счетчик
    var a = 0;
    $(window).scroll(function() {

        var oTop = $('#counter').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.value').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                        countNum: countTo
                    },

                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
            });
            a = 1;
        }
    });

    // masked input для телефонного номера
    $(function() {
        $('#phone').mask('8(999) 999-9999');
    });

    // smooth scrolling to anchors
    let anchorlinks = document.querySelectorAll("a[href^='#']")
    for (let item of anchorlinks) {
        item.addEventListener('click', (e) => {
            let hashval = item.getAttribute('href')
            let target = document.querySelector(hashval)
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
            history.pushState(null, null, hashval)
            e.preventDefault()
        })
    }

});
