var app = angular.module('nbaRoutes', ['ngRoute']);

app.config(function($routeProvider, $httpProvider) {
  $httpProvider.interceptors.push('httpRequestInterceptor');

  //router here
	$routeProvider
	.when("/home", {
		templateUrl: "./js/home/homeTmpl.html",
		controller: "homeCtrl"
	})
	.when("/teams/:teamId", {
		templateUrl: "./js/teams/teamTmpl.html",
		controller: "teamCtrl",
		resolve: {
			teamData: function(teamService, $route) {
				return teamService.getTeamData($route.current.params.teamId);
			}
		}
	})
	.otherwise({
      redirectTo: '/home'
    })

});