import themeVariablesManager from './custom/styleChangers/dev/themeVariablesManager';
import componentStylesManager from './custom/styleChangers/dev/componentStylesManager';
import prodThemeVariablesManager from './custom/styleChangers/prod/themeVariablesManager';
import prodComponentStylesManager from './custom/styleChangers/prod/componentStylesManager';

const IS_PRODUCTION = typeof PRODUCTION === 'undefined' ? true : PRODUCTION;

export const isProduction = IS_PRODUCTION;
export const themeManager = IS_PRODUCTION ? prodThemeVariablesManager : themeVariablesManager;
export const componentsManager = IS_PRODUCTION ? prodComponentStylesManager : componentStylesManager;

export const check = () => {
    console.log(IS_PRODUCTION ? 'production build' : 'development build');
}
