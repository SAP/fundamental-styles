import { makeDecorator } from '@storybook/addons';

// this is a story decorator, used to inject link style tags
// into the HTML document, based on the current selected theme
// from the addon toolbar and current component.
export const withThemeProvider = makeDecorator({
    name: 'withThemeProvider',
    parameterName: 'themes',
    wrapper: (storyFn, context) => {
        const newTheme = context?.parameters?.theme || context?.globals?.theme || 'sap_fiori_3';
        const forComponents = context?.parameters?.components || [];
        changeDocumentTheme(newTheme, forComponents);
        return storyFn(context);
    }
});

export const changeDocumentTheme = (newTheme, forComponents) => {
    if (!newTheme?.trim().length || !Array.isArray(forComponents) || !forComponents?.length) return;

    let links = [].slice.call(document.getElementsByTagName('link'));
    let toRemove = [];
    links.forEach((item) => {
        if (item.attributes['data-theme-id']) {
            toRemove.push(item);
        }
    });

    forComponents.indexOf('info-label') === -1 && forComponents.push('info-label');

    const styleLinkTag = (stylePath) => {
        let link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = stylePath;
        link.setAttribute('data-theme-id', newTheme);
        return link;
    };

    const getStylePath = (componentName) => {
        if (!componentName.startsWith('fn-')) {
            return `${componentName}-${newTheme}.css`;
        }
        return `${componentName}.css`;
    };

    const importebi = forComponents.map((componentName) => {
        return require(`../../src/styles/${componentName}.scss`);
    });

    // Promise.all(imports).then(styles => {
    //     console.log({styles});
    // })

    console.log({ importebi });

    // forComponents.forEach(component => {
    //     let stylePath = getStylePath(`${component}`);
    //     document.head.appendChild(styleLinkTag(stylePath));
    // });

    toRemove.forEach((item) => {
        item.parentNode.removeChild(item);
    });

    document.head.appendChild(styleLinkTag(`theming-base-content/content/Base/baseLib/${newTheme}/css_variables.css`));
};
