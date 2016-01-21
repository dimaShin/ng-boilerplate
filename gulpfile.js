"use strict";

const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const jade = require('gulp-jade');
const watch = require('gulp-watch');
const mainBowerFiles = require('main-bower-files');
const merge = require('merge2');

const gulpTask = require('./gulp-tasks/js');

gulp.task('init', () => {
  gulp.start(['jade']);
  gulpTask({
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
