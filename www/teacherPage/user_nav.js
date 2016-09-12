$(function(){

    $('.height').css({height:screen.height});
    //$('.width').css({width:screen.width});
    $('#drawer').css({hight:screen.height,width:screen.width})
    $('#pull').click(function(){

        $('#drawer').css({display:'block'});
        $('#drawer1').animate({
            left:0
        },'quick')
    });
    $('#drawer,#drawer1').click(function(){
        $('#drawer').css({display:'none'})
        $('#drawer1').animate({
            left:-500
        })

    });
});
