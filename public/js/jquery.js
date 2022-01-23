$(document).ready(function(){
    $("#navigation").each(function (_, navToggler){
        var target = $(navToggler).data("target");
        $(navToggler).on("click", function (){
            $(target).animate({
                height: "toggle",
            });
        });
    })
})
$(document).ready(function(){
    $("#navigation-2").each(function (_, navToggler){
        var target = $(navToggler).data("target");
        $(navToggler).on("click", function (){
            $(target).animate({
                height: "toggle",
            });
        });
    })
})
$(document).ready(function(){
    $("#navigation-3").each(function (_, navToggler){
        var target = $(navToggler).data("target");
        $(navToggler).on("click", function (){
            $(target).animate({
                height: "toggle",
            });
        });
    })
})