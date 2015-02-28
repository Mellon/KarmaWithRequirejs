module.exports = function (config) {
    config.set({
        basePath: '../../',
        autoWatch: true,
        // web server port
        port: 9876,
        frameworks: ['mocha', 'requirejs', 'chai', 'sinon'],
        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'test/config/test-main.js',
            {pattern: 'public_html/js/**/*.js', included: false},
            {pattern: 'test/config/expect.js', included: false},
            {pattern: 'test/config/unexpect.js', included: false},
            {pattern: 'test/*Spec.js', included: false}
        ],
        exclude: [],
        browsers: ['PhantomJS'], //'PhantomJS', 'Chrome', 
        logLevel: config.LOG_INFO,
        plugins: ['karma-mocha', 'karma-chai', 'karma-sinon', 'karma-requirejs', 'karma-chrome-launcher', 'karma-phantomjs-launcher'],
        singleRun: false
    });
};