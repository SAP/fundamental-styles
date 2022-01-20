import availableThemes from '../../availableThemes';

export default (manager) => {
    let currentTheme;
    let styleVariables = {};
    let managedBy = manager;

    const getBaseVariablesPath = (themeName) =>
        `theming-base-content/content/Base/baseLib/${themeName}/css_variables.css`;

    const styleLinkTag = (stylePath) => {
        let link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = stylePath;
        link.setAttribute('data-managedBy', managedBy);
        return link;
    };
    const useFunction = (linkTag) => {
        return () => {
            document.head.appendChild(linkTag);
        };
    };

    const unuseFunction = (linkTag) => {
        return () => {
            document.head.removeChild(linkTag);
        };
    };

    let baseVariables = availableThemes.reduce((acc, { value }) => {
        acc[value] = styleLinkTag(getBaseVariablesPath(value));
        return acc;
    }, {});

    const loadThemes = () => {
        if (Object.keys(styleVariables).length === availableThemes.length) {
            return;
        }
        styleVariables = availableThemes
            .map(({ value }) => {
                const linkTag = styleLinkTag(`theming/${value}.css`);
                return { theme: value, use: useFunction(linkTag), unuse: unuseFunction(linkTag) };
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
