const path = require('path');
const glob = require('glob');

/**
 * Custom plugin to add scss files to webpack watcher
 */
class AddSCSSFilesToWatchPlugin {
    apply(compiler) {
        compiler.hooks.afterCompile.tap('after-compile', (comp) => {
            const files = glob.sync('src/**/*.scss', {
                cwd: process.cwd(),
                dot: true,
                absolute: true
            });

            files.forEach((file) => {
                comp.fileDependencies.add(path.resolve(file));
            });
        });
    }
}

module.exports = AddSCSSFilesToWatchPlugin;
