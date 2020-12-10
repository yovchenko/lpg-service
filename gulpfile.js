const gulp = require('gulp');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

gulp.task('css', function () {
    const processors = [
		autoprefixer,
		cssnano
	];
	return gulp.src('./scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss(processors))
		.pipe(gulp.dest('./css'));
});

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