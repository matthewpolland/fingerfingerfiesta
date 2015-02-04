// 'use strict';
  var scoreApp = angular.module('scoreApp', [])
  .controller('scoreCtrl', function($scope) {
  $scope.score = 0;
  $scope.addScore = function() {
    console.log('SCORE ADDED!!!!')
  };
  $scope.subtractScore = function() {};
});

module.exports = scoreApp;