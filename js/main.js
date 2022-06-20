$(document).ready(function(){
    $('.main_map__hide').click(function() {
        $(this).remove();
    });
    $('.js_sl_news').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false
    });
    $('.js_sl_certificates').slick({
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false
    });
    $('.js_sl_vendors').slick({
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false
    });
    $('.js_sl_slider').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
    });
    $('.js_sl_project').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false
    });
    $('.js_sl_first').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
    });
});