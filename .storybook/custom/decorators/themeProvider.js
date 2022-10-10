import { makeDecorator } from '@storybook/addons';
import { themeManager } from '../../environment';

const defaultManagersKey = Symbol('Default manager');

const themes = {
    [defaultManagersKey.toString()]: themeManager(defaultManagersKey.toString())
};

function getThemeManager(managerKey) {
    if (!themes.hasOwnProperty(managerKey)) {
        themes[managerKey] = themeManager(managerKey);
    }
    return themes[managerKey];
}

// this is a story decorator, used to inject link style tags
// into the HTML document, based on the current selected theme
// from the addon toolbar and current component.
export const withThemeProvider = makeDecorator({
    name: 'withThemeProvider',
    parameterName: 'themes',
    wrapper: (storyFn, context) => {
        const newTheme = context?.parameters?.theme || context?.globals?.theme || 'sap_horizon';
        getThemeManager(context.id).use(newTheme);
        return storyFn(context);
    }
});
