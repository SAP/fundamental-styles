import { makeDecorator } from '@storybook/addons';
import { themeManager } from '../../environment';

const defaultManagersKey = Symbol('Default manager');

const themes = themeManager(defaultManagersKey.toString());

// this is a story decorator, used to inject link style tags
// into the HTML document, based on the current selected theme
// from the addon toolbar and current component.
export const withThemeProvider = makeDecorator({
    name: 'withThemeProvider',
    parameterName: 'themes',
    wrapper: (storyFn, context) => {
        const newTheme = context?.parameters?.theme || context?.globals?.theme || 'sap_fiori_3';
        themes.use(newTheme);
        return storyFn(context);
    }
});
