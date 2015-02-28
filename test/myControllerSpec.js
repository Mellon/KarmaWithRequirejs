define(function () {
    'use strict';
    describe('MyController', function () {
        before(function () {
            angular.mock.module('myApp');
        });


        var controllerContructor, scope, controller;
        beforeEach(inject(function ($controller, $rootScope) {
            controllerContructor = $controller;
            scope = $rootScope.$new();
            controller = controllerContructor('MyController', {$scope: scope});
        }));

        it('shoule be loaded.', function () {
            expect(controller).to.be.an('object');
        });
    });
});