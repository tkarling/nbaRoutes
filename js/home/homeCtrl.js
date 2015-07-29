var app = angular.module('nbaRoutes');

app.controller('homeCtrl', function($scope, homeService, teamService) {

    var getTeamData = function(team) {
        team.name = teamService.getTeamNameString(team.id);
        team.logoPath = teamService.getLogoPath(team.id);

        return teamService.getTeamData(team.id).then(function(response) {
            team.data = response;
            // console.log(team2, $scope.team2Data);
        });
    }

    $scope.teams = [{
        id: "utahjazz"
    }, {
        id: "losangeleslakers"
    }, {
        id: "miamiheat"
    }];
    for (var i = 0; i < 3; i++) {
        getTeamData($scope.teams[i]).then(function(resp) {
            // console.log($scope.teams[0]);
        });
    };


});
