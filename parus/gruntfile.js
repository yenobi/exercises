module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['js/src/**/*.js'],
        dest: 'js/build/build.js',
      },
    },

    watch: {
      scripts: {
        files: ['js/src/**/*.js'],
        tasks: ['concat']
      },
      css: {
        files: ['css/src/*.less'],
        tasks: ['less']
      }
    },

    uglify: {
      dist: {
        files: {
          'js/build/build.min.js': ['js/build/build.js']
        }
      }
    },
    // start less task
    less: {
      dist: {
        options: {
          paths: ['css']
        },
        files: {
          'css/src/style.css': 'css/src/style.less'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['watch']);
  // need to configure build-task
  grunt.registerTask('build', ['concat', 'uglify', 'sass']);

};
