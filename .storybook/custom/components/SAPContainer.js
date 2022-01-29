import { DocsContext } from '@storybook/addon-docs';
import addons from '@storybook/addons';
import coreEvents from '@storybook/core-events';
import React, { useContext, useEffect, useState } from 'react';
import { storybookEnv } from '../../environment';
import { EVENTS } from '../addons/FioriVersion/constants';
import { SAPContext } from '../hooks/SAPContext';

export const SAPContainer = ({ children }) => {
    const channel = addons.getChannel();
    const docsContext = useContext(DocsContext);
    const showSelectors = storybookEnv === 'docs';
    const params = {
        ...docsContext.globals,
        ...docsContext.parameters
    };
    const [theme, setTheme] = useState(params.theme);
    const [directionality, setDirectionality] = useState(params.directionality);
    const [fioriVersion, setFioriVersion] = useState(params.fioriVersion);

    useEffect(() => {
        channel.emit(coreEvents.UPDATE_GLOBALS, { globals: { theme } });
    }, [theme]);
    useEffect(() => {
        channel.emit(coreEvents.UPDATE_GLOBALS, { globals: { directionality } });
    }, [directionality]);
    useEffect(() => {
        channel.emit(coreEvents.UPDATE_GLOBALS, { globals: { fioriVersion } });
        channel.emit(EVENTS.SET_VERSION, fioriVersion);
    }, [fioriVersion]);

    return (
        <SAPContext.Provider
            value={{
                showSelectors,
                theme,
                setTheme,
                directionality,
                setDirectionality,
                fioriVersion,
                setFioriVersion
            }}
        >
            {children}
        </SAPContext.Provider>
    );
};
