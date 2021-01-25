const { series, src, dest } = require('gulp');

const less = require('gulp-less');
const stylus = require('gulp-stylus');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');

const replace = require('gulp-replace');

const lessFn = () => src('src/*.less')
  .pipe(less())
  .pipe(dest('./lib'));

const stylusFn = () => src('src/*.styl')
  .pipe(stylus())
  .pipe(dest('./lib'));

const autoprefixerFn = () => src('src/*.css')
  .pipe(sourcemaps.init())
  .pipe(postcss([autoprefixer()]))
  .pipe(sourcemaps.write('.'))
  .pipe(dest('./lib'));

const replaceFn = () => 
  src('lib/*.js')
    .pipe(replace(/\/(.+)\.less/, '/$1.css'))
    .pipe(replace(/\/(.+)\.styl/, '/$1.css'))
    .pipe(dest('./lib'));

exports.default = series(lessFn, stylusFn, autoprefixerFn, replaceFn);