// Javascript Code.

var myApp = angular.module('app', ['ngRoute']);

myApp.controller('PasswordController', function PasswordController($scope) {
  $scope.title = "This is AngularJS and Jasmin!";
  $scope.password = '';
  $scope.grade = function() {
    var size = $scope.password.length;
    if (size > 8) {
      $scope.strength = 'strong';
    } else if (size > 3) {
      $scope.strength = 'medium';
    } else {
      $scope.strength = 'weak';
    }
  };
});

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl:'templates/list-songs.html',
      controller: 'ChartController',
      controllerAs: 'ChartCtrl'
    });
});

myApp.controller('ChartController', function($scope, $http) {
  $http.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=85b8c37b1a6be5182a5ed0549c4a7400&format=json')
    .success(function(data){
      $scope.listTracksInfo = data['tracks']['track'];
    })
    .error(function(err) {
      return err;
    });
  $scope.selectOrder = function(orderBy) {
    $scope.typeOrder = orderBy;
  };
});