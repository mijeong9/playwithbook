$(function () {


    $("#nav>li").mouseenter(function () {
        $(".sub").stop().slideDown();
        $(".sub_bg").stop().slideDown();
    });
    $("#nav>li").mouseleave(function () {
        $(".sub").stop().slideUp();
        $(".sub_bg").stop().slideUp();
    });



});

$(function () {
    $(".notice> ul> li").click(function () {
        $(this).children(".text_info").slideToggle();
        $(this).siblings().children(".text_info").slideUp();
    });
});
$(function () {
    $(".notice> ul> li").click(function () {
        $(this).toggleClass("turn");

        if ($(this).hasClass("turn") === true) {
            $(this).siblings().removeClass("turn");

        }

    });
});
$(function () {
    $(".sns_pic1 a").click(function () {
        $(".sns_pop1").fadeIn(1000);
    })
    $(".sns_pop1").click(function () {
        $(".sns_pop1").fadeOut(1000);
    })

    $(".sns_pic2 a").click(function () {
        $(".sns_pop2").fadeIn(1000);
    })
    $(".sns_pop2").click(function () {
        $(".sns_pop2").fadeOut(1000);
    })

    $(".sns_pic3 a").click(function () {
        $(".sns_pop3").fadeIn(1000);
    })
    $(".sns_pop3").click(function () {
        $(".sns_pop3").fadeOut(1000);
    })

    $(".sns_pic4 a").click(function () {
        $(".sns_pop4").fadeIn(1000);
    })
    $(".sns_pop4").click(function () {
        $(".sns_pop4").fadeOut(1000);
    })
})

$(document).ready(function () {
    /* 1 */
    $(window).scroll(function () {
        /* 2 */
        $('.brand_in1').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if (bottom_of_window > bottom_of_object / 2) {
                $(this).animate({ 'opacity': '1' }, 2000);
            }
        });
    });
});

$(document).ready(function () {
    /* 1 */
    $(window).scroll(function () {
        /* 2 */
        $('.brand_in2').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if (bottom_of_window > bottom_of_object / 2) {
                $(this).animate({ 'opacity': '1' }, 3000);
            }
        });
    });
});
$(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.btn_gotop').show();
    } else {
        $('.btn_gotop').hide();
    }
});
$('.btn_gotop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 400);
    return false;
});
