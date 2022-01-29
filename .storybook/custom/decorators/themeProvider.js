import { makeDecorator } from '@storybook/addons';
import { themeManager, componentsManager } from '../../environment';

const defaultManagersKey = Symbol('Default manager');

const themeManagers = {
    [defaultManagersKey]: {
        themes: themeManager(defaultManagersKey.toString()),
        components: componentsManager(defaultManagersKey.toString())
    }
};

// this is a story decorator, used to inject link style tags
// into the HTML document, based on the current selected theme
// from the addon toolbar and current component.
export const withThemeProvider = makeDecorator({
    name: 'withThemeProvider',
    parameterName: 'themes',
    wrapper: (storyFn, context) => {
        const newTheme = context?.parameters?.theme || context?.globals?.theme || 'sap_fiori_3';
        const forComponents = context?.parameters?.components || [];
        if (!themeManagers.hasOwnProperty(context.id)) {
            themeManagers[context.id] = {
                themes: themeManager(context.id),
                components: componentsManager(context.id)
            };
        }
        changeDocumentTheme(newTheme, forComponents, context.id);

        return storyFn(context);
    }
});

export const changeDocumentTheme = (newTheme, forComponents, contextId) => {
    if (!newTheme?.trim().length || !Array.isArray(forComponents) || !forComponents?.length) return;
    forComponents.indexOf('info-label') === -1 && forComponents.push('info-label');
    const { themes, components } = themeManagers[contextId || defaultManagersKey];
    themes.use(newTheme);
    components.use(forComponents, newTheme);
};
