import { create } from 'storybook/theming';
import packageJson from '../../../../package.json';

export default create({
    base: 'light',
    colorPrimary: '#0a6ed1',
    colorSecondary: '#0a6ed1',

    // UI
    appBg: '#f7f8fa',
    appContentBg: '#ffffff',
    appPreviewBg: '#ffffff',
    appBorderColor: '#e4e4e4',
    appBorderRadius: 8,

    // Typography
    fontBase: '"72", "72full", Arial, Helvetica, sans-serif',
    fontCode: '"72Mono", "Fira Code", "Consolas", monospace',

    // Text colors
    textColor: '#32363a',
    textInverseColor: '#ffffff',
    textMutedColor: '#6a6d70',

    // Toolbar default and active colors
    barTextColor: '#32363a',
    barSelectedColor: '#0a6ed1',
    barHoverColor: '#0a6ed1',
    barBg: '#ffffff',

    // Form inputs
    inputBg: '#ffffff',
    inputBorder: '#c4c6c8',
    inputTextColor: '#32363a',
    inputBorderRadius: 4,

    // Branding
    brandTitle: `Fundamental Styles v${packageJson.version}`,
    brandUrl: 'https://github.com/sap/fundamental-styles',
    brandImage: './logo_text.png'
});
