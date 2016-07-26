module.exports = function(grunt) {
	grunt.initConfig({
		browserify: {
			dist:{
				options:{
					transform: [['babelify', {presets: ['es2015']}]],
					browserifyOptions: {
						debug: true
					}
				},
				files: {
					'src/bundle.js': 'src/index.js'
				}
			}
		},

		karma: {
			unit: {
				configFile: 'test/karma.conf.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.registerTask('build', ['browserify']);
	grunt.registerTask('test', ['browserify' ,'karma']);
};
