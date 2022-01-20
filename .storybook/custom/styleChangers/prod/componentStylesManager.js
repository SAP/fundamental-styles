export default (manager) => {
    let loadedComponentStyles = {};
    let currentComponents = [];
    let currentTheme = 'sap_fiori_3';
    let managedBy = manager;

    const getComponentStylePath = (componentName, themeName) => {
        let stylePath = `${componentName}`;
        if (!stylePath.startsWith('fn-')) {
            return `${stylePath}-${themeName}.css`;
        }
        return `${stylePath}.css`;
    };

    const createLinkTag = (stylePath) => {
        const link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = stylePath;
        link.setAttribute('data-managedBy', managedBy)
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
            const linkTag = createLinkTag(getComponentStylePath(componentName, themeName));
            loadedComponentStyles[componentName][themeName] = {
                use: useFunction(linkTag),
                unuse: unuseFunction(linkTag)
            };
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
