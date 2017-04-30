const gulp = require('gulp'),
	  uglify = require('gulp-uglify'),
	  concat = require('gulp-concat'),
	  rename = require('gulp-rename'),
	  connect = require('gulp-connect');

gulp.task('html', function () {
	gulp
	.src('test/**/*.html')
	.pipe(connect.reload());
})

gulp.task('watch', () => {
	gulp.watch(['test/**/*.html'], ['html']);
})

gulp.task('connect', () => {
	connect.server({
		livereload: true
	})
})

gulp.task('default', ['connect', 'watch']);