import availableThemes from '../../constants/availableThemes';
import generateStyleLinkTagFn from '../utils/generateStyleLinkTagFn';
import getLazyLoader from '../utils/getLazyLoader';
import inlineStyleLazyLoader from '../utils/inlineStyleLazyLoader';

export default (manager) => {
    let currentTheme;

    const styleLinkTag = generateStyleLinkTagFn(manager);
    const lazyLoader = getLazyLoader(styleLinkTag);

    const baseVariables = availableThemes.reduce((acc, { value }) => {
        acc[value] = lazyLoader(`theming-base-content/content/Base/baseLib/${value}/css_variables.css`);
        return acc;
    }, {});
    const styleVariables = availableThemes.reduce((acc, { value }) => {
        const content = require(`../../../../src/styles/theming/${value}.scss`).default.toString();
        acc[value] = inlineStyleLazyLoader(content);
        return acc;
    }, {});
    const fontVariables = availableThemes.reduce((acc, { value }) => {
        const baseTheme = value.startsWith('sap_fiori_3') ? 'sap_fiori_3' : 'sap_horizon';
        const content = require(`../../../../src/fonts/${baseTheme}_fonts.scss`).default.toString()
        acc[value] = inlineStyleLazyLoader(content);
        return acc;
    }, {});

    return {
        use: (themeName) => {
            if (currentTheme && currentTheme !== themeName) {
                baseVariables[currentTheme].unuse();
                styleVariables[currentTheme].unuse();
                fontVariables[currentTheme].unuse();
            }

            baseVariables[themeName].use();
            styleVariables[themeName].use();
            fontVariables[themeName].use();

            currentTheme = themeName;
        }
    };
};
