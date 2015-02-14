module.exports = function (grunt) {
    
    grunt.initConfig({
        concat: {
            js: {
                src: ['js/*.js'],
                dest: 'build/js/scripts.js',
            },
            cssmenu: {
                src: ['css/menu/*.css'],
                dest: 'build/css/menu/mobile_menu.css',
            },
            flower: {
                src: ['css/flower/*.css'],
                dest: 'build/css/flower/flower.css',
            },
            threecolumn: {
                src: ['css/3-column/*.css'],
                dest: 'build/css/3-column/3-column.css',
            },
            fourcolumn: {
                src: ['css/4-column/*.css'],
                dest: 'build/css/4-column/4-column.css',
            },
            slogan: {
                src: ['css/slogan/*.css'],
                dest: 'build/css/slogan/slogan.css',
            },
            bodystyles: {
                src: ['css/bodystyles/*.css'],
                dest: 'build/css/bodystyles/bodystyles.css',
            },
            css: {
                src: ['css/**/*.css'],
                dest: 'build/css/styles.css',
            },
        },
        watch: {
            js: {
                files: ['js/**/*.js'],
                tasks: ['concat:js']
            },
            css: {
                files: ['css/**/*.css'],
                tasks: ['concat:css']
            },
        },
        uglify: {
            my_target: {
                files: {
                    'build/scripts.min.js': ['build/js/scripts.js']
                },
            },
        },
        cssmin: {
          options: {
            shorthandCompacting: false,
            roundingPrecision: -1
          },
          target: {
            files: {
              'build/styles.min.css': ['build/css/styles.css']
            },
          },
        },
        sass: {
            dist: {
                files: {
                'css/flower/flower.css' : 'flower/*.scss',
                },
            },
        },
    });

    /* Tasks to execute from here */
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    /* This is to do all at once */
    grunt.registerTask('default', ['concat', 'watch', 'cssmin', 'sass', 'uglify']);
};
