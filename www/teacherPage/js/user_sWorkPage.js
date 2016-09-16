/**
 * Created by asus on 2016/9/7.
 */
$(function(){
    $('h4').click(function() {
        if ($(this).parent().next().attr('class')=='panel-collapse collapse'){
            $('.mySpan').attr('class','glyphicon glyphicon-chevron-right mySpan');
            $(this).children('span').attr('class','glyphicon glyphicon-chevron-down mySpan');
        }
        else if($(this).parent().next().attr('class')=='panel-collapse collapse in') {
            $(this).children('span').attr('class','glyphicon glyphicon-chevron-right mySpan');
        }
    });
});


