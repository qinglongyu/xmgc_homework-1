/**
 * Created by Char_set on 2016/9/12 0012.
 */

var html =
	'<div id="drawer"class="col-xs-12 height"style="padding: 0;position: fixed;top:0;bottom:0;background: rgba(33,33,33,0.5);z-index: 1089;display: none"></div><div ng-controller="myc"id="drawer1"class="col-xs-9 height"style="background: rgba(102,178,229,1);z-index: 1090;left: -80%;position: fixed;top:0;bottom:0;"><nav class="row"style="margin-top:10px;"><div class="col-xs-3"><img src="http://www.geminno.cn/files/user/2016/08-31/1624204a2c9d448977.GIF"alt=""style="height: 32px;border-radius: 24px;"></div><div class="col-xs-3"><span ng-bind="userinfo.nick"></span></div></nav><div class="panel panel-default drawer-li"><div class="panel-body"><span class="glyphicon glyphicon-tag"></span>共发布作业：次</div></div><div class="panel panel-default drawer-li"><div class="panel-body"><span class="glyphicon glyphicon-home"></span><a href="">首页</a></div></div><div class="panel panel-default drawer-li"><div class="panel-body"><span class="glyphicon glyphicon-cloud-upload"></span><a href="">发布作业</a></div></div><div class="panel panel-default drawer-li"><div class="panel-body"><span class="glyphicon glyphicon-th-list"></span><a href="">作业列表</a></div></div><div class="panel panel-default drawer-li"><div class="panel-body"><span class="glyphicon glyphicon-file"></span><a href="">作业库</a></div></div><div class="panel panel-default drawer-li"style="position:absolute;bottom:0;float: right;margin-bottom:0;"><div class="panel-body"style="float: right"><span class="glyphicon glyphicon-home"></span><a href="">返回项目工厂首页</a></div></div></div><style>.drawer-li{margin-top: 20px;background-color: rgba(255,255,255,0.1);height: 40px;border: none;color:white;}.drawer-li a{color:white;}</style>';
	$('body').append(html);
$(function(){
	$('.height').css({height:screen.height});
	//$('.width').css({width:screen.width});
	$('#drawer').css({hight:screen.height,width:screen.width});
	$('#pull').click(function(){

		$('#drawer').css({display:'block'});
		$('#drawer1').animate({
			left:0
		},'slow')
	});
	$('#drawer,#drawer1').click(function(){
		$('#drawer').css({display:'none'})
		$('#drawer1').animate({
			left:-500
		})

	});

});
console.log('inner html loading...');
		var app=angular.module('app',[]);
		app.run(function($rootScope){
			$rootScope.myinfo={
				name:'wangxiaomao',
				age:12
			};
		})

		app.controller('myc',function($scope){
			$.get('/../../start/api/getMyInfo', function (res) {
				$scope.$apply(function(){
					$scope.userinfo={
				nick:res.data['nick']
			}
				console.log('>>>>12',res.data['nick']);
				})
			})
		})

