var userid;
$(function(){
	$.post('/../../start/api/getMyInfo',function (res) {
		console.log('>>>',res);
		if(res.text=='没找到您的登录信息，请重新登陆或注册.'){
			alert("没找到您的登录信息，请重新登陆或注册.");
			window.location.href='http://m.xmgc360.com/start/web/account/'
		}
		userid=res.data['id'];
	});
	$.post('/homework/api/kecheng',function(res){
//	console.log(">>>",res[1],res.length);
	for(var attr in res){
		var data=res[attr];
		var option=$("#option").clone(true,true);
		option.html(data.name);
		option.attr('value',data.name);
		$('#Sselect').append(option);
	}
})
});
$('#shangchuan').click(function () {
    _fns.uploadFile2($('#shangchuan'), function (f) {
        console.log('>>>>before:', f);
    }, function (f) {
        console.log('>>>>progressAAAA:', f);
        $('#wancheng').css('width', f.percent + '%');
        $('#wancheng').html(f.percent + '%');
        console.log('>>>>>AAAA');
    }, function (f) {
        console.log('>>>>successXXXX:', f);
        $('#wenjian').html(f.url);
        $('#wenjian').attr('href', f.url);
    });
});

$('#up').click(function(){
	var dat={
		useid:userid,
		title:$('#title').val(),
		content:$('#content').val(),
		Sselect:$('#Sselect').val(),
		section:$('#section').val(),
		mark:$('#mark').val(),
		wenjian:$('#wenjian').html()
	};
	console.log(">>>>",dat);

	if(dat.title==''){
		alert('请输入标题！');
		return 0;
	}
	if(dat.content==''){
	alert('请输入内容！');
	return 0;
	}
	if(dat.Sselect=="请选择"){
	alert('请选择课程！');
	return 0;
	}
	$.post('/homework/api/addwork',dat,function(res){
		if(res==1){
			alert('作业发布成功');
			window.location.href='http://m.xmgc360.com/homework/web/teacherPage/mywork.html';
		}
		else{
			alert("作业发布失败，请检查格式！");

		}
	})
});
