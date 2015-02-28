(function (window, require) {
    'use strict';
    var tests = [];
    for (var file in window.__karma__.files) {
        console.log('file loaded by karma : '+file);
        if (window.__karma__.files.hasOwnProperty(file)) {
            if (/Spec\.js$/.test(file)) {
                tests.push(file);
            }
        }
    }
    require({
        baseUrl: '',
        paths: {
            expect: '/base/test/config/expect',
            myApp: '/base/public_html/js/app'
        },
        shim: {
            myApp : ['expect']
        },
        deps: tests,
        callback: window.__karma__.start
    });
}(window, require));