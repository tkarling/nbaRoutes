var app = angular.module('nbaRoutes');

app.controller('teamCtrl', function($scope, $routeParams, teamData, teamService){	
	var teamId = $routeParams.teamId;
	$scope.teamData = teamData;
	// console.log(teamId, $scope.teamData);

	$scope.homeTeam = teamService.getTeamNameString(teamId);
	$scope.logoPath = teamService.getLogoPath(teamId);

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