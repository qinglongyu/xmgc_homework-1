//	附件上传
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


//课程加载控制器
app.controller('class', function ($scope) {
	$.post('/homework/api/kecheng', function (res) {
		$scope.$apply(function () {
			$scope.classes = res;
		})
	})
});
app.controller('upcontroller', function ($scope) {
	$scope.check = function () {
		var dat = {
			useid: userid,
			title: $('#title').val(),
			content: $('#content').val(),
			Sselect: $('#Sselect').val(),
			section: $('#section').val(),
			mark: $('#mark').val(),
			wenjian: $('#wenjian').html(),
			time: $('#time').val()
		};
		console.log(">>>>", dat);
		$.post('/homework/api/addwork', dat, function (res) {
			console.log(">>>>res", res);
			//	发布成功，提示用户并跳转
			if (res.code == 1) {
				$scope.$apply(function () {
					$scope.text = '作业发布成功'
				});
				boxshow();
				setTimeout(function () {
					window.location.href = 'http://m.xmgc360.com/homework/web/teacherPage/mywork.html';
				}, 1500);
			}
			//	发布失败，显示提示框
			else {
				$scope.$apply(function () {
					$scope.text = res.text
				});
				boxshow();
			}
		})
	};
});
//页面提示动画函数
function boxshow() {
	$('#boxshow').animate({
		top: 0
	}, 500, function () {
		setTimeout(function () {
			$('#boxshow').animate({
				top: -50
			}, 500)
		}, 1000)
	})
};
