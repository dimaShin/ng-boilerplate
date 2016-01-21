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
const mainBowerFiles = require('main-bower-files');
const merge = require('merge2');
const filter = require('gulp-filter');

gulp.task('init', () => {

  gulp.start(['js', 'jade'])

});

gulp.task('js', () => {

  const vendors = mainBowerFiles();
  const excludedVendors = filter(['*',
    '!angular-ui-router*.js'
  ]);

  merge(
    gulp.src(vendors).pipe(excludedVendors),
    gulp.src([
    './public/app/app.js',
    './public/app/*.js',
    './public/app/**/*.js'
    ]).pipe(babel({
      presets: ['es2015', 'stage-0']
    }))
  ).pipe(gulpIf(argv.production, sourcemaps.init()))
  .pipe(concat('build.js'))
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
