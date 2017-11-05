//首页js

//index_head
    $(".index_headiv li:nth-child(1)").click(function() {
        document.getElementById("about_us").scrollIntoView();
    })
    $(".index_headiv li:nth-child(2)").click(function() {
        document.getElementById("contact").scrollIntoView();
    })
    $(".index_headiv li:nth-child(3)").click(function() {
         $("body").print(/*options*/);
    })
    $(".index_headiv li:nth-child(4)").click(function() {
        document.getElementById("favorite").scrollIntoView();
    })
    //bank_top
    window.onscroll = function () {
        if (document.documentElement.scrollTop + document.body.scrollTop > 291) {
            document.getElementById("bank_top").style.display = "block";
        }
        else {
            document.getElementById("bank_top").style.display = "none";
        }
    }
    $(".bank_top li:nth-child(1)").click(function() {
        document.getElementById("about_us").scrollIntoView();
    })
    $(".bank_top li:nth-child(2)").click(function() {
        document.getElementById("education").scrollIntoView();
    })
    $(".bank_top li:nth-child(3)").click(function() {
        document.getElementById("experience").scrollIntoView();
    })
    $(".bank_top li:nth-child(4)").click(function() {
        document.getElementById("milestone").scrollIntoView();
    })
    $(".bank_top li:nth-child(5)").click(function() {
        document.getElementById("favorite").scrollIntoView();
    })
    $(".bank_top li:nth-child(6)").click(function() {
        document.getElementById("contact").scrollIntoView();
    })