define(function() {
    'use strict';
    console.log('expect.js is loaded.')
    window.expect = chai.expect;
    window.sandbox = sinon.sandbox.create();
});
