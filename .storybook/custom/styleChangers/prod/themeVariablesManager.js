import availableThemes from '../../constants/availableThemes';
import generateStyleLinkTagFn from '../utils/generateStyleLinkTagFn';
import getLazyLoader from '../utils/getLazyLoader';

export default (managedBy) => {
    let currentTheme;

    const styleLinkTag = generateStyleLinkTagFn(managedBy);
    const lazyLoader = getLazyLoader(styleLinkTag);

    const baseVariables = availableThemes.reduce((acc, { value }) => {
        acc[value] = lazyLoader(`theming-base-content/content/Base/baseLib/${value}/css_variables.css`);
        return acc;
    }, {});
    const styleVariables = availableThemes.reduce((acc, { value }) => {
        acc[value] = lazyLoader(`theming/${value}.css`);
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
