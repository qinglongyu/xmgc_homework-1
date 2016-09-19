/**
 * Created by Char_set on 2016/9/12 0012.
 */
var html =
	'<div id="drawer" class="col-xs-12 height" style="padding: 0;position: fixed;background: rgba(33,33,33,0.5);z-index: 1089;display: none"></div>' +
		'<div id="drawer1" class="col-xs-9 height" style="background: rgba(102,178,229,1);z-index: 1090;left: -80%;position: fixed">' +
			'<div class="panel panel-default drawer-li">' +
				'<div class="panel-body">' +
					' <span class="glyphicon glyphicon-tag"></span> 共发布作业： 次' +
				'</div>' +
			'<div class="panel-body">' +
				'<span class="glyphicon glyphicon-home"></span>' +
					'<a href="">首页</a>' +
			'</div> ' +
		'</div>'+
		' <div class="panel panel-default drawer-li"></div>'+
		'<div class="panel panel-default drawer-li">'+
			'<div class="panel-body">'+
				' <span class="glyphicon glyphicon-cloud-upload"></span>'+
					'<a href="">发布作业</a>' +
			'</div> '+
		'</div> '+
		'<div class="panel panel-default drawer-li"> '+
			'<div class="panel-body">'+
				'<span class="glyphicon glyphicon-th-list"></span> '+
					'<a href="">作业列表</a> '+
			'</div> '+
		'</div> '+
		'<div class="panel panel-default drawer-li">' +
			'<div class="panel-body"> '+
				'<span class="glyphicon glyphicon-file"></span>'+
					'<a href="">作业详情</a>'+
			'</div>'+
		'</div>'+
		'<div class="panel panel-default drawer-li">'+
			' <div class="panel-body">'+
				'<span class="glyphicon glyphicon-cog"></span>'+
					'<a href="">设置</a>' +
			'</div>'+
		'</div>'+'' +
	' </div><style>.drawer-li{margin-top: 20px;background-color: rgba(255,255,255,0.1);height: 40px;border: none;color:white;}.drawer-li a{color:white;}</style>';
$(function () {
	$('body').append(html);
});
$(function(){

	$('.height').css({height:screen.height});
	//$('.width').css({width:screen.width});
	$('#drawer').css({hight:screen.height,width:screen.width});
	$('#pull').click(function(){

		$('#drawer').css({display:'block'});
		$('#drawer1').animate({
			left:0
		},'2000')
	});
	$('#drawer,#drawer1').click(function(){
		$('#drawer').css({display:'none'})
		$('#drawer1').animate({
			left:-500
		})

	});
});
