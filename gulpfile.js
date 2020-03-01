const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
 
gulp.task('minify', () => {
  return gulp.src('./contacts.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});
