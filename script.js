$(function(){

    
    $('#plof-show').click(function() {
        $('#plof-modal').fadeIn();
        $('#plof-show').addClass('open');
    });

    $('#close').click(function() {
        if($('#plof-show').hasClass('open')){
        $('.plofiles').removeClass('open');
        $('#plof-modal').fadeOut();
        }
    });
    $('#plof-modal').click(function() {
        if($('#plof-show').hasClass('open')){
        $('.plofiles').removeClass('open');
        $('#plof-modal').fadeOut();
        }
    });
    

    $('#req_show').click(function() {
        $('#req_modal').fadeIn();
        $('#req_show').addClass('open');
    });

    $('#close').click(function() {
        if($('#req_show').hasClass('open')){
        $('#req_show').removeClass('open');
        $('#req_modal').fadeOut();
        }
    });

    $(function(){
        var pagetop = $('#page_top');
        // ボタン非表示
        pagetop.hide();
      
        // 100px スクロールしたらボタン表示
        $(window).scroll(function () {
           if ($(this).scrollTop() > 100) {
                pagetop.fadeIn();
           } else {
                pagetop.fadeOut();
           }
        });
        pagetop.click(function () {
           $('body, html').animate({ scrollTop: 0 }, 500);
           return false;
        });
      });
    });
