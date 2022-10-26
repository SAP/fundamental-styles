import {makeDecorator} from '@storybook/addons';
import {packageValueToPackageThemesMapMap} from "fundamental-styles/configuration";
import {getPackage} from "fundamental-styles/utils";

function syncThemeVariables(themes: Record<string, string>) {
    Object.entries(themes).forEach(([packageId, theme]) => {
        const existingStyleTag = document.head.querySelector(`style[data-package-id="${packageId}"]`);
        if (existingStyleTag) {
            if (existingStyleTag.getAttribute('data-theme') === theme) {
                return;
            }
            existingStyleTag.remove();
        }
        const packageThemesMap = packageValueToPackageThemesMapMap.get(packageId);
        if (packageThemesMap) {
            const themeVariables = packageThemesMap.get(theme)?.variables || '';
            const styleTag = document.createElement('style');
            styleTag.setAttribute('data-theme', theme);
            styleTag.setAttribute('data-package-id', packageId);
            styleTag.innerText = themeVariables;
            document.head.appendChild(styleTag);
        }
    });
}

// this is a story decorator, used to inject link style tags
// into the HTML document, based on the current selected theme
// from the addon toolbar and current component.
export const withThemeProvider = makeDecorator({
    name: 'withThemeProvider',
    parameterName: 'themes',
    wrapper: (storyFn, context) => {
        const pkg = getPackage(context);
        const globals = context.globals;
        const themeVariables = Object.keys(globals).filter((key) => key.endsWith('-theme'));
        const themes = themeVariables.reduce((acc, key) => {
            acc[key.replace('-theme', '')] = globals[key];
            return acc;
        }, {});
        if (context.parameters.theme && pkg) {
            themes[pkg.value] = context.parameters.theme;
        }
        if (pkg && !themes[pkg.value] && pkg.defaultTheme) {
            themes[pkg.value] = pkg.defaultTheme;
        }
        syncThemeVariables(themes);
        return storyFn(context);
    }
});
