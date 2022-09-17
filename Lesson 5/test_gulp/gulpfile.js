const { src, dest, series, parallel, watch } = require('gulp');
const gulpSass = require('gulp-sass')(require('node-sass'));
const csso = require('gulp-csso');
const include = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const sync = require('browser-sync').create();
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const jsminify = require('gulp-minify')

function generateHTML() {
  return src('src/**.html')
    .pipe(include())
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      }),
    )
    .pipe(dest('dist'));
}

function parseSCSS() {
  return src('src/scss/**.scss')
    .pipe(gulpSass())
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(concat('index.css'))
    .pipe(dest('dist'));
}

function parseJS() {
  return src('src/js/**.js')
    .pipe(
      babel({
        presets: ['@babel/env'],
      }),
    )
    .pipe(jsminify())
    .pipe(dest('dist'));
}

function clearDistFolder() {
  return del('dist');
}

function server() {
  sync.init({
    server: './dist',
  });

//   watch(['src/**.html', 'src/parts/**.html'], series(generateHTML)).on('change', sync.reload);
  watch('src/parts/**/*.html', series(generateHTML)).on('change', sync.reload);
  watch('src/scss/**.scc', series(parseSCSS)).on('change', sync.reload);
  watch('src/js/**.js', series(parseJS)).on('change', sync.reload);
}

const parallelTasks = parallel(generateHTML, parseSCSS, parseJS);
const seriesTasks = series(clearDistFolder, parallelTasks);

exports.build = seriesTasks;

exports.generateHTML = generateHTML;
exports.parseSCSS = parseSCSS;
exports.parseJS = parseJS;
exports.clearDist = clearDistFolder;
exports.server = server;
