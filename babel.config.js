module.exports = {
    presets: [
        '@babel/preset-react',
        ['@babel/preset-env', { targets: { node: 'current' } }]
    ],
    plugins: [
        'babel-plugin-named-exports-order'
    ],
    env: {
        cjs: {},
        test: {
            plugins: []
        }
    }
};
