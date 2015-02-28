define(function () {
    'use strict';
    describe('angular', function () {
        it('should be loaded to the context', function(){
            expect(angular).to.be.an('object');
        });
    });
    describe('angular-mocks', function () {
        it('should be loaded to the context', function(){
            expect(angular.mock).to.be.an('object');
        });
    });
    describe('angular.mock.module', function () {
        it('should be loaded to the context', function(){
            expect(angular.mock.module).to.be.an('function');
        });
    });
    var rootScope;
    describe('Before test angular stuff', function(){
        beforeEach(function(){
            angular.mock.module('myApp');
        });
        it('inject function should be available', function(){
            inject(function($injector) {
                rootScope = $injector.get('$rootScope');
                expect(rootScope).to.be.an('object');
            });
        });
    });
});

