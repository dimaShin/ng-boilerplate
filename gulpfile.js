"use strict";

const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const jade = require('gulp-jade');
const watch = require('gulp-watch');

const jsTask = require('./gulp-tasks/js');
const cssTask = require('./gulp-tasks/css');

gulp.task('init', () => {
  gulp.start(['jade']);
  jsTask({
    env: 'dev'
  });

  cssTask({
    env: 'dev'
  });
});

gulp.task('jade', () => {
  gulp.src('./public/index.jade');

  var YOUR_LOCALS = {
    sourcePath: '/src/build.js'
  };

  gulp.src('./public/index.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./public/'))
});
