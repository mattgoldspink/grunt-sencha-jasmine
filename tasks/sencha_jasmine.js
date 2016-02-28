/*
 * grunt-sencha-jasmine
 * https://github.com/mattgoldspink/grunt-sencha-jasmine
 *
 * Copyright (c) 2013 Matt Goldspink
 * Licensed under the MIT license.
 */

'use strict';

var path = require('path');

module.exports = function(grunt) {

    var gruntJasminePath = path.dirname(require.resolve('grunt-contrib-jasmine'));
    grunt.loadTasks(path.join(gruntJasminePath, 'tasks'));
    var task = grunt.renameTask('jasmine', 'sencha_jasmine_wrapper');

    function parseNameArgsIntoFormatForWrapper(nameArgs) {
        var splitNameArgs = nameArgs.split(':');
        splitNameArgs[0] = 'sencha_jasmine_wrapper';
        return splitNameArgs.join(':');
    }

    grunt.registerMultiTask('sencha_jasmine', 'Your task description goes here.', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            extFramework   : undefined,
            extLoaderPaths   : {},
            extControllers : [],
            template       : __dirname + '/templates/_ExtJasmine.tmpl',
            templateOptions : {

            }
        });

        if (options.extFramework === undefined) {
            grunt.log.error("You must set the extFramework option to point to your Ext install directory or url");
        }

        var conf = {};
        conf[this.target] = {
            options: options
        };
        conf[this.target].options.templateOptions.extFramework = options.extFramework;
        conf[this.target].options.templateOptions.extLoaderPaths = JSON.stringify(options.extLoaderPaths);
        conf[this.target].options.templateOptions.extControllers = JSON.stringify(options.extControllers);

        grunt.config.set('sencha_jasmine_wrapper', conf);
        grunt.task.run([parseNameArgsIntoFormatForWrapper(this.nameArgs)]);
    });
};
