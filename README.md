# grunt-sencha-jasmine

> A Grunt task to make Jasmine testing on Ext.js and Sencha Touch projects easier. It extends the `grunt-contrib-jasmine` task and so therefore any of the options available on that task also work here.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-sencha-jasmine --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-sencha-jasmine');
```

## The "sencha_jasmine" task

This task extends the ```grunt-contrib-jasmine``` task and just provides a simpler way of getting an Ext.js and Sencha Touch project running Jasmine tasks.

Please refer to the [https://github.com/gruntjs/grunt-contrib-jasmine] docs for more details. This page will only cover the specifics for working with Ext.js.

### Overview
In your project's Gruntfile, add a section named `sencha_jasmine` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  sencha_jasmine: {
    options: {
      extFramework : './lib/ext-4.1.2'
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    }
  },
})
```

### Options

Reminder that this task extends the ```grunt-contrib-jasmine``` task and therefore all the options they support are also supported.

#### options.extFramework
Type: `String`
Default value: `undefined`

This is the only required property and should point to the directory in which Ext.js is installed.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
