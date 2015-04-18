var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

var path = ['app/**', '!app/jspm_packages/**'];

gulp.task('watch', function () {
  gulp.watch(path, function () {
    gulp.src(path)
      .pipe(connect.reload());
  });
});

gulp.task('default', ['connect', 'watch']);
