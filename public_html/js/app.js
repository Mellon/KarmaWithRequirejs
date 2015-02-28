var myApp = angular.module('myApp', []);

myApp.controller('MyController', function ($scope) {
    $scope.$on('gameOver', function () {
        console.log('game over');
    });
});