/*global angular*/
var app = angular.module('goodOnYou', []);

app.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
}]);