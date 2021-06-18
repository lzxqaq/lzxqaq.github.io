$(function(){
    $(".menu li").click(function() {
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
    });
});