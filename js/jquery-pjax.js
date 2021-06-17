$('a').bind('click',function(){
    $.ajax({
        type:'GET',
        url:this.href,
        success:function(data){
            console.log("success!");
            $('#main').html(data);//pjax-content为主体部分
        }
    });
    window.history.pushState({url:this.href},null,this.href);
    return false;
});
window.addEventListener("popstate", function() {
    $.ajax({
        type:'GET',
        url:location.href,
        success:function(data){
            $('#main').html(data);
        }
    });										
});