const postcss = require('postcss');

module.exports = postcss.plugin('remove font variables', function() {
    return function(root) {
        root.walkDecls(decl => {
            const regex = /--sapFontUrl_([a-zA-Z-_0-9])+/g;
            if (decl.prop.match(regex)) {
                decl.remove();
            }
        });
    };
});
