import generateStyleLinkTagFn from '../utils/generateStyleLinkTagFn';
import getLazyLoader from '../utils/getLazyLoader';

export default (managedBy) => {
    let loadedComponentStyles = {};

    const styleLinkTag = generateStyleLinkTagFn(managedBy);
    const lazyLoader = getLazyLoader(styleLinkTag);

    const getComponentStylePath = (componentName) => {
        let stylePath = `${componentName}`;
        if (!stylePath.startsWith('fn-')) {
            return `${stylePath}.css`;
        }
        if (!stylePath.startsWith('sap-')) {
            return `${stylePath}.css`;
        }
        return `${stylePath}.css`;
    };

    const useComponent = (componentName) => {
        if (!loadedComponentStyles[componentName]) {
            loadedComponentStyles[componentName] = lazyLoader(
                getComponentStylePath(componentName)
            );
        }
        loadedComponentStyles[componentName].use();
    };

    return {
        use: (components) => {
            for (const componentName of components) {
                useComponent(componentName);
            }
        }
    };
};
