define(function () {
    'use strict';
    describe('Array', function () {
        var sandbox;
        before(function () {
            console.log('helloSpec.js before()');
            sandbox = sinon.sandbox.create();
        });
        describe('#indexOf()', function () {

            it('should return -1 when value is not present', function () {
                [1, 2, 3].indexOf(4).should.equal(-1);
                [1, 2, 3].indexOf(0).should.equal(-1);
            });

            it('should return the index when value is present', function () {
                [1, 2, 3].indexOf(1).should.equal(0);
            });

            it('should call indexOf method of Array', function () {
                var array = [1, 2, 3];
                sinon.spy(array, 'indexOf');
                array.indexOf(1);
                var call = array.indexOf.getCall(0);
                assert(array.indexOf.calledOnce);
                assert(call.returnValue == 0);
            });

            it('pass?', function () {
                assert('anything');
                //assert.fail(1, 0, 'message');
                assert.ok('asdf');//what is the different with assert()?
                assert.notOk(null);
                assert.notOk(undefined);
                //assert.notOK('');
                assert.equal('2', 2);
                //assert.equal('asf', true);
                //assert.equal({name: 'Jack'}, {name: 'Jack'});
                assert.notEqual({name: 'Jack'}, {name: 'Jack'});
                //assert.strictEqual({name: 'Jack'}, {name: 'Jack'}, 'stricked equal failed.');
                assert.strictEqual(3, 3);
                //assert.strictEqual('3', 3);
                //assert.strictEqual('asfd', new String('asdf'));
                //assert.equal('asfd', new String('asdf'));
                assert.deepEqual({name: 'Jack'}, {name: 'Jack'});
                //assert.deepEqual('asfd', new String('asdf'));
                //assert.deepEqual('3', 3);
                assert.notDeepEqual({name: 'Jack'}, {name: 'Marry'});
                //assert.isTrue('true');
                //assert.isTrue(1);
                assert.isTrue(true);
                assert.isAbove(5, 3);
                assert.isAbove('5', 3);
                assert.isBelow(3, 5);
                assert.isBelow('3', '5');

                //...

                assert.propertyVal({name: 'Jack'}, 'name', 'Jack');


                expect(1).to.equal(1);
                expect(1).not.to.equal(2);
                expect(1).to.have.not.any.all.equal(3);
            });

        });
    });
});