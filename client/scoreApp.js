scoreApp = angular.module('scoreApp', [])
  .controller('scoreCtrl', function($scope) {
    $scope.score = totalScore;
    $scope.minScore = minScore;
  })
  