/**
 * Created by Administrator on 2016/9/9.
 */
/*删除作业操作*/
$(function(){
    $(".btn").click(function(){
       if(confirm("确定删除")){
            $(this).parent().parent().remove()
        }
    });
});

