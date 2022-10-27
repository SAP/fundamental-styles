import { PackageConfigInterface } from 'fundamental-styles/storybook';

import { default as projects } from '../../projects';

export const packageConfig: PackageConfigInterface = {
    ...projects['cx'],
    value: 'cx'
};
