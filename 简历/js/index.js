//首页js

//index_head print
    $(".index_headiv li:nth-child(3)").click(function() {
         $("body").print(/*options*/);
    });
//bank_top
window.onscroll = function () {
    if (document.documentElement.scrollTop + document.body.scrollTop > 291) {
        document.getElementById("bank_top").style.display = "block";
    }
    else {
        document.getElementById("bank_top").style.display = "none";
    }
}
   
//微商城二维码遮盖层
    $("#cover_wsc_btn").click(function(){
        //alert(1);
        $("#cover_wsc").css("display","block");
        $("body").css({"overflow":"hidden"});
        $("html").css({"overflow":"hidden"});
    });

    

//APP二维码遮盖层
    $("#cover_app_btn").click(function(){
        //alert(1);
        $("#cover_app").css("display","block");
        $("body").css({"overflow":"hidden"});
        $("html").css({"overflow":"hidden"});
    })

    $(".cover").click(function(){
        //alert(1);
        $(".cover").css("display","none");
        $("body").css({"overflow":"auto"});
        $("html").css({"overflow":"auto"});
    });

//收藏
//$('.fav').css("color","rgb(0, 0, 0)"); 
$('.fav').click(function(){
    var currentcolor=$(this).css("color")
    if(currentcolor==="rgb(0, 0, 0)"){
        $(this).css("color","rgb(204, 96, 85)");
    }else{
        $(this).css("color","rgb(0, 0, 0)");  
    }
});

$("#departure").click(function(){
    //alert(1);
    $("#sorry").show();
    setTimeout(function() {
       $("#sorry").hide();
        },1000);
    $("#name").val("");
    $("#contact_way").val("");
    $("#say_content").val("");
})