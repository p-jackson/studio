var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('js', function() {
  return gulp.src('src/**/*.js')
    .pipe($.newer('.tmp'))
    .pipe($.babel())
    .pipe(gulp.dest('.tmp'));
});

gulp.task('html', function() {
  return gulp.src('src/**/*.html')
    .pipe($.newer('.tmp'))
    .pipe(gulp.dest('.tmp'));
});

gulp.task('default', ['js', 'html']);
