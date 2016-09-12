/**
 * Created by Administrator on 2016/9/7 0007.
 */
$(function(){
    $("h4").click(function(){
        if($(this).parent().next().attr("class") == "panel-collapse collapse"){
            $(".myarrow").attr("class","glyphicon glyphicon-chevron-right myarrow");
            $(this).children("span:eq(1)").attr("class","glyphicon glyphicon-chevron-down myarrow");
        }
        else $(this).children("span:eq(1)").attr("class","glyphicon glyphicon-chevron-right myarrow")
     });
});
