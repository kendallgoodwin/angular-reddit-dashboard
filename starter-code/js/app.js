var app = angular.module('RedditDashApp', []);
app.controller('DashCtrl', ['$scope', '$http', function($scope, $http) {

	$scope.searchTerm = '';
	$scope.title = '';
	$scope.img = '';
	$scope.score = 0;
	$scope.comments = 0;
	$scope.author = '';
	$scope.articleArray = []

	$scope.search = function() {
		var req = {
			url: 'http://www.reddit.com/search.json?q=' + $scope.searchTerm, 
			method: 'get'
		}
		$http(req).then(function success(res) {
			var redditData = res.data;
			var articleData = redditData.data.children
			// console.log(redditData);

			for (var i = 0; i < articleData.length; i++) {
				var articles = articleData[i];
				// console.log(articles);
				$scope.articleArray.push(articles);
				console.log($scope.articleArray);
			} 

			console.log($scope.articleArray[0].data.title)

			// $scope.title = articleArray[0].data.title;
			// $scope.img = articleData[0].data.thumbnail;
			// $scope.score = articleData[0].data.score;
			// $scope.comments = articleData[0].data.num_comments;
			// $scope.author = articleData[0].data.author;


		}, function error(res) {
			console.log(res);
		});
	}
	


}])

