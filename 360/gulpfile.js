var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    postcssImport = require('postcss-import'),
    postcssMixins = require('postcss-mixins'),
    postcssNested = require('postcss-nested'),
    sourcemaps = require('gulp-sourcemaps'),
    csso = require('gulp-csso'),
    autoprefixer = require('autoprefixer'),
    rename = require('gulp-rename');

gulp.task('css', function() {
    var processors = [postcssImport, postcssMixins, postcssNested, autoprefixer];
    
    return gulp.src('./src/app/css/style.css')
            .pipe(postcss(processors))
            .pipe(csso())
            .pipe(sourcemaps.write('.'))
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('./build/app/css'));
});