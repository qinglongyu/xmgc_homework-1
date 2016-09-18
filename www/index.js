console.log('index.js loading.');
$('#login').click(function(){
	var dat={
		account:$('#account').val(),
		pw:$('#password').val()
	};
	console.log('>>>>',dat);
	$.post('/homework/api/login',dat,function(res){
		//window.open('teacherPage/mywork.html');
		console.log(">>>>?",res.code);
		if(res.code==1){
			alert("登录成功");
			window.open('teacherPage/addwork.html','self')}
		else{alert("登录失败！")}
	});
});
$("#ceshi").click(function(){
	$.post('/homework/api/html',function(){

	})
});
$("#login2").click(function(){

	var pw=$('#password').val();
	var password = hex_md5(pw);
//	alert(">>>>"+password);

	var dat={
		phone:$('#account').val(),
		pw:password
	};
	$.post('/../../start/api/loginByPhone', dat ,function () {

	})
});
