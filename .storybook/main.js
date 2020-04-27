const glob = require('glob');
const path = require('path');
const { exec } = require('child_process');

module.exports = {
    stories: ['./stories/**/*.stories.js'],
    addons: [
        '@storybook/addon-a11y/register',
        '@storybook/addon-cssresources/register',
        '@storybook/addon-viewport/register',
    ],
    webpackFinal: async (config) => {
        config.plugins.push({
            // Custom plugin to add scss files to webpack watcher
            apply: (compiler) => {
                compiler.hooks.afterCompile.tap('after-compile', (comp) => {
                    const files = glob.sync('src/**/*.scss', {
                        cwd: process.cwd(),
                        dot: true,
                        absolute: true,
                    });
                    files.forEach((file) => {
                        comp.fileDependencies.add(path.resolve(file));
                    });
                });
            },
        });
        config.plugins.push({
        // Custom plugin to rebuild css styles for each scss change
            apply: (compiler) => {
                compiler.hooks.watchRun.tap('watchRun', (comp) => {
                    const filesChanged = comp.watchFileSystem.watcher.mtimes;
                    const wasLessChanged = Object.keys(filesChanged).some((file) => file.includes('.scss'));

                    if (wasLessChanged) {
                        exec('npm run style:compile', (err, stdout, stderr) => {
                            if (stdout) process.stdout.write(stdout);
                            if (stderr) process.stderr.write(stderr);
                        });
                    }
                });
            },
        });

        return config;
    },

};