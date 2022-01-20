export default () => {
    let loadedComponentStyles = {};
    let currentComponents = [];

    const getComponentStylePath = (componentName, themeName) => {
        let stylePath = `${component}`;
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

    const unuseComponent = (componentName) => {
        if (loadedComponentStyles.hasOwnProperty(componentName)) {
            Object.keys(loadedComponentStyles[componentName]).forEach((themeName) => {
                loadedComponentStyles[componentName][themeName].unuse();
            });
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
            currentComponents.forEach((componentName) => unuseComponent(componentName));
            for (const componentName of components) {
                useComponent(componentName, themeName);
            }
            currentComponents = [...components];
        }
    };
};
