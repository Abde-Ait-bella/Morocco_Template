const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');

function buildStyles() {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
};

function buildscript() {
  return gulp.src('./js/*.js')
    .pipe(concat("script.js"))
    .pipe(gulp.dest('./dist/js'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch('./sass/**/*.scss', buildStyles);
  gulp.watch('./js/**/*.js', buildscript);
};

function copyFiles() {
  return gulp.src(['./_redirects', './dist/**/*'])
    .pipe(gulp.dest('./dist'));
}

exports.build = gulp.series(buildStyles, buildscript, copyFiles);