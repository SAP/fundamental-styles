import coreEvents from '@storybook/core-events';
import React, { useEffect, useState } from 'react';
import { storybookEnv } from '../../environment';
import { SAPContext } from '../hooks/SAPContext';

export const SAPContainer = ({ channel, docsContext, children }) => {
    const showSelectors = storybookEnv === 'docs';
    const [theme, setTheme] = useState(docsContext.parameters.theme || docsContext.globals.theme);
    const [directionality, setDirectionality] = useState(docsContext.globals.directionality);

    useEffect(() => {
        channel.emit(coreEvents.UPDATE_GLOBALS, { globals: { theme } });
    }, [theme]);
    useEffect(() => {
        channel.emit(coreEvents.UPDATE_GLOBALS, { globals: { directionality } });
    }, [directionality]);

    return (
        <SAPContext.Provider
            value={{
                showSelectors,
                theme,
                setTheme,
                directionality,
                setDirectionality
            }}
        >
            {children}
        </SAPContext.Provider>
    );
};
