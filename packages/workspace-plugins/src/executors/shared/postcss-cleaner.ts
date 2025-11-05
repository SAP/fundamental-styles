
const CleanCss = require('clean-css');
const postcss = require('postcss');

function pluginCreator(opts) {
    return {
        postcssPlugin: 'postcss-cleaner',
        prepare(res) {
            const cleancss = new CleanCss(opts);

            return {
                OnceExit(css) {
                    return cleancss.minify(css.toString(), (err, min) => {
                        if (err) {
                            throw new Error(err.join('\n'));
                        }

                        for (let w of min.warnings) {
                            res.warn(w);
                        }

                        res.root = postcss.parse(min.styles);
                    });
                }
            };
        }
    };
}

pluginCreator.postcss = true;

export default pluginCreator;
