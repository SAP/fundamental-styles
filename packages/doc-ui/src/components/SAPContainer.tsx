import { DocsContainer } from '@storybook/addon-docs/blocks';
import { addons } from 'storybook/preview-api';
import { UPDATE_GLOBALS } from 'storybook/internal/core-events';
import { useContext, useEffect, useMemo, useState } from 'react';
import { SAPContext } from '../contexts/SAPContext';
import { contentDensities, directionalities } from 'fundamental-styles/configuration';
import { getPackage } from 'fundamental-styles/utils';

/**
 * Main container which wraps any component in the Storybook Docs view
 * and enriches it with the SAPContext.
 * This component is a single source of truth for the SAPContext.
 */
export const SAPContainer = ({children}) => {
    const channel = useMemo(() => addons.getChannel(), []);
    const docsContext = useContext(DocsContext);
    const story = docsContext.storyById();
    const storyContext = docsContext.getStoryContext(story);

    const params = {
        ...storyContext.globals,
        ...storyContext.parameters
    };

    const [storyPackage, setStoryPackage] = useState(getPackage(storyContext));
    const [themeValue, setThemeValue] = useState('');
    const [directionalityValue, setDirectionalityValue] = useState(params["directionality"]);
    const [contentDensityValue, setContentDensityValue] = useState(params["contentDensity"]);

    useEffect(() => {
        setStoryPackage(getPackage(storyContext))
    }, [storyContext]);

    useEffect(() => {
        if (storyPackage) {
            const theme = params[`${storyPackage.value}-theme`] || storyPackage.defaultTheme;
            setThemeValue(theme);
        }
    }, [storyContext, storyPackage, params])


    const setTheme = (theme: string) => {
        channel.emit(UPDATE_GLOBALS, {
            globals: {
                ...storyContext.globals,
                [`${storyPackage?.value}-theme`]: theme
            }
        });
        setThemeValue(theme);
    }

    const setContentDensity = (contentDensity: string) => {
        channel.emit(UPDATE_GLOBALS, {globals: {...storyContext.globals, contentDensity}});
        setContentDensityValue(contentDensity);
    }

    const setDirectionality = (directionality: string) => {
        channel.emit(UPDATE_GLOBALS, {globals: {...storyContext.globals, directionality}});
        setDirectionalityValue(directionality);
    }

    return (
        <SAPContext.Provider
            value={{
                storyContext,
                storyPackage,
                theme: themeValue,
                setTheme,
                directionality: directionalityValue,
                setDirectionality,
                contentDensity: contentDensityValue,
                setContentDensity,
                directionalities,
                contentDensities
            }}
        >
            {children}
        </SAPContext.Provider>
    );
};
