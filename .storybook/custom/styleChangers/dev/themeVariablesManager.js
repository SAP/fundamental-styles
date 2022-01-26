import availableThemes from '../../constants/availableThemes';
import generateStyleLinkTagFn from '../utils/generateStyleLinkTagFn';
import getLazyLoader from '../utils/getLazyLoader';

export default (manager) => {
    let currentTheme;

    const styleLinkTag = generateStyleLinkTagFn(manager);
    const lazyLoader = getLazyLoader(styleLinkTag);
    const themeVariablesLazyLoader = (themeName) => {
        const {
            default: { use, unuse }
        } = require(`../../../../src/styles/theming/${themeName}.scss`);
        return {
            use: () => {
                use({
                    attributes: {
                        ['data-managedBy']: manager
                    }
                });
            },
            unuse
        };
    };

    const baseVariables = availableThemes.reduce((acc, { value }) => {
        acc[value] = lazyLoader(`theming-base-content/content/Base/baseLib/${value}/css_variables.css`);
        return acc;
    }, {});
    const styleVariables = availableThemes.reduce((acc, { value }) => {
        acc[value] = themeVariablesLazyLoader(value);
        return acc;
    }, {});

    return {
        use: (themeName) => {
            if (currentTheme && currentTheme !== themeName) {
                baseVariables[currentTheme].unuse();
                styleVariables[currentTheme].unuse();
            }
            currentTheme = themeName;
            baseVariables[themeName].use();
            styleVariables[themeName].use();
        }
    };
};
