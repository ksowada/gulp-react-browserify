var gulp = require('gulp');
var runSequence = require('run-sequence');

var defaultTask = function() {
  runSequence(
    ['html', 'css', 'vendorScripts', 'scripts'],
    ['fonts', 'images', 'static'],
    'watch'
  );
};

gulp.task('default', defaultTask);
