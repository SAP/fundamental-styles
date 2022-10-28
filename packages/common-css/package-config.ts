/* eslint-disable @typescript-eslint/ban-ts-comment */
import projects from '../../projects';
import { PackageConfigInterface } from 'fundamental-styles/storybook';

// @ts-ignore
import sap_fiori_3 from '@sap-theming/theming-base-content/content/Base/baseLib/sap_fiori_3/css_variables.css?inline';
// @ts-ignore
import sap_horizon from '@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon/css_variables.css?inline';

const themingVariables = {
    sap_fiori_3,
    sap_horizon
};

export const packageConfig: PackageConfigInterface = {
    ...projects['common-css'],
    value: 'common-css',
    themes: projects['common-css'].themes.map((theme) => ({
        id: theme.value,
        name: theme.title,
        variables: themingVariables[theme.value]
    }))
};
