import { makeDecorator } from 'storybook/preview-api';
import { packageValueToPackageThemesMapMap } from 'fundamental-styles/configuration';
import { getPackage } from 'fundamental-styles/utils';

let loadedThemeStyleTag: [string, HTMLStyleElement] | null = null;

function clearThemeVariables() {
    loadedThemeStyleTag?.[1]?.remove();
    loadedThemeStyleTag = null;
    return;
}

function syncThemeVariables(packageId: string, theme: string) {
    const id = `${packageId}@${theme}`;

    if (loadedThemeStyleTag) {
        if (loadedThemeStyleTag[0] === id) {
            return;
        }
        clearThemeVariables();
    }

    const packageThemesMap = packageValueToPackageThemesMapMap.get(packageId);
    if (packageThemesMap) {
        const themeVariables = packageThemesMap.get(theme)?.variables || '';
        const styleTag = document.createElement('style');
        styleTag.innerText = themeVariables;
        document.head.appendChild(styleTag);
        loadedThemeStyleTag = [id, styleTag];
    }
}

// this is a story decorator, used to inject link style tags
// into the HTML document, based on the current selected theme
// from the addon toolbar and current component.
export const withThemeProvider = makeDecorator({
    name: 'withThemeProvider',
    parameterName: 'themes',
    wrapper(storyFn, context) {
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
        if (pkg?.value) {
            syncThemeVariables(pkg.value, themes[pkg.value]);
        } else {
            clearThemeVariables();
        }
        return storyFn(context);
    }
});
