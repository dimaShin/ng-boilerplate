"use strict";

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const gzip = require('gulp-gzip');
const jade = require('gulp-jade');
const ngAnnotate = require('gulp-ng-annotate');
const rename = require('gulp-rename');
const watch = require('gulp-watch');
const gulpIf = require('gulp-if');
const argv = require('yargs').argv;

gulp.task('init', () => {

  gulp.start(['js', 'jade'])

});

gulp.task('js', () => {
  gulp.src([
    './node_modules/angular/angular.js',
    './public/app/app.js',
    './public/app/*.js',
    './public/app/**/*.js'
  ])
  .pipe(concat('build.js'))
  .pipe(gulpIf(argv.production, sourcemaps.init()))
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(ngAnnotate())
  .pipe(gulpIf(argv.production, uglify()))
  .pipe(gulpIf(argv.production, sourcemaps.write('.')))
  .pipe(gulpIf(argv.production, gzip()))
  .pipe(gulp.dest('./public/src/'));
});

gulp.task('jade', () => {
  gulp.src('./public/index.jade');

  var YOUR_LOCALS = {
    sourcePath: argv.production
      ? '/src/build.js.gz'
      : '/src/build.js'
  };

  gulp.src('./public/index.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./public/'))
});
