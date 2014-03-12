module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            default: {
                expand: true,
                cwd: 'web/assets/less/',
                dest: 'web/assets/css/',
                src: '*.less',
                ext: '.css'
            }
        },

        cssmin: {
            default: {
                expand: true,
                cwd: 'web/assets/css/',
                dest: 'web/assets/css/',
                src: ['*.css', '!*.min.css'],
                ext: '.min.css'
            }
        }
    });

    ['grunt-contrib-less', 'grunt-contrib-cssmin'].forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['less', 'cssmin']);
};