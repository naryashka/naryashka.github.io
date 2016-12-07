window.onload = function(){
    
    $( '#slider1' ).lemmonSlider();

}

$(function () {
            $("#country_id").selectbox();
        });



$(function(){

    $("#menu li").hover(function(){
        $(this).find('ul:first').css({
            visibility: "visible",
            display: "none"
        }).show(400);
    },function(){
        $(this).find('ul:first').css({visibility: "hidden"});
    });

});



