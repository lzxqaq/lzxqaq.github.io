$(function(){
    $('body').delegate('a', 'click', function (event) {
        event.preventDefault();
        $.ajax({
            type:'GET',
            url:this.href,
            success:function(data){
                var txt = document.createElement("div");
                txt.innerHTML = data;
                data = $(txt).find("#pjax-content").html();
                $('#pjax-content').html(data);
            }
        });
      //改变地址栏并添加历史记录
        window.history.pushState({url:this.href},null,this.href);
    });
    window.addEventListener("popstate", function() {
        $.ajax({
            type:'GET',
            url:location.href,
            success:function(data){
                var txt = document.createElement("div");
                txt.innerHTML = data;
                data = $(txt).find("#pjax-content").html();
                $('#pjax-content').html(data);
            }
        });										
    });
});