import availableThemes from '../../availableThemes';

export default (manager) => {
    let currentTheme;
    let styleVariables = {};
    let managedBy = manager;

    const getBaseVariablesPath = (themeName) =>
        `theming-base-content/content/Base/baseLib/${themeName}/css_variables.css`;

    const styleLinkTag = (themeName) => {
        let link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = getBaseVariablesPath(themeName);
        link.setAttribute('data-managedBy', managedBy);
        return link;
    };

    let baseVariables = availableThemes.reduce((acc, { value }) => {
        acc[value] = styleLinkTag(value);
        return acc;
    }, {});

    const loadThemes = () => {
        if (Object.keys(styleVariables).length === availableThemes.length) {
            return;
        }
        styleVariables = availableThemes
            .map(({ value }) => {
                const {
                    default: { use, unuse }
                } = require(`../../../../src/styles/theming/${value}.scss`);
                return {
                    theme: value,
                    use: () =>
                        use({
                            attributes: {
                                ['data-managedBy']: managedBy
                            }
                        }),
                    unuse
                };
            })
            .reduce((acc, next) => {
                acc[next.theme] = next;
                return acc;
            }, {});
    };
    return {
        use: (themeName) => {
            loadThemes();
            if (currentTheme && currentTheme !== themeName) {
                document.head.removeChild(baseVariables[currentTheme]);
                styleVariables[currentTheme].unuse();
            }
            currentTheme = themeName;
            document.head.appendChild(baseVariables[themeName]);
            styleVariables[themeName].use();
        }
    };
};
