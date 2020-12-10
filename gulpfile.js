const gulp = require('gulp');
const minify = require('gulp-minify');

gulp.task('compressJs', function() {
  return gulp.src('js/debug/*.js')
    .pipe(minify({
        ext:{
            src:'.js',
            min:[/-debug.js/, '.js']
        },
        noSource: true,
        ignoreFiles: ['-min.js']
    }))
    .pipe(gulp.dest('js'))
});


gulp.task('minifyHtml', () => {
  return gulp.src('./contacts.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});
