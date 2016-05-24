var app = angular.module('RedditDashApp', []);
app.controller('DashCtrl', ['$scope', '$http', function($scope, $http) {

	$scope.searchTerm = '';
	$scope.title = '';

	$scope.search = function() {
		var req = {
			url: 'http://www.reddit.com/search.json?q=' + $scope.searchTerm, 
			method: 'get'
		}
		$http(req).then(function success(res) {
			var redditData = res.data;
			console.log(redditData);

			$scope.title = redditData.data.children[0].data.title;

			console.log($scope.title);


		}, function error(res) {
			console.log(res);
		});
	}
	


}])

