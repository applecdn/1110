$(document).ready(function () {
    new WOW().init();
    $('nav').find('a').click(function () {
        let target = $(this).data('target');
        let o = $(target).offset().top - 51;
        $('html,body').animate({
            scrollTop: o
        }, 300);
    })
})