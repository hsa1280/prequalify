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
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.registerTask('default', ['browserify']);
};
