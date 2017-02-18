module.exports = function(grunt) {

  grunt.initConfig({

    concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: ['js/src/**/*.js'],
      dest: 'js/build/build.js',
    },
  },
  });

  grunt.loadNpmTasks('grunt-contrib-concat')

  grunt.registerTask('default', ['concat']);

};
