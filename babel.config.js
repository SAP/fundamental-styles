module.exports = {
    presets: ['@babel/preset-react', ['@babel/preset-env', { targets: { node: 'current' } }]],
    env: {
        cjs: {},
        test: {
            plugins: []
        }
    }
};
