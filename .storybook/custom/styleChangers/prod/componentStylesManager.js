import generateStyleLinkTagFn from '../utils/generateStyleLinkTagFn';
import getLazyLoader from '../utils/getLazyLoader';

export default (managedBy) => {
    let loadedComponentStyles = {};
    let currentComponents = [];
    let currentTheme = 'sap_fiori_3';

    const styleLinkTag = generateStyleLinkTagFn(managedBy);
    const lazyLoader = getLazyLoader(styleLinkTag);

    const getComponentStylePath = (componentName, themeName) => {
        let stylePath = `${componentName}`;
        if (!stylePath.startsWith('fn-')) {
            return `${stylePath}-${themeName}.css`;
        }
        return `${stylePath}.css`;
    };

    const unuseComponent = (componentName, themeName) => {
        if (
            loadedComponentStyles.hasOwnProperty(componentName) &&
            loadedComponentStyles[componentName].hasOwnProperty(themeName)
        ) {
            loadedComponentStyles[componentName][themeName].unuse();
        } else {
            console.log('Component not loaded');
        }
    };

    const useComponent = (componentName, themeName) => {
        if (!loadedComponentStyles.hasOwnProperty(componentName)) {
            loadedComponentStyles[componentName] = {};
        }
        if (!loadedComponentStyles[componentName][themeName]) {
            loadedComponentStyles[componentName][themeName] = lazyLoader(
                getComponentStylePath(componentName, themeName)
            );
        }
        loadedComponentStyles[componentName][themeName].use();
    };

    return {
        use: (components, themeName) => {
            currentComponents.forEach((componentName) => unuseComponent(componentName, currentTheme));
            for (const componentName of components) {
                useComponent(componentName, themeName);
            }
            currentComponents = [...components];
            currentTheme = themeName;
        }
    };
};
