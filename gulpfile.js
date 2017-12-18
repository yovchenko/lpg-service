const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
gulp.task('compress', function() {
    gulp.src('pictures/asphalt.jpg')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images'))
  });
