const gulp = require('gulp');
// const htmlmin = require('gulp-htmlmin');
const minify = require('gulp-minify');
 
gulp.task('compress', function() {
  gulp.src('js/*.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['debug'],
        ignoreFiles: ['-min.js']
    }))
    .pipe(gulp.dest('dist'))
});

/*
gulp.task('minify', () => {
  return gulp.src('./contacts.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});*/
