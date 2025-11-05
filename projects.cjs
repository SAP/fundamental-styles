/**
 * The map of project name and project path
 */
const workspaceProjects = {
    styles: 'packages/styles',
    ['common-css']: 'packages/common-css',
    cx: 'packages/cx'
};

/**
 * The map of the project name and the project title
 */
const projectNames = {
    styles: 'SAP Fiori',
    ['common-css']: 'Common CSS',
    cx: 'CX'
};

/** Simple utility to convert text to snake_case */
const snakeCase = (text) => text ? text.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '') : '';

/** Small utility to convert text to dash-case */
const dashCase = (text) => (text ? snakeCase(text).replace(/_/g, '-') : undefined);

/** Fundamental-styles project themes */
const stylesThemes = {
    defaultTheme: 'sap_horizon',
    themes: [
        {
            value: 'sap_horizon',
            packageThemingPrefix: 'sap_horizon',
            path: 'sap_horizon/',
            writerPrefix: 'sap_horizon',
            description: 'SAP Horizon theme. The new default theme (as of the v0.30.0 release)',
            key: 'sap_horizon',
            id: 'sap_horizon'
        },
        {
            value: 'sap_fiori_3',
            packageThemingPrefix: 'sap_fiori_3',
            path: 'sap_fiori_3/',
            writerPrefix: 'sap_fiori_3',
            description: 'SAP Fiori 3 theme, SAP Quartz Light',
            key: 'sap_fiori_3',
            id: 'sap_fiori_3'
        },
        {
            value: 'sap_fiori_3_dark',
            packageThemingPrefix: 'sap_fiori_3_dark',
            path: 'sap_fiori_3_dark/',
            writerPrefix: 'sap_fiori_3_dark',
            description: 'SAP Fiori 3 Dark theme, SAP Quartz Dark',
            key: 'sap_fiori_3_dark',
            id: 'sap_fiori_3_dark'
        },
        {
            value: 'sap_fiori_3_hc',
            packageThemingPrefix: 'sap_fiori_3_hc',
            path: 'sap_fiori_3_hc/',
            writerPrefix: 'sap_fiori_3_hc',
            description: 'SAP Fiori 3 High Contrast theme, SAP Quartz High Contrast Black',
            key: 'sap_fiori_3_hc',
            id: 'sap_fiori_3_hc'
        },
        {
            value: 'sap_fiori_3_hcw',
            packageThemingPrefix: 'sap_fiori_3_hcw',
            path: 'sap_fiori_3_hcw/',
            writerPrefix: 'sap_fiori_3_hcw',
            description: 'SAP Fiori 3 High Contrast White theme, SAP Quartz High Contrast White',
            key: 'sap_fiori_3_hcw',
            id: 'sap_fiori_3_hcw'
        }
    ]
};

/**
 * Theming prefixes for cx project
 */
const cxThemes = {
    defaultTheme: 'sap_horizon',
    themes: [
        {
            value: 'sap_horizon',
            packageThemingPrefix: 'sap_horizon',
            path: 'sap_horizon/',
            writerPrefix: 'sap_horizon',
            description: 'SAP Horizon theme. The new default theme (as of the v0.30.0 release)',
            key: 'sap_horizon',
            id: 'sap_horizon'
        }
    ]
};

/**
 * CommonCSS project themes
 */
const commonCssThemes = {
    defaultTheme: 'sap_horizon',
    themes: []
};

/**
 * All themes for all projects
 */
const themes = {
    styles: stylesThemes,
    cx: cxThemes,
    ['common-css']: commonCssThemes
};

module.exports = {
    workspaceProjects,
    projectNames,
    snakeCase,
    dashCase,
    stylesThemes,
    cxThemes,
    commonCssThemes,
    themes
};