// Code goes here
var app = angular.module('FeedApp', []);
app.controller("FeedController", ['$scope', '$http', '$sce', function ($scope, $http, $sce) {
    $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=5&callback=JSON_CALLBACK&q=http://yosemiteblog.com/feed/').then(function (res) {
    // $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url)).then(function (res) {
      //Your URL should immediately follow the q=
      //old url http://feeds.feedburner.com/crunchgear
        $scope.feeds = res.data.responseData.feed.entries;
        $scope.trustAsHtml = $sce.trustAsHtml;
    });
}]);


// var App = angular.module('RSSFeedApp', []);

// App.controller("FeedCtrl", ['$scope','FeedService', function ($scope,Feed) {    
// 	$scope.loadBtnText="Carregar";
// 	$scope.loadFeed=function(e){        
// 		Feed.parseFeed($scope.feedSrc).then(function(res){
// 			$scope.loadBtnText=angular.element(e.target).text();
// 			$scope.feeds=res.data.responseData.feed.entries;
//       console.log($scope.feeds);
// 		});
// 	}
// }]);

// App.factory('FeedService',['$http',function($http){
// 	return {
// 		parseFeed : function(url){
// 			return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
// 		}
// 	}
// }]);