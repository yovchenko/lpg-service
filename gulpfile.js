const gulp = require('gulp');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');

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
  return gulp.src('./contacts-ua.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});
