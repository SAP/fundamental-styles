import generateStyleLinkTagFn from '../utils/generateStyleLinkTagFn';
import getLazyLoader from '../utils/getLazyLoader';

export default (managedBy) => {
    let loadedComponentStyles = {};
    let currentComponents = [];

    const styleLinkTag = generateStyleLinkTagFn(managedBy);
    const lazyLoader = getLazyLoader(styleLinkTag);

    const getComponentStylePath = (componentName) => {
        let stylePath = `${componentName}`;
        if (!stylePath.startsWith('fn-')) {
            return `${stylePath}.css`;
        }
        return `${stylePath}.css`;
    };

    const unuseComponent = (componentName) => {
        if (
            loadedComponentStyles.hasOwnProperty(componentName)
        ) {
            loadedComponentStyles[componentName].unuse();
            delete loadedComponentStyles[componentName];
        } else {
            console.log('Component not loaded');
        }
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
            currentComponents.forEach((componentName) => unuseComponent(componentName));
            for (const componentName of components) {
                useComponent(componentName);
            }
            currentComponents = [...components];
        }
    };
};
