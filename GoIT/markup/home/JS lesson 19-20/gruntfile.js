module.exports = function(grunt) {

  grunt.initConfig({
     concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.js'
      }
    },
    uglify: {
      dist: {
        src: ['js/dist/script.js'],
        dest: 'build/js/script.min.js'
      }
    },
    concat_css: {
    options: {
      // Task-specific options go here. 
    },
    all: {
      src: ["css/src/*.css"],
      dest: "css/dist/style.css"
    },
  },

  cssmin: {
  minify: {
    expand: true,
    src: ['css/style.css'],
    dest: './build',
    }
  },

  sass: {
    dist: {
      files: [{
        expand: true,
        cwd: 'css/scss',
        src: ['style.scss'],
        dest: 'css',
        ext: '.css'
      }]
    }
  },

  watch: {
    sass: {
      files: ['css/scss/*.scss'],
      tasks: ['sass'],
    },
  }


  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['sass', 'cssmin', 'concat', 'uglify']);

};


//'concat', 'uglify', 'concat_css', 'cssmin'