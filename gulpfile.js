var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

gulp.task('sass', function() {
  // place code for your default task here
  gulp.src('sass/style.scss')
  	.pipe(sass())
  	.pipe(gulp.dest('css'))
});
gulp.task('watch',function() {
    gulp.watch('sass/*.scss',['sass']);
});
