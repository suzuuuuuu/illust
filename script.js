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

    $('#all_btn').click(function() {
        $('#all_btn').addClass('active');
        $('#ori_btn').removeClass('active');
        $('#fan_btn').removeClass('active');
        $('.fan').fadeIn();
        $('.orig').fadeIn();
    });

    $('#ori_btn').click(function() {
        $('#ori_btn').addClass('active');
        $('#all_btn').removeClass('active');
        $('#fan_btn').removeClass('active');
        $('.orig').fadeIn();
        $('.fan').fadeOut();
    });

    $('#fan_btn').click(function() {
        $('#fan_btn').addClass('active');
        $('#ori_btn').removeClass('active');
        $('#all_btn').removeClass('active');
        $('.fan').fadeIn();
        $('.orig').fadeOut();
    });
    


});
