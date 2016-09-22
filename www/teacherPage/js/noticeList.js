var app = angular.module('app', ["ui.bootstrap"]);
app.controller("kzq", function ($scope) {
	$scope.length1 = 20;
	$.get("/homework/api/getNotice", function (res) {

		$scope.$apply(function () {
			$scope.filteredNotes = [], $scope.currentPage = 1, $scope.numPerPage = 5, $scope.maxSize = 5;

			$scope.notices = res;
			$scope.length = Math.ceil(res.length / $scope.numPerPage) + "0";
			$scope.$watch('currentPage + numPerPage', function () {
				var begin = (($scope.currentPage - 1) * $scope.numPerPage),
					end = begin + $scope.numPerPage;

				$scope.filteredNotes = $scope.notices.slice(begin, end);
			});
		});

	})

})
