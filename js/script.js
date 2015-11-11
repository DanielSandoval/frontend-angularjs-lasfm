// Javascript Code.
var myApp = angular.module('app', ['ngRoute']);

myApp.controller('PasswordController', function PasswordController($scope) {
  $scope.title = "This is AngularJS and Jasmin!";
  $scope.password = '';
  /*$scope.grade = function() {
    var size = $scope.password.length;
    if (size > 8) {
      $scope.strength = 'strong';
    } else if (size > 3) {
      $scope.strength = 'medium';
    } else {
      $scope.strength = 'weak';
    }
  };*/
});

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl:'templates/login.html'
    });
});

//myApp.config(function('routeProvider') {
  //$routeProvider.when('/',{  
    //controller: 'login.html'
  //});
  /*$routeProvider
    .when('/', {
      templateUrl: 'login.html'
    })
    .when('/list-songs', {
      templateUrl: 'list-songs.html'
    });*/
    /*.otherwise({
      redirectTo: '/'
    });*/
//});

/*myApp.controller('loginCtrl', function($scope, $location) {
  $scope.submit = function() {
    var myEmail = $scope.my-email;
    var password = $scope.password;
    if ($scope.myEmail == 'admin' && $scope.password == 'admin') {
      $location.path('/list-songs');
    } else {
      alert("Wrong");
    }
  };
});*/

$(document).ready(function() {
  setInterval(function() {
    //This is for the images functionality
    var presentSlide = $(".active-slide");
    var nextSlide = presentSlide.next();
    //This is for the dots functionality
    var presentDot = $(".active-dot");
    var nextDot = presentDot.next();
    //This go back to start when the image and the dot are in the last
    if (nextSlide.length == 0) {
      nextSlide = $(".slide").first();
      nextDot = $(".dot").first();
    };
    //This is for the change of images
    presentSlide.fadeOut(1000).removeClass("active-slide");
    nextSlide.fadeIn(1000).addClass("active-slide");
    //These are the dots functionality
    presentDot.removeClass("active-dot");
    nextDot.addClass("active-dot");
  }, 2500);
});