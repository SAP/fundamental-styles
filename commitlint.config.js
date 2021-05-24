const Configuration = {
    'extends': ['@commitlint/config-conventional'],
    rules: {
        'body-max-line-length': [2, 'always', 200],
        'footer-max-line-length': [2, 'always', 200]
    }
};

module.exports = Configuration;
