'use strict';

// Declare app level module which depends on views, and componentsred
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.GeekQuiz',
  'myApp.version'
]).
config(['$routeProvider','$httpProvider', function($routeProvider,$httpProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
