var app = angular.module('nbaRoutes');

app.service('teamService', function($http, $q) {

    this.getTeamData = function(team) {
        return $http.get("https://api.parse.com/1/classes/" + team).then(function(response) {
            // console.log('teamService: repsonse', response);
            var results = response.data.results;
            results.wins = 0;
            results.losses = 0;
            for (var i = 0; i < results.length; i++) {
                if (results[i].won) {
                    results.wins++
                } else {
                    results.losses++
                }
            }
            return results;
        })
    };

    this.addNewGame = function(gameObj) {
        var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;
        gameObj.won = parseInt(gameObj.homeTeamScore) >
            parseInt(gameObj.opponentScore);
        // console.log(gameObj);
        return $http.post(url, gameObj);

    };

    this.getTeamNameString = function(teamId) {
        return (teamId === "utahjazz") ? "Utah Jazz" :
            (teamId === "losangeleslakers") ? "Los Angeles Lakers" : "Miami Heat";
        // console.log(teamId, $scope.homeTeam);
    }

    this.getLogoPath = function(teamId) {
        var logoPath = (teamId === "utahjazz") ? "jazz-logo.png" :
            (teamId === "losangeleslakers") ? "lakers-logo.png" : "heat-logo.png";
        logoPath = "images/" + logoPath;
        // console.log(teamId, $scope.logoPath);
        return logoPath;

    }
});
