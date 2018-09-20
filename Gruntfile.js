module.exports = function (grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        style: 'compressed'
      },
      dist: {
        files: {
          'assets/css/main.css' : 'assets/scss/main.scss'
        }
      }
    },
    watch: {
      scss: {
        files: ['assets/scss/*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
}
