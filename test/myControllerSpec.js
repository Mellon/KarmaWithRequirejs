define(['myApp'], function () {
    'use strict';
    describe('MyController', function () {
        before(function () {
            console.log('mellon: beforeEach()');
            module('myApp');
        });


        var controllerContructor, scope, controller;
        beforeEach(inject(function ($controller, $rootScope) {
            console.log('mellon: beforeEach() 2');
            console.log('mellon: beforeEach() $controller = '+$controller);
            console.log('mellon: beforeEach() $rootScope = '+$rootScope);
            controllerContructor = $controller;
            scope = $rootScope.$new();
            controller = controllerContructor('MyController', {$scope: scope});
        }));

        it('', function () {
            $scope.$emit('gameOver', '');
            it('', function () {
            });

        });
    });
});