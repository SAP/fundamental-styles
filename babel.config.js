module.exports = {
    presets: ['@babel/preset-react', ['@babel/preset-env', { targets: { node: 'current' } }]],
    env: {
        cjs: {},
        test: {
            plugins: [
                '@babel/plugin-transform-modules-commonjs' // needed for storybook >=6.2.7
            ]
        }
    }
};
