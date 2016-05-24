var app = angular.module('RedditDashApp', []);
app.controller('DashCtrl', ['$scope', '$http', function($scope, $http) {

	$scope.searchTerm = '';
	$scope.title = '';
	$scope.img = '';
	$scope.score = 0;
	$scope.comments = 0;
	$scope.author = '';

	$scope.search = function() {
		var req = {
			url: 'http://www.reddit.com/search.json?q=' + $scope.searchTerm, 
			method: 'get'
		}
		$http(req).then(function success(res) {
			var redditData = res.data;
			console.log(redditData);

			$scope.title = redditData.data.children[0].data.title;
			$scope.img = redditData.data.children[0].data.thumbnail;
			$scope.score = redditData.data.children[0].data.score;
			$scope.comments = redditData.data.children[0].data.num_comments;
			$scope.author = redditData.data.children[0].data.author;


			console.log($scope.title);
			console.log($scope.score);
			console.log($scope.comments)


		}, function error(res) {
			console.log(res);
		});
	}
	


}])

