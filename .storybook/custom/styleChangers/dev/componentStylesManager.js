export default (manager) => {
    let loadedComponentStyles = {};
    let currentComponents = [];
    let managedBy = manager;

    const getComponentStylePath = (componentName) => {
        if (componentName.startsWith('fn-')) {
            return `fn/${componentName}.scss`;
        }
        return `styles/${componentName}.scss`;
    };

    const unuseComponent = (componentName) => {
        if (loadedComponentStyles.hasOwnProperty(componentName)) {
            loadedComponentStyles[componentName].unuse();
        } else {
            console.log('Component not loaded');
        }
    };

    const useComponent = (componentName) => {
        if (!loadedComponentStyles[componentName]) {
            const {
                default: { use, unuse }
            } = require(`../../../../src/${getComponentStylePath(componentName)}`);
            loadedComponentStyles[componentName] = {
                use: () => use({ attributes: { ['data-managedBy']: managedBy } }),
                unuse
            };
        }
        loadedComponentStyles[componentName].use();
    };

    return {
        use: (components) => {
            currentComponents.forEach(unuseComponent);
            for (const componentName of components) {
                useComponent(componentName);
            }
            currentComponents = [...components];
        }
    };
};
