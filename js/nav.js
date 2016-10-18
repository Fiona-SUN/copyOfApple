/**
 * Created by FIONA on 2016/10/10/010.
 */

$(function(){

    $("#nav-toggle-btn").on("click",navToggle);

    $(window).resize(windowRez);

    $("#ser-toggle").on("click",serToggle);

    $("#ser-close-toggle").on("click",serCloseToggle);


});

//屏幕缩放
function windowRez(){

    if($(window).width()>=751){
        if( ($("#nav-toggle-btn").data("toggle") == "open") || ($("#nav-toggle-btn").data("toggle") == "wait")){
            $("body").height($(document).height());
        }

        $("body").css({"overflow-y":"auto"});
        $(".nav-body>ul").height(44);

        $(".ser-wrapper").hide();

        $(".nav-body>ul").css({"transform":"rotateX(0deg)"}).slideDown(1);

        $(".nav-body-shop").show().css({
            "transform": "translateX(0px)",
            "-webkit-transform": "translateX(0px)",
            "-ms-transform": "translateX(0px)",
            "display":"inline-block"
        });

    }
    else{
        $(".ser-wrapper").height($(window).height());
        $(".nav-body>ul").height($(window).height());

        if( ($("#nav-toggle-btn").data("toggle") == "open") || ($("#nav-toggle-btn").data("toggle") == "wait")){

            $("body").height($(window).height());
            $("body").css({"overflow-y":"hidden"});

            $(".nav-body-shop").css({
                "transform": "translateX(50px)",
                "-webkit-transform": "translateX(50px)",
                "-ms-transform": "translateX(50px)"
            }).hide();

            if(($("#nav-toggle-btn").data("toggle") == "wait")){
                $(".ser-wrapper").show();
                $(".nav-body>ul").slideUp(1);
                console.log("123")
            }
        }else{
            $(".nav-body>ul").css({"transform":"rotateX(90deg)"}).slideUp(1);
        }
    }

}

//小屏幕导航效果
function navToggle() {

    if($(this).data("toggle") == "close"){

        $(".ser-wrapper").height($(window).height());
        $(".nav-body>ul").height($(window).height());
        $("body").height($(window).height());
        $("body").css({"overflow-y":"hidden"})

        $(this).css({"transform":"rotate(90deg)","-webkit-transform":"rotate(90deg)","-ms-transform":"rotate(90deg)"});
        $(this).find(".icon-bar-top").css({"transform":"rotate(45deg)","-webkit-transform":"rotate(45deg)","-ms-transform":"rotate(45deg)"});
        $(this).find(".icon-bar-bottom").css({"transform":"rotate(-45deg)","-webkit-transform":"rotate(-45deg)","-ms-transform":"rotate(-45deg)"});
        $(this).data("toggle","open");

        $(".nav-body>ul").slideToggle(1);
        $(".nav-body>ul").css({"transform":"rotateX(0deg)","-webkit-transform":"rotateX(0deg)","-ms-transform":"rotateX(0deg)"});
        $(".apple-nav").css("background-color","rgb(0,0,0)");

        $(".nav-body-shop").css({
            "transform": "translateX(50px)",
            "-webkit-transform": "translateX(50px)",
            "-ms-transform": "translateX(50px)"
        }).hide(200);


        $(".ser-wrapper").hide(500);
        $(".ser-close-toggle").hide();
        $(".ser-apple").slideDown();

    }
    else if($(this).data("toggle") == "open"){
        $(this).find(".icon-bar-top").css({"transform":"rotate(0deg) translateY(-3px)","-webkit-transform":"rotate(0deg) translateY(-3px)","-ms-transform":"rotate(0deg) translateY(-3px)"});
        $(this).find(".icon-bar-bottom").css({"transform":"rotate(0deg) translateY(3px)","-webkit-transform":"rotate(0deg) translateY(3px)","-ms-transform":"rotate(0deg) translateY(3px)"});
        $(this).css({"transform":"rotate(0deg)","-webkit-transform":"rotate(0deg)","-ms-transform":"rotate(0deg)"});
        $(this).data("toggle","close");

        $(".nav-body>ul").slideToggle(200);
        $(".nav-body>ul").css({"transform":"rotateX(90deg)","-webkit-transform":"rotateX(90deg)","-ms-transform":"rotateX(90deg)"});
        $(".apple-nav").css("background-color","rgba(0,0,0,0.8)");


        $(".nav-body-shop").show().css({
            "transform": "translateX(0px)",
            "-webkit-transform": "translateX(0px)",
            "-ms-transform": "translateX(0px)"
        });

        $("body").height($(document).height());
        $("body").css({"overflow-y":"auto"});
        $(".nav-body>ul").height(44);



    }else if($(this).data("toggle") == "wait"){

        $(this).find(".icon-bar-top").css({"transform":"rotate(0deg) translateY(-3px)","-webkit-transform":"rotate(0deg) translateY(-3px)","-ms-transform":"rotate(0deg) translateY(-3px)"});
        $(this).find(".icon-bar-bottom").css({"transform":"rotate(0deg) translateY(3px)","-webkit-transform":"rotate(0deg) translateY(3px)","-ms-transform":"rotate(0deg) translateY(3px)"});
        $(this).css({"transform":"rotate(0deg)","-webkit-transform":"rotate(0deg)","-ms-transform":"rotate(0deg)"});
        $(this).data("toggle","close");

        $(".apple-nav").css("background-color","rgba(0,0,0,0.8)");

        $(".ser-wrapper").hide(500);
        $(".ser-close-toggle").hide();
        $(".ser-apple").slideDown();

        $(".nav-body>ul").slideUp(200);
        $(".nav-body>ul").css({"transform":"rotateX(90deg)","-webkit-transform":"rotateX(90deg)","-ms-transform":"rotateX(90deg)"});

        $(".nav-body-shop").css({
            "transform": "translateX(0px)",
            "-webkit-transform": "translateX(0px)",
            "-ms-transform": "translateX(0px)"
        });
    }
}

//search
function serToggle(){
    $(".nav-body>ul").slideUp();
    $(".ser-wrapper").show();
    $(".ser-apple").slideToggle();
    $(".ser-close-toggle").show(500);

    $("#nav-toggle-btn").data("toggle","wait");

}

function serCloseToggle(){
    $(".nav-body>ul").slideDown();
    $(".ser-wrapper").hide(500);
    $(".ser-apple").slideToggle();
    $(".ser-close-toggle").hide(500);

    $("#nav-toggle-btn").data("toggle","open");
}