$(function(){

    $("#list-btn-left").on("click",tranToLeft);
    $("#list-btn-right").on("click",tranToRight);
    
    $(window).resize(function (){
        $("#product-view-box").css({"transform":"translateX(0px)","-webkit-transform":"translateX(0px)","-ms-transform":"translateX(0px)"});
    })

});

var tranLeft = 0;

function tranToLeft(){

    var endTran = (731-$(window).width());

    if(Math.abs(tranLeft)<endTran){
        tranLeft -= 60;
        var transTo = "translateX("+tranLeft+"px)";
        $("#product-view-box").css({"transform":transTo,"-webkit-transform":transTo,"-ms-transform":transTo});
        $("#list-btn-right").show();
    }
    else if(Math.abs(tranLeft) != endTran){
        var transTo = "translateX("+(-endTran-30)+"px)";
        $("#product-view-box").css({"transform":transTo,"-webkit-transform":transTo,"-ms-transform":transTo});
        $("#list-btn-left").hide();
    }

}

function tranToRight(){

    if(tranLeft <= -60){
        tranLeft += 60;
        var transTo = "translateX("+tranLeft+"px)";
        $("#product-view-box").css({"transform":transTo,"-webkit-transform":transTo,"-ms-transform":transTo});
        $("#list-btn-left").show();
    }else{
        $("#list-btn-right").hide();
    }

}