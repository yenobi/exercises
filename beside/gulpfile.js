'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const imagemin     = require('gulp-imagemin');
const pngquant     = require('imagemin-pngquant');
const cache = require('gulp-cache');
const rename = require('gulp-rename');

gulp.task('sass', function() {
  return gulp.src('src/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(sourcemaps.write('.'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/css'));
});

//gulp.task('js', function() {
//  return gulp.src('src/js/**.js')
//    .pipe(sourcemaps.init())
//    .pipe(eslint())
//    .pipe(eslint.format())
//    .pipe(eslint.failAfterError())
//    .pipe(concat('build.js'))
//    .pipe(uglify())
//    .pipe(rename({suffix: '.min'}))
//    .pipe(sourcemaps.write('.'))
//    .pipe(gulp.dest('build/js'));
//});

//gulp.task('babel', function() {
//    return gulp.src('src/js/**.js')
//        .pipe(babel({
//            presets: ['es2015']
//        }))
//        .pipe(gulp.dest('src/tmp'));
//});
//
//gulp.task('watch-js', function() {
//  gulp.watch('src/js/*', gulp.series('babel'));
//});

gulp.task('img', function() {
	return gulp.src('img/**/*')
		.pipe(cache(imagemin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('build/img'));
});

gulp.task('clean', function() {
  return del('build');
});

gulp.task('watch', function() {
  gulp.watch('src/scss/**/*', gulp.series('sass'));
});

gulp.task('build', gulp.series('clean', 'sass', 'img'));

gulp.task('dev', gulp.series('build', 'watch'));
