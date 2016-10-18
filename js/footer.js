
$(function(){

    $(".product-title").on("click",productToggle);

    $(window).resize(winResize);

});

function winResize(){

    if($("body").width() >= 751){

        $(".product-title").find(".sign").css({"transform":"rotate(0deg)"});
        $(".product-content").show(1).find("ul li").css({"transform":"translateY(0px)","-webkit-transform":"translateY(0px)","-ms-transform":"translateY(0px)"});
        $(".product-list .sm-title dt").css({"font-size":"13px","font-weight":"400"})
        $(".product-title").data("toggle","close");

    }
    else{

        $(".product-content").hide(300).find("ul li").css({"transform":"translateY(-100px)","-webkit-transform":"translateY(-100px)","-ms-transform":"translateY(-100px)"});

    }

}

function productToggle() {

    if($(window).width()<751){

        var idx = $(this).data("index");

        if($(this).data("toggle") == "close"){
            $(this).find(".sign").css({"transform":"rotate(45deg)"});
            $(".product-content").eq(idx).show(1).find("ul li").css({"transform":"translateY(0px)","-webkit-transform":"translateY(0px)","-ms-transform":"translateY(0px)"});
            $(".product-list .sm-title dt").eq(idx).css({"font-size":"15px","font-weight":"500"})
            $(this).data("toggle","open");
        }
        else{
            $(this).find(".sign").css({"transform":"rotate(0deg)"});
            $(".product-content").eq(idx).hide(300).find("ul li").css({"transform":"translateY(-100px)","-webkit-transform":"translateY(-100px)","-ms-transform":"translateY(-100px)"});
            $(".product-list .sm-title dt").eq(idx).css({"font-size":"13px","font-weight":"400"})
            $(this).data("toggle","close");
        }

    }


}