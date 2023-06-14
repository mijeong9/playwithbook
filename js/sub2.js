var swiper = new Swiper(".tab1_swiper", { loop: true, });

$(document).ready(function () {

    //처음들어갔을때 모습 만들기...
    $(".tab_content").hide(); //tab_content 부분을 모두 숨김.
    $("ul.tabs li:first").addClass("active").show(); //첫번째 탭이 active클래스를 붙이고, 보여줌.
    $(".tab_content:first").show(); //tab_contents중 첫번째꺼를 보여줌

    //On Click Event
    $("ul.tabs li").click(function () {

        $("ul.tabs li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //선택한 탭에만 active클래스 붙임
        $(".tab_content").hide(); //모든 contents들 숨김

        var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
        /*.attr( attributeName ) -> 선택한 요소의 속성의 값을 가져옵니다.
        .find()는 어떤 요소의 하위 요소 중 특정 요소를 찾을 때 사용합니다.*/
        $(activeTab).fadeIn(); //Fade in the active ID content(active되어있는 칸의 id 값을 가진 부분이 나타남)
        return false;
    });

});

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


    $(".read_me>li").mouseenter(function () {
        $(".me_read").stop().slideDown();
        $("me_bg").stop().slideDown();
    });
    $(".read_me>li").mouseleave(function () {
        $(".me_read").stop().slideUp();
        $(".me_bg").stop().slideUp();
    });

    $(".think_me>li").mouseenter(function () {
        $(".me_think").stop().slideDown();
        $("me_bg").stop().slideDown();
    });
    $(".think_me>li").mouseleave(function () {
        $(".me_think").stop().slideUp();
        $(".me_bg").stop().slideUp();
    });

    $(".feel_me>li").mouseenter(function () {
        $(".me_feel").stop().slideDown();
        $("me_bg").stop().slideDown();
    });
    $(".feel_me>li").mouseleave(function () {
        $(".me_feel").stop().slideUp();
        $(".me_bg").stop().slideUp();
    });

    $(".play_me>li").mouseenter(function () {
        $(".me_play").stop().slideDown();
        $("me_bg").stop().slideDown();
    });
    $(".play_me>li").mouseleave(function () {
        $(".me_play").stop().slideUp();
        $(".me_bg").stop().slideUp();
    });

    $(".bkto_me>li").mouseenter(function () {
        $(".me_bkto").stop().slideDown();
        $("me_bg").stop().slideDown();
    });
    $(".bkto_me>li").mouseleave(function () {
        $(".me_bkto").stop().slideUp();
        $(".me_bg").stop().slideUp();
    });
});

$(document).ready(function () {
    /* 1 */
    $(window).scroll(function () {
        /* 2 */
        $('.gd_green').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if (bottom_of_window > bottom_of_object / 2) {
                $(this).animate({ 'opacity': '1', 'margin-left': '0px' }, 2000);
            }
        });
    });
});
$(document).ready(function () {
    /* 1 */
    $(window).scroll(function () {
        /* 2 */
        $('.gd_right').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if (bottom_of_window > bottom_of_object / 2) {
                $(this).animate({ 'opacity': '1', 'margin-right': '0px' }, 2000);
            }
        });
    });
});
$(document).ready(function () {
    /* 1 */
    $(window).scroll(function () {
        /* 2 */
        $('.gd_blue').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if (bottom_of_window > bottom_of_object / 2) {
                $(this).animate({ 'opacity': '1', 'margin-left': '0px' }, 2000);
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
