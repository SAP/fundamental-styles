import { makeDecorator } from '@storybook/addons';
// import themeVariablesManager from './styleChangers/dev/themeVariablesManager';
// import componentStylesManager from './styleChangers/dev/componentStylesManager';
import { themeManager, componentsManager } from '../environments/environment';

const themes = themeManager();
const components = componentsManager();

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
    forComponents.indexOf('info-label') === -1 && forComponents.push('info-label');
    themes.use(newTheme);
    components.use(forComponents, newTheme);
};
