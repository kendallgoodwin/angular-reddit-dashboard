var app = angular.module('RedditDashApp', []);
app.controller('DashCtrl', ['$scope', '$http', function($scope, $http) {
	
	if(localStorage.getItem('hist')){
		$scope.history = JSON.parse(localStorage.getItem("hist"));
	}else{
		$scope.history=[];
	}

	$scope.searchTerm = '';
	$scope.articleArray = [];

	

	$scope.search = function() {
		var req = {
			url: 'http://www.reddit.com/search.json?q=' + $scope.searchTerm, 
			method: 'get'
		}
		$http(req).then(function success(res) {
			var redditData = res.data;
			var articleData = redditData.data.children
			// console.log(redditData);
			$scope.articleArray = [];
			for (var i = 0; i < articleData.length; i++) {
				var articles = articleData[i];
				// console.log(articles);
				$scope.articleArray.push(articles);
				// console.log($scope.articleArray);
			} 

			$scope.history.push($scope.searchTerm);
			localStorage.setItem("hist", JSON.stringify($scope.history));
			console.log(localStorage.getItem('hist'))

		}, function error(res) {
			console.log(res);
		});
	}

	$scope.research = function(item) {
		$scope.searchTerm = item;

		var req = {
			url: 'http://www.reddit.com/search.json?q=' + item, 
			method: 'get'
		}
		$http(req).then(function success(res) {
			var redditData = res.data;
			var articleData = redditData.data.children
			// console.log(redditData);
			$scope.articleArray = [];
			for (var i = 0; i < articleData.length; i++) {
				var articles = articleData[i];
				// console.log(articles);
				$scope.articleArray.push(articles);
				// console.log($scope.articleArray);
			} 

			$scope.history.push(item);
			localStorage.setItem("hist", JSON.stringify($scope.history));
			console.log(localStorage.getItem('hist'))

		}, function error(res) {
			console.log(res);
		});

		search();
	}

	$scope.remove = function(i) {
		$scope.history.splice(i, 1);
		localStorage.setItem("hist", JSON.stringify($scope.history));
	}
	


}])

