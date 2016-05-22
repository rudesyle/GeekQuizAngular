'use strict';
var baseUrl = "http://localhost:49899";

angular.module('myApp.GeekQuiz', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/GeekQuiz', {
            templateUrl: 'GeekQuiz/GeekQuiz.html',
            controller: 'GeekQuizCtrl'
        });
    }])

    .controller('GeekQuizCtrl', function ($scope, $http) {
        $scope.answered = false;
        $scope.title = "loading question...";
        $scope.options = [];
        $scope.correctAnswer = false;
        $scope.working = false;

        $scope.answer = function () {
            return $scope.correctAnswer ? 'correct' : 'incorrect';
        };
        $scope.nextQuestion = function () {
            $scope.working = true;
            $scope.answered = false;
            $scope.title = "loading question...";
            $scope.options = [];

            $http.get("http://localhost:49899/api/trivia").success(function (data, status, headers, config) {
                $scope.options = data.answers;
                $scope.title = data.title;
                $scope.answered = false;
                $scope.working = false;
            }).error(function (data, status, headers, config) {
                $scope.title = "Oops... something went wrong : " + data;
                $scope.working = false;
            });
        };
        $scope.sendAnswer = function (option) {
            $scope.working = true;
            $scope.answered = true;

            $http.post('http://localhost:49899/api/trivia', { 'questionId': option.questionId, 'optionId': option.id }).success(function (data, status, headers, config) {
                $scope.correctAnswer = (data === true);
                $scope.working = false;
            }).error(function (data, status, headers, config) {
                $scope.title = "Oops... something went wrong";
                $scope.working = false;
            });
        };
});