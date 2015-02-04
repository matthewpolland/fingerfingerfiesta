// 'use strict';
 var scoreApp = angular.module('scoreApp', [])
   .controller('scoreCtrl', function ($scope) {
    $scope.score = scoreMethods.score;
 });
    