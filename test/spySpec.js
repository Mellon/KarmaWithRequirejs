define(function () {
    'use strict';
    describe('sinon.spy', function () {
        it('can verify method called', function () {
            var car = {
                drive: function () {
                    console.log('car drive');
                }
            };

            sinon.spy(car, 'drive');
            car.drive();
            var call = car.drive.getCall(0);
            expect(call.called);
        });
        it('can verify method called times', function () {
            var car = {
                drive: function () {
                    console.log('car drive');
                }
            };

            sinon.spy(car, 'drive');
            car.drive();
            car.drive();
            car.drive();
            var call = car.drive.getCall(0);
            expect(call.calledThrice);
        });
        it('can verify method calling parameters', function(){
            var car = {
                driveBy: function(someone){
                    
                }
            }
            sinon.spy(car, 'driveBy');
            car.driveBy({name: "Jack"});
            var call = car.driveBy.firstCall;
            expect(call.calledOnce);
        });
    });
});
