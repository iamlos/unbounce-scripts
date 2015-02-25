module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    // Get info from Git
    gitinfo: {},

    // Lint all JS files
    jshint: {
      all: ['scripts/*.js'],
      options: {
        camelcase: true,
        indent: 2,
        latedef: true,
        newcap: true,
        noempty: true,
        nonbsp: true,
        //quotmark: 'single',
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
                '  // unbounce-horizontal-forms <%= gitinfo.local.branch.current.shortSHA %>\n  ',
        footer: '  \n\n' +
                '  // First parameter is spacing between fields, e.g. 20px\n' +
                '  // Second parameter is submit button placement. Options:\n' +
                '  //    - \'inline\': in line with the fields\n' +
                '  //    - \'newline\': on a new line\n' +
                '  //    - \'manual\': wherever you place the button in the page builder\n' +
                '  new HorizontalForm(20, \'manual\');\n\n' +
                '</script>'
      },
      build: {
        src: 'scripts/form-horizontal.js',
        dest: 'scripts/form-horizontal.min.html'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-gitinfo');

  grunt.registerTask('default', ['gitinfo', 'jshint', 'uglify']);
};
