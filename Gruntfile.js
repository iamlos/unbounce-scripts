module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Lint all JS files
    jshint: {
      all: ['scripts/*.js'],
      options: {
        camelcase: true,
        eqeqeq: true,
        indent: 2,
        latedef: true,
        newcap: true,
        noempty: true,
        nonbsp: true,
        quotmark: 'single',
        trailing: false
      }
    },

    // Uglify horizontal form script
    uglify: {
      options: {
        compress: {
          global_defs: {
            DEBUG: false
          }
        },
        banner: '<script>\n\n' +
                '  // unbounce-horizontal-forms <%= grunt.template.today("dd-mm-yyyy") %>\n\n  ',
        footer: '  \n\n' +
                '  // First parameter is spacing between fields\n' +
                '  // Second parameter is submit button placement. Options:\n' +
                '  //    - \'inline\': in line with the fields\n' +
                '  //    - \'newline\': on a new line\n' +
                '  //    - \'manual\': wherever you place the button in the page builder\n' +
                '  new HorizontalForm(20, \'inline\');\n\n' +
                '</script>'
      },
      build: {
        src: 'scripts/horizontal-forms.js',
        dest: 'scripts/horizontal-forms.min.html'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint', 'uglify']);
};
