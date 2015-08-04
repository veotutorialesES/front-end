module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            options: {
                separator: ';\n'
            },
            dist: {
                src: ['app/services/*.js','app/app.js','app/app.routes.js','app/components/**/*.js', 'app/shared/**/*.js'],
                dest: 'assets/js/app.js'
            }
        },
        less: {
            development: {
                files: {
                    "assets/css/vts.css": "less/main.less"
                }
            }

        },
        watch: {
            less: {
                // We watch and compile sass files as normal but don't live reload here
                files: ['less/**/*.less'],
                tasks: ['less']
            },
            html: {
                files: ['app/components/**/*.html'],
                tasks: []
            },
            js: {
                files: ['app/**/*.js'],
                tasks: ['concat']
            },
            options: {
                livereload: true
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');


    grunt.registerTask('default', ['less']);

};