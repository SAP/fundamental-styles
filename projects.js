import { snakeCase } from 'lodash/string';

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

/** Small utility to convert text to dash-case */
const dashCase = (text) => (text ? snakeCase(text).replace(/_/g, '-') : undefined);

/** Fundamental-styles project themes */
const stylesThemes = {
    defaultTheme: 'sap_horizon',
    themes: [
        {
            value: 'sap_horizon',
            title: 'Morning Horizon (Light)'
        },
        {
            value: 'sap_horizon_dark',
            title: 'Evening Horizon (Dark)'
        },
        {
            value: 'sap_horizon_hcb',
            title: 'Horizon High Contrast Black'
        },
        {
            value: 'sap_horizon_hcw',
            title: 'Horizon High Contrast White'
        },
        {
            value: 'sap_horizon_set',
            title: 'Horizon Set'
        },
        {
            value: 'sap_fiori_3',
            title: 'Quartz Light'
        },
        {
            value: 'sap_fiori_3_dark',
            title: 'Quartz Dark'
        },
        {
            value: 'sap_fiori_3_light_dark',
            title: 'Quartz Auto (Depending on the OS Settings)'
        },
        {
            value: 'sap_fiori_3_hcw',
            title: 'Quartz High Contrast White'
        },
        {
            value: 'sap_fiori_3_hcb',
            title: 'Quartz High Contrast Black'
        },
        {
            value: 'sap_fiori_3_set',
            title: 'Quartz Set'
        },
        {
            value: 'sap_belize',
            title: 'Belize(Preview)'
        },
        {
            value: 'sap_belize_hcb',
            title: 'Belize High Contrast Black(Preview)'
        },
        {
            value: 'sap_belize_hcw',
            title: 'Belize High Contrast White(Preview)'
        },
        {
            value: 'sap_belize_plus',
            title: 'Belize Plus(Preview)'
        }
    ]
};

/** The map of project name and project's available themes */
export const themes = {
    styles: stylesThemes,
    cx: stylesThemes,
    ['common-css']: {
        defaultTheme: 'sap_horizon',
        themes: [
            {
                value: 'sap_horizon',
                title: 'Morning Horizon'
            },
            {
                value: 'sap_fiori_3',
                title: 'Quartz Light'
            }
        ]
    }
};
export const storybookPackages = Object.keys(projectNames)
    .map((projectName) => {
        return workspaceProjects[projectName].replace('packages/', '');
    })
    .join('|');

/**
 * The map of project name and project's metadata
 */
export const projects = Object.keys(workspaceProjects).reduce((acc, projectName) => {
    const themesConfig = themes[projectName] || {
        themes: []
    };
    acc[projectName] = {
        value: projectName,
        storiesSlug: dashCase(projectNames[projectName]),
        title: projectNames[projectName] || null,
        pathToPackage: `./${workspaceProjects[projectName]}`,
        defaultTheme: themesConfig.defaultTheme,
        themes: themesConfig.themes
    };
    return acc;
}, {});
