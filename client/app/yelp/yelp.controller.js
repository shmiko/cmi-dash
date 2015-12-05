'use strict';

var app = angular.module('whatstonightApp',[]);
  app.controller('yelpController', function ($scope, $http) {
    //$scope.awesomeThings = [];
    //$scope.getCurrentUser = Auth.getCurrentUser;
    //$scope.isLoggedInAsync = Auth.isLoggedInAsync;

    //console.log($scope.getCurrentUser());
    $scope.searchBars = function(location) {

      //if ($scope.getCurrentUser()._id !== undefined) {
        var  location=location;
        $http.put('/api/yelp');
      //}
      $scope.loading=true;

      $http.get('/api/bars/start/' + location).success(function(Bars) {
        $http.get('/api/bars/').success(function(oldBars) {
          $scope.bars=Bars.map(function(extBar) {
            for (var i =0; i < dbBars.length; i++) {
              if (extBar.url === dbBars[i].url) {
                return dbBars[i];
              }
            }
            return extBar;
          });
        })

        $scope.bars = Bars;
        $scope.loading=false;
      });

    }

    //$scope.isLoggedInAsync(
      //function(ready) {
        //if (ready) {
          //$scope.getCurrentUser().$promise.then(function(user){
            if (location !== undefined) {
                $scope.searchBars(location);
                $scope.location=location;
            }
          //})
        //}
     // });
});

   
