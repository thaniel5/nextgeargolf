/*
  Configure routes used with ngRoute. We chose not to use $locationProvider.html5Mode(true);
  because using HTML5 pushstate requires that server routes are setup to mirror the routes
  in this file. Since this isn't a node course we're going to skip it. For all intensive
  purposes, html5 mode and url hash mode perform the same when within an angular app.
*/
angular.module('NextGolf').config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/pages/overall.html',
      controller: 'OverallController'
    })

    .when('/week/create', {
      templateUrl: 'templates/pages/week-create.html',
      controller: 'WeekController'
    })

    .when('/week/:week', {
      templateUrl: 'templates/pages/week.html',
      controller: 'WeekController'
    })

    .when('/season/create', {
      templateUrl: 'templates/pages/season-create.html',
      controller: 'SeasonController'
    })

    .otherwise({redirectTo: '/'});
}]);
