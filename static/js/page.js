$(function () {
    var vocs = $('#vocation>.vocation');
    vocs.click(function () {
        var _this = $(this);
        if (_this.next('li').is(':hidden')) {
            _this.css('background-position', 'right 0').next('li').slideDown();
        }
        else {
            _this.css('background-position', 'right -70px').next('li').slideUp();
        }
    });
    var headfixNav = $('#head>li');
    
    

    headfixNav.eq(0).click(function () {
        $('html,body').animate({scrollTop: 0}, 500);
    })
    headfixNav.eq(1).click(function () {
       var offsetH_1 = $('.cte.join.db').offset().top - 70;
        $('html,body').animate({scrollTop: offsetH_1}, 500);
    })
    headfixNav.eq(2).click(function () {
       var offsetH_2 = $('.cte.contact.db').offset().top -70;
        $('html,body').animate({scrollTop: offsetH_2-45}, 500);
    })

    
    var scrollTimeout = -1;
    $(window).scroll(function () {
        var offsetH_1 = $('.cte.join.db').offset().top - 70;
        var offsetH_2 = $('.cte.contact.db').offset().top -70;
        var scrollTop = $(document).scrollTop();
        var bt = $('.main').offset().top
        scrollTop = scrollTop + 25;
        var head = $('#head');
        if (scrollTop -25 > bt) {
            head.css({'position': 'fixed'})
        }
        else {
            head.css({'position': 'relative'});
        };
        if (scrollTop > 0 && scrollTop < offsetH_1-70) {
            headfixNav.eq(0).addClass('act').siblings().removeClass('act');
        }
        else if (scrollTop > offsetH_1-69 && scrollTop < offsetH_2-110) {
            headfixNav.eq(1).addClass('act').siblings().removeClass('act');
        }
        else if (scrollTop > offsetH_2-109) {
            headfixNav.eq(2).addClass('act').siblings().removeClass('act');
        }
        ;
    })
})