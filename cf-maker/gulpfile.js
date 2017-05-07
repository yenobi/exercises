'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const eslint = require('gulp-eslint');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin     = require('gulp-imagemin'); 
const pngquant     = require('imagemin-pngquant'); 
const cache = require('gulp-cache'); 
const rename = require('gulp-rename');
const minify = require('gulp-minify');

gulp.task('sass', function() {
  return gulp.src('src/scss/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(sourcemaps.write('.'))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
  return gulp.src('src/js/**.js')
    .pipe(sourcemaps.init())
    .pipe(concat('build.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('js-min', function() {
    return gulp.src('dist/js/build.js')
    .pipe(minify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js'));
})

gulp.task('img', function() {
	return gulp.src('img/**/*') // Берем все изображения из app
		.pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('build/img')); // Выгружаем на продакшен
});

gulp.task('clean', function() {
  return del('build');
});
// вотчер (пока только для стилей)
gulp.task('watch', function() {
  gulp.watch('src/scss/**/*', gulp.series('sass'));
});

// smth wrong with this task
gulp.task('build', gulp.series('clean', 'sass', 'js', 'img'));
// дев-задача - сборка + вотчер сразу
gulp.task('dev', gulp.series('build', 'watch'));