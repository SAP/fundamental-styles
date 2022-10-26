import {PackageConfigInterface} from "fundamental-styles/storybook";

/* eslint-disable @typescript-eslint/ban-ts-comment */

// @ts-ignore
import sap_horizon from './theming/sap_horizon.scss?inline';
// @ts-ignore
import sap_horizon_dark from './theming/sap_horizon_dark.scss?inline';
// @ts-ignore
import sap_horizon_hcb from './theming/sap_horizon_hcb.scss?inline';
// @ts-ignore
import sap_horizon_hcw from './theming/sap_horizon_hcw.scss?inline';
// @ts-ignore
import sap_fiori_3 from './theming/sap_fiori_3.scss?inline';
// @ts-ignore
import sap_fiori_3_dark from './theming/sap_fiori_3_dark.scss?inline';
// @ts-ignore
import sap_fiori_3_light_dark from './theming/sap_fiori_3_light_dark.scss?inline';
// @ts-ignore
import sap_fiori_3_hcw from './theming/sap_fiori_3_hcw.scss?inline';
// @ts-ignore
import sap_fiori_3_hcb from './theming/sap_fiori_3_hcb.scss?inline';

import {default as projects} from '../../projects';

const themesVariables = {
    sap_horizon,
    sap_horizon_dark,
    sap_horizon_hcb,
    sap_horizon_hcw,
    sap_fiori_3,
    sap_fiori_3_dark,
    sap_fiori_3_light_dark,
    sap_fiori_3_hcw,
    sap_fiori_3_hcb
};

export const packageConfig: PackageConfigInterface = {
    ...projects["styles"],
    value: 'styles',
    themes: projects["styles"].themes.map((theme) => {
        return {
            id: theme.value,
            name: theme.title,
            variables: themesVariables[theme.value]
        }
    })
}
