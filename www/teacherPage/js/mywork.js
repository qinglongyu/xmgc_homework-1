/**
 * Created by Administrator on 2016/9/7 0007.
 */
$("li.myWork").click(function () {
	window.location.href = 'kuWorkDetail.html?id=123';
});

app.controller('worklist', function ($scope) {
	$.get('/../../start/api/getMyInfo', function (res) {
		dat = {
			userid: res.data['id']
		}
		console.log(">>>dat", dat)
		$.get('/homework/api/worklist', dat, function (res) {
			console.log('>>>>12', res);
			$scope.$apply(function () {
				$scope.worklists = res;
			})
		})
	})

})
