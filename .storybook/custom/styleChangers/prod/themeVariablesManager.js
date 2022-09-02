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
    const fontVariables = availableThemes.reduce((acc, { value }) => {
        const baseTheme = value.startsWith('sap_fiori_3') ? 'sap_fiori_3' : 'sap_horizon';
        acc[value] = lazyLoader(`fonts/${baseTheme}_fonts.css`);
        return acc;
    }, {});

    return {
        use: (themeName) => {
            baseVariables[themeName].use();
            styleVariables[themeName].use();
            fontVariables[themeName].use();
            if (currentTheme && currentTheme !== themeName) {
                baseVariables[currentTheme].unuse();
                styleVariables[currentTheme].unuse();
                fontVariables[currentTheme].unuse();
            }
            currentTheme = themeName;
        }
    };
};
