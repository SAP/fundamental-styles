const stylesFileRegex = /\.s[ac]ss$/i;
const fnFileRegex = /fn([\/\\])(.*)\.s[ac]ss$/i;

module.exports = {
    test: stylesFileRegex,
    use: [
        {
            loader: 'style-loader',
            options: {
                injectType: 'lazyStyleTag'
            }
        },
        'css-loader',
        ({ resource }) => {
            return {
                ident: 'sass-loader',
                loader: 'sass-loader',
                options: {
                    sassOptions: {
                        additionalData: async (content) => {
                            if (resource.match(fnFileRegex)) {
                                return `
                                    @import "fn-settings";
                                    
                                    ${content}
                                `;
                            }
                            return content;
                        }
                    }
                }
            };
        }
    ]
};
