/**
 * Created by asus on 2016/9/9.
 */
$(function(){
    $('.myP').css({'margin':'0 0 0 5%',"clear":'both','font-size':'14px'});
    $('#myHeader1').removeAttr('data-toggle','collapse');
    $('.glyphicon-thumbs-up').click(function(){
       var num=parseInt($(this).next().text());
      num=num+1;
        $(this).next().text(num);
    });
});
