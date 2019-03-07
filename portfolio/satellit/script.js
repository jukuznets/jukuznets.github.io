$(document).ready(function() {
    $('.mobile-menu-icon').click(function() {
        $('body').toggleClass('mobile-menu-shown');
    });

    $('#property-type').click(function(e) {
        $('.filter-popup').toggle();
        $('#property-type').toggleClass('select-open');
        e.stopPropagation();
    });

    function removeClass() {
        $('#property-type').removeClass('select-open');
    }

    $(document).click(function(e) {
        var $filter = $('.filter-popup');
        if (!$filter.is(e.target) && $filter.has(e.target).length === 0) {
            $filter.hide();
            removeClass();
        }
    });

    $('.filter-popup li').click(function() {
        var optionVal = $(this).html();
        $('#property-type span').html(optionVal);
        $('.filter-popup').hide();
        removeClass();
    });

    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        speed: 500,
        slidesPerView: 1,
        centeredSlides: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });

    $(window).scroll(function() {
        var startHeight = $('.buying-process').offset().top - window.innerHeight,
            finishHeight = $('.enquiry').offset().top - window.innerHeight,
            currentScroll = $(this).scrollTop(), $button = $('.floating-button');

        if (currentScroll > startHeight && currentScroll < finishHeight) {
            $button.fadeIn();
        } else {
            $button.fadeOut();
        }
    });
});
