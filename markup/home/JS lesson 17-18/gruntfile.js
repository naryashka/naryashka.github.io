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
        dest: 'js/dist/script.min.js'
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
    src: ['css/dist/style.css'],
    dest: 'css.min',
  }
}

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  grunt.registerTask('default', ['concat', 'uglify', 'concat_css', 'cssmin']);

};