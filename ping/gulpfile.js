'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const jslint = require('gulp-jslint');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin     = require('gulp-imagemin'); 
const pngquant     = require('imagemin-pngquant'); 
const cache = require('gulp-cache'); 
const rename = require('gulp-rename');

gulp.task('less', function() {
  return gulp.src('src/css/style.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(sourcemaps.write('.'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build/css'));
});

gulp.task('js', function() {
  return gulp.src('src/js/**.js')
    .pipe(sourcemaps.init())
    .pipe(jslint())
    .pipe(concat('build.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/js'));
});

gulp.task('img', function() {
	return gulp.src('src/img/**/*') 
		.pipe(cache(imagemin({  
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('img'));
});

gulp.task('clean', function() {
  return del('build');
});

gulp.task('watch', function() {
  gulp.watch('src/css/*.less', gulp.series('less'));
});

