/**
 * Created by Administrator on 2016/9/9.
 */
//公告发布区的发布按钮事件
/*$(function(){
    $("#publish").click(function(){
        $("#noticecontent").submit()
    });
});*/

$(function(){
    $("#clear").click(function(){
        $("#noticecontent").empty();
    });

    $("#quit").click(function(){
        window.close()
    });
});
