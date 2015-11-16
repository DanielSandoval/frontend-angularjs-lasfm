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
    })
    .when('/list-songs', {
      templateUrl:'templates/list-songs.html'
    });
});

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

  //
  $.ajax({
    url: "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=85b8c37b1a6be5182a5ed0549c4a7400&format=json",
    dataType: "jsonp",
    success: function(parsed_json) {
      for (var song = 0; song < 50; song++) {
        var songName = parsed_json['tracks']['track'][song]['name'];
        $(".song-name").html(songName);
      };
      //var songName = parsed_json['tracks']['track'][0]['name'];
    }
  });
});