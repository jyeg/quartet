'use strict';

var gulp = require('gulp');
var config = require('../config').watch;

gulp.task('watch', ['build'], function () {
  gulp.watch(config.src, config.tasks);
});

//# sourceMappingURL=watch-compiled.js.map