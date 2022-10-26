function removeFonts() {
    return {
        postcssPlugin: 'remove font variables',
        Once(root) {
            root.walkDecls(decl => {
                const regex = /--sapFontUrl_([a-zA-Z-_0-9])+/g;
                if (decl.prop.match(regex)) {
                    decl.remove();
                }
            });
        }
    };
}

removeFonts.postcss = true;

export default removeFonts;
