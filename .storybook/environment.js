import themeVariablesManager from './custom/styleChangers/dev/themeVariablesManager';
import componentStylesManager from './custom/styleChangers/dev/componentStylesManager';
import prodThemeVariablesManager from './custom/styleChangers/prod/themeVariablesManager';
import prodComponentStylesManager from './custom/styleChangers/prod/componentStylesManager';

export const isProduction = PRODUCTION;
export const themeManager = PRODUCTION ? prodThemeVariablesManager : themeVariablesManager;
export const componentsManager = PRODUCTION ? prodComponentStylesManager : componentStylesManager;

export const check = () => {
    console.log(PRODUCTION ? 'production build' : 'development build');
}
