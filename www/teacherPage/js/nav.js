var userid;
var nick;
$.post('/../../start/api/getMyInfo', function (res) {
	console.log('>>>', res.data);
	if (res.text == '没找到您的登录信息，请重新登陆或注册.') {
		alert("没找到您的登录信息，请重新登陆或注册.");
		window.location.href = 'http://m.xmgc360.com/start/web/account/'
	}
	userid = res.data['id'];
	nick = res.data['nick'];
	//		console.log(">>>userid:",userid);
	//		console.log(">>>nick:",nick);
})

var html =
	'<div id="drawer"class="col-xs-12 height"style="padding: 0;position: fixed;top:0;bottom:0;background: rgba(33,33,33,0.5);z-index: 1089;display: none"></div><div ng-controller="myc"id="drawer1"class="col-xs-9 height"style="background: rgba(102,178,229,1);z-index: 1090;left: -80%;position: fixed;top:0;bottom:0;"><nav class="row"style="margin-top:10px;background:rgba(102,178,255,0.8)"><div class="col-xs-3"style="margin-left:15px;"><img src="http://www.geminno.cn/files/user/2016/08-31/1624204a2c9d448977.GIF"alt=""style="height: 32px;border-radius: 24px;"></div><div class="col-xs-7"style="margin-left:-15px"><span ng-bind="userinfo.nick"style="height:32px;line-height:32px;"></span></div></nav><div class="panel panel-default drawer-li"style="margin-top:40px"><div class="panel-body"><a href="http://m.xmgc360.com/homework/web/"><span class="glyphicon glyphicon-home">&nbsp;作业首页</span></a></div></div><div class="panel panel-default drawer-li"><div class="panel-body"><a href="work-repository.html"><span class="glyphicon glyphicon-th-list">&nbsp;作业库</span></a></div></div><div class="panel panel-default drawer-li stu"><div class="panel-body"><a href=""><span class="glyphicon glyphicon-tag">&nbsp;未提交</span></a></div></div><div class="panel panel-default drawer-li tea"><div class="panel-body"><a href="addwork.html"><span class="glyphicon glyphicon-cloud-upload">&nbsp;发布作业</span></a></div></div><div class="panel panel-default drawer-li tea"><div class="panel-body"><a href="mywork.html"><span class="glyphicon glyphicon-file">&nbsp;已发布</span></a></div></div><div class="panel panel-default drawer-li"><div class="panel-body"><a href="smywork.html"><span class="glyphicon glyphicon-book">&nbsp;我的作业</span></a></div></div><div class="panel panel-default drawer-li"><div class="panel-body"><a href="noticeList.html"><span class="glyphicon glyphicon-bullhorn">&nbsp;公告</span></a></div></div><div class="panel panel-default drawer-li"style="position:absolute;bottom:0;float: right;margin-bottom:0;"><div class="panel-body"style="float: right"><a href="http://m.xmgc360.com/"><span class="glyphicon glyphicon-home">返回项目工厂首页</span></a></div></div></div><style>.drawer-li{margin-top: 20px;background-color: rgba(255,255,255,0.1);height: 40px;border: none;color:white;}.drawer-li a{color:white;}</style>';
$('body').append(html);
$(function () {
	$('.height').css({
		height: screen.scrollHeight
	});
	//$('.width').css({width:screen.width});
	$('#drawer').css({
		hight: screen.scrollHeight,
		width: screen.scrollWidth
	});
	$('#pull').click(function () {

		$('#drawer').css({
			display: 'block'
		});
		$('#drawer1').animate({
			left: 0
		}, 'slow')
	});
	$('#drawer,#drawer1').click(function () {
		$('#drawer').css({
			display: 'none'
		})
		$('#drawer1').animate({
			left: -500
		})

	});

});
console.log('inner html loading...');
var app = angular.module('app', []);
app.run(function ($rootScope) {
	$rootScope.myinfo = {
		name: 'wangxiaomao',
		age: 12
	};
})

app.controller('myc', function ($scope) {
	$.get('/../../start/api/getMyInfo', function (res) {
	$scope.$apply(function () {
		$scope.userinfo = {
			nick: res.data['nick']
		}
		console.log('>>>>12', res.data['nick']);
	})
})
})
