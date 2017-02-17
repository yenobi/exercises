module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Настройка для объединения файлов находится тут
            basic: {
              src: [
                'js/jquery-3.1.1.js',
                'js/jscarousel.js',
                'js/main.js'  // Конкретный файл
              ],
              dest: 'js/production.js',
          },
          extras: {
            src: [
              'css/main.css',
              'css/jcarousle.css'
            ],
            dest: 'css/output.css',
          }
        },

        uglify: {
          build: {
            src: 'js/production.js',
            dest: 'js/production.min.js'
          }
        },

        cssmin: {
          target: {
            files: [{
              expand: true,
              cwd: 'css',
              src: ['*.css', '!*.min.css'],
              dest: 'css',
              ext: '.min.css'
            }]
          }
        }

    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
    // second-plugin
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    
    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};
