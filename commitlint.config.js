const Configuration = {
    'extends': ['@commitlint/config-conventional'],
    rules: {
        'scope-enum': [
            2,
            'always',
            ['styles', 'docs', 'e2e', 'release', 'deps', 'deps-dev', 'changelog', 'ci', 'common-css', 'cx']
        ],
        'body-max-line-length': [2, 'always', 200],
        'footer-max-line-length': [2, 'always', 200],
        'header-max-length': [2, 'always', 200]
    }
};

export default Configuration;
