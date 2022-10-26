const React = require('react');
const { default: addons, types } = require('@storybook/addons');
const { ADDON_ID } = require('./constants');
const Selector = require('./containers/Selector');

addons.register(ADDON_ID, (api) => {
    addons.add(ADDON_ID, {
        title: ADDON_ID,
        type: types.TOOL,
        match: ({ viewMode }) => viewMode === 'story',
        render: () => <Selector api={api}/>
    });
});
