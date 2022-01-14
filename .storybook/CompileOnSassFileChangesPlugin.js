const { exec } = require('child_process');

/**
 * Custom plugin to rebuild css styles for each scss change
 */
class CompileOnSassFileChangesPlugin {
    apply(compiler) {
        compiler.hooks.watchRun.tap('watchRun', (comp) => {
            const { modifiedFiles } = comp;
            if (modifiedFiles) {
                const wasSassChanged = [...modifiedFiles.keys()].some((file) => file.includes('.scss'));
                if (wasSassChanged) {
                    exec('npm run build:default', (err, stdout, stderr) => {
                        if (stdout) process.stdout.write(stdout);
                        if (stderr) process.stderr.write(stderr);
                    });
                }
            }
        });
    }
}

module.exports = CompileOnSassFileChangesPlugin;
