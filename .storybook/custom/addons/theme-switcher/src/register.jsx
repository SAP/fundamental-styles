import { addons, types } from 'storybook/manager-api';
import React from 'react';
import { ADDON_ID } from './constants';
import Selector from './containers/Selector';

addons.register(ADDON_ID, (api) => {
    addons.add(ADDON_ID, {
        title: ADDON_ID,
        type: types.TOOL,
        match: ({ viewMode }) => viewMode === 'story',
        render: () => <Selector api={api}/>
    });
});
