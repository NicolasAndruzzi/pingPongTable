var app = angular.module('pingPong', ['ngRoute'])

app.factory("socket", function () {
  var socket = io()
  return socket
})

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/splash.html',
    controller: 'splashController'
  })
  .when('/onTheTable', {
    templateUrl: 'views/onTheTable.html',
    controller: 'onTheTableController'
  })
  // .when('/liveStream', {
  //   templateUrl: 'views/liveStream.html',
  //   controller: 'liveStreamController'
  // })
  // .when('/scores', {
  //   templateUrl: 'views/scores.html',
  //   controller: 'scoresController'
  // })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'aboutController'
  })
  .when('/404error', {
    templateUrl: 'views/404error.html',
    controller: '404errorController'
  })
  .otherwise({
    redirectTo: '/404error'
  });
});
