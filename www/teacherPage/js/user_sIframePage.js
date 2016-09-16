/**
 * Created by asus on 2016/9/10.
 */
$(function(){
    $('.myLi').click(function(){
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
    });
});
