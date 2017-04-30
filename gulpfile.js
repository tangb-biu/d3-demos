const gulp = require('gulp'),
	  uglify = requre('gulp-uglify'),
	  concat = require('gulp-concat'),
	  rename = requrie('gulp-rename'),
	  connect = require('gulp-connect');

gulp.task('watch', () => {
	gulp.watch(['**'], () => {
		gulp
		.src(['**'])
		.pipe(connect.reload());
	})
})

gulp.task('connect', () => {
	connect.server({
		livereload: true
	})
})

gulp.task('default', ['connect', 'watch']);