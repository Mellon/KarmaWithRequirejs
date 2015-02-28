define(function () {
    'use strict';
    var rootScope;
    describe('Before test angular stuff', function(){
        console.log('describe block');
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
