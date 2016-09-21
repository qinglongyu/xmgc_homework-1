var userid;
var nick;
$.post('/../../start/api/getMyInfo',function (res) {
		console.log('>>>',res.data);
		if(res.text=='没找到您的登录信息，请重新登陆或注册.'){
			alert("没找到您的登录信息，请重新登陆或注册.");
		window.location.href='http://m.xmgc360.com/start/web/account/'
		}
		userid=res.data['id'];
		nick=res.data['nick'];
//		console.log(">>>userid:",userid);
//		console.log(">>>nick:",nick);
	})
