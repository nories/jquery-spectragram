/*global module:false*/
module.exports = function(grunt) {

// Project configuration.
  grunt.initConfig({
    pkg: '<json:spectragram.jquery.json>',
    meta: {
      banner: '/*!\n' +
              ' * <%= pkg.title || pkg.name %> v<%= pkg.version %> by <%= pkg.author.name %>\n' +
              '<%= pkg.homepage ? " * " + pkg.homepage + "\n" : "" %>' +
              ' * \n' +
              ' * Copyright (c) <%= grunt.template.today("yyyy") %>, <%= pkg.author.name %>\n' +
              ' * Dual licensed under the MIT or GPL Version 2 licenses. \n' +
              ' * \n' +
              ' * This plugin uses the Instagram(tm) API and is not endorsed or certified by Instagram or Burbn, inc. \n' +
              ' * All Instagram(tm) logos and trademarks displayed on this plugin are property of Burbn, Inc. \n' +
              ' * \n' +
              ' * Date: <%= grunt.template.today("ddd mmm dd H:MM:ss yyyy o") %>\n' +
              ' */'
    },
    concat: {
      dist: {
        src: ['<banner:meta.banner>', '<file_strip_banner:src/<%= pkg.name %>.js>'],
        dest: '<%= pkg.name %>.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: '<%= pkg.name %>.min.js'
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    lint: {
      files: ['grunt.js', 'src/**/*.js', 'test/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint qunit'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true
      }
    },
    uglify: {}
  });

  // Default task.
  //grunt.registerTask('default', 'lint qunit concat min');
  grunt.registerTask('default', 'lint concat min');

};