define(['myApp'], function () {
    'use strict';
    describe('My config', function () {
        it('angular.mock should be an object', function () {
            expect(angular.mock).to.be.an('object');
        });
        it('angular.mock.module should be a function', function () {
            expect(angular.mock.module).to.be.an('function');
        });
        it('angular.mock.module should load my module', function () {
            var myApp = angular.mock.module('myApp');
            expect(myApp).to.be.an('object');
        });
    });
});