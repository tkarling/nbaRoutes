var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamData, teamService){	
	var teamId = $routeParams.teamId;
	$scope.teamData = teamData;
	// console.log(teamId, $scope.teamData);

	$scope.homeTeam = (teamId === "utahjazz") ? "Utah Jazz" : 
	(teamId === "losangeleslakers") ? "Los Angeles Lakers" : "Miami Heat";
	// console.log(teamId, $scope.homeTeam);

	$scope.logoPath = (teamId === "utahjazz") ? "jazz-logo.png" : 
	(teamId === "losangeleslakers") ? "lakers-logo.png" : "heat-logo.png";
	$scope.logoPath = "images/" + $scope.logoPath;
	// console.log(teamId, $scope.logoPath);

	$scope.newGame = {};

	$scope.showNewGameForm = false;
	$scope.toggleNewGameForm = function() {
		$scope.showNewGameForm = ! $scope.showNewGameForm;
	}
 
 	$scope.submitGame = function() {
 		$scope.newGame.homeTeam = teamId;
 		// console.log($scope.newGame);
 		teamService.addNewGame($scope.newGame).then(function(response) {
 			teamService.getTeamData(teamId).then(function(teamData) {
 				$scope.teamData = teamData;
 			});
 		});
 	}

});