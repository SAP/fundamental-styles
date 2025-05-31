import { create } from 'storybook/theming';
import packageJson from '../../../../package.json';

export default create({
    base: 'light',
    colorPrimary: '#0e7290', // Fundamental logo blue
    colorSecondary: '#0e7290',
    // UI
    appBg: '#fff',
    appContentBg: '#fff',
    // Typography
    fontBase: '"72", "Open Sans", sans-serif',
    fontCode: 'monospace',
    // Text colors
    textColor: '#404040',
    textInverseColor: '#0e7290',
    // Toolbar default and active colors
    barTextColor: '#404040',
    barSelectedColor: '#0c637d',
    barBg: '#dbdbdb',
    brandTitle: `Fundamental Styles v${packageJson.version}`,
    brandUrl: 'https://github.com/sap/fundamental-styles',
    brandImage: './logo_text.png'
});
