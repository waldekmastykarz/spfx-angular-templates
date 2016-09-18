'use strict';
var error = require('@microsoft/gulp-core-build').error,
  log = require('@microsoft/gulp-core-build').log;

var CopyTemplates = {
  execute: (config) => {
    return new Promise((resolve, reject) => {
      var copyAssetsTask = undefined;
      for (var i = 0; i < config.uniqueTasks.length; i++) {
        if (config.uniqueTasks[i].name === 'copyAssets') {
          copyAssetsTask = config.uniqueTasks[i];
          break;
        }
      }

      if (!copyAssetsTask) {
        var errorMsg = 'Couldn\'t retrieve the CopyAssets task.';
        error(errorMsg);
        reject(errorMsg);
        return;
      }

      var destPath = config.production ? copyAssetsTask.taskConfig.deployCdnPath : config.distFolder;

      log(`Copying HTML template to ${destPath}...`);

      config.gulp.src('./src/webparts/angularTemplate/**/*.html')
        .pipe(config.gulp.dest(destPath));

      resolve();
    });
  },
  name: 'copytemplates'
};
exports.default = CopyTemplates;