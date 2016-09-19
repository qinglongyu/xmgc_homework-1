/**
 * Created by Administrator on 2016/9/7 0007.
 */
$(function(){
    $.post('/api/stuWorkList',function(res){
        for(var attr in res){
            var dat=res[attr];
            var tr=$('#myLi1').clone(true,true);
            tr.find('p:eq(0)').html(dat.title);
            tr.find('p:eq(1)').html(dat.name);
            var dat=new Date(dat.creatdate);
            var year1=dat.getFullYear();
            var month1=parseInt(dat.getMonth())+1;
            var day1=dat.getDate();
            tr.find('td:eq(2)').html(year1+'-'+month1+'-'+day1);
            $('.worklist').append(tr);
        }
    })
})
