import { addons, types } from 'storybook/manager-api';
import React from 'react';
import { ADDON_ID } from './constants.js';

addons.register(ADDON_ID, (api) => {
    addons.add(ADDON_ID, {
        title: ADDON_ID,
        type: types.TOOL,
        match: ({ viewMode }) => viewMode === 'story',
        render: () => {
            // Dynamically import Selector to avoid SSR issues
            const [Selector, setSelector] = React.useState(null);
            
            React.useEffect(() => {
                import('./containers/Selector.js').then(module => {
                    setSelector(() => module.default);
                });
            }, []);
            
            if (!Selector) {
                return React.createElement('div', { 
                    style: { padding: '8px', fontSize: '12px', color: '#666' } 
                }, 'Loading theme switcher...');
            }
            
            return React.createElement(Selector, { api });
        }
    });
});
