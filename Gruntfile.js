module.exports = function(grunt) {
  'use strict';
  require('load-grunt-tasks')(grunt, {
    pattern: ['grunt-*']
  });

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    config: {
      'cssSrcDir': 'src/sass',
<<<<<<< HEAD
      'cssLibDir': 'src/css',
      'cssTargetDir': 'css',
=======
      'cssTargetDir': 'assets/css',
>>>>>>> upstream/master
      'jsSrcDir': 'src/js',
      'jsTargetDir': 'assets/js',
      'jsDependencies': [
        '<%= config.jsSrcDir %>/libs/jquery.min.js',
        '<%= config.jsSrcDir %>/libs/jquery.fitvids.js',
        '<%= config.jsSrcDir %>/libs/jquery.history.js',
        '<%= config.jsSrcDir %>/libs/highlight.pack.js',
        '<%= config.jsSrcDir %>/libs/nprogress.js',
        'node_modules/ghosthunter/dist/jquery.ghosthunter.js'
      ]
    },
    copy: {
      dev: {
        files: [{
          dest: 'assets/font/',
          src: '*',
          cwd: 'src/font/',
          expand: true
        }]
      },
      dist: {
        files: [{
          dest: 'assets/font/',
          src: '*',
          cwd: 'src/font/',
          expand: true
        }]
      }
    },
    clean: {
      dev: ['dev'],
      dist: ['dist'],
      all: ['dev', 'dist']
    },
    sass: {
      dev: {
        options: {
          includePaths: ['<%= config.cssSrcDir %>'],
          sourceMaps: true
        },
        files: {
          '<%= config.cssTargetDir %>/style.css': '<%= config.cssSrcDir %>/style.scss'
        }
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          '<%= config.cssTargetDir %>/style.css': '<%= config.cssSrcDir %>/style.scss'
        }
      }
    },
    postcss: {
      options: {
        map: false
      },
      dev: {
        src: '<%=  config.cssTargetDir %>/*.css'
      },
      dist: {
        src: '<%=  config.cssTargetDir %>/*.css'
      }
    },
    uglify: {
      js: {
        files: {
          '<%= config.jsTargetDir %>/script.js': [
            '<%= config.jsDependencies %>',
            '<%= config.jsSrcDir %>/script.js'
          ]
        }
      }
    },
    watch: {
      css: {
        files: '<%=  config.cssSrcDir %>/**/*.scss',
        tasks: ['sass:dev', 'copy:dev', 'postcss:dev']
      },
      js: {
        files: '<%=  config.jsSrcDir %>/**/*.js',
        tasks: ['uglify']
      }
    },
<<<<<<< HEAD
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'assets/<%=  config.cssTargetDir %>/style.css': [
            'assets/<%=  config.cssTargetDir %>/style.css',
            '<%=  config.cssLibDir %>/*.css'
          ]
        }
      }
    },
    zip: {
      dist: {
        src: [
          '**',
          '!node_modules',
          '!node_modules/**',
          '!src',
          '!src/**',
          '!dist',
          '!dist/**',
          '!.git',
          '!.gitignore',
          '!Gruntfile.js',
          '!package-lock.json'
        ],
        dest: `dist/${require('./package.json').name}.zip`
      }
=======
    compress: {
      main: {
        options: {
          archive: `dist/${require('./package.json').name}.zip`,
          level: 9
        },
        files: [{
          src: [
            '**',
            '!node_modules',
            '!node_modules/**',
            '!src',
            '!src/**',
            '!dist',
            '!dist/**',
            '!.git',
            '!.gitignore',
            '!Gruntfile.js',
            '!package-lock.json'
          ],
          dest: '.'
        }]
      },
>>>>>>> upstream/master
    }
  });

  grunt.registerTask('build', [
    'sass:dist',
    'postcss:dist',
    'cssmin',
    'copy:dist',
    'uglify'
  ]);
  grunt.registerTask('default', [
    'sass:dev',
    'postcss:dev',
    'cssmin',
    'copy:dev',
    'uglify',
    'watch'
  ]);
};
