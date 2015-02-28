module.exports = function (grunt) {
    grunt.initConfig({
        karma: {
            frontend: {
                configFile: 'test/config/karma.conf.js'
            }
        }
    });
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('test', ['karma:frontend']);
};