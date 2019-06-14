$(function() {
    $('.schedule__content:first').show();
    $('.schedule__title:first').addClass('expanded');

    $('.schedule__title').on('click', function() {
        var content = $(this).next();

        $('.schedule__content').not(content).slideUp(400);
        $('.schedule__title').not(this).removeClass('expanded');
        $(this).toggleClass('expanded');
        content.slideToggle(400);
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
});
