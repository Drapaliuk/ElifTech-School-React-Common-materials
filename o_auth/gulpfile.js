const { src, dest, series, parallel, watch } = require('gulp');
const sync = require('browser-sync').create();


function server() {
  sync.init({
    server: './src',
  });

  watch('src/**/*.html', sync.reload);
  watch('src/**/*.css', sync.reload);
  watch('src/**/*.js', sync.reload);
}

exports.server = server;
