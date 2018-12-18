/// <reference path="./typings/globals/jquery/index.d.ts" />
$(function(){
    $('.bottom ul li').click(function(){
        $('.bottom ul li').removeClass('point');
        $(this).addClass('point');
        x = $(this).index();
        x = x+1;
        $('.top ul li').removeClass('appear');
        $('.top ul li:nth-child('+x+')').addClass('appear');
        return false;
    })
    $(window).scroll(function(){
        if ($('html,body').scrollTop()>100)
        {
            $('.btn_up').addClass('appear_btn_up');
        }
        else
        {
            $('.btn_up').removeClass('appear_btn_up');
        }
    })
    $('.btn_up').click(function(){
        $('html,body').animate({scrollTop:0});
        return false;
    })
    $('.nv_menu ul li').click(function(){
        $('.nv_menu ul li').removeClass('active_nv_menu');
        $(this).addClass('active_nv_menu');
        y = $(this).index();
        y = y+1;
        $('.set_content ul li').removeClass('active_set_content');
        $('.set_content ul li:nth-child('+y+')').addClass('active_set_content');
        return false;
    })
    var test = 0;
    $('.muangay,.datcoc').click(function(){
        $('.form_google').addClass('appear_form_google');
        $('.form').addClass('appear_form');
        return false;
    })
    $('.form').click(function(){
        test = test+1;
    })
    $('.form_google').click(function(){
        if (test!=0)
        {
            test=0;
            return false;
        }
        $('.form_google').removeClass('appear_form_google');
        $('.form').removeClass('appear_form');
    })
    $('.back').click(function(){
        $('.form_google').removeClass('appear_form_google');
        $('.form').removeClass('appear_form');
        return false;
    })
    $(document).keyup(function(e) {
        if (e.keyCode === 27)
        {
            $('.form_google').removeClass('appear_form_google');
            $('.form').removeClass('appear_form');
        }
      });
    $('.hinhminhhoa').click(function(){
        // $(this).parent().parent().parent().next().addClass('appear_tongquat');
        // $(this).parent().parent().parent().next().children('img').addClass('appear_hinhminhhoa_to');
        hinh = $(this).data('phanloaihinh');
        $(hinh).addClass('appear_tongquat');
        $(hinh).children('img').addClass('appear_hinhminhhoa_to');
        return false;
    })
    $('.black_background').click(function(){
        $(this).children('img').removeClass('appear_hinhminhhoa_to');
        $(this).removeClass('appear_tongquat');
    })
    $(document).keyup(function(e) {
        if (e.keyCode === 27)
        {
            $('.black_background').removeClass('appear_tongquat');
            $('.hinhminhhoa_to').removeClass('appear_hinhminhhoa_to');
        }
      });
    $('.champion').append('<img class=swap_image src=./images/transparent.png>');
    var count =0;
    $('.button_next').click(function(){
        soluonganh = $(this).parent().children('img').length;
        soluonganh = soluonganh-1;
        if (count>soluonganh)
        {
            count=0;
        }
        if (count==soluonganh)
        {
            count=0;
        }
        count = count+1;
        $(this).next().next().next().attr({src:$(this).parent().children('img:nth-child('+count+')').attr('src')});
    })
    $('.button_previous').click(function(){
        soluonganh = $(this).parent().children('img').length;
        soluonganh = soluonganh-1;
        if (count==0)
        {
            count=soluonganh;
        }
        if (count>soluonganh)
        {
            count=soluonganh;
        }
        if (count==1)
        {
            count=soluonganh+1;
        }
        count = count-1;
        $(this).next().next().attr({src:$(this).parent().children('img:nth-child('+count+')').attr('src')});
    })
    $hieuung = $('.account_infos').isotope({
        itemSelector: '.image_info',
        layoutMode: 'masonry'
      });
    $hieuung.imagesLoaded().progress( function() {
        $hieuung.isotope('layout');
    });
    // $hieuung1 = $('.father_account').isotope({
    //     itemSelector: '.child_account',
    //     layoutMode: 'masonry'
    //   });
    // $hieuung1.imagesLoaded().progress( function() {
    //     $hieuung1.isotope('layout');
    //   });
    // $('.loctheorank a').click(function(){
    //     $('.loctheorank a').removeClass('active_locrank');
    //     $(this).addClass('active_locrank');
    //     rank = $(this).data('locrank');
    //     $hieuung1.isotope({ filter: rank });
    //     return false;
    // })
    $hieuung2 = $('.skin_account').isotope({
        itemSelector: '.skin',
        layoutMode: 'masonry'
      });
    $hieuung2.imagesLoaded().progress( function() {
        $hieuung2.isotope('layout');
      });
    $('.loctheoskin a').click(function(){
        $('.loctheoskin a').removeClass('active_skin');
        $(this).addClass('active_skin');
        skin = $(this).data('skin');
        $hieuung2.isotope({ filter: skin });
        return false;
    })
    $hieuung3 = $('.list_champion').isotope({
        itemSelector: '.champion',
        layoutMode: 'masonry'
      });
    $hieuung3.imagesLoaded().progress( function() {
        $hieuung3.isotope('layout');
      });
    $('.locchamp a').click(function(){
        $('.locchamp a').removeClass('active_champ');
        $(this).addClass('active_champ');
        champ = $(this).data('champ');
        $hieuung3.isotope({ filter: champ });
        return false;
    })
    $('.phantrang_question a').click(function(){
        $('.phantrang_question a').removeClass('active_phantrang');
        $(this).addClass('active_phantrang');
        trang = $(this).data('trang');
        $('.list_question').removeClass('active_question');
        $(trang).addClass('active_question');
        return false;
    })
    $('.section2 a.btn,.list_social_network a.btn').click(function(){
        return false;
    })
})