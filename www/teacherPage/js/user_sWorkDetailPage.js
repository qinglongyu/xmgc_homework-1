/**
 * Created by asus on 2016/9/8.
 */
$(function(){
    $('#headingZero h4').click(function(){
        if($(this).children('span').hasClass('rotate')){
            $(this).children('span').removeClass('rotate')
        }
        else{
            $(this).children('span').addClass('rotate')
        }
    })
});
