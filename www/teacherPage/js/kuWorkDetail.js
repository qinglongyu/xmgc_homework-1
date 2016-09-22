app.run(function ($rootScope) {
	$rootScope.$apply(function () {
		var str = window.location.search;
		var dat = {
			wid: str.substring(5)
		}
		$.get('/homework/api/kuWorkDetail', dat, function (res) {
			console.log(">>>>>>rows", res[0]);
			$rootScope.workinfo = res[0];
		})
	})
})
